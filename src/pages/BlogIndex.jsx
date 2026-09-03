import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, X, Filter } from 'lucide-react';
import { allPosts, allTags } from '../data/posts';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import SubscribeForm from '../components/SubscribeForm';
import ReferralCard from '../components/ReferralCard';
import LedgerBand from '../components/LedgerBand';
import { getReferral } from '../data/referrals';

export default function BlogIndex() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTags, setActiveTags] = useState([]);
  // Slot 8 — distinct from post footer (7) and homepage slots
  const listReferral = getReferral({ slot: 8, pool: 'all' });

  const filteredPosts = useMemo(() => {
    return allPosts.filter((post) => {
      const matchesSearch =
        !searchTerm ||
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (post.tags || []).some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesTags =
        activeTags.length === 0 || activeTags.every((tag) => (post.tags || []).includes(tag));
      return matchesSearch && matchesTags;
    });
  }, [searchTerm, activeTags]);

  const toggleTag = (tag) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchTerm('');
    setActiveTags([]);
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <SiteHeader />

      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] sm:text-xs font-semibold tracking-[1.5px] mb-4">
            FAITH · FAMILY · FINANCIAL INDEPENDENCE
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 leading-tight">
            From the blog
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Stewardship, margin, and vocation for Catholic families on the path to FI.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <div className="mb-8">
          <LedgerBand compact />
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search posts…"
              className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-400"
            />
          </div>
          {(searchTerm || activeTags.length > 0) && (
            <button
              type="button"
              onClick={clearFilters}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50"
            >
              <X size={14} /> Clear
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {allTags.map((tag) => {
            const active = activeTags.includes(tag);
            return (
              <button
                key={tag}
                type="button"
                onClick={() => toggleTag(tag)}
                className={
                  active
                    ? 'px-3 py-1 rounded-full text-xs font-semibold bg-emerald-600 text-white'
                    : 'px-3 py-1 rounded-full text-xs font-medium bg-white border border-gray-200 text-gray-600 hover:border-emerald-300'
                }
              >
                {tag}
              </button>
            );
          })}
        </div>

        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {filteredPosts.map((post) => (
              <Link
                key={post.link}
                to={post.link}
                className="group bg-white rounded-2xl border border-gray-100 hover:border-emerald-200 hover:shadow-md transition-all p-5 flex flex-col"
              >
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {(post.tags || []).slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors leading-snug mb-2 text-[15px] sm:text-base">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 flex-1">{post.excerpt}</p>
                <div className="mt-3 pt-3 border-t border-gray-50 text-xs text-gray-400 flex justify-between">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Filter className="mx-auto text-gray-300 mb-3" size={32} />
            <p className="text-gray-600 mb-4">No posts match those filters.</p>
            <button
              type="button"
              onClick={clearFilters}
              className="px-6 py-2.5 bg-emerald-600 text-white rounded-xl font-medium hover:bg-emerald-700 transition-colors"
            >
              Clear filters & show all
            </button>
          </div>
        )}

        {listReferral && (
          <div className="mb-8">
            <ReferralCard referral={listReferral} />
          </div>
        )}

        <div className="pt-4 pb-2">
          <SubscribeForm />
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
