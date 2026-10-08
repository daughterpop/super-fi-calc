/**
 * Vite plugin: exposes `virtual:essay-meta`, a build-time map of
 * { slug: { title, excerpt } } for essay page files in src/pages/ that are
 * NOT listed in src/data/posts.js (the ~60 older essays that dropped off the
 * /blog index). posts.js stays the source of truth for everything it lists.
 *
 * Read-only: it parses the page files' <h1> and first lead paragraph at
 * build time. Nothing in posts.js or the page files has to change, so new
 * daily posts need no extra step.
 */
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const VIRTUAL_ID = 'virtual:essay-meta';
const RESOLVED_ID = '\0' + VIRTUAL_ID;
const SLUG_FILE_RE = /^([a-z0-9][a-z0-9-]*)\.jsx$/;

function decode(text) {
  return text
    .replace(/\{\s*['"]\s*['"]\s*\}/g, ' ')
    .replace(/\{\s*'([^'{}]*)'\s*\}/g, '$1')
    .replace(/\{\s*"([^"{}]*)"\s*\}/g, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&apos;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function clip(text, max = 200) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  return cut.slice(0, cut.lastIndexOf(' ')).replace(/[,;:—-]+$/, '') + '…';
}

export function readEssayMeta(root) {
  const pagesDir = join(root, 'src', 'pages');
  const postsSrc = readFileSync(join(root, 'src', 'data', 'posts.js'), 'utf8');
  const listed = new Set([...postsSrc.matchAll(/link:\s*'\/blog\/([a-z0-9-]+)'/gi)].map((m) => m[1]));
  const meta = {};
  for (const file of readdirSync(pagesDir).sort()) {
    const match = file.match(SLUG_FILE_RE);
    if (!match || listed.has(match[1])) continue;
    const src = readFileSync(join(pagesDir, file), 'utf8');
    const h1 = src.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
    if (!h1) continue;
    const title = decode(h1[1]);
    if (!title || title.includes('{')) continue;
    let excerpt = '';
    const after = src.slice(h1.index + h1[0].length);
    for (const p of after.matchAll(/<p(?:\s[^>]*)?>([\s\S]*?)<\/p>/g)) {
      const text = decode(p[1]);
      if (text.length >= 40 && !text.includes('{') && !text.includes('}')) {
        excerpt = clip(text);
        break;
      }
    }
    meta[match[1]] = { title, excerpt };
  }
  return meta;
}

export default function essayMetaPlugin() {
  let root = process.cwd();
  return {
    name: 'via-essay-meta',
    configResolved(config) {
      root = config.root;
    },
    resolveId(id) {
      return id === VIRTUAL_ID ? RESOLVED_ID : null;
    },
    load(id) {
      if (id !== RESOLVED_ID) return null;
      return 'export default ' + JSON.stringify(readEssayMeta(root)) + ';';
    },
    handleHotUpdate({ file, server }) {
      if (file.includes('/src/pages/') || file.endsWith('/src/data/posts.js')) {
        const mod = server.moduleGraph.getModuleById(RESOLVED_ID);
        if (mod) server.moduleGraph.invalidateModule(mod);
      }
    },
  };
}
