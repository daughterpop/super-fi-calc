import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const allPosts = [
  {
    title: 'Catholic Families: AI for Epic Summer Road Trips, Faith, and Financial Freedom',
    date: 'July 16, 2026',
    excerpt: 'Catholic families are using AI to plan affordable, faith-filled summer road trips full of memories while staying on track for financial independence.',
    readTime: '4 min read',
    slug: 'catholic-families-ai-for-epic-summer-road-trips-faith-and-financial-freedom',
    link: '/blog/catholic-families-ai-for-epic-summer-road-trips-faith-and-financial-freedom'
  },
  {
    title: 'Catholic Families: AI for Summer Stewardship and Building Family FI Legacy',
    date: 'July 14, 2026',
    excerpt: 'Summer is perfect for Catholic families to use AI for joyful stewardship, create faith-filled memories, and accelerate their path to financial independence together.',
    readTime: '4 min read',
    slug: 'catholic-families-ai-for-summer-stewardship-and-building-family-fi-legacy',
    link: '/blog/catholic-families-ai-for-summer-stewardship-and-building-family-fi-legacy'
  },
  {
    title: 'Catholic Families: AI for Back-to-School Savings and Faith-Filled Financial Freedom',
    date: 'July 05, 2026',
    excerpt: 'As back-to-school season hits, Catholic families can use AI to save on supplies, plan wisely, and stay on the fast track to FI while teaching kids stewardship and generosity.',
    readTime: '4 min read',
    slug: 'catholic-families-ai-for-back-to-school-savings-and-faith-filled-financial-freedom',
    link: '/blog/catholic-families-ai-for-back-to-school-savings-and-faith-filled-financial-freedom'
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
    date: 'May 18, 2026',
    excerpt: 'Financial independence isn’t just for tech bros or high earners — it’s for regular families ready to build margin, faith, and freedom.',
    readTime: '4 min read',
    slug: 'why-fi-for-everyone',
    link: '/blog/why-fi-for-everyone'
  },
  {
    title: 'Catholic Dads Leading Family FI with AI and Faith',
    date: 'June 10, 2026',
    excerpt: 'Practical ways Catholic dads are using AI tools to steward family finances while leading in faith and presence for their kids.',
    readTime: '4 min read',
    slug: 'catholic-dads-leading-family-fi-with-ai-and-faith',
    link: '/blog/catholic-dads-leading-family-fi-with-ai-and-faith'
  },
  {
    title: 'Raising Faith-Filled Kids While Building Financial Freedom',
    date: 'June 12, 2026',
    excerpt: 'How to teach your children about money, faith, and stewardship for a strong generational legacy and debt-free future.',
    readTime: '4 min read',
    slug: 'raising-faith-filled-kids-while-building-financial-freedom',
    link: '/blog/raising-faith-filled-kids-while-building-financial-freedom'
  },
  {
    title: 'Catholic Families Can Reach FI Together: AI, Prayer, and Smart Stewardship',
    date: 'June 17, 2026',
    excerpt: 'How Catholic families are combining AI tools, prayer, and wise stewardship to reach financial independence together as a faith-filled team.',
    readTime: '4 min read',
    slug: 'catholic-families-can-reach-fi-together-ai-prayer-and-smart-stewardship',
    link: '/blog/catholic-families-can-reach-fi-together-ai-prayer-and-smart-stewardship'
  },
  {
    title: 'AI-Assisted Stewardship: How Catholic Families Leverage Smart Tools for FI and Faithful Living',
    date: 'June 15, 2026',
    excerpt: 'Discover practical AI prompts and tools Catholic families are using to budget, plan, and live out faithful stewardship on the path to FI.',
    readTime: '4 min read',
    slug: 'ai-assisted-stewardship-how-catholic-families-leverage-smart-tools-for-fi-and-faithful-living',
    link: '/blog/ai-assisted-stewardship-how-catholic-families-leverage-smart-tools-for-fi-and-faithful-living'
  },
  {
    title: 'Catholic Families Harness AI for Prayerful FI and Generational Legacy',
    date: 'June 16, 2026',
    excerpt: 'Learn how Catholic families are using AI alongside prayer to build lasting financial freedom and a legacy of faith for generations.',
    readTime: '4 min read',
    slug: 'catholic-families-harness-ai-for-prayerful-fi-and-generational-legacy',
    link: '/blog/catholic-families-harness-ai-for-prayerful-fi-and-generational-legacy'
  },
  {
    title: 'Catholic Moms & Dads Use AI to Build Debt-Free, Faith-Filled Family Legacy',
    date: 'June 18, 2026',
    excerpt: 'Real strategies for Catholic parents to use AI for budgeting, debt payoff, and raising kids with faith and financial wisdom.',
    readTime: '4 min read',
    slug: 'catholic-moms-dads-use-ai-to-build-debt-free-faith-filled-family-legacy',
    link: '/blog/catholic-moms-dads-use-ai-to-build-debt-free-faith-filled-family-legacy'
  },
  {
    title: 'Catholic Parents Building FI Legacy with AI and Prayer',
    date: 'June 19, 2026',
    excerpt: 'A practical guide for Catholic parents to integrate AI tools and daily prayer into their journey toward financial independence and family legacy.',
    readTime: '4 min read',
    slug: 'catholic-parents-building-fi-legacy-with-ai-and-prayer',
    link: '/blog/catholic-parents-building-fi-legacy-with-ai-and-prayer'
  },
  {
    title: 'Faithful Parenting on the Path to FI: Creating Margin for What Matters Most in Your Christian Home',
    date: 'June 20, 2026',
    excerpt: 'How faithful parenting and FI work together to create margin for faith, family time, and raising kids with strong values.',
    readTime: '4 min read',
    slug: 'faithful-parenting-on-the-path-to-fi-creating-margin-for-what-matters-most-in-your-christian-home',
    link: '/blog/faithful-parenting-on-the-path-to-fi-creating-margin-for-what-matters-most-in-your-christian-home'
  },
  {
    title: 'How Christian Couples Unlock Financial Freedom Together: Faith, Teamwork, and a Legacy Your Family Will Thank You For',
    date: 'June 21, 2026',
    excerpt: 'Christian couples sharing practical steps to build FI as a team, rooted in faith, communication, and shared vision for their family\'s future.',
    readTime: '4 min read',
    slug: 'how-christian-couples-unlock-financial-freedom-together-faith-teamwork-and-a-legacy-your-family-will-thank-you-for',
    link: '/blog/how-christian-couples-unlock-financial-freedom-together-faith-teamwork-and-a-legacy-your-family-will-thank-you-for'
  },
  {
    title: 'Praying Your Way to Financial Freedom: How Christian Families Can Build Wealth, Generosity, and Peace Together',
    date: 'June 22, 2026',
    excerpt: 'A faith-first approach to FI: how prayer, generosity, and smart planning help Christian families build wealth and peace.',
    readTime: '4 min read',
    slug: 'praying-your-way-to-financial-freedom-how-christian-families-can-build-wealth-generosity-and-peace-together',
    link: '/blog/praying-your-way-to-financial-freedom-how-christian-families-can-build-wealth-generosity-and-peace-together'
  }
];

export default function BlogIndex() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = allPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (post.excerpt && post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <h1 className="text-4xl font-bold text-gray-900">Blog</h1>
        <input
          type="text"
          placeholder="Search posts by title or topic..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-96 px-5 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-emerald-500 focus:ring-1 text-base"
        />
      </div>

      {filteredPosts.length > 0 ? (
        <div className="space-y-8">
          {filteredPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-md transition-shadow">
              <div className="flex justify-between text-sm text-gray-500 mb-3">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-2xl font-semibold mb-3">
                <Link to={post.link} className="hover:text-emerald-600 transition-colors">{post.title}</Link>
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
              <Link to={post.link} className="text-emerald-600 font-medium hover:underline flex items-center gap-1">Read more →</Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-2xl p-8">
          <p className="text-xl text-gray-500">No matching posts found for "{searchTerm}".</p>
          <button 
            onClick={() => setSearchTerm('')}
            className="mt-6 px-6 py-2 text-emerald-600 hover:bg-emerald-50 rounded-xl font-medium"
          >
            Clear search and show all
          </button>
        </div>
      )}
    </div>
  );
}
