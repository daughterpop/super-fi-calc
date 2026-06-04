import React from 'react';

export default function BlogIndex() {
  const posts = [
    {
      title: "Catholic Families: Leverage AI for Prayerful Financial Freedom and Lasting Legacy",
      date: "June 04, 2026",
      excerpt: "With the Pope’s new encyclical on AI, Catholic families can use smart tools alongside prayer to accelerate their path to financial independence and build a faith-filled legacy for their kids.",
      readTime: "4 min read",
      slug: "catholic-families-leverage-ai-for-prayerful-financial-freedom-and-lasting-legacy"
    }
    // Original posts follow below this new one
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-4">Super FI Blog</h1>
        <p className="text-center text-gray-600 mb-12">Practical financial independence for families</p>
        
        <div className="grid gap-8">
          {posts.map((post, index) => (
            <a key={index} href={`/blog/${post.slug}`} className="block bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <div className="flex justify-between text-sm text-gray-500 mb-3">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">{post.title}</h2>
              <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
