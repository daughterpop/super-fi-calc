import React from 'react';

export default function BlogIndex() {
  const posts = [
    {
      date: 'May 19, 2026',
      title: 'Catholic Families: Using AI to Protect Sabbath Rest on the Path to FI',
      excerpt: 'AI tools can automate the grind so Catholic families protect true Sabbath rest, prayer time, and build financial independence without burnout. Practical tips for faith-first living.',
      readTime: '4 min read',
      slug: 'catholic-families-using-ai-for-sabbath-rest-and-fi-stewardship'
    },
    {
      date: 'May 18, 2026',
      title: 'Catholic Families: Harness AI for Prayerful FI and Generational Legacy',
      excerpt: 'Catholic families can use AI tools alongside prayer and stewardship to build financial independence and a lasting faith-filled legacy for their children. Practical, encouraging steps for real households.',
      readTime: '4 min read',
      slug: 'catholic-families-harness-ai-for-prayerful-fi-and-generational-legacy'
    },
    {
      date: 'May 17, 2026',
      title: 'Catholic Parents: Build Your FI Legacy with AI Tools and Daily Prayer',
      excerpt: 'Catholic parents can combine AI tools with prayer and stewardship for faster progress toward financial independence and a strong faith-filled family life. Simple, practical steps that work for real families.',
      readTime: '4 min read',
      slug: 'catholic-parents-building-fi-legacy-with-ai-and-prayer'
    },
    {
      date: 'May 16, 2026',
      title: 'Catholic Moms & Dads: Use AI to Build a Debt-Free, Faith-Filled Family Legacy',
      excerpt: 'Catholic parents can leverage AI for smarter stewardship, faster FI, and stronger family faith life. Practical tips for budgeting, teaching kids, and building legacy without gatekeeping.',
      readTime: '4 min read',
      slug: 'catholic-moms-dads-use-ai-to-build-debt-free-faith-filled-family-legacy'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Super FI Blog</h1>
          <p className="text-xl text-gray-600 max-w-md mx-auto">Insights, strategies, and tools for your journey to financial independence — with faith and family at the center.</p>
        </div>
        <div className="space-y-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span>{post.date}</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium">{post.readTime}</span>
              </div>
              <a 
                href={`/blog/${post.slug}`} 
                className="block group"
              >
                <h2 className="text-2xl font-semibold text-gray-900 group-hover:text-indigo-700 transition-colors mb-3 leading-tight">
                  {post.title}
                </h2>
              </a>
              <p className="text-gray-700 leading-relaxed mb-6 text-base">
                {post.excerpt}
              </p>
              <a 
                href={`/blog/${post.slug}`} 
                className="inline-flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
              >
                Read full post →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
