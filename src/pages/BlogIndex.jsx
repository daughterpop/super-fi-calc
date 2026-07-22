import React from 'react';
import { Link } from 'react-router-dom';

const posts = [
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
    excerpt: 'Financial independence isn’t just for tech bros, doctors, or high earners. It’s for regular people ready to run the numbers and take consistent action.',
    readTime: '4 min read',
    slug: 'why-fi-for-everyone',
    link: '/blog/why-fi-for-everyone'
  }
];

export default function BlogIndex() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <p className="text-gray-600 mb-10 text-lg">Faith-filled insights on financial independence, family stewardship, and building generational legacy.</p>
      <div className="space-y-8">
        {posts.map((post, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-md transition-shadow border border-gray-100">
            <div className="flex justify-between text-sm text-gray-500 mb-3">
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
            <h2 className="text-2xl font-semibold mb-3">
              <Link to={post.link} className="hover:text-emerald-600 transition-colors">{post.title}</Link>
            </h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <Link to={post.link} className="text-emerald-600 font-medium hover:underline">Read more →</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
