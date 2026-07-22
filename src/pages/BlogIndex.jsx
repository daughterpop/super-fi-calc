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
    title: 'AI-Assisted Stewardship: How Catholic Families Leverage Smart Tools for FI and Faithful Living',
    date: 'May 2026',
    excerpt: 'Practical ways to combine AI tools with prayer and family values to accelerate your path to financial independence.',
    readTime: '5 min read',
    slug: 'ai-assisted-stewardship-how-catholic-families-leverage-smart-tools-for-fi-and-faithful-living',
    link: '/blog/ai-assisted-stewardship-how-catholic-families-leverage-smart-tools-for-fi-and-faithful-living'
  },
  {
    title: 'Catholic Dads Leading Family FI with AI and Faith',
    date: 'May 2026',
    excerpt: 'How fathers can lead their households toward financial freedom while modeling faithful stewardship.',
    readTime: '4 min read',
    slug: 'catholic-dads-leading-family-fi-with-ai-and-faith',
    link: '/blog/catholic-dads-leading-family-fi-with-ai-and-faith'
  },
  {
    title: 'Catholic Families Harness AI for Prayerful FI and Generational Legacy',
    date: 'May 2026',
    excerpt: 'Building lasting family wealth that serves faith, education, and the next generation.',
    readTime: '4 min read',
    slug: 'catholic-families-harness-ai-for-prayerful-fi-and-generational-legacy',
    link: '/blog/catholic-families-harness-ai-for-prayerful-fi-and-generational-legacy'
  },
  {
    title: 'Catholic Moms & Dads Use AI to Build Debt-Free Faith-Filled Family Legacy',
    date: 'May 2026',
    excerpt: 'Practical AI-assisted strategies for couples to eliminate debt and create margin for family and faith.',
    readTime: '4 min read',
    slug: 'catholic-moms-dads-use-ai-to-build-debt-free-faith-filled-family-legacy',
    link: '/blog/catholic-moms-dads-use-ai-to-build-debt-free-faith-filled-family-legacy'
  },
  {
    title: 'Catholic Parents Building FI Legacy with AI and Prayer',
    date: 'May 2026',
    excerpt: 'Integrating prayer, wise planning, and modern tools to leave a lasting inheritance of faith and freedom.',
    readTime: '4 min read',
    slug: 'catholic-parents-building-fi-legacy-with-ai-and-prayer',
    link: '/blog/catholic-parents-building-fi-legacy-with-ai-and-prayer'
  },
  {
    title: 'Faithful Parenting on the Path to FI: Creating Margin for What Matters Most',
    date: 'May 2026',
    excerpt: 'How financial independence creates space for intentional parenting and spiritual growth in the home.',
    readTime: '4 min read',
    slug: 'faithful-parenting-on-the-path-to-fi-creating-margin-for-what-matters-most-in-your-christian-home',
    link: '/blog/faithful-parenting-on-the-path-to-fi-creating-margin-for-what-matters-most-in-your-christian-home'
  },
  {
    title: 'How Christian Couples Unlock Financial Freedom Together',
    date: 'May 2026',
    excerpt: 'Faith, teamwork, and a shared legacy your family will thank you for.',
    readTime: '4 min read',
    slug: 'how-christian-couples-unlock-financial-freedom-together-faith-teamwork-and-a-legacy-your-family-will-thank-you-for',
    link: '/blog/how-christian-couples-unlock-financial-freedom-together-faith-teamwork-and-a-legacy-your-family-will-thank-you-for'
  },
  {
    title: 'Praying Your Way to Financial Freedom',
    date: 'May 2026',
    excerpt: 'How Christian families can build wealth, generosity, and peace together through prayerful stewardship.',
    readTime: '4 min read',
    slug: 'praying-your-way-to-financial-freedom-how-christian-families-can-build-wealth-generosity-and-peace-together',
    link: '/blog/praying-your-way-to-financial-freedom-how-christian-families-can-build-wealth-generosity-and-peace-together'
  },
  {
    title: 'Raising Faith-Filled Kids While Building Financial Freedom',
    date: 'May 2026',
    excerpt: 'Teaching children stewardship, generosity, and wise money habits alongside your own FI journey.',
    readTime: '4 min read',
    slug: 'raising-faith-filled-kids-while-building-financial-freedom',
    link: '/blog/raising-faith-filled-kids-while-building-financial-freedom'
  },
  {
    title: 'Raising Generous, Grounded Kids: Faith, Family, Budgeting & Shared Freedom',
    date: 'May 2026',
    excerpt: 'Practical ways to raise children who value both generosity and financial wisdom.',
    readTime: '3 min read',
    slug: 'raising-generous-grounded-kids-faith-family-budgeting-and-shared-financial-freedom',
    link: '/blog/raising-generous-grounded-kids-faith-family-budgeting-and-shared-financial-freedom'
  },
  {
    title: "Stewarding Your Family's Future: Building Generational Wealth Through Faith and FI",
    date: 'May 2026',
    excerpt: 'Long-term strategies for leaving a legacy of both financial security and living faith.',
    readTime: '4 min read',
    slug: 'stewarding-your-familys-future-building-generational-wealth-through-faith-and-fi',
    link: '/blog/stewarding-your-familys-future-building-generational-wealth-through-faith-and-fi'
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
