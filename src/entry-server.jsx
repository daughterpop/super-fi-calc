/**
 * Build-time only. scripts/prerender.mjs renders every real route with this
 * entry so crawlers that do not run JavaScript get the full page (headings,
 * body text, links, JSON-LD). Browsers then hydrate the same markup.
 * Routes are derived from posts.js, src/pages/*.jsx, ledger.js and
 * calculators.js, so a new daily post is picked up with no extra step.
 */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import essayMeta from 'virtual:essay-meta';

import RouteSeo from './components/RouteSeo.jsx';
import AppRoutes from './AppRoutes.jsx';
import { allPosts } from './data/posts';
import { editions } from './data/ledger';
import { ALL_CALCULATORS } from './data/calculators';
import { hasEssay, setEagerPages } from './BlogSlug.jsx';

setEagerPages(import.meta.glob('./pages/*.jsx', { eager: true }));

const STATIC_ROUTES = ['/', '/blog', '/calculators', '/ledger', '/tools', '/faq', '/subscribe'];

export function getRoutes() {
  const blog = new Set();
  for (const post of allPosts) {
    const slug = String(post.link || '').replace(/^\/blog\//, '');
    if (/^[a-z0-9][a-z0-9-]*$/i.test(slug) && hasEssay(slug)) blog.add(slug);
  }
  for (const slug of Object.keys(essayMeta)) if (hasEssay(slug)) blog.add(slug);
  return [
    ...STATIC_ROUTES,
    ...[...blog].map((slug) => `/blog/${slug}`),
    ...[...new Set(editions.map((e) => e.slug))].map((slug) => `/ledger/${slug}`),
    ...[...new Set(ALL_CALCULATORS.map((c) => c.slug))].map((slug) => `/calculators/${slug}`),
  ];
}

export function render(url) {
  const helmetContext = {};
  const html = renderToString(
    <React.StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <RouteSeo />
          <AppRoutes />
        </StaticRouter>
      </HelmetProvider>
    </React.StrictMode>
  );
  return { html, helmet: helmetContext.helmet };
}

/** Head-only fallback (title, meta, JSON-LD) if a page body fails to render. */
export function renderHead(url) {
  const helmetContext = {};
  renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <RouteSeo />
      </StaticRouter>
    </HelmetProvider>
  );
  return { html: '', helmet: helmetContext.helmet };
}
