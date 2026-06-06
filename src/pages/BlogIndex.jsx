// Full updated with new post at top
import React from 'react';

export default function BlogIndex() {
  const posts = [
    {
      title: 'Catholic Families Can Reach FI Together: AI, Prayer, and Smart Stewardship',
      date: 'June 06, 2026',
      excerpt: 'Catholic families are using AI tools and prayer to steward resources, teach kids about money, and build lasting wealth while staying true to faith. Discover practical steps for your household.',
      readTime: '4 min read',
      slug: 'catholic-families-can-reach-fi-together-ai-prayer-and-smart-stewardship',
      link: '/blog/catholic-families-can-reach-fi-together-ai-prayer-and-smart-stewardship'
    },
    // existing other posts from previous
    {
      title: 'Catholic Families: Leverage AI for Prayerful Financial Freedom and Lasting Legacy',
      date: 'June 04, 2026',
      excerpt: 'With the Pope’s new encyclical on AI, Catholic families can use smart tools alongside prayer to accelerate their path to financial independence and build a faith-filled legacy for their kids.',
      readTime: '4 min read',
      slug: 'catholic-families-leverage-ai-for-prayerful-financial-freedom-and-lasting-legacy',
      link: '/blog/catholic-families-leverage-ai-for-prayerful-financial-freedom-and-lasting-legacy'
    }
    // ... rest of existing posts
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog</h1>
        <div className="space-y-8">
          {posts.map((post, index) => (
            <div key={index} className="border-b pb-8">
              <a href={post.link} className="block hover:bg-gray-50 p-4 rounded-xl -mx-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">{post.title}</h2>
                    <p className="text-gray-600 mb-3">{post.excerpt}</p>
                  </div>
                  <div className="text-sm text-gray-500 whitespace-nowrap ml-4">
                    {post.date} · {post.readTime}
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
