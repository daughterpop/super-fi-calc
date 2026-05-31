import React from 'react';
import { Link } from 'react-router-dom';

const posts = [
  {
    title: 'Catholic Families Building Generational Wealth: AI, Prayer, and FI Stewardship',
    slug: 'catholic-families-building-generational-wealth-with-ai-prayer-and-fi-stewardship',
    date: 'May 31, 2026',
    excerpt: 'Discover how Catholic families can use AI tools, prayer, and smart stewardship to build lasting financial freedom while raising faith-filled kids.',
    readTime: '4 min read',
    link: '/blog/catholic-families-building-generational-wealth-with-ai-prayer-and-fi-stewardship'
  },
  // other posts...
];

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-4">Super FI Blog</h1>
        <p className="text-xl text-center text-gray-600 mb-12">Faith, Family, and Financial Freedom</p>
        
        <div className="space-y-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-sm p-8 hover:shadow-md transition-all">
              <div className="flex justify-between text-sm text-gray-500 mb-3">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-3xl font-semibold mb-3">
                <Link to={post.link} className="hover:text-indigo-600">{post.title}</Link>
              </h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link to={post.link} className="text-indigo-600 font-medium hover:underline">Read more →</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
