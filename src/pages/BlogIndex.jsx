import React from 'react';

export default function BlogIndex() {
  const posts = [
    {
      title: 'Catholic Families Unlocking FI Faster with AI and Prayerful Planning',
      date: 'June 12, 2026',
      excerpt: 'With Pope Leo XIV’s encyclical on AI guiding us, Catholic families are blending faith, prayer, and smart AI tools to accelerate financial independence and raise generous kids. Practical steps for your home.',
      readTime: '4 min read',
      slug: 'catholic-families-unlocking-fi-faster-with-ai-and-prayerful-planning',
      link: '/blog/catholic-families-unlocking-fi-faster-with-ai-and-prayerful-planning'
    },
    {
      title: 'Catholic Families Can Reach FI Together: AI, Prayer, and Smart Stewardship',
      date: 'June 06, 2026',
      excerpt: 'Catholic families are using AI tools and prayer to steward resources, teach kids about money, and build lasting wealth while staying true to faith. Discover practical steps for your household.',
      readTime: '4 min read',
      slug: 'catholic-families-can-reach-fi-together-ai-prayer-and-smart-stewardship',
      link: '/blog/catholic-families-can-reach-fi-together-ai-prayer-and-smart-stewardship'
    },
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
      date: 'May 30, 2026',
      excerpt: 'Financial independence isn’t just for tech bros...',
      readTime: '4 min read',
      slug: 'why-fi-for-everyone',
      link: '/blog/why-fi-for-everyone'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <div className="space-y-8">
          {posts.map((post, index) => (
            <div key={index} className="border-b pb-8">
              <h2 className="text-2xl font-semibold">
                <a href={post.link} className="hover:text-indigo-600">{post.title}</a>
              </h2>
              <p className="text-gray-600 mt-2">{post.date} · {post.readTime}</p>
              <p className="mt-3 text-gray-700">{post.excerpt}</p>
              <a href={post.link} className="text-indigo-600 hover:underline mt-4 inline-block">Read more →</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
