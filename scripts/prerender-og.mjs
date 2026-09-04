/**
 * After Vite build, write static HTML so crawlers that do not run JS
 * (Twitterbot, LinkedIn, Slack, Facebook) see unique title / description /
 * canonical / og:image instead of homepage defaults.
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://www.viafidelitatis.com';
const SITE_NAME = 'Via Fidelitatis';

function escapeAttr(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function unescapeJsString(value) {
  return value
    .replace(/\\n/g, ' ')
    .replace(/\\'/g, "'")
    .replace(/\\"/g, '"')
    .replace(/\\+/g, '');
}

function buildOgImageUrl({ title, kicker, kind = 'site' }) {
  const params = new URLSearchParams();
  if (title) params.set('title', String(title).slice(0, 140));
  if (kicker) params.set('kicker', String(kicker).slice(0, 48));
  if (kind) params.set('kind', kind);
  return `${SITE}/api/og?${params.toString()}`;
}

function extractQuotedBlocks(src, keys) {
  const items = [];
  const firstKey = keys[0];
  const startRe = new RegExp(`${firstKey}:\\s*'((?:\\'|[^'])*)'`, 'g');
  let match;
  while ((match = startRe.exec(src))) {
    const chunkStart = match.index;
    const chunk = src.slice(chunkStart, chunkStart + 1800);
    const record = {};
    for (const key of keys) {
      const keyRe = new RegExp(`${key}:\\s*'((?:\\'|[^'])*)'`);
      const found = chunk.match(keyRe);
      if (found) record[key] = unescapeJsString(found[1]);
    }
    items.push(record);
  }
  return items;
}

function applyMeta(html, { title, excerpt, url, image, type = 'article' }) {
  const pageTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const replacements = [
    [/<title>[\\s\\S]*?<\\/title>/, `<title>${escapeAttr(pageTitle)}</title>`],
    [
      /<meta\\s+name="description"[\\s\\S]*?content="[^"]*"\\s*\\/>/,
      `<meta name="description" content="${escapeAttr(excerpt)}" />`,
    ],
    [
      /<link\\s+rel="canonical"\\s+href="[^"]*"\\s*\\/>/,
      `<link rel="canonical" href="${escapeAttr(url)}" />`,
    ],
    [
      /<meta\\s+property="og:title"\\s+content="[^"]*"\\s*\\/>/,
      `<meta property="og:title" content="${escapeAttr(title)}" />`,
    ],
    [
      /<meta\\s+property="og:description"[\\s\\S]*?content="[^"]*"\\s*\\/>/,
      `<meta property="og:description" content="${escapeAttr(excerpt)}" />`,
    ],
    [
      /<meta\\s+property="og:type"\\s+content="[^"]*"\\s*\\/>/,
      `<meta property="og:type" content="${escapeAttr(type)}" />`,
    ],
    [
      /<meta\\s+property="og:url"\\s+content="[^"]*"\\s*\\/>/,
      `<meta property="og:url" content="${escapeAttr(url)}" />`,
    ],
    [
      /<meta\\s+property="og:image"\\s+content="[^"]*"\\s*\\/>/,
      `<meta property="og:image" content="${escapeAttr(image)}" />`,
    ],
    [
      /<meta\\s+property="og:image:width"\\s+content="[^"]*"\\s*\\/>/,
      `<meta property="og:image:width" content="1200" />`,
    ],
    [
      /<meta\\s+property="og:image:height"\\s+content="[^"]*"\\s*\\/>/,
      `<meta property="og:image:height" content="630" />`,
    ],
    [
      /<meta\\s+name="twitter:title"\\s+content="[^"]*"\\s*\\/>/,
      `<meta name="twitter:title" content="${escapeAttr(title)}" />`,
    ],
    [
      /<meta\\s+name="twitter:description"[\\s\\S]*?content="[^"]*"\\s*\\/>/,
      `<meta name="twitter:description" content="${escapeAttr(excerpt)}" />`,
    ],
    [
      /<meta\\s+name="twitter:image"\\s+content="[^"]*"\\s*\\/>/,
      `<meta name="twitter:image" content="${escapeAttr(image)}" />`,
    ],
  ];

  let out = html;
  for (const [pattern, replacement] of replacements) {
    out = out.replace(pattern, replacement);
  }
  return out;
}

function writePage(html, distRel) {
  const fileHtml = join(root, 'dist', `${distRel}.html`);
  const fileIndex = join(root, 'dist', distRel, 'index.html');
  mkdirSync(dirname(fileHtml), { recursive: true });
  mkdirSync(dirname(fileIndex), { recursive: true });
  writeFileSync(fileHtml, html);
  writeFileSync(fileIndex, html);
}

const indexPath = join(root, 'dist', 'index.html');
const template = readFileSync(indexPath, 'utf8');
const postsSrc = readFileSync(join(root, 'src', 'data', 'posts.js'), 'utf8');
const ledgerSrc = readFileSync(join(root, 'src', 'data', 'ledger.js'), 'utf8');
const calcSrc = readFileSync(join(root, 'src', 'data', 'calculators.js'), 'utf8');

const posts = extractQuotedBlocks(postsSrc, ['title', 'excerpt', 'link']);
const editions = extractQuotedBlocks(ledgerSrc, ['slug', 'title', 'lede', 'sundayLabel']);
const calcs = extractQuotedBlocks(calcSrc, ['slug', 'label', 'title', 'description']);

let written = 0;

for (const post of posts) {
  if (!post.link || !post.title) continue;
  const slug = post.link.replace(/^\\/blog\\//, '').replace(/\\/$/, '');
  const url = `${SITE}${post.link}`;
  const image = buildOgImageUrl({ title: post.title, kicker: 'Essay', kind: 'blog' });
  writePage(
    applyMeta(template, { title: post.title, excerpt: post.excerpt || '', url, image }),
    join('blog', slug),
  );
  written += 1;
}

const seenEdition = new Set();
for (const edition of editions) {
  if (!edition.slug || !edition.title || seenEdition.has(edition.slug)) continue;
  seenEdition.add(edition.slug);
  const url = `${SITE}/ledger/${edition.slug}`;
  const image = buildOgImageUrl({
    title: edition.title,
    kicker: edition.sundayLabel || 'The Ledger',
    kind: 'ledger',
  });
  writePage(
    applyMeta(template, {
      title: edition.title,
      excerpt: edition.lede || '',
      url,
      image,
    }),
    join('ledger', edition.slug),
  );
  written += 1;
}

const seenCalc = new Set();
for (const calc of calcs) {
  if (!calc.slug || seenCalc.has(calc.slug)) continue;
  seenCalc.add(calc.slug);
  const heading = calc.label || calc.title;
  if (!heading) continue;
  const url = `${SITE}/calculators/${calc.slug}`;
  const image = buildOgImageUrl({ title: heading, kicker: 'Calculator', kind: 'calculator' });
  writePage(
    applyMeta(template, {
      title: calc.title || heading,
      excerpt: calc.description || '',
      url,
      image,
      type: 'website',
    }),
    join('calculators', calc.slug),
  );
  written += 1;
}

console.log(`prerender-og: wrote ${written} page previews (${posts.length} posts)`);
