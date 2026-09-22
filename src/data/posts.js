const rawPosts = [
  {
    title: 'Stand with the Legion: Lessons from St. Maurice',
    date: 'September 22, 2026',
    dateSort: '2026-09-22',
    excerpt: 'When the emperor ordered sacrifice to the gods, Maurice and the Theban Legion refused as one body. Households that keep unclaimed surplus can make the same quiet refusal when fidelity costs a job, a raise, or a lifestyle.',
    readTime: '4 min read',
    link: '/blog/stand-with-the-legion-lessons-from-st-maurice',
    tags: ['Stewardship', 'Seasonal', 'Prayer'],
    featured: false
  },
  {
    title: 'Leave the Tax Booth: Lessons from St. Matthew',
    date: 'September 21, 2026',
    dateSort: '2026-09-21',
    excerpt: 'Matthew rose from the customs post the moment Jesus said “Follow me.” Households that release the claim on every extra dollar keep the same free hand for the next call of mercy or vocation.',
    readTime: '4 min read',
    link: '/blog/leave-the-tax-booth-lessons-from-st-matthew',
    tags: ['Stewardship', 'Seasonal', 'Prayer'],
    featured: false
  },
  {
    title: 'Travel Light: Lessons from St. Joseph of Cupertino',
    date: 'September 18, 2026',
    dateSort: '2026-09-18',
    excerpt: 'On his deathbed Joseph of Cupertino told his superior he had nothing left to resign. Households that keep no fixed claims on surplus can answer the next transfer without panic.',
    readTime: '4 min read',
    link: '/blog/travel-light-lessons-from-st-joseph-of-cupertino',
    tags: ['Stewardship', 'Seasonal', 'Prayer'],
    featured: false
  },
  {
    title: 'Sell the Tapestries: Lessons from St. Robert Bellarmine',
    date: 'September 17, 2026',
    dateSort: '2026-09-17',
    excerpt: 'When famine hit Rome, Cardinal Bellarmine tore the tapestries from his walls and sold them for the poor. “The walls won’t catch cold,” he said. Families that keep real surplus can do the same with their own comforts.',
    readTime: '4 min read',
    link: '/blog/sell-the-tapestries-lessons-from-st-robert-bellarmine',
    tags: ['Stewardship', 'Seasonal', 'Tithing'],
    featured: false
  },
  {
    title: 'Give Away the Inheritance: Lessons from St. Cyprian',
    date: 'September 16, 2026',
    dateSort: '2026-09-16',
    excerpt: 'Cyprian distributed his entire fortune to the poor the hour he turned to Christ. Households that release the claim on surplus keep the same free hand for mercy when the need appears.',
    readTime: '4 min read',
    link: '/blog/give-away-the-inheritance-lessons-from-st-cyprian',
    tags: ['Stewardship', 'Seasonal', 'Tithing'],
    featured: false
  },
  {
    title: 'Stand Beside the Cross: Lessons from Our Lady of Sorrows',
    date: 'September 15, 2026',
    dateSort: '2026-09-15',
    excerpt: 'Mary stood at the foot of the Cross while others fled. A household that keeps real margin can stay present when sorrow lands instead of scrambling for the next dollar or distraction.',
    readTime: '4 min read',
    link: '/blog/stand-beside-the-cross-lessons-from-our-lady-of-sorrows',
    tags: ['Stewardship', 'Seasonal', 'Prayer'],
    featured: false
  },
  {
    title: 'Leave Room for the Cross: Lessons from Its Exaltation',
    date: 'September 14, 2026',
    dateSort: '2026-09-14',
    excerpt: 'Christ emptied Himself and took the form of a slave. Households that claim every dollar have no free hand when the real cross arrives.',
    readTime: '4 min read',
    link: '/blog/leave-room-for-the-cross-lessons-from-its-exaltation',
    tags: ['Stewardship', 'Seasonal', 'Prayer'],
    featured: false
  },
  {
    title: 'Open the Mantle: Lessons from St. Nicholas of Tolentino',
    date: 'September 10, 2026',
    dateSort: '2026-09-10',
    excerpt: 'When the prior stopped him, the bread under St. Nicholas’s mantle turned to roses. Families that keep a real surplus can open the same hand without counting the cost.',
    readTime: '4 min read',
    link: '/blog/open-the-mantle-lessons-from-st-nicholas-of-tolentino',
    tags: ['Stewardship', 'Seasonal', 'Tithing'],
    featured: false
  },
  {
    title: 'Begin in the Small: Lessons from Mary\'s Nativity',
    date: 'September 8, 2026',
    dateSort: '2026-09-08',
    excerpt: 'Joachim and Anne received the child in an ordinary house after long waiting. Families that keep the cradle and the budget small leave room for the grace that arrives quietly and grows without fanfare.',
    readTime: '4 min read',
    link: '/blog/begin-in-the-small-lessons-from-marys-nativity',
    tags: ['Stewardship', 'Seasonal', 'Prayer'],
    featured: false
  },
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
    excerpt: 'Ingrid gave the unexpected inheritance to the poor and the Church before claiming it for herself. Windfalls keep their freedom when they are assigned a job the same day they arrive.',
    readTime: '4 min read',
    link: '/blog/give-the-windfall-a-job-lessons-from-st-ingrid',
    tags: ['Stewardship', 'Seasonal', 'Tithing'],
    featured: false
  },
  {
    title: 'Purchasing Is a Moral Act: Lessons from Creation Day',
    date: 'September 1, 2026',
    dateSort: '2026-09-01',
    excerpt: 'Every purchase is a vote for a kind of world. Catholic households that treat the cart as a moral act keep the ledger and the conscience aligned.',
    readTime: '4 min read',
    link: '/blog/purchasing-is-a-moral-act-lessons-from-creation-day',
    tags: ['Stewardship', 'Seasonal'],
    featured: false
  },
  {
    title: 'Give Away the Horse: Lessons from St. Aidan',
    date: 'August 31, 2026',
    dateSort: '2026-08-31',
    excerpt: 'Aidan gave the king’s gift horse to the first beggar he met. Surplus that stays unclaimed can move the same day the need appears.',
    readTime: '4 min read',
    link: '/blog/give-away-the-horse-lessons-from-st-aidan',
    tags: ['Stewardship', 'Seasonal', 'Tithing'],
    featured: false
  },
  {
    title: 'He Must Increase: Lessons from St. John the Baptist',
    date: 'August 29, 2026',
    dateSort: '2026-08-29',
    excerpt: 'John pointed away from himself so Christ could be seen. Households that refuse to make lifestyle the center leave room for the same decrease.',
    readTime: '4 min read',
    link: '/blog/he-must-increase-lessons-from-st-john-the-baptist',
    tags: ['Stewardship', 'Seasonal', 'Prayer'],
    featured: false
  },
  {
    title: 'Order Your Loves: Lessons from St. Augustine',
    date: 'August 28, 2026',
    dateSort: '2026-08-28',
    excerpt: 'Augustine learned that disordered love turns even good things into weights. Ordering the loves first keeps the budget from becoming a second master.',
    readTime: '4 min read',
    link: '/blog/order-your-loves-lessons-from-st-augustine',
    tags: ['Stewardship', 'Seasonal', 'Prayer'],
    featured: false
  },
  {
    title: 'Stay the Course: Lessons from St. Monica',
    date: 'August 27, 2026',
    dateSort: '2026-08-27',
    excerpt: 'Monica prayed and waited through years of her son’s wandering. Long obedience in the same direction is the household version of her tears.',
    readTime: '4 min read',
    link: '/blog/stay-the-course-lessons-from-st-monica',
    tags: ['Stewardship', 'Seasonal', 'Prayer'],
    featured: false
  },
  {
    title: 'Form Children, Not Status: Lessons from St. Joseph Calasanz',
    date: 'August 26, 2026',
    dateSort: '2026-08-26',
    excerpt: 'Calasanz opened free schools for the poor instead of chasing status. Families that form children rather than project image keep the same priority in the budget.',
    readTime: '4 min read',
    link: '/blog/form-children-not-status-lessons-from-st-joseph-calasanz',
    tags: ['Stewardship', 'Seasonal', 'Prayer'],
    featured: false
  },
  {
    title: 'Is FIRE Compatible with Catholicism?',
    date: 'August 20, 2026',
    dateSort: '2026-08-20',
    excerpt: 'Financial independence is a tool. Whether it serves or hinders a Catholic family depends on what the freedom is for.',
    readTime: '5 min read',
    link: '/blog/is-fire-compatible-with-catholicism',
    tags: ['Stewardship', 'FI'],
    featured: true
  },
  {
    title: 'How to Budget as a Catholic Family (with Tithing First)',
    date: 'August 15, 2026',
    dateSort: '2026-08-15',
    excerpt: 'Tithe first, then build the rest of the plan. A simple order that keeps giving from becoming the leftover.',
    readTime: '5 min read',
    link: '/blog/how-to-budget-as-a-catholic-family-with-tithing-first',
    tags: ['Stewardship', 'Tithing', 'Budget'],
    featured: false
  },
  {
    title: 'Building an Emergency Fund Without Neglecting the Tithe',
    date: 'August 12, 2026',
    dateSort: '2026-08-12',
    excerpt: 'The cash buffer and the tithe are not rivals. Both protect the household’s ability to respond when need appears.',
    readTime: '4 min read',
    link: '/blog/building-an-emergency-fund-without-neglecting-the-tithe',
    tags: ['Stewardship', 'Tithing', 'Emergency'],
    featured: false
  },
  {
    title: 'Faith-Based Investing Basics for Catholic Households',
    date: 'August 10, 2026',
    dateSort: '2026-08-10',
    excerpt: 'Investing is stewardship of future capacity. Basic principles that keep the portfolio aligned with the family’s real ends.',
    readTime: '5 min read',
    link: '/blog/faith-based-investing-basics-for-catholic-households',
    tags: ['Stewardship', 'Investing'],
    featured: false
  },
  {
    title: 'Build Margin for Catholic Families',
    date: 'August 5, 2026',
    dateSort: '2026-08-05',
    excerpt: 'Margin is the practical foundation of faithful FI. Without it, every good intention collides with the next bill.',
    readTime: '4 min read',
    link: '/blog/build-margin-for-catholic-families',
    tags: ['Stewardship', 'FI'],
    featured: true
  },
  {
    title: 'Why FI for Catholics',
    date: 'August 1, 2026',
    dateSort: '2026-08-01',
    excerpt: 'Financial independence is not an end. For Catholic families it is a means to freer obedience and quieter generosity.',
    readTime: '4 min read',
    link: '/blog/why-fi-for-catholics',
    tags: ['Stewardship', 'FI'],
    featured: true
  },
  {
    title: 'How to Get Started on Your FI Path',
    date: 'July 28, 2026',
    dateSort: '2026-07-28',
    excerpt: 'One clear path for Catholic households ready to begin: calculate, cut what does not serve, invest the gap, and keep giving first.',
    readTime: '5 min read',
    link: '/blog/how-to-get-started-on-your-fi-path',
    tags: ['Stewardship', 'FI'],
    featured: true
  },
  {
    title: 'Why Financial Independence Is for Everyone',
    date: 'July 20, 2026',
    dateSort: '2026-07-20',
    excerpt: 'FI is not reserved for high earners. The math works for any household willing to keep a gap and put it to work.',
    readTime: '4 min read',
    link: '/blog/why-financial-independence-is-for-everyone',
    tags: ['Stewardship', 'FI'],
    featured: false
  }
];

export const allPosts = rawPosts.filter((post) => {
  return post && post.title && post.link;
});

export const allTags = [
  ...new Set(allPosts.flatMap((p) => p.tags || []))
].sort();

export const featuredPosts = allPosts.filter((p) => p.featured);

export const PILLAR_LINKS = [
  {
    to: '/blog/why-fi-for-catholics',
    label: 'Why FI for Catholics',
    blurb: 'The deeper why behind the numbers'
  },
  {
    to: '/blog/is-fire-compatible-with-catholicism',
    label: 'Is FIRE Compatible?',
    blurb: 'A clear answer for Catholic households'
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
