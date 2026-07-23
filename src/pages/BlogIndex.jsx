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
  },
  {
    title: 'AI-Assisted Stewardship: How Catholic Families Leverage Smart Tools for FI and Faithful Living',
    date: 'June 10, 2026',
    excerpt: 'Discover practical ways Catholic families are using AI tools alongside prayer, budgeting, and stewardship to build financial independence and a lasting legacy.',
    readTime: '5 min read',
    slug: 'ai-assisted-stewardship-how-catholic-families-leverage-smart-tools-for-fi-and-faithful-living',
    link: '/blog/ai-assisted-stewardship-how-catholic-families-leverage-smart-tools-for-fi-and-faithful-living'
  },
  {
    title: 'Catholic Dads Leading Family FI with AI and Faith',
    date: 'June 12, 2026',
    excerpt: 'Faith-filled strategies for dads to lead their families toward financial independence using AI, prayer, and intentional planning.',
    readTime: '4 min read',
    slug: 'catholic-dads-leading-family-fi-with-ai-and-faith',
    link: '/blog/catholic-dads-leading-family-fi-with-ai-and-faith'
  },
  {
    title: 'Catholic Families Harness AI for Prayerful FI and Generational Legacy',
    date: 'June 08, 2026',
    excerpt: 'How Catholic households can integrate AI into prayerful financial planning to secure freedom and pass on a legacy of faith and stewardship.',
    readTime: '4 min read',
    slug: 'catholic-families-harness-ai-for-prayerful-fi-and-generational-legacy',
    link: '/blog/catholic-families-harness-ai-for-prayerful-fi-and-generational-legacy'
  },
  {
    title: 'Praying Your Way to Financial Freedom: How Christian Families Can Build Wealth, Generosity, and Peace Together',
    date: 'June 05, 2026',
    excerpt: 'A faith-centered approach to FI that combines prayer, smart tools, and family teamwork for lasting financial and spiritual freedom.',
    readTime: '5 min read',
    slug: 'praying-your-way-to-financial-freedom-how-christian-families-can-build-wealth-generosity-and-peace-together',
    link: '/blog/praying-your-way-to-financial-freedom-how-christian-families-can-build-wealth-generosity-and-peace-together'
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
