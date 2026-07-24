import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, X, Filter } from 'lucide-react';
import { allPosts, allTags } from '../data/posts';

export default function BlogIndex() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTags, setActiveTags] = useState([]);
  const [sortOrder, setSortOrder] = useState('newest');

  const toggleTag = (tag) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchTerm('');
    setActiveTags([]);
  };

  const filteredPosts = useMemo(() => {
    let result = allPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (post.excerpt && post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())) ||
        post.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesTags =
        activeTags.length === 0 ||
        activeTags.every((tag) => post.tags.includes(tag));

      return matchesSearch && matchesTags;
    });

    result = [...result].sort((a, b) => {
      if (sortOrder === 'newest') {
        return b.dateSort.localeCompare(a.dateSort);
      }
      return a.dateSort.localeCompare(b.dateSort);
    });

    return result;
  }, [searchTerm, activeTags, sortOrder]);

  const hasActiveFilters = searchTerm || activeTags.length > 0;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="mb-6">
          <Link
            to="/"
            className="text-emerald-600 hover:text-emerald-700 font-medium text-sm inline-flex items-center gap-1"
          >
            ← Back to Calculator
          </Link>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Blog</h1>
          <p className="text-gray-600 mt-2 text-base sm:text-lg">
            Faith-filled insights on financial independence, family stewardship, and building generational legacy.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search posts by title, topic, or tag..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-base bg-white"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                type="button"
              >
                <X size={16} />
              </button>
            )}
          </div>

          <div className="flex rounded-xl border border-gray-300 overflow-hidden bg-white shrink-0">
            <button
              type="button"
              onClick={() => setSortOrder('newest')}
              className={
                sortOrder === 'newest'
                  ? 'px-4 py-3 text-sm font-medium transition-colors bg-emerald-600 text-white'
                  : 'px-4 py-3 text-sm font-medium transition-colors text-gray-600 hover:bg-gray-50'
              }
            >
              Newest
            </button>
            <button
              type="button"
              onClick={() => setSortOrder('oldest')}
              className={
                sortOrder === 'oldest'
                  ? 'px-4 py-3 text-sm font-medium transition-colors bg-emerald-600 text-white'
                  : 'px-4 py-3 text-sm font-medium transition-colors text-gray-600 hover:bg-gray-50'
              }
            >
              Oldest
            </button>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <Filter size={16} className="text-gray-500" />
            <span className="text-sm font-medium text-gray-700">Filter by topic</span>
            {hasActiveFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="ml-auto text-sm text-emerald-600 hover:text-emerald-700 font-medium"
              >
                Clear all
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => {
              const isActive = activeTags.includes(tag);
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => toggleTag(tag)}
                  className={
                    isActive
                      ? 'px-3.5 py-1.5 rounded-full text-sm font-medium transition-all border bg-emerald-600 text-white border-emerald-600 shadow-sm'
                      : 'px-3.5 py-1.5 rounded-full text-sm font-medium transition-all border bg-white text-gray-700 border-gray-200 hover:border-emerald-300 hover:text-emerald-700'
                  }
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mb-4 text-sm text-gray-500">
          {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'}
          {hasActiveFilters && ' matching your filters'}
        </div>

        {filteredPosts.length > 0 ? (
          <div className="space-y-5">
            {filteredPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-2xl shadow-sm p-5 sm:p-7 hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="flex justify-between text-sm text-gray-500 mb-2.5">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold mb-2.5 leading-snug">
                  <Link to={post.link} className="hover:text-emerald-600 transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {post.tags.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => toggleTag(tag)}
                      className={
                        activeTags.includes(tag)
                          ? 'text-xs px-2.5 py-1 rounded-full border transition-colors bg-emerald-50 text-emerald-700 border-emerald-200'
                          : 'text-xs px-2.5 py-1 rounded-full border transition-colors bg-gray-50 text-gray-600 border-gray-100 hover:border-emerald-200'
                      }
                    >
                      {tag}
                    </button>
                  ))}
                </div>

                <Link
                  to={post.link}
                  className="text-emerald-600 font-medium hover:underline text-sm inline-flex items-center gap-1"
                >
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl p-8 border border-gray-100">
            <p className="text-xl text-gray-500 mb-2">No matching posts found.</p>
            <p className="text-gray-400 text-sm mb-6">
              Try different keywords or clear the filters.
            </p>
            <button
              type="button"
              onClick={clearFilters}
              className="px-6 py-2.5 bg-emerald-600 text-white rounded-xl font-medium hover:bg-emerald-700 transition-colors"
            >
              Clear filters & show all
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
