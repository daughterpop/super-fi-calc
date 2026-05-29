import React from 'react';
import { Link } from 'react-router-dom';

const posts = [
  {
    title: 'Catholic Families: AI for Raising Debt-Free Kids and Reaching FI Together',
    slug: 'catholic-families-ai-for-raising-debt-free-kids-and-reaching-fi-together',
    excerpt: 'Hey everyone, AI makes it easier for Catholic families to raise debt-free kids while building financial independence together with faith as the foundation.',
    date: 'May 29, 2026',
    readTime: '4 min read'
  },
  {
    title: 'How AI Helps Catholic Parents Raise FI-Smart, Faith-Filled Kids',
    slug: 'how-ai-helps-catholic-parents-raise-fi-smart-faith-filled-kids',
    excerpt: 'Hey everyone, discover how AI helps Catholic parents teach kids stewardship while building family financial independence with faith at the center.',
    date: 'May 26, 2026',
    readTime: '4 min read'
  },
  {
    title: 'AI Stewardship for Catholic Families: Tithing Boldly While Building FI',
    slug: 'ai-stewardship-catholic-families-tithing-boldly-fi',
    excerpt: 'Hey everyone, discover how AI helps Catholic families tithe boldly, steward money wisely, and reach financial independence with faith at the center.',
    date: 'May 25, 2026',
    readTime: '4 min read'
  },
  {
    title: 'Make Tithing Easy: AI Tools for Catholic Families Chasing FI',
    slug: 'make-tithing-easy-ai-tools-for-catholic-families-chasing-fi',
    excerpt: 'Hey everyone, discover how AI makes tithing simple and accelerates your family\'s journey to financial independence while staying rooted in faith.',
    date: 'May 25, 2026',
    readTime: '4 min read'
  },
  {
    title: 'Tithe More, Retire Earlier: AI for Catholic Family FI',
    slug: 'tithe-more-retire-earlier-ai-for-catholic-family-fi',
    excerpt: 'Hey everyone, discover how AI helps Catholic families tithe more generously, reduce financial stress, and reach FI faster while staying true to faith and family values.',
    date: 'May 25, 2026',
    readTime: '4 min read'
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
