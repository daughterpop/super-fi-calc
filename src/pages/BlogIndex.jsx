import React from 'react';

export default function BlogIndex() {
  const posts = [
    {
      date: 'May 15, 2026',
      title: 'Catholic Dads Leading Family FI with AI and Faith',
      excerpt: 'Dads, lead your family to financial independence using faith-aligned AI tools. Practical ways to steward resources, strengthen marriage, and raise generous kids without missing what matters most.',
      readTime: '4 min read',
      slug: 'catholic-dads-leading-family-fi-with-ai-and-faith'
    },
    {
      date: 'May 13, 2026',
      title: 'AI-Assisted Stewardship: How Catholic Families Can Reach FI Faster',
      excerpt: 'With AI in the headlines, Catholic families now have smart tools to accelerate financial independence while staying true to faith, marriage, and raising kids. Discover practical ways to use AI for stewardship and FI.',
      readTime: '4 min read',
      slug: 'ai-assisted-stewardship-how-catholic-families-leverage-smart-tools-for-fi-and-faithful-living'
    },
    {
      date: 'May 12, 2026',
      title: 'How Christian Couples Unlock Financial Freedom Together: Faith, Teamwork, and a Legacy Your Family Will Thank You For',
      excerpt: 'Marriage and money don’t have to fight. Discover how faith turns your pursuit of FI into powerful teamwork that strengthens your marriage and builds a legacy for your kids.',
      readTime: '4 min read',
      slug: 'how-christian-couples-unlock-financial-freedom-together-faith-teamwork-and-a-legacy-your-family-will-thank-you-for'
    },
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

# Super FI Blog

Insights, strategies, and tools for your journey to financial independence

{posts.map((post, index) => (

{post.date} · {post.readTime}

## {post.title}

{post.excerpt}

Read full post →

))}

);
}