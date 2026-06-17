import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const allPosts = [
  {
    title: 'Catholic Families: Leverage AI for Prayerful Financial Freedom and Lasting Legacy',
    date: 'June 04, 2026',
    excerpt: 'With the Pope’s new encyclical on AI, Catholic families can use smart tools alongside prayer to accelerate their path to financial independence and build a faith-filled legacy for their kids.',
    readTime: '4 min read',
    slug: 'catholic-families-leverage-ai-for-prayerful-financial-freedom-and-lasting-legacy',
    link: '/blog/catholic-families-leverage-ai-for-prayerful-financial-freedom-and-lasting-legacy'
  },
  {
    title: 'Why Financial Independence Is for Everyone',
    date: 'May 18, 2026',
    excerpt: 'Financial independence isn’t just for tech bros...',
    readTime: '4 min read',
    slug: 'why-fi-for-everyone',
    link: '/blog/why-fi-for-everyone'
  },
  {
    title: 'Catholic Dads Leading Family FI with AI and Faith',
    date: 'June 10, 2026',
    excerpt: 'Practical ways Catholic dads are using AI tools to steward family finances while leading in faith.',
    readTime: '4 min read',
    slug: 'catholic-dads-leading-family-fi-with-ai-and-faith',
    link: '/blog/catholic-dads-leading-family-fi-with-ai-and-faith'
  },
  {
    title: 'Raising Faith-Filled Kids While Building Financial Freedom',
    date: 'June 12, 2026',
    excerpt: 'How to teach your children about money, faith, and stewardship for a strong generational legacy.',
    readTime: '4 min read',
    slug: 'raising-faith-filled-kids-while-building-financial-freedom',
    link: '/blog/raising-faith-filled-kids-while-building-financial-freedom'
  }
  // TODO: Expand allPosts with every post from src/pages/ for complete coverage
];

export default function BlogIndex() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = allPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (post.excerpt && post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <h1 className="text-4xl font-bold text-gray-900">Blog</h1>
        <input
          type="text"
          placeholder="Search posts by title or topic..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-96 px-5 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-emerald-500 focus:ring-1 text-base"
        />
      </div>

      {filteredPosts.length > 0 ? (
        <div className="space-y-8">
          {filteredPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-md transition-shadow">
              <div className="flex justify-between text-sm text-gray-500 mb-3">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-2xl font-semibold mb-3">
                <Link to={post.link} className="hover:text-emerald-600 transition-colors">{post.title}</Link>
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
              <Link to={post.link} className="text-emerald-600 font-medium hover:underline flex items-center gap-1">Read more →</Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-2xl p-8">
          <p className="text-xl text-gray-500">No matching posts found for "{searchTerm}".</p>
          <button 
            onClick={() => setSearchTerm('')}
            className="mt-6 px-6 py-2 text-emerald-600 hover:bg-emerald-50 rounded-xl font-medium"
          >
            Clear search and show all
          </button>
        </div>
      )}
    </div>
  );
}
