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
      excerpt: 'Financial independence isn’t just for tech bros or high earners. It’s for regular families, parents, and anyone willing to steward what they have with discipline and faith.',
      readTime: '4 min read',
      slug: 'why-fi-for-everyone',
      link: '/blog/why-fi-for-everyone'
    },
    {
      title: 'Raising Faith-Filled Kids While Building Financial Freedom: Simple Stewardship That Lasts',
      date: 'June 01, 2026',
      excerpt: 'Raising kids while chasing FI can feel overwhelming, but faith and finances work together. Learn practical stewardship, generosity jars, and prayerful money decisions for your family.',
      readTime: '4 min read',
      slug: 'raising-faith-filled-kids-while-building-financial-freedom',
      link: '/blog/raising-faith-filled-kids-while-building-financial-freedom'
    },
    {
      title: 'AI-Assisted Stewardship: How Catholic Families Can Reach FI Faster',
      date: 'June 07, 2026',
      excerpt: 'AI is everywhere — and Catholic families can use it as a powerful tool for stewardship on the path to financial independence without sacrificing faith or family time.',
      readTime: '4 min read',
      slug: 'ai-assisted-stewardship-how-catholic-families-leverage-smart-tools-for-fi-and-faithful-living',
      link: '/blog/ai-assisted-stewardship-how-catholic-families-leverage-smart-tools-for-fi-and-faithful-living'
    },
    {
      title: 'Catholic Dads Leading Family FI with AI and Faith',
      date: 'June 08, 2026',
      excerpt: 'Recent buzz around Catholic AI tools has dads thinking bigger about stewardship. Use smart AI to lead your family toward FI without missing bedtime prayers or family time.',
      readTime: '4 min read',
      slug: 'catholic-dads-leading-family-fi-with-ai-and-faith',
      link: '/blog/catholic-dads-leading-family-fi-with-ai-and-faith'
    },
    {
      title: 'Catholic Families Harness AI for Prayerful FI and Generational Legacy',
      date: 'June 09, 2026',
      excerpt: 'Catholic families can harness AI alongside prayer to accelerate financial independence and build a lasting, faith-filled legacy for their children and the Church.',
      readTime: '4 min read',
      slug: 'catholic-families-harness-ai-for-prayerful-fi-and-generational-legacy',
      link: '/blog/catholic-families-harness-ai-for-prayerful-fi-and-generational-legacy'
    },
    {
      title: 'Catholic Moms & Dads: Use AI to Build Debt-Free, Faith-Filled Family Legacy',
      date: 'June 10, 2026',
      excerpt: 'Practical ways Catholic parents are using AI tools to pay off debt, teach kids about money and faith, and build generational wealth rooted in stewardship and generosity.',
      readTime: '4 min read',
      slug: 'catholic-moms-dads-use-ai-to-build-debt-free-faith-filled-family-legacy',
      link: '/blog/catholic-moms-dads-use-ai-to-build-debt-free-faith-filled-family-legacy'
    },
    {
      title: 'Catholic Parents Building FI Legacy with AI and Prayer',
      date: 'June 11, 2026',
      excerpt: 'How Catholic parents are combining AI-powered planning, prayerful discernment, and smart investing to create financial freedom and a faith legacy for their kids.',
      readTime: '4 min read',
      slug: 'catholic-parents-building-fi-legacy-with-ai-and-prayer',
      link: '/blog/catholic-parents-building-fi-legacy-with-ai-and-prayer'
    },
    {
      title: 'Faithful Parenting on the Path to FI: Creating Margin for What Matters Most',
      date: 'June 12, 2026',
      excerpt: 'In your Christian home, FI isn’t about more stuff — it’s about creating margin for faith, family, and generosity. Practical steps to align your finances with your vocation.',
      readTime: '4 min read',
      slug: 'faithful-parenting-on-the-path-to-fi-creating-margin-for-what-matters-most-in-your-christian-home',
      link: '/blog/faithful-parenting-on-the-path-to-fi-creating-margin-for-what-matters-most-in-your-christian-home'
    },
    {
      title: 'How Christian Couples Unlock Financial Freedom Together: Faith, Teamwork, and Legacy',
      date: 'June 13, 2026',
      excerpt: 'Christian couples can build wealth as a team through shared faith, smart planning, and AI-assisted tools while keeping marriage and family first.',
      readTime: '4 min read',
      slug: 'how-christian-couples-unlock-financial-freedom-together-faith-teamwork-and-a-legacy-your-family-will-thank-you-for',
      link: '/blog/how-christian-couples-unlock-financial-freedom-together-faith-teamwork-and-a-legacy-your-family-will-thank-you-for'
    },
    {
      title: 'Praying Your Way to Financial Freedom: How Christian Families Can Build Wealth, Generosity, and Peace',
      date: 'June 14, 2026',
      excerpt: 'Prayer and finances go hand in hand. Discover how Christian families are using faith-filled planning, AI tools, and consistent action to reach FI and live generously.',
      readTime: '4 min read',
      slug: 'praying-your-way-to-financial-freedom-how-christian-families-can-build-wealth-generosity-and-peace-together',
      link: '/blog/praying-your-way-to-financial-freedom-how-christian-families-can-build-wealth-generosity-and-peace-together'
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
