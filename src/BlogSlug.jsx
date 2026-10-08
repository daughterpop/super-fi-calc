import { lazy, Suspense } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// Browser: one lazy chunk per essay. The build-time prerender
// (src/entry-server.jsx) swaps in eagerly loaded modules via setEagerPages so
// renderToString gets the full essay instead of the Suspense fallback.
let pageModules = import.meta.glob('./pages/*.jsx');
let eager = false;

export function setEagerPages(modules) {
  pageModules = modules;
  eager = true;
}

const ALIASES = {
  'why-fi-for-everyone': 'WhyFIForEveryone',
  'raising-faith-filled-kids-while-building-financial-freedom': 'RaisingFaithFilledKidsWhileBuildingFinancialFreedom',
};

function resolveModule(slug) {
  const candidates = [
    `./pages/${slug}.jsx`,
    ALIASES[slug] ? `./pages/${ALIASES[slug]}.jsx` : null,
  ].filter(Boolean);
  for (const key of candidates) {
    if (pageModules[key]) return pageModules[key];
  }
  return null;
}

/** True when /blog/:slug resolves to an essay file (used by the prerender route list). */
export function hasEssay(slug) {
  return resolveModule(slug) !== null;
}

// Cache one lazy() per slug so re-renders (and hydration) reuse the same
// component instead of re-suspending.
const lazyCache = new Map();
function lazyPage(slug, loader) {
  if (!lazyCache.has(slug)) lazyCache.set(slug, lazy(loader));
  return lazyCache.get(slug);
}

function MissingPost({ slug }) {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-16 text-center">
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <h1 className="text-2xl font-bold text-gray-900 mb-3">Post not found</h1>
      <p className="text-gray-600 mb-6">No page at /blog/{slug}.</p>
      <Link to="/blog" className="text-emerald-700 font-medium hover:underline">
        Back to the blog
      </Link>
    </div>
  );
}

export default function BlogSlug() {
  const { slug } = useParams();
  const loader = resolveModule(slug);
  if (!loader) return <MissingPost slug={slug} />;
  const Page = eager ? loader.default : lazyPage(slug, loader);
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50" />}>
      <Page />
    </Suspense>
  );
}
