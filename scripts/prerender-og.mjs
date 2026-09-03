/**
 * After Vite build, write a static HTML file for every blog post so crawlers
 * that do not run JS (Twitterbot, LinkedIn, Slack, Facebook) see unique
 * title / description / canonical instead of the homepage defaults.
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://www.viafidelitatis.com';
const SITE_NAME = 'Via Fidelitatis';
const OG_IMAGE = `${SITE}/IMG_3729.jpeg`;

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

function extractPosts(src) {
  const posts = [];
  const re =
    /title:\s*'((?:\\'|[^'])*)'[\s\S]*?excerpt:\s*'((?:\\'|[^'])*)'[\s\S]*?link:\s*'([^']+)'/g;
  let match;
  while ((match = re.exec(src))) {
    posts.push({
      title: unescapeJsString(match[1]),
      excerpt: unescapeJsString(match[2]),
      link: match[3],
    });
  }
  return posts;
}

function applyMeta(html, { title, excerpt, url }) {
  const pageTitle = `${title} | ${SITE_NAME}`;
  const replacements = [
    [/<title>[\s\S]*?<\/title>/, `<title>${escapeAttr(pageTitle)}</title>`],
    [
      /<meta\s+name="description"[\s\S]*?content="[^"]*"\s*\/>/,
      `<meta name="description" content="${escapeAttr(excerpt)}" />`,
    ],
    [
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/,
      `<link rel="canonical" href="${escapeAttr(url)}" />`,
    ],
    [
      /<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:title" content="${escapeAttr(title)}" />`,
    ],
    [
      /<meta\s+property="og:description"[\s\S]*?content="[^"]*"\s*\/>/,
      `<meta property="og:description" content="${escapeAttr(excerpt)}" />`,
    ],
    [
      /<meta\s+property="og:type"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:type" content="article" />`,
    ],
    [
      /<meta\s+property="og:url"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:url" content="${escapeAttr(url)}" />`,
    ],
    [
      /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/>/,
      `<meta name="twitter:title" content="${escapeAttr(title)}" />`,
    ],
    [
      /<meta\s+name="twitter:description"[\s\S]*?content="[^"]*"\s*\/>/,
      `<meta name="twitter:description" content="${escapeAttr(excerpt)}" />`,
    ],
  ];

  let out = html;
  for (const [pattern, replacement] of replacements) {
    out = out.replace(pattern, replacement);
  }
  return out;
}

const indexPath = join(root, 'dist', 'index.html');
const postsPath = join(root, 'src', 'data', 'posts.js');
const template = readFileSync(indexPath, 'utf8');
const posts = extractPosts(readFileSync(postsPath, 'utf8'));

if (!posts.length) {
  console.warn('prerender-og: no posts parsed from src/data/posts.js');
  process.exit(0);
}

for (const post of posts) {
  const slug = post.link.replace(/^\/blog\//, '').replace(/\/$/, '');
  const url = `${SITE}${post.link}`;
  const html = applyMeta(template, {
    title: post.title,
    excerpt: post.excerpt,
    url,
  });

  const fileHtml = join(root, 'dist', 'blog', `${slug}.html`);
  const fileIndex = join(root, 'dist', 'blog', slug, 'index.html');
  mkdirSync(dirname(fileHtml), { recursive: true });
  mkdirSync(dirname(fileIndex), { recursive: true });
  writeFileSync(fileHtml, html);
  writeFileSync(fileIndex, html);
}

console.log(`prerender-og: wrote ${posts.length} post previews`);
