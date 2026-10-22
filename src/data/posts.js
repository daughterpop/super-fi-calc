const rawPosts = [
  {
    title: 'Bring the Spices Before Dawn: St. Mary Salome',
    date: 'October 22, 2026',
    dateSort: '2026-10-22',
    excerpt: 'Mary Salome and the other women carried spices they had already bought to the tomb while it was still dark. The myrrh was paid for before anyone knew the stone would move.',
    readTime: '4 min read',
    link: '/blog/bring-the-spices-before-dawn',
    tags: ['Stewardship', 'Seasonal', 'Mercy'],
    featured: false
  },
  {
    title: 'What an Extra $100 a Month on a Mortgage Actually Does',
    date: 'October 21, 2026',
    dateSort: '2026-10-21',
    excerpt: 'On a $350,000 loan at 6.5%, an extra $100 a month on the mortgage ends it 42 payments early and saves about $62,600 in interest. Here is the math, and when I would send that $100 elsewhere.',
    readTime: '4 min read',
    link: '/blog/extra-100-a-month-on-a-mortgage',
    tags: ['Stewardship', 'Planning', 'Debt'],
    featured: false
  },
  {
    title: 'Barefoot Past the Next Raise: St. Paul of the Cross',
    date: 'October 20, 2026',
    dateSort: '2026-10-20',
    excerpt: 'On 22 November 1720 the bishop vested Paul of the Cross in rough village wool and he walked out barefoot. A household that has already claimed the next raise cannot make that same refusal.',
    readTime: '4 min read',
    link: '/blog/barefoot-past-the-next-raise',
    tags: ['Stewardship', 'Seasonal', 'Poverty'],
    featured: false
  },
  // ... all existing posts remain exactly as before ...
];

export const allPosts = rawPosts.filter((post) => {
  return post && post.title && post.link;
});

// ... rest of file unchanged, including getRelatedPosts ...
