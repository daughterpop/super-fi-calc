const rawPosts = [
  {
    title: 'Pay the Debt of Justice: Lessons from St. Gregory the Great',
    date: 'September 3, 2026',
    dateSort: '2026-09-03',
    excerpt: 'Gregory sold the family estates and founded monasteries. Surplus left in checking is already owed — when we meet the needy we pay a debt of justice, not offer a gift.',
    readTime: '4 min read',
    link: '/blog/pay-the-debt-of-justice-lessons-from-st-gregory-the-great',
    tags: ['Stewardship', 'Seasonal', 'Tithing'],
    featured: false
  },
  {
    title: 'Books We Keep in the House',
    date: 'September 3, 2026',
    dateSort: '2026-09-03',
    excerpt: 'A short shelf we actually reread — not a coffee-table stack. Six TAN titles that train ordered love, detachment, and a household rule of prayer.',
    readTime: '6 min read',
    link: '/blog/books-we-keep-in-the-house',
    tags: ['Stewardship', 'Prayer'],
    featured: true
  },
  {
    title: 'Give the Windfall a Job: Lessons from St. Ingrid',
    date: 'September 2, 2026',
    dateSort: '2026-09-02',
    excerpt: 'A raise sits in checking, then becomes a nicer kitchen. Give the windfall a job first — give, buffer, invest — the way St. Ingrid gave her fortune a vocation.',
    readTime: '4 min read',
    link: '/blog/give-the-windfall-a-job-lessons-from-st-ingrid',
    tags: ['Stewardship', 'Seasonal', 'Legacy'],
    featured: false
  },
  {
    title: 'Purchasing Is a Moral Act: Lessons from Creation Day',
    date: 'September 1, 2026',
    dateSort: '2026-09-01',
    excerpt: 'Most budgets treat “we can afford it” as permission. Naming “enough” makes the purchase a moral act and frees surplus for the poor and the vocation.',
    readTime: '4 min read',
    link: '/blog/purchasing-is-a-moral-act-lessons-from-creation-day',
    tags: ['Stewardship', 'Seasonal', 'Prayer'],
    featured: false
  },
  {
    title: 'Give Away the Horse: Lessons from St. Aidan',
    date: 'August 31, 2026',
    dateSort: '2026-08-31',
    excerpt: 'St. Aidan gave away the king’s horse the same day he received it. Raises and extras are for mercy, not a heavier life.',
    readTime: '4 min read',
    link: '/blog/give-away-the-horse-lessons-from-st-aidan',
    tags: ['Stewardship', 'Seasonal', 'Tithing'],
    featured: false
  },
  {
    title: 'He Must Increase: Lessons from St. John the Baptist',
    date: 'August 29, 2026',
    dateSort: '2026-08-29',
    excerpt: 'He must increase; we must decrease. Shrink the lifestyle, not the vocation, so there is room to tell the truth and share the surplus.',
    readTime: '4 min read',
    link: '/blog/he-must-increase-lessons-from-st-john-the-baptist',
    tags: ['Stewardship', 'Seasonal', 'Tithing'],
    featured: false
  },
  {
    title: 'Order Your Loves: Lessons from St. Augustine',
    date: 'August 28, 2026',
    dateSort: '2026-08-28',
    excerpt: 'God first, enough for the house, the rest for others. Ordered love is the budget — Augustine’s ordo amoris at the kitchen table.',
    readTime: '4 min read',
    link: '/blog/order-your-loves-lessons-from-st-augustine',
    tags: ['Stewardship', 'Seasonal', 'Tithing'],
    featured: false
  },
  {
    title: 'Stay the Course: Lessons from St. Monica',
    date: 'August 27, 2026',
    dateSort: '2026-08-27',
    excerpt: 'Monica prayed for years before Augustine turned. Stay in the budget when the fruit is slow; faithful FI is a long game, not a streak.',
    readTime: '4 min read',
    link: '/blog/stay-the-course-lessons-from-st-monica',
    tags: ['Stewardship', 'Seasonal', 'Prayer', 'Parenting'],
    featured: false
  },
  {
    title: 'Form Children, Not Status: Lessons from St. Joseph Calasanz',
    date: 'August 26, 2026',
    dateSort: '2026-08-26',
    excerpt: 'School costs can be formation or a bumper sticker. Fund the child St. Joseph Calasanz would recognize — piety and letters, not prestige.',
    readTime: '4 min read',
    link: '/blog/form-children-not-status-lessons-from-st-joseph-calasanz',
    tags: ['Stewardship', 'Seasonal', 'Parenting'],
    featured: false
  },
  {
    title: 'Is FIRE Compatible with Catholicism?',
    date: 'August 7, 2026',
    dateSort: '2026-08-07',
    excerpt: 'Financial independence for Catholic families means margin for vocation — Providence and prudence together, tithing in the plan, honest math for large households, and freedom for the mission rather than secular FIRE cosplay.',
    readTime: '6 min read',
    link: '/blog/is-fire-compatible-with-catholicism',
    tags: ['Stewardship', 'Tithing'],
    featured: true
  },
  {
    title: 'How to Budget as a Catholic Family (with Tithing First)',
    date: 'August 7, 2026',
    dateSort: '2026-08-07',
    excerpt: 'A practical budget that puts the tithe first, then housing, food, and the rest — so the household stays ordered toward generosity and freedom instead of anxiety.',
    readTime: '7 min read',
    link: '/blog/how-to-budget-as-a-catholic-family-with-tithing-first',
    tags: ['Stewardship', 'Tithing'],
    featured: true
  },
  {
    title: 'Building an Emergency Fund Without Neglecting the Tithe',
    date: 'August 7, 2026',
    dateSort: '2026-08-07',
    excerpt: 'How to build a real cash buffer while still giving consistently — the practical order that keeps both prudence and generosity intact.',
    readTime: '6 min read',
    link: '/blog/building-an-emergency-fund-without-neglecting-the-tithe',
    tags: ['Stewardship', 'Tithing'],
    featured: true
  },
  {
    title: 'Faith-Based Investing Basics for Catholic Households',
    date: 'August 7, 2026',
    dateSort: '2026-08-07',
    excerpt: 'What faith-aligned investing actually looks like for ordinary families — low costs, broad ownership, and clear boundaries without turning the portfolio into a full-time job.',
    readTime: '7 min read',
    link: '/blog/faith-based-investing-basics-for-catholic-households',
    tags: ['Stewardship', 'Legacy'],
    featured: true
  },
  {
    title: 'Build Margin for Catholic Families',
    date: 'August 7, 2026',
    dateSort: '2026-08-07',
    excerpt: 'The practical foundation of faithful FI: a deliberate gap between earning and spending that protects prayer, family, and generosity when life gets expensive.',
    readTime: '8 min read',
    link: '/blog/build-margin-for-catholic-families',
    tags: ['Stewardship'],
    featured: true
  },
  {
    title: 'Why FI for Catholics',
    date: 'August 7, 2026',
    dateSort: '2026-08-07',
    excerpt: 'Margin for vocation, not secular FIRE.',
    readTime: '6 min read',
    link: '/blog/why-fi-for-catholics',
    tags: ['Stewardship', 'Tithing'],
    featured: true
  },
  {
    title: 'How to Get Started on Your FI Path',
    date: 'August 7, 2026',
    dateSort: '2026-08-07',
    excerpt: 'One clear path for Catholic households.',
    readTime: '6 min read',
    link: '/blog/how-to-get-started-on-your-fi-path',
    tags: ['Stewardship'],
    featured: true
  },
  {
    title: 'Why Financial Independence Is for Everyone',
    date: 'July 9, 2026',
    dateSort: '2026-07-09',
    excerpt: 'FI is not a lifestyle brand. It is the practical freedom to live your vocation without money constantly calling the shots.',
    readTime: '5 min read',
    link: '/blog/why-fi-for-everyone',
    tags: ['Stewardship'],
    featured: true
  }
];

const seen = new Set();
export const allPosts = rawPosts.filter((post) => {
  if (seen.has(post.link)) return false;
  seen.add(post.link);
  return true;
});

export const allTags = [
  'Parenting',
  'Prayer',
  'Legacy',
  'Stewardship',
  'Tithing',
  'Seasonal',
  'Tools'
];

export const featuredPosts = allPosts.filter((p) => p.featured);

export const PILLAR_LINKS = [
  {
    to: '/blog/why-fi-for-catholics',
    label: 'Why FI for Catholics',
    blurb: 'Margin for vocation, not secular FIRE'
  },
  {
    to: '/blog/how-to-get-started-on-your-fi-path',
    label: 'How to Get Started',
    blurb: 'One clear path for Catholic households'
  },
  {
    to: '/blog/build-margin-for-catholic-families',
    label: 'Build Margin',
    blurb: 'The practical foundation of faithful FI'
  }
];

export function getPostByPath(pathname) {
  if (!pathname) return null;
  const normalized = pathname.endsWith('/') && pathname.length > 1
    ? pathname.slice(0, -1)
    : pathname;
  return allPosts.find((p) => p.link === normalized) || null;
}

export function getRelatedPosts(currentLink, limit = 3) {
  if (!currentLink) return allPosts.filter((p) => p.featured).slice(0, limit);
  const normalized = currentLink.endsWith('/') && currentLink.length > 1
    ? currentLink.slice(0, -1)
    : currentLink;
  const current = allPosts.find((p) => p.link === normalized);
  if (!current) return allPosts.filter((p) => p.featured).slice(0, limit);
  const currentTags = new Set(current.tags || []);
  const scored = allPosts
    .filter((p) => p.link !== normalized)
    .map((p) => {
      const shared = (p.tags || []).filter((t) => currentTags.has(t)).length;
      const featuredBoost = p.featured ? 1.5 : 0;
      return { post: p, score: shared + featuredBoost };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score || b.post.dateSort.localeCompare(a.post.dateSort));
  const related = scored.slice(0, limit).map((x) => x.post);
  if (related.length >= limit) return related;
  const used = new Set([normalized, ...related.map((p) => p.link)]);
  for (const p of allPosts) {
    if (related.length >= limit) break;
    if (!used.has(p.link) && p.featured) {
      related.push(p);
      used.add(p.link);
    }
  }
  return related;
}
