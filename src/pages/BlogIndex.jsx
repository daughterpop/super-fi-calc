import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, TrendingUp } from 'lucide-react';

export default function BlogIndex() {
  useEffect(() => {
    document.title = 'Blog | Super FI - Financial Independence Insights & Tips';
  }, []);

  const posts = [
    {
      slug: 'raising-faith-filled-kids-while-building-financial-freedom',
      title: 'Raising Faith-Filled Kids While Building Financial Freedom: Simple Stewardship That Lasts',
      date: 'May 8, 2026',
      excerpt: 'Raising kids while chasing FI doesn’t have to feel overwhelming. Discover how faith-based stewardship creates financial margin and lasting family values.',
      readTime: '4 min',
    },
    {
      slug: 'why-fi-for-everyone',
      title: 'Why Financial Independence Is for Everyone',
      date: 'May 7, 2026',
      excerpt: 'Financial independence isn’t just for high earners — it’s accessible to anyone who keeps the gap between earnings and spending and invests consistently.',
      readTime: '4 min',
    },
    {
      slug: 'first-post',
      title: 'First Post',
      date: 'April 15, 2026',
      excerpt: 'Welcome to the Super FI blog — tools, insights, and real talk on achieving financial freedom.',
      readTime: '3 min',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Super FI Blog</h1>
          <p className="text-xl text-gray-600">Insights, strategies, and tools for your journey to financial independence</p>
        </div>

        <div className="space-y-8">
          {posts.map((post) => (
            <div key={post.slug} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all group">
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span>{post.readTime} read</span>
                </div>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {post.excerpt}
              </p>
              <Link
                to={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
              >
                Read full post <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* Robinhood Ad on Blog Index */}
        <div className="mt-16 bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 shadow-sm border border-green-100">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center">
              <TrendingUp className="text-white" size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to invest toward FI?</h3>
              <p className="text-gray-700 mb-6">Open a Robinhood account through my link and get free stocks (up to $200) to start buying index funds today.</p>
              <a
                href="https://join.robinhood.com/dustinh-1bff5a"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white font-semibold rounded-2xl hover:bg-green-700 transition-all"
              >
                Get Free Stocks on Robinhood →
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link to="/" className="text-indigo-600 hover:text-indigo-700 font-medium">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
