/**
 * IndexNow ping for www.viafidelitatis.com (Bing, Yandex, Seznam, Naver…;
 * Google does not use IndexNow). Run by .github/workflows/indexnow.yml after
 * pushes to `Fixed`. No secrets: the IndexNow key is public by design and
 * lives in public/<key>.txt.
 *
 * Auto mode (default): compares public/sitemap.xml now vs. ~36 hours ago and
 * picks URLs that are new or have a new <lastmod> dated in the last 3 days,
 * plus essay files added to src/pages/ in that window. Restore-after-wipe
 * commits re-add old URLs with old lastmods, so they are ignored. If anything
 * is new, /blog and /sitemap.xml are added too.
 *
 * It waits until each new page is live with its own canonical tag (i.e. the
 * Vercel production deploy finished), then submits only live URLs.
 * Manual mode: INDEXNOW_URLS="https://www.viafidelitatis.com/a,https://…".
 * DRY_RUN=1 prints instead of posting. Always exits 0: a failed ping must
 * never block anything.
 */
import { execFileSync } from 'node:child_process';
import { readdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HOST = 'www.viafidelitatis.com';
const SITE = `https://${HOST}`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';
const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const DRY_RUN = /^(1|true|yes)$/i.test(process.env.DRY_RUN || '');
const WAIT_MS = Number(process.env.INDEXNOW_WAIT_MS || 8 * 60 * 1000);
const POLL_MS = 20 * 1000;

const log = (...args) => console.log('[indexnow]', ...args);
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function git(args) {
  try {
    return execFileSync('git', args, { cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] });
  } catch {
    return '';
  }
}

function findKey() {
  const file = readdirSync(join(root, 'public')).find((name) => /^[a-f0-9]{32}\.txt$/.test(name));
  if (!file) return null;
  const key = readFileSync(join(root, 'public', file), 'utf8').trim();
  return key === file.replace(/\.txt$/, '') ? key : null;
}

function parseSitemap(xml) {
  const entries = new Map();
  for (const block of String(xml || '').match(/<url>[\s\S]*?<\/url>/g) || []) {
    const loc = (block.match(/<loc>\s*([^<\s]+)\s*<\/loc>/) || [])[1];
    if (!loc) continue;
    const lastmod = (block.match(/<lastmod>\s*([^<\s]+)\s*<\/lastmod>/) || [])[1] || '';
    entries.set(loc.replace(/\/$/, '') || loc, lastmod.slice(0, 10));
  }
  return entries;
}

function chicagoDate(offsetDays = 0) {
  const d = new Date(Date.now() + offsetDays * 86400000);
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Chicago' }).format(d); // YYYY-MM-DD
}

function autoCandidates() {
  const head = parseSitemap(readFileSync(join(root, 'public', 'sitemap.xml'), 'utf8'));
  const baseRev = git(['rev-list', '-1', '--before=36 hours ago', 'HEAD']).trim();
  const base = baseRev ? parseSitemap(git(['show', `${baseRev}:public/sitemap.xml`])) : new Map();
  const since = chicagoDate(-3);
  log(`sitemap: ${head.size} URLs now, ${base.size} at ${baseRev ? baseRev.slice(0, 7) : '(no base)'}; lastmod cutoff ${since}`);

  const urls = new Set();
  for (const [loc, lastmod] of head) {
    if (!loc.startsWith(SITE)) continue;
    const isNewOrChanged = !base.has(loc) || base.get(loc) !== lastmod;
    if (isNewOrChanged && lastmod && lastmod >= since) urls.add(loc);
  }
  if (baseRev) {
    const added = git(['diff', '--name-only', '--diff-filter=A', baseRev, 'HEAD', '--', 'src/pages/']);
    for (const file of added.split('\n')) {
      const m = file.match(/^src\/pages\/([a-z0-9][a-z0-9-]*)\.jsx$/);
      if (m) urls.add(`${SITE}/blog/${m[1]}`);
    }
  }
  return [...urls];
}

async function fetchText(url) {
  try {
    const res = await fetch(url, { redirect: 'follow', headers: { 'user-agent': 'via-fidelitatis-indexnow/1.0' } });
    return { status: res.status, body: await res.text() };
  } catch (err) {
    return { status: 0, body: String(err) };
  }
}

/** Live = 200 and the prerendered HTML carries this URL's canonical tag. */
async function isLive(url) {
  const { status, body } = await fetchText(url);
  return status === 200 && body.includes(`rel="canonical" href="${url}"`);
}

async function waitUntilLive(urls, key) {
  const deadline = Date.now() + WAIT_MS;
  const pending = new Set(urls);
  let keyOk = false;
  while (Date.now() < deadline) {
    if (!keyOk) {
      const { status, body } = await fetchText(`${SITE}/${key}.txt`);
      keyOk = status === 200 && body.trim() === key;
    }
    for (const url of [...pending]) if (await isLive(url)) pending.delete(url);
    if (keyOk && pending.size === 0) break;
    log(`waiting for deploy: ${pending.size} page(s) not live yet${keyOk ? '' : ', key file not live yet'}`);
    await sleep(POLL_MS);
  }
  return { keyOk, live: urls.filter((url) => !pending.has(url)), notLive: [...pending] };
}

async function main() {
  const key = findKey();
  if (!key) return log('no public/<32-hex>.txt key file found; skipping');

  const manual = (process.env.INDEXNOW_URLS || '').split(/[\s,]+/).filter(Boolean);
  const pages = manual.length ? manual.filter((u) => u.startsWith(SITE)) : autoCandidates();
  if (!pages.length) return log('no new or updated URLs; nothing to ping');
  log('candidates:', pages.join(' '));

  const { keyOk, live, notLive } = await waitUntilLive(pages, key);
  if (!keyOk) return log(`key file ${SITE}/${key}.txt is not live; skipping ping`);
  if (notLive.length) log('skipping (not live with its own page after waiting):', notLive.join(' '));
  if (!live.length) return log('nothing live to submit');

  const urlList = [...new Set([...live, `${SITE}/blog`, `${SITE}/sitemap.xml`])];
  const payload = { host: HOST, key, keyLocation: `${SITE}/${key}.txt`, urlList };
  if (DRY_RUN) return log('DRY_RUN payload:', JSON.stringify(payload));

  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'content-type': 'application/json; charset=utf-8' },
      body: JSON.stringify(payload),
    });
    log(`submitted ${urlList.length} URL(s): HTTP ${res.status} ${res.statusText}`, (await res.text()).slice(0, 300));
  } catch (err) {
    log('submit failed (ignored):', String(err));
  }
}

main()
  .catch((err) => log('error (ignored):', err && err.stack ? err.stack : String(err)))
  .finally(() => process.exit(0));
