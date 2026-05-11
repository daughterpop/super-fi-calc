import React from 'react';

export default function BlogIndex() {
  const posts = [
    {
      date: 'May 11, 2026',
      title: 'Faithful Parenting on the Path to FI: Creating Margin for What Matters Most in Your Christian Home',
      excerpt: 'Raising a family while pursuing FI doesn’t have to feel overwhelming. Discover how faith and smart money habits create margin for what matters most in your Christian home.',
      readTime: '4 min read',
      slug: 'faithful-parenting-on-the-path-to-fi-creating-margin-for-what-matters-most-in-your-christian-home'
    },
    {
      date: 'May 10, 2026',
      title: 'Praying Your Way to Financial Freedom: How Christian Families Can Build Wealth, Generosity, and Peace Together',
      excerpt: 'Discover how prayer, stewardship, and smart FI habits can bring financial peace and freedom to your Christian marriage and family.',
      readTime: '4 min read',
      slug: 'praying-your-way-to-financial-freedom-how-christian-families-can-build-wealth-generosity-and-peace-together'
    },
    {
      date: 'May 9, 2026',
      title: 'Raising Generous, Grounded Kids: Faith, Family Budgeting, and the Path to Shared Financial Freedom',
      excerpt: 'Discover how integrating faith into your family budget can raise kids who are generous, wise with money, and headed toward financial freedom together.',
      readTime: '4 min read',
      slug: 'raising-generous-grounded-kids-faith-family-budgeting-and-shared-financial-freedom'
    },
    {
      date: 'May 8, 2026',
      title: "Stewarding Your Family's Future: Building Generational Wealth Through Faith and FI",
      excerpt: 'What if your financial decisions today could bless your kids and grandkids? Discover how faith-driven stewardship and FI create lasting generational impact.',
      readTime: '4 min read',
      slug: 'stewarding-your-familys-future-building-generational-wealth-through-faith-and-fi'
    },
    {
      date: 'May 8, 2026',
      title: 'Raising Faith-Filled Kids While Building Financial Freedom: Simple Stewardship That Lasts',
      excerpt: 'Raising kids while chasing FI doesn’t have to feel overwhelming. Discover how faith-based stewardship creates financial margin and lasting family values.',
      readTime: '4 min read',
      slug: 'raising-faith-filled-kids-while-building-financial-freedom'
    },
    {
      date: 'April 15, 2026',
      title: 'Why Financial Independence Is for Everyone',
      excerpt: 'Financial independence isn’t just for high earners — it’s accessible to anyone who keeps the gap between earnings and spending and invests consistently.',
      readTime: '3 min read',
      slug: 'why-fi-for-everyone'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">Super FI Blog</h1>
        <p className="text-center text-gray-600 mb-12">Insights, strategies, and tools for your journey to financial independence</p>
        
        {posts.map((post, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-sm p-8 mb-8">
            <div className="text-sm text-gray-500 mb-2">{post.date} · {post.readTime}</div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">{post.title}</h2>
            <p className="text-gray-700 mb-6">{post.excerpt}</p>
            <a href={`/blog/${post.slug}`} className="text-indigo-600 hover:text-indigo-700 font-medium">Read full post →</a>
          </div>
        ))}
      </div>
    </div>
  );
}
