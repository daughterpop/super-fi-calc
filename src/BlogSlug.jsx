import { lazy, Suspense } from 'react';
import { useParams, Link } from 'react-router-dom';

const pageModules = import.meta.glob('./pages/*.jsx');

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

function MissingPost({ slug }) {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-16 text-center">
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
  const Page = lazy(loader);
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50" />}>
      <Page />
    </Suspense>
  );
}
