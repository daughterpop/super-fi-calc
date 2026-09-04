import React, { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, X, Filter, ArrowRight } from 'lucide-react';
import { allPosts } from '../data/posts';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import SubscribeForm from '../components/SubscribeForm';
import ReferralCard from '../components/ReferralCard';
import { formatIssue, latestEdition } from '../data/ledger';
import { getReferral } from '../data/referrals';

const GUIDE_LINKS = [
  '/blog/is-fire-compatible-with-catholicism',
  '/blog/how-to-budget-as-a-catholic-family-with-tithing-first',
  '/blog/building-an-emergency-fund-without-neglecting-the-tithe',
  '/blog/faith-based-investing-basics-for-catholic-households',
  '/blog/books-we-keep-in-the-house',
];

const ARCHIVE_LANES = [
  { id: 'saints', label: 'Saints', match: (p) => (p.tags || []).includes('Seasonal') },
  { id: 'guides', label: 'Guides', match: (p) => p.featured === true && !(p.tags || []).includes('Tools') },
  { id: 'tools', label: 'Tools', match: (p) => (p.tags || []).includes('Tools') },
  { id: 'family', label: 'Family', match: (p) => (p.tags || []).some((t) => t === 'Parenting' || t === 'Couples') },
];

function byDate(a, b) {
  return (b.dateSort || '').localeCompare(a.dateSort || '');
}

function PostRow({ post }) {
  return (
    <Link
      to={post.link}
      className="group flex items-baseline justify-between gap-4 py-3 border-b border-gray-100 last:border-0"
    >
      <span className="font-medium text-gray-900 group-hover:text-emerald-700 leading-snug">
        {post.title}
      </span>
      <span className="shrink-0 text-xs text-gray-400">{post.date}</span>
    </Link>
  );
}

export default function BlogIndex() {
  const [params, setParams] = useSearchParams();
  const archive = params.get('view') === 'all';
  const [searchTerm, setSearchTerm] = useState('');
  const [lane, setLane] = useState(null);
  const listReferral = getReferral({ slot: 8, pool: 'all' });
  const latestLedger = latestEdition();

  const sorted = useMemo(() => [...allPosts].sort(byDate), []);
  const latestThree = sorted.slice(0, 3);
  const guides = useMemo(
    () => GUIDE_LINKS.map((link) => sorted.find((p) => p.link === link)).filter(Boolean),
    [sorted]
  );

  const filteredPosts = useMemo(() => {
    const activeLane = ARCHIVE_LANES.find((l) => l.id === lane);
    return sorted.filter((post) => {
      const hay = `${post.title} ${post.excerpt} ${(post.tags || []).join(' ')}`.toLowerCase();
      const matchesSearch = !searchTerm || hay.includes(searchTerm.toLowerCase());
      const matchesLane = !activeLane || activeLane.match(post);
      return matchesSearch && matchesLane;
    });
  }, [sorted, searchTerm, lane]);

  const openArchive = () => {
    setParams({ view: 'all' });
    window.scrollTo(0, 0);
  };

  const closeArchive = () => {
    setParams({});
    setSearchTerm('');
    setLane(null);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <SiteHeader />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        {!archive ? (
          <>
            <section className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Latest</h2>
              <div className="space-y-3">
                {latestThree.map((post, index) => (
                  <Link
                    key={post.link}
                    to={post.link}
                    className="block bg-white rounded-2xl border border-gray-100 hover:border-emerald-200 hover:shadow-md transition-all p-5 sm:p-6"
                  >
                    {index === 0 ? (
                      <>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-3">{post.excerpt}</p>
                        <p className="text-xs text-gray-400">{post.date}</p>
                      </>
                    ) : (
                      <div className="flex items-baseline justify-between gap-4">
                        <h3 className="font-semibold text-gray-900 leading-snug">{post.title}</h3>
                        <span className="shrink-0 text-xs text-gray-400">{post.date}</span>
                      </div>
                    )}
                  </Link>
                ))}
              </div>
              <button
                type="button"
                onClick={openArchive}
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-emerald-800 hover:underline"
              >
                All posts <ArrowRight size={16} />
              </button>
            </section>

            {latestLedger && (
              <section className="mb-12">
                <h2 className="text-xl font-bold text-gray-900 mb-3">This Sunday</h2>
                <p className="text-sm text-gray-600">
                  <Link
                    to={`/ledger/${latestLedger.slug}`}
                    className="font-medium text-emerald-800 hover:underline"
                  >
                    {latestLedger.title}
                  </Link>
                  <span className="text-gray-400"> · {formatIssue(latestLedger)}</span>
                </p>
              </section>
            )}

            <section className="mb-12">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Guides</h2>
              <div className="bg-white rounded-2xl border border-gray-100 px-5">
                {guides.map((post) => (
                  <PostRow key={post.link} post={post} />
                ))}
              </div>
            </section>

            {listReferral && (
              <div className="mb-8">
                <ReferralCard referral={listReferral} />
              </div>
            )}

            <SubscribeForm />
          </>
        ) : (
          <>
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-xl font-bold text-gray-900">All posts</h1>
              <button
                type="button"
                onClick={closeArchive}
                className="text-sm text-gray-500 hover:text-gray-800"
              >
                Back to blog
              </button>
            </div>

            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search posts"
                className="w-full pl-9 pr-9 py-2.5 rounded-xl border border-gray-200 bg-white text-sm"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {ARCHIVE_LANES.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setLane((prev) => (prev === item.id ? null : item.id))}
                  className={
                    lane === item.id
                      ? 'px-3 py-1 rounded-full text-xs font-medium bg-emerald-700 text-white'
                      : 'px-3 py-1 rounded-full text-xs font-medium bg-white border border-gray-200 text-gray-600'
                  }
                >
                  {item.label}
                </button>
              ))}
            </div>

            {filteredPosts.length > 0 ? (
              <div className="bg-white rounded-2xl border border-gray-100 px-5 mb-8">
                {filteredPosts.map((post) => (
                  <PostRow key={post.link} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Filter className="mx-auto text-gray-300 mb-3" size={32} />
                <p className="text-gray-600 mb-4">No posts match those filters.</p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchTerm('');
                    setLane(null);
                  }}
                  className="text-sm text-emerald-800 hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}

            <SubscribeForm />
          </>
        )}
      </div>
      <SiteFooter />
    </div>
  );
}
