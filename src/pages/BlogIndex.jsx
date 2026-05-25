import React from 'react';
import { Link } from 'react-router-dom';

const posts = [
  {
    title: 'How Catholic Couples Use AI to Build FI and Stronger Marriages',
    slug: 'how-catholic-couples-use-ai-to-build-fi-and-stronger-marriages',
    excerpt: 'Hey everyone, AI is helping Catholic couples build financial independence while strengthening their marriage and raising faith-filled kids. No stress, just smart stewardship.',
    date: 'May 25, 2026',
    readTime: '4 min read'
  },
  {
    title: 'Catholic Families: AI for Tithing and FI Without the Stress',
    slug: 'catholic-families-ai-for-tithing-and-fi-without-the-stress',
    excerpt: 'Hey everyone, discover how AI makes tithing easier and accelerates your family\'s path to financial independence with faith at the center.',
    date: 'May 25, 2026',
    readTime: '4 min read'
  },
  {
    title: 'Catholic Moms & Dads: Use AI to Build a Debt-Free, Faith-Filled Family Legacy',
    slug: 'catholic-moms-dads-use-ai-to-build-debt-free-faith-filled-family-legacy',
    excerpt: 'Practical ways AI helps parents steward their finances while raising faith-filled kids.',
    date: 'May 24, 2026',
    readTime: '5 min read'
  }
];

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog</h1>
        <div className="space-y-8">
          {posts.map((post) => (
            <div key={post.slug} className="border-b pb-8">
              <Link to={`/blog/${post.slug}`} className="block hover:underline">
                <h2 className="text-2xl font-bold text-gray-900">{post.title}</h2>
                <p className="text-gray-600 mt-2">{post.excerpt}</p>
              </Link>
              <p className="text-sm text-gray-500 mt-4">{post.date} · {post.readTime}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
