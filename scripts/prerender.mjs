/**
 * Runs after `vite build` (see package.json "build").
 *
 * 1. Builds src/entry-server.jsx for Node (dist-ssr/, not deployed).
 * 2. Renders every real route to static HTML: full page body inside #root
 *    plus per-route <title>, meta, canonical, OG/Twitter tags and JSON-LD
 *    from RouteSeo. Crawlers that skip JavaScript see the real page; the
 *    browser bundle hydrates the same markup.
 * 3. Writes dist/<route>/index.html and dist/<route>.html (same layout the old
 *    OG-only prerender used), and keeps the empty SPA shell at
 *    dist/app-shell.html for vercel.json fallbacks (e.g. an unknown slug).
 *
 * Routes come from posts.js, src/pages/*.jsx, ledger.js and calculators.js
 * at build time, so a new daily post is prerendered with no extra step.
 *
 * Safety: if the server bundle cannot build or load, this falls back to the
 * previous OG-only prerender (scripts/prerender-og.mjs) instead of failing
 * the deploy. A single route that throws gets a head-only page.
 */
import { copyFileSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const ssrOut = join(root, 'dist-ssr');
const started = Date.now();

const templatePath = join(dist, 'index.html');
const template = readFileSync(templatePath, 'utf8');
if (!template.includes('<div id="root"></div>')) {
  throw new Error('prerender: dist/index.html has no empty <div id="root"></div>');
}
// Empty SPA shell for routes that are not prerendered (vercel.json rewrites).
writeFileSync(join(dist, 'app-shell.html'), template);

async function fallbackToOgOnly(reason) {
  console.warn('prerender: FULL PRERENDER SKIPPED — ' + reason);
  console.warn('prerender: falling back to OG-only page previews (scripts/prerender-og.mjs)');
  await import(pathToFileURL(join(root, 'scripts', 'prerender-og.mjs')).href);
}

let server;
try {
  const { build } = await import('vite');
  rmSync(ssrOut, { recursive: true, force: true });
  await build({
    root,
    logLevel: 'warn',
    // Bundle dependencies so CommonJS packages (react-helmet-async, etc.)
    // load cleanly under Node ESM.
    ssr: { noExternal: true },
    build: {
      ssr: 'src/entry-server.jsx',
      outDir: 'dist-ssr',
      emptyOutDir: true,
      rollupOptions: {
        output: { format: 'esm', entryFileNames: 'entry-server.mjs' },
        onwarn(warning, warn) {
          // Expected: the server bundle loads every essay eagerly on purpose.
          if (String(warning.message || '').includes('dynamic import will not move module')) return;
          warn(warning);
        },
      },
    },
  });
  server = await import(pathToFileURL(join(ssrOut, 'entry-server.mjs')).href);
} catch (err) {
  await fallbackToOgOnly(err && err.stack ? err.stack.split('\n').slice(0, 4).join(' | ') : String(err));
  process.exit(0);
}

// Head tags in the template that RouteSeo replaces per route.
const DEFAULT_HEAD_PATTERNS = [
  /\s*<title>[\s\S]*?<\/title>/,
  /\s*<meta\s+name="description"[\s\S]*?\/>/,
  /\s*<link\s+rel="canonical"[^>]*\/>/,
  /\s*<meta\s+property="og:(?:title|description|type|url|site_name|image)"[\s\S]*?\/>/g,
  /\s*<meta\s+name="twitter:(?:card|title|description|image)"[\s\S]*?\/>/g,
];

function buildPage({ html, helmet }) {
  let head = template;
  for (const pattern of DEFAULT_HEAD_PATTERNS) head = head.replace(pattern, '');
  const tags = [
    helmet.title.toString(),
    helmet.priority ? helmet.priority.toString() : '',
    helmet.meta.toString(),
    helmet.link.toString(),
    helmet.script.toString(),
  ]
    .filter(Boolean)
    .join('\n    ');
  return head
    .replace('</head>', '    ' + tags + '\n  </head>')
    .replace('<div id="root"></div>', '<div id="root">' + html + '</div>');
}

function writeRoute(route, page) {
  if (route === '/') {
    writeFileSync(templatePath, page);
    return;
  }
  const rel = route.replace(/^\//, '');
  if (!/^[a-z0-9/-]{1,160}$/i.test(rel)) throw new Error('prerender: refusing path ' + rel.slice(0, 80));
  const asIndex = join(dist, rel, 'index.html');
  mkdirSync(dirname(asIndex), { recursive: true });
  writeFileSync(asIndex, page);
  writeFileSync(join(dist, rel + '.html'), page);
}

const routes = server.getRoutes();
const failed = [];
let full = 0;
for (const route of routes) {
  try {
    const result = server.render(route);
    if (!result.html || !result.helmet) throw new Error('empty render');
    writeRoute(route, buildPage(result));
    full += 1;
  } catch (err) {
    failed.push(route + ': ' + String(err && err.message ? err.message : err).slice(0, 160));
    try {
      writeRoute(route, buildPage(server.renderHead(route)));
    } catch (headErr) {
      failed.push(route + ' (head): ' + String(headErr && headErr.message).slice(0, 160));
    }
  }
}

rmSync(ssrOut, { recursive: true, force: true });
const seconds = ((Date.now() - started) / 1000).toFixed(1);
console.log(`prerender: ${full}/${routes.length} routes rendered with full content in ${seconds}s`);
console.log('prerender: sample ' + routes.filter((r) => r.startsWith('/blog/')).slice(0, 3).join(' | '));
if (failed.length) {
  console.warn(`prerender: ${failed.length} route(s) fell back to head-only HTML:`);
  for (const line of failed) console.warn('  - ' + line);
}
if (!existsSync(join(dist, 'app-shell.html'))) copyFileSync(templatePath, join(dist, 'app-shell.html'));
