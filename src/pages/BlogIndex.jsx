import React from 'react';
import { Link } from 'react-router-dom';

const posts = [
  {
    title: 'Catholic Families: Leverage AI for Prayerful Financial Freedom and Lasting Legacy',
    date: 'June 04, 2026',
    excerpt: 'With the Pope’s new encyclical on AI, Catholic families can use smart tools alongside prayer to accelerate their path to financial independence and build a faith-filled legacy for their kids.',
    readTime: '4 min read',
    link: '/blog/catholic-families-leverage-ai-for-prayerful-financial-freedom-and-lasting-legacy'
  },
  {
    title: 'AI-Assisted Stewardship: How Catholic Families Can Reach FI Faster',
    date: 'June 02, 2026',
    excerpt: 'AI is everywhere — and Catholic families can use it as a powerful tool for stewardship on the path to financial independence without replacing faith or hard work.',
    readTime: '5 min read',
    link: '/blog/ai-assisted-stewardship-how-catholic-families-leverage-smart-tools-for-fi-and-faithful-living'
  },
  {
    title: 'Praying Your Way to Financial Freedom',
    date: 'May 28, 2026',
    excerpt: 'What if your faith could be the foundation for both financial peace and freedom? Combining biblical stewardship with smart FI principles can transform your household.',
    readTime: '4 min read',
    link: '/blog/praying-your-way-to-financial-freedom-how-christian-families-can-build-wealth-generosity-and-peace-together'
  },
  {
    title: 'Raising Faith-Filled Kids While Building Financial Freedom',
    date: 'May 25, 2026',
    excerpt: 'Raising kids while chasing FI can feel like juggling fireballs. Here’s how faith and family finances work on the same team through simple stewardship.',
    readTime: '4 min read',
    link: '/blog/raising-faith-filled-kids-while-building-financial-freedom'
  },
  {
    title: 'Raising Generous, Grounded Kids: Faith, Family Budgeting & Shared Financial Freedom',
    date: 'May 22, 2026',
    excerpt: 'Teach kids generosity early, model contentment, and build a household culture where money serves the mission instead of the other way around.',
    readTime: '3 min read',
    link: '/blog/raising-generous-grounded-kids-faith-family-budgeting-and-shared-financial-freedom'
  },
  {
    title: 'Stewarding Your Family’s Future: Building Generational Wealth Through Faith and FI',
    date: 'May 20, 2026',
    excerpt: 'Financial independence isn’t just about early retirement — it’s about creating a lasting legacy of faith, generosity, and wise stewardship for the next generation.',
    readTime: '4 min read',
    link: '/blog/stewarding-your-familys-future-building-generational-wealth-through-faith-and-fi'
  },
  {
    title: 'Faithful Parenting on the Path to FI',
    date: 'May 18, 2026',
    excerpt: 'Creating margin for what matters most in your Christian home — more time, less stress, and the freedom to live your values out loud.',
    readTime: '4 min read',
    link: '/blog/faithful-parenting-on-the-path-to-fi-creating-margin-for-what-matters-most-in-your-christian-home'
  },
  {
    title: 'How Christian Couples Unlock Financial Freedom Together',
    date: 'May 15, 2026',
    excerpt: 'Faith, teamwork, and a legacy your family will thank you for. How couples can align money goals with shared mission.',
    readTime: '4 min read',
    link: '/blog/how-christian-couples-unlock-financial-freedom-together-faith-teamwork-and-a-legacy-your-family-will-thank-you-for'
  },
  {
    title: 'Why Financial Independence Is for Everyone',
    date: 'May 18, 2026',
    excerpt: 'Financial independence isn’t just for tech bros, doctors, or high earners. It’s for regular people ready to run the numbers and take consistent action.',
    readTime: '4 min read',
    link: '/blog/why-fi-for-everyone'
  },
  {
    title: 'Catholic Dads Leading Family FI with AI and Faith',
    date: 'June 01, 2026',
    excerpt: 'Practical ways Catholic fathers can lead their households toward financial independence while staying rooted in faith and family.',
    readTime: '3 min read',
    link: '/blog/catholic-dads-leading-family-fi-with-ai-and-faith'
  },
  {
    title: 'Catholic Moms & Dads: Use AI to Build a Debt-Free, Faith-Filled Family Legacy',
    date: 'May 30, 2026',
    excerpt: 'How parents can combine smart tools with prayerful stewardship to eliminate debt and build lasting wealth for the next generation.',
    readTime: '4 min read',
    link: '/blog/catholic-moms-dads-use-ai-to-build-debt-free-faith-filled-family-legacy'
  },
  {
    title: 'Catholic Parents Building FI Legacy with AI and Prayer',
    date: 'May 27, 2026',
    excerpt: 'A practical guide for Catholic parents who want to reach financial independence without sacrificing faith formation at home.',
    readTime: '4 min read',
    link: '/blog/catholic-parents-building-fi-legacy-with-ai-and-prayer'
  },
  {
    title: 'Catholic Families Harness AI for Prayerful FI and Generational Legacy',
    date: 'May 24, 2026',
    excerpt: 'Smart tools + prayerful planning = faster progress toward financial independence and a stronger family legacy.',
    readTime: '3 min read',
    link: '/blog/catholic-families-harness-ai-for-prayerful-fi-and-generational-legacy'
  },
  {
    title: 'Catholic Families Unlocking FI Faster with AI and Prayerful Planning',
    date: 'May 21, 2026',
    excerpt: 'How intentional use of AI alongside prayer can accelerate your family’s path to financial freedom.',
    readTime: '4 min read',
    link: '/blog/catholic-families-unlocking-fi-faster-with-ai-and-prayerful-planning'
  },
  {
    title: 'Catholic Families Can Reach FI Together: AI, Prayer & Smart Stewardship',
    date: 'May 19, 2026',
    excerpt: 'You don’t have to choose between faith and finances. Here’s how to pursue both with clarity and purpose.',
    readTime: '4 min read',
    link: '/blog/catholic-families-can-reach-fi-together-ai-prayer-and-smart-stewardship'
  },
  {
    title: 'Building Generational Wealth with AI, Prayer, and FI Stewardship',
    date: 'May 16, 2026',
    excerpt: 'A framework for Catholic families who want wealth that lasts — and serves a higher purpose.',
    readTime: '3 min read',
    link: '/blog/catholic-families-building-generational-wealth-with-ai-prayer-and-fi-stewardship'
  },
  {
    title: 'AI-Powered Family Budgeting for Catholic FI',
    date: 'May 14, 2026',
    excerpt: 'Use AI to build budgets that include tithing, education, and generosity goals while still moving toward financial independence.',
    readTime: '3 min read',
    link: '/blog/ai-powered-family-budgeting-for-catholic-fi'
  },
  {
    title: 'Tithe More, Stress Less, Reach FI Faster',
    date: 'May 12, 2026',
    excerpt: 'How Catholic families can give more generously while still accelerating their path to financial independence.',
    readTime: '3 min read',
    link: '/blog/ai-for-catholic-families-tithe-more-stress-less-reach-fi-faster'
  },
  {
    title: 'Make Tithing Easy: AI Tools for Catholic Families Chasing FI',
    date: 'May 10, 2026',
    excerpt: 'Practical AI workflows that make consistent, joyful tithing easier while you build wealth.',
    readTime: '3 min read',
    link: '/blog/make-tithing-easy-ai-tools-for-catholic-families-chasing-fi'
  },
  {
    title: 'Tithe More, Retire Earlier: AI for Catholic Family FI',
    date: 'May 08, 2026',
    excerpt: 'A counterintuitive truth: generous giving and earlier financial independence can grow together.',
    readTime: '3 min read',
    link: '/blog/tithe-more-retire-earlier-ai-for-catholic-family-fi'
  },
  {
    title: 'AI Stewardship: Catholic Families Tithing Boldly Toward FI',
    date: 'May 06, 2026',
    excerpt: 'How to use modern tools to support bold, consistent giving without derailing your FI timeline.',
    readTime: '3 min read',
    link: '/blog/ai-stewardship-catholic-families-tithing-boldly-fi'
  },
  {
    title: 'Catholic Families: AI for Tithing and FI Without the Stress',
    date: 'May 04, 2026',
    excerpt: 'Reduce money stress, increase generosity, and stay on track for financial independence.',
    readTime: '3 min read',
    link: '/blog/catholic-families-ai-for-tithing-and-fi-without-the-stress'
  },
  {
    title: 'Catholic Families AI Budgeting: Tithing, Faster FI, Without Burnout',
    date: 'May 02, 2026',
    excerpt: 'Budget systems that protect your peace, honor your giving, and still move the FI needle.',
    readTime: '3 min read',
    link: '/blog/catholic-families-ai-budgeting-tithing-faster-fi-without-burnout'
  },
  {
    title: 'How AI Helps Catholic Parents Build FI and Raise Generous Kids',
    date: 'April 30, 2026',
    excerpt: 'Practical ways AI can free up time and money so you can focus on forming generous, grounded children.',
    readTime: '3 min read',
    link: '/blog/how-ai-helps-catholic-parents-build-fi-and-raise-generous-kids'
  },
  {
    title: 'How AI Helps Catholic Parents Raise FI-Smart, Faith-Filled Kids',
    date: 'April 28, 2026',
    excerpt: 'Teach kids about money, faith, and stewardship with a little help from modern tools.',
    readTime: '3 min read',
    link: '/blog/how-ai-helps-catholic-parents-raise-fi-smart-faith-filled-kids'
  },
  {
    title: 'How Catholic Couples Use AI to Build FI and Stronger Marriages',
    date: 'April 26, 2026',
    excerpt: 'Money conversations that strengthen your marriage instead of stressing it — with a little AI assistance.',
    readTime: '3 min read',
    link: '/blog/how-catholic-couples-use-ai-to-build-fi-and-stronger-marriages'
  },
  {
    title: 'Strengthen Your Catholic Marriage with AI for Family FI and Deeper Faith',
    date: 'April 24, 2026',
    excerpt: 'Align money goals, reduce conflict, and grow closer to each other and to God on the path to FI.',
    readTime: '4 min read',
    link: '/blog/strengthen-your-catholic-marriage-with-ai-for-family-fi-and-deeper-faith'
  },
  {
    title: 'Catholic Parents: AI Tools for Debt-Free Family Life and FI',
    date: 'April 22, 2026',
    excerpt: 'Concrete AI-assisted strategies for eliminating debt while staying focused on faith and family.',
    readTime: '3 min read',
    link: '/blog/catholic-parents-ai-tools-for-debt-free-family-life-and-fi'
  },
  {
    title: 'Catholic Families Using AI for Sabbath Rest and FI Stewardship',
    date: 'April 20, 2026',
    excerpt: 'Protect your Sabbath, reduce busyness, and still make steady progress toward financial independence.',
    readTime: '3 min read',
    link: '/blog/catholic-families-using-ai-for-sabbath-rest-and-fi-stewardship'
  },
  {
    title: 'Catholic Families: AI for Summer Stewardship and Building Family FI Legacy',
    date: 'April 18, 2026',
    excerpt: 'Use the slower summer season intentionally — for rest, family connection, and quiet progress on FI goals.',
    readTime: '3 min read',
    link: '/blog/catholic-families-ai-for-summer-stewardship-and-building-family-fi-legacy'
  },
  {
    title: 'Catholic Families: AI-Powered Summer Planning for Faith, Fun, and Faster FI',
    date: 'April 16, 2026',
    excerpt: 'Plan a summer that refreshes the family and still keeps your financial independence goals on track.',
    readTime: '3 min read',
    link: '/blog/catholic-families-ai-powered-summer-planning-for-faith-fun-and-faster-fi'
  },
  {
    title: 'Catholic Families: AI for Epic Summer Road Trips, Faith, and Financial Freedom',
    date: 'April 14, 2026',
    excerpt: 'Travel memories that don’t wreck the budget — and still leave room for long-term FI progress.',
    readTime: '4 min read',
    link: '/blog/catholic-families-ai-for-epic-summer-road-trips-faith-and-financial-freedom'
  },
  {
    title: 'Catholic Families: AI Summer Road Trips, Faith, and FI',
    date: 'April 12, 2026',
    excerpt: 'Road-trip planning that protects both your wallet and your family’s spiritual rhythm.',
    readTime: '3 min read',
    link: '/blog/catholic-families-ai-summer-road-trips-faith-and-fi'
  },
  {
    title: 'Catholic Families: AI Summer Stewardship — Faith, Fun, and FI',
    date: 'April 10, 2026',
    excerpt: 'A simple summer rhythm of faith, fun, and faithful money habits.',
    readTime: '3 min read',
    link: '/blog/catholic-families-ai-summer-stewardship-faith-fun-and-fi'
  },
  {
    title: 'Catholic Families: AI for Back-to-School Savings and Faith-Filled Financial Freedom',
    date: 'April 08, 2026',
    excerpt: 'Navigate back-to-school costs without derailing your FI plan or your family values.',
    readTime: '3 min read',
    link: '/blog/catholic-families-ai-for-back-to-school-savings-and-faith-filled-financial-freedom'
  },
  {
    title: 'Catholic Families: AI Holy Back-to-School Stewardship',
    date: 'April 06, 2026',
    excerpt: 'Faith, family, and FI through the back-to-school season — practical and prayerful.',
    readTime: '3 min read',
    link: '/blog/catholic-families-ai-holy-back-to-school-stewardship-faith-family-and-fi'
  },
  {
    title: 'Catholic Families: AI Family Prayer Routines and FI Stewardship 2026',
    date: 'April 04, 2026',
    excerpt: 'Build simple family prayer habits that also reinforce wise stewardship and long-term FI goals.',
    readTime: '2 min read',
    link: '/blog/catholic-families-ai-family-prayer-routines-and-fi-stewardship-2026'
  }
];

export default function BlogIndex() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-10">
        <Link to="/" className="text-emerald-600 hover:text-emerald-700 font-medium text-sm">← Back to Calculator</Link>
      </div>
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      <p className="text-gray-600 mb-10 text-lg">Faith-filled insights on financial independence, family stewardship, and building generational legacy.</p>
      <div className="space-y-6">
        {posts.map((post, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-sm p-6 md:p-8 hover:shadow-md transition-shadow border border-gray-100">
            <div className="flex justify-between text-sm text-gray-500 mb-3">
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
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
