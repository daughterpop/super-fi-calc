/**
 * After Vite build, write static HTML so crawlers that do not run JS
 * see unique title / description / canonical / og:image.
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://www.viafidelitatis.com';
const SITE_NAME = 'Via Fidelitatis';
const SLUG_RE = /^[a-z0-9][a-z0-9-]{0,118}$/i;

function escapeAttr(value) {
  return String(value)
    .replace(/&/g, '&')
    .replace(/"/g, '"')
    .replace(/</g, '<')
    .replace(/>/g, '>');
}

function buildOgImageUrl({ title, kicker, kind = 'site' }) {
  const params = new URLSearchParams();
  if (title) params.set('title', String(title).slice(0, 140));
  if (kicker) params.set('kicker', String(kicker).slice(0, 48));
  if (kind) params.set('kind', kind);
  return SITE + '/api/og?' + params.toString();
}

function field(src, key) {
  const re = new RegExp(key + ":\\s*'([^']*)'");
  const found = src.match(re);
  return found ? found[1] : '';
}

function extractPosts(src) {
  const items = [];
  const re = /link:\s*'(\/blog\/[a-z0-9-]+)'/gi;
  let match;
  while ((match = re.exec(src))) {
    const link = match[1];
    const windowStart = Math.max(0, match.index - 900);
    const chunk = src.slice(windowStart, match.index + 80);
    items.push({
      link,
      title: field(chunk, 'title'),
      excerpt: field(chunk, 'excerpt'),
    });
  }
  return items;
}

function extractKeyed(src, slugKey, extraKeys) {
  const items = [];
  const re = new RegExp(slugKey + ":\\s*'([a-z0-9-]+)'", 'gi');
  let match;
  while ((match = re.exec(src))) {
    const slug = match[1];
    const chunk = src.slice(match.index, match.index + 700);
    const record = { slug };
    for (const key of extraKeys) record[key] = field(chunk, key);
    items.push(record);
  }
  return items;
}

function applyMeta(html, { title, excerpt, url, image, type = 'article' }) {
  const pageTitle = title.includes(SITE_NAME) ? title : title + ' | ' + SITE_NAME;
  const pairs = [
    ['<title>', '<title>' + escapeAttr(pageTitle) + '</title>', /<title>[\s\S]*?<\/title>/],
    ['og:title', '<meta property="og:title" content="' + escapeAttr(title) + '" />', /<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/],
    ['og:description', '<meta property="og:description" content="' + escapeAttr(excerpt) + '" />', /<meta\s+property="og:description"[\s\S]*?content="[^"]*"\s*\/>/],
    ['og:type', '<meta property="og:type" content="' + escapeAttr(type) + '" />', /<meta\s+property="og:type"\s+content="[^"]*"\s*\/>/],
    ['og:url', '<meta property="og:url" content="' + escapeAttr(url) + '" />', /<meta\s+property="og:url"\s+content="[^"]*"\s*\/>/],
    ['og:image', '<meta property="og:image" content="' + escapeAttr(image) + '" />', /<meta\s+property="og:image"\s+content="[^"]*"\s*\/>/],
    ['twitter:title', '<meta name="twitter:title" content="' + escapeAttr(title) + '" />', /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/>/],
    ['twitter:description', '<meta name="twitter:description" content="' + escapeAttr(excerpt) + '" />', /<meta\s+name="twitter:description"[\s\S]*?content="[^"]*"\s*\/>/],
    ['twitter:image', '<meta name="twitter:image" content="' + escapeAttr(image) + '" />', /<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/>/],
    ['canonical', '<link rel="canonical" href="' + escapeAttr(url) + '" />', /<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/],
    ['description', '<meta name="description" content="' + escapeAttr(excerpt) + '" />', /<meta\s+name="description"[\s\S]*?content="[^"]*"\s*\/>/],
  ];
  let out = html;
  for (const [, replacement, pattern] of pairs) {
    out = out.replace(pattern, replacement);
  }
  return out;
}

function writePage(html, distRel) {
  if (String(distRel).length > 160) {
    throw new Error('Refusing long prerender path: ' + String(distRel).slice(0, 80));
  }
  const fileHtml = join(root, 'dist', distRel + '.html');
  const fileIndex = join(root, 'dist', distRel, 'index.html');
  mkdirSync(dirname(fileHtml), { recursive: true });
  mkdirSync(dirname(fileIndex), { recursive: true });
  writeFileSync(fileHtml, html);
  writeFileSync(fileIndex, html);
}

const template = readFileSync(join(root, 'dist', 'index.html'), 'utf8');
const postsSrc = readFileSync(join(root, 'src', 'data', 'posts.js'), 'utf8');
const ledgerSrc = readFileSync(join(root, 'src', 'data', 'ledger.js'), 'utf8');
const calcSrc = readFileSync(join(root, 'src', 'data', 'calculators.js'), 'utf8');

const posts = extractPosts(postsSrc);
const editions = extractKeyed(ledgerSrc, 'slug', ['title', 'lede', 'sundayLabel']);
const calcs = extractKeyed(calcSrc, 'slug', ['label', 'title', 'description']);

let written = 0;

const staticPages = [
  { path: 'faq', title: 'FAQ — Catholic Financial Independence Questions', excerpt: 'What Via Fidelitatis is, who it is for, and how Catholic families can pursue FI without losing the plot.', kind: 'site', kicker: 'FAQ' },
  { path: 'calculators', title: 'FI & Family Calculators for Catholic Households', excerpt: 'Free calculators for Catholic families: FI path, college/529, vehicle TCO, debt payoff, tithing surplus, and more.', kind: 'calculator', kicker: 'Calculator' },
  { path: 'blog', title: 'Blog — Faith, Family & Financial Independence', excerpt: 'Faith-filled insights on financial independence, family stewardship, and tithing for Catholic households.', kind: 'blog', kicker: 'Essay' },
  { path: 'tools', title: 'Stewardship Tools & Referral Perks', excerpt: 'Investing, budgeting, privacy, and household tools Catholic families use on the path to FI.', kind: 'tools', kicker: 'Tools' },
  { path: 'subscribe', title: 'Subscribe — Get The Ledger on Sunday', excerpt: 'Join the Via Fidelitatis list for The Ledger every Sunday.', kind: 'ledger', kicker: 'The Ledger' },
  { path: 'ledger', title: 'The Ledger — Sunday Surplus for Catholic Households', excerpt: 'A short Sunday read for Catholic households on budget, deals, and the Mass readings.', kind: 'ledger', kicker: 'The Ledger' },
];

for (const page of staticPages) {
  const url = SITE + '/' + page.path;
  const image = buildOgImageUrl({ title: page.title, kicker: page.kicker, kind: page.kind });
  writePage(applyMeta(template, { title: page.title, excerpt: page.excerpt, url, image, type: 'website' }), page.path);
  written += 1;
}

for (const post of posts) {
  const slug = String(post.link || '').replace(/^\/blog\//, '');
  if (!post.title || !SLUG_RE.test(slug)) continue;
  const url = SITE + post.link;
  const image = buildOgImageUrl({ title: post.title, kicker: 'Essay', kind: 'blog' });
  writePage(applyMeta(template, { title: post.title, excerpt: post.excerpt || '', url, image }), join('blog', slug));
  written += 1;
}

const seenEdition = new Set();
for (const edition of editions) {
  if (!edition.title || !SLUG_RE.test(edition.slug) || seenEdition.has(edition.slug)) continue;
  seenEdition.add(edition.slug);
  const url = SITE + '/ledger/' + edition.slug;
  const image = buildOgImageUrl({ title: edition.title, kicker: edition.sundayLabel || 'The Ledger', kind: 'ledger' });
  writePage(applyMeta(template, { title: edition.title, excerpt: edition.lede || '', url, image }), join('ledger', edition.slug));
  written += 1;
}

const seenCalc = new Set();
for (const calc of calcs) {
  if (!SLUG_RE.test(calc.slug) || seenCalc.has(calc.slug)) continue;
  seenCalc.add(calc.slug);
  const heading = calc.label || calc.title;
  if (!heading) continue;
  const url = SITE + '/calculators/' + calc.slug;
  const image = buildOgImageUrl({ title: heading, kicker: 'Calculator', kind: 'calculator' });
  writePage(applyMeta(template, { title: calc.title || heading, excerpt: calc.description || '', url, image, type: 'website' }), join('calculators', calc.slug));
  written += 1;
}

console.log('prerender-og: wrote ' + written + ' page previews (' + posts.length + ' posts)');
