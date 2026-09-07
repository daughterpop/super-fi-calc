const rawPosts = [
  {
    title: 'Cut the Royal Hair: Lessons from St. Cloud',
    date: 'September 7, 2026',
    dateSort: '2026-09-07',
    excerpt: 'Cloud cut his long royal hair before the bishop, renouncing the Frankish throne. Families that cut the claim on every extra dollar free surplus for vocation and the poor.',
    readTime: '4 min read',
    link: '/blog/cut-the-royal-hair-lessons-from-st-cloud',
    tags: ['Stewardship', 'Seasonal', 'Tithing'],
    featured: false
  },
  {
    title: 'Leave the Court for the Cave: Lessons from St. Rosalia',
    date: 'September 4, 2026',
    dateSort: '2026-09-04',
    excerpt: 'Rosalia left the Palermo court and carved her resolution on the cave wall. Families that trade lifestyle inflation for a simpler rule gain the quiet margin prayer and mercy actually need.',
    readTime: '4 min read',
    link: '/blog/leave-the-court-for-the-cave-lessons-from-st-rosalia',
    tags: ['Stewardship', 'Seasonal', 'Prayer'],
    featured: false
  },
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

export function getPostByPath(path) {
  return allPosts.find((p) => p.link === path) || null;
}
