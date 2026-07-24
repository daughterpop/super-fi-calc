import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, X, Filter } from 'lucide-react';
import { allPosts, allTags } from '../data/posts';

const newPost = {
    title: 'How Catholic Families Can Turn Summer into a Season of Faith and Financial Freedom',
    date: 'July 24, 2026',
    dateSort: '2026-07-24',
    excerpt: 'Summer gives Catholic families extra time to deepen faith, build money habits together, and make meaningful progress toward financial independence while enjoying family life.',
    readTime: '4 min read',
    link: '/blog/how-catholic-families-can-turn-summer-into-a-season-of-faith-and-financial-freedom',
    tags: ['Stewardship', 'Parenting', 'Seasonal', 'Legacy'],
    featured: false
  };

const latestPost = {
    title: 'How Catholic Families Can Turn Summer Adventures Into Faith & Financial Freedom Lessons',
    date: 'July 24, 2026',
    dateSort: '2026-07-24',
    excerpt: 'Summer adventures give Catholic families the perfect chance to teach kids practical money skills, generosity, and faith while making real progress toward financial freedom — right in the middle of making memories.',
    readTime: '4 min read',
    link: '/blog/how-catholic-families-can-turn-summer-adventures-into-faith-and-financial-freedom-lessons',
    tags: ['Parenting', 'Stewardship', 'Seasonal', 'Legacy'],
    featured: false
  };

const allPostsWithNew = [latestPost, newPost, ...allPosts];

export default function BlogIndex() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTags, setActiveTags] = useState([]);
  const [sortOrder, setSortOrder] = useState('newest'); // 'newest' | 'oldest'

  const toggleTag = (tag) => {
    setActiveTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchTerm('');
    setActiveTags([]);
  };

  const filteredPosts = useMemo(() => {
    let result = allPostsWithNew.filter(post => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (post.excerpt && post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())) ||
        post.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesTags =
        activeTags.length === 0 ||
        activeTags.every(tag => post.tags.includes(tag));

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
        {/* Back link */}
        <div className="mb-6">
          <Link to="/" className="text-emerald-600 hover:text-emerald-700 font-medium text-sm inline-flex items-center gap-1">
            ← Back to Calculator
          </Link>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Blog</h1>
          <p className="text-gray-600 mt-2 text-base sm:text-lg">
            Faith-filled insights on financial independence, family stewardship, and building generational legacy.
          </p>
        </div>

        {/* Search + Sort row */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
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
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Sort toggle */}
          <div className="flex rounded-xl border border-gray-300 overflow-hidden bg-white shrink-0">
            <button
              onClick={() => setSortOrder('newest')}
              className={`px-4 py-3 text-sm font-medium transition-colors ${
                sortOrder === 'newest'
                  ? 'bg-emerald-600 text-white'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Newest
            </button>
            <button
              onClick={() => setSortOrder('oldest')}
              className={`px-4 py-3 text-sm font-medium transition-colors ${
                sortOrder === 'oldest'
                  ? 'bg-emerald-600 text-white'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Oldest
            </button>
          </div>
        </div>

        {/* Tag filters */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <Filter size={16} className="text-gray-500" />
            <span className="text-sm font-medium text-gray-700">Filter by topic</span>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="ml-auto text-sm text-emerald-600 hover:text-emerald-700 font-medium"
              >
                Clear all
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {allTags.map(tag => {
              const isActive = activeTags.includes(tag);
              return (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all border ${
                    isActive
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-emerald-300 hover:text-emerald-700'
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results count */}
        <div className="mb-4 text-sm text-gray-500">
          {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'}
          {hasActiveFilters && ' matching your filters'}
        </div>

        {/* Posts list */}
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

                {/* Tags on card */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {post.tags.map(tag => (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className={`text-xs px-2.5 py-1 rounded-full border transition-colors ${
                        activeTags.includes(tag)
                          ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                          : 'bg-gray-50 text-gray-600 border-gray-100 hover:border-emerald-200'
                      }`}
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
