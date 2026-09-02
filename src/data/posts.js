const rawPosts = [
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
    title: 'Build Margin for True Justice: Lessons from St. Louis',
    date: 'August 25, 2026',
    dateSort: '2026-08-25',
    excerpt: 'A king who washed the feet of the poor. Keep enough slack in the plan that justice is a Tuesday habit, not a heroic weekend.',
    readTime: '4 min read',
    link: '/blog/build-margin-for-true-justice-lessons-from-st-louis',
    tags: ['Stewardship', 'Seasonal'],
    featured: false
  },
  {
    title: 'Build Margin for Honest Living: Lessons from St. Bartholomew',
    date: 'August 24, 2026',
    dateSort: '2026-08-24',
    excerpt: 'No guile. Honest numbers beat the quiet pressure to look richer than you are.',
    readTime: '4 min read',
    link: '/blog/build-margin-for-honest-living-lessons-from-st-bartholomew',
    tags: ['Stewardship', 'Seasonal'],
    featured: false
  },
  {
    title: 'Build Margin for True Beauty: Lessons from St. Rose of Lima',
    date: 'August 23, 2026',
    dateSort: '2026-08-23',
    excerpt: 'Vanity is expensive. Choose the quieter beauty — fidelity and generosity — over the version of the house that photographs well.',
    readTime: '4 min read',
    link: '/blog/build-margin-for-true-beauty-lessons-from-st-rose-of-lima',
    tags: ['Stewardship', 'Seasonal'],
    featured: false
  },
  {
    title: 'Build Margin for Royal Peace: Lessons from the Queenship of Mary',
    date: 'August 22, 2026',
    dateSort: '2026-08-22',
    excerpt: 'Anxiety cannot reign and peace cannot. Build enough slack that the home can actually be quiet under Mary’s care.',
    readTime: '4 min read',
    link: '/blog/build-margin-for-royal-peace-lessons-from-the-queenship-of-mary',
    tags: ['Stewardship', 'Seasonal'],
    featured: false
  },
  {
    title: 'Restore All Things in Christ: Lessons from St. Pius X',
    date: 'August 21, 2026',
    dateSort: '2026-08-21',
    excerpt: 'Restore Christ to the center, starting with ordered money, so bills stop crowding out prayer.',
    readTime: '4 min read',
    link: '/blog/restore-all-things-in-christ-lessons-from-st-pius-x',
    tags: ['Stewardship', 'Seasonal'],
    featured: false
  },
  {
    title: 'Simplicity Frees the Soul: Lessons from St. Bernard of Clairvaux',
    date: 'August 20, 2026',
    dateSort: '2026-08-20',
    excerpt: 'Cistercian simplicity was not branding. Own less on purpose so prayer and generosity have a room in the house.',
    readTime: '4 min read',
    link: '/blog/simplicity-frees-the-soul-lessons-from-st-bernard-of-clairvaux',
    tags: ['Stewardship', 'Seasonal'],
    featured: false
  },
  {
    title: 'Build Margin to Form the Heart: Lessons from St. John Eudes',
    date: 'August 19, 2026',
    dateSort: '2026-08-19',
    excerpt: 'Anxious hearts do not form well. Cut the noise in the budget so devotion to the Sacred Hearts can actually take root.',
    readTime: '4 min read',
    link: '/blog/build-margin-to-form-the-heart-lessons-from-st-john-eudes',
    tags: ['Stewardship', 'Seasonal'],
    featured: false
  },
  {
    title: 'Seek the True Cross: Lessons from St. Helena',
    date: 'August 18, 2026',
    dateSort: '2026-08-18',
    excerpt: 'She searched for the Cross, not a nicer court. Seek the true treasure and let the extra follow.',
    readTime: '4 min read',
    link: '/blog/seek-the-true-cross-lessons-from-st-helena',
    tags: ['Stewardship', 'Seasonal'],
    featured: false
  },
  {
    title: 'Build Margin to Carry What Matters: Lessons from St. Hyacinth',
    date: 'August 17, 2026',
    dateSort: '2026-08-17',
    excerpt: 'He carried the Eucharist out of a burning city. Carry what matters; leave the rest.',
    readTime: '4 min read',
    link: '/blog/build-margin-to-carry-what-matters-lessons-from-st-hyacinth',
    tags: ['Stewardship', 'Seasonal'],
    featured: false
  },
  {
    title: 'Build Margin for True Mercy: Lessons from St. Stephen of Hungary',
    date: 'August 16, 2026',
    dateSort: '2026-08-16',
    excerpt: 'A crown used for hospitality. Keep enough room in the plan that mercy is ordinary, not a stretch.',
    readTime: '4 min read',
    link: '/blog/build-margin-for-true-mercy-lessons-from-st-stephen-of-hungary',
    tags: ['Stewardship', 'Seasonal'],
    featured: false
  },
  {
    title: 'Build Margin for Heavenly Hope: Lessons from the Assumption',
    date: 'August 15, 2026',
    dateSort: '2026-08-15',
    excerpt: 'Mary is assumed; money is not the destination. Keep the household on pilgrimage.',
    readTime: '4 min read',
    link: '/blog/build-margin-for-heavenly-hope-lessons-from-the-assumption',
    tags: ['Stewardship', 'Seasonal'],
    featured: false
  },
  {
    title: 'Invest Your Surplus with Robinhood for Catholic FI',
    date: 'August 14, 2026',
    dateSort: '2026-08-14',
    excerpt: 'Once the household has an emergency fund and is giving consistently, put the surplus to work. How Robinhood fits a faith-aligned path to financial independence.',
    readTime: '5 min read',
    link: '/blog/invest-your-surplus-with-robinhood-for-catholic-fi',
    tags: ['Stewardship', 'Tools', 'Legacy'],
    featured: true
  },
  {
    title: 'Automate Investing and Cash with Wealthfront for Catholic Families',
    date: 'August 14, 2026',
    dateSort: '2026-08-14',
    excerpt: 'Automated investing and a high-yield cash account in one place — a practical way for busy Catholic households to put surplus to work without turning money management into a second job.',
    readTime: '5 min read',
    link: '/blog/automate-investing-and-cash-with-wealthfront-for-catholic-families',
    tags: ['Stewardship', 'Tools', 'Legacy'],
    featured: true
  },
  {
    title: 'See Every Dollar with Monarch Money for Catholic Households',
    date: 'August 14, 2026',
    dateSort: '2026-08-14',
    excerpt: 'Shared visibility for budgets, net worth, and investments — so spouses can steward the household together without spreadsheets becoming a second job.',
    readTime: '5 min read',
    link: '/blog/see-every-dollar-with-monarch-money-for-catholic-households',
    tags: ['Stewardship', 'Tools', 'Couples'],
    featured: true
  },
  {
    title: 'Build Generosity into Your FI Plan with Daffy',
    date: 'August 14, 2026',
    dateSort: '2026-08-14',
    excerpt: 'A modern donor-advised fund for everyday families — so giving stays a first claim on the path to financial independence instead of an afterthought when cash is tight.',
    readTime: '5 min read',
    link: '/blog/build-generosity-into-your-fi-plan-with-daffy',
    tags: ['Stewardship', 'Tithing', 'Tools'],
    featured: true
  },
  {
    title: 'Stretch the Grocery Budget with Thrive Market for Catholic FI',
    date: 'August 14, 2026',
    dateSort: '2026-08-14',
    excerpt: 'Organic and pantry staples at membership pricing — one practical way large Catholic families can free real dollars from the grocery line without turning thrift into a full-time job.',
    readTime: '5 min read',
    link: '/blog/stretch-the-grocery-budget-with-thrive-market-for-catholic-fi',
    tags: ['Stewardship', 'Tools', 'Parenting'],
    featured: true
  },
  {
    title: 'Cut the Phone Bill with Mint Mobile for Catholic FI',
    date: 'August 14, 2026',
    dateSort: '2026-08-14',
    excerpt: 'Lower the monthly phone bill without losing coverage — one of the easiest ways to free cash for the FI plan in a large household.',
    readTime: '5 min read',
    link: '/blog/cut-the-phone-bill-with-mint-mobile-for-catholic-fi',
    tags: ['Stewardship', 'Tools'],
    featured: true
  },
  {
    title: 'Sell Clutter and Buy Used with Mercari for Catholic FI',
    date: 'August 14, 2026',
    dateSort: '2026-08-14',
    excerpt: 'Turn unused items into cash and buy what you need second-hand — practical margin for Catholic families who want less stuff and more freedom.',
    readTime: '5 min read',
    link: '/blog/sell-clutter-and-buy-used-with-mercari-for-catholic-fi',
    tags: ['Stewardship', 'Tools'],
    featured: true
  },
  {
    title: 'Side Income from a Spare Space with Airbnb Hosting',
    date: 'August 14, 2026',
    dateSort: '2026-08-14',
    excerpt: 'If you have a spare room or ADU, hosting can create real extra income for the FI path — with clear guardrails for family life and values.',
    readTime: '5 min read',
    link: '/blog/side-income-from-a-spare-space-with-airbnb-hosting',
    tags: ['Stewardship', 'Tools', 'Legacy'],
    featured: true
  },
  {
    title: 'Smarter Hotel Booking with Gondola for Family Travel',
    date: 'August 14, 2026',
    dateSort: '2026-08-14',
    excerpt: 'Find better hotel rates for family trips without the usual booking headaches — one practical way to keep travel costs from derailing the savings plan.',
    readTime: '5 min read',
    link: '/blog/smarter-hotel-booking-with-gondola-for-family-travel',
    tags: ['Stewardship', 'Tools'],
    featured: true
  },
  {
    title: 'Marriott Bonvoy Travel Rewards for Catholic Families',
    date: 'August 14, 2026',
    dateSort: '2026-08-14',
    excerpt: 'Hotel points that can actually help with family travel — a straightforward look at whether the Marriott program fits a large Catholic household.',
    readTime: '5 min read',
    link: '/blog/marriott-bonvoy-travel-rewards-for-catholic-families',
    tags: ['Stewardship', 'Tools'],
    featured: true
  },
  {
    title: 'Event Contracts on Kalshi: Curiosity with Guardrails',
    date: 'August 14, 2026',
    dateSort: '2026-08-14',
    excerpt: 'Prediction markets for the curious — with clear limits so they stay a small curiosity rather than a risk to the household FI plan.',
    readTime: '5 min read',
    link: '/blog/event-contracts-on-kalshi-curiosity-with-guardrails',
    tags: ['Stewardship', 'Tools'],
    featured: true
  },
  {
    title: 'Track Recovery with Oura Ring for Family Health and FI',
    date: 'August 14, 2026',
    dateSort: '2026-08-14',
    excerpt: 'Better recovery data for parents who train and work — practical health margin that supports the long game of financial independence.',
    readTime: '5 min read',
    link: '/blog/track-recovery-with-oura-ring-for-family-health-and-fi',
    tags: ['Stewardship', 'Tools'],
    featured: true
  },
  {
    title: 'Swim Metrics in the Pool with FORM Goggles',
    date: 'August 14, 2026',
    dateSort: '2026-08-14',
    excerpt: 'Real-time feedback in the water for parents (and kids) who swim — one more tool that makes consistent training easier in a full household.',
    readTime: '5 min read',
    link: '/blog/swim-metrics-in-the-pool-with-form-goggles',
    tags: ['Stewardship', 'Tools'],
    featured: true
  },
  {
    title: 'AI Triathlon Coaching with Transition for Busy Parents',
    date: 'August 14, 2026',
    dateSort: '2026-08-14',
    excerpt: 'Adaptive training plans that fit around work and kids — useful if you are building fitness while also building the FI plan.',
    readTime: '5 min read',
    link: '/blog/ai-triathlon-coaching-with-transition-for-busy-parents',
    tags: ['Stewardship', 'Tools'],
    featured: true
  },
  {
    title: 'Private Mail and VPN with Proton for Catholic Families',
    date: 'August 14, 2026',
    dateSort: '2026-08-14',
    excerpt: 'Email, VPN, and private storage from a privacy-focused company — practical digital stewardship for households that want less surveillance.',
    readTime: '5 min read',
    link: '/blog/private-mail-and-vpn-with-proton-for-catholic-families',
    tags: ['Stewardship', 'Privacy', 'Tools'],
    featured: true
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
    title: 'Build Margin for Radical Love: Lessons from St. Maximilian Kolbe',
    date: 'August 14, 2026',
    dateSort: '2026-08-14',
    excerpt: 'He took another man’s place. Ordinary households practice that love by keeping enough slack to say yes when it costs.',
    readTime: '4 min read',
    link: '/blog/build-margin-for-radical-love-lessons-from-st-maximilian-kolbe',
    tags: ['Stewardship', 'Seasonal'],
    featured: false
  },
  {
    title: 'Fidelity in Lean Seasons: Lessons from Sts. Pontian and Hippolytus',
    date: 'August 13, 2026',
    dateSort: '2026-08-13',
    excerpt: 'Two rivals who died as co-exiles. Stay the plan when money gets tight; fidelity is what remains in a lean season.',
    readTime: '4 min read',
    link: '/blog/fidelity-in-lean-seasons-lessons-from-sts-pontian-and-hippolytus',
    tags: ['Stewardship', 'Seasonal'],
    featured: false
  },
  {
    title: 'Build Margin That Guards Your Peace: Lessons from St. Jane Frances de Chantal',
    date: 'August 12, 2026',
    dateSort: '2026-08-12',
    excerpt: 'Widowed, she guarded interior peace. Margin is how money anxiety stops running the home.',
    readTime: '4 min read',
    link: '/blog/build-margin-that-guards-your-peace-lessons-from-st-jane-frances-de-chantal',
    tags: ['Stewardship', 'Seasonal'],
    featured: false
  },
  {
    title: 'Live Light Like St. Clare: Lessons for Family Freedom',
    date: 'August 11, 2026',
    dateSort: '2026-08-11',
    excerpt: 'She left the palace. Living light is how FI becomes freedom for mission, not a nicer cage.',
    readTime: '4 min read',
    link: '/blog/live-light-like-st-clare-lessons-for-family-freedom',
    tags: ['Stewardship', 'Seasonal'],
    featured: false
  },
  {
    title: 'Make Generosity Ordinary: Lessons from St. Lawrence',
    date: 'August 10, 2026',
    dateSort: '2026-08-10',
    excerpt: 'The poor are the treasures of the Church. Make generosity a line item, not a mood.',
    readTime: '4 min read',
    link: '/blog/make-generosity-ordinary-lessons-from-st-lawrence',
    tags: ['Stewardship', 'Seasonal'],
    featured: false
  },
  {
    title: 'Build Margin to Carry the Cross: Lessons from St. Edith Stein',
    date: 'August 9, 2026',
    dateSort: '2026-08-09',
    excerpt: 'Truth first, then the Cross. Honest numbers prepare a family to carry hard seasons without panic.',
    readTime: '4 min read',
    link: '/blog/build-margin-to-carry-the-cross-lessons-from-st-edith-stein',
    tags: ['Stewardship', 'Seasonal'],
    featured: false
  },
  {
    title: 'Build Margin Through Gospel Poverty: Lessons from St. Dominic',
    date: 'August 8, 2026',
    dateSort: '2026-08-08',
    excerpt: 'He sold his books in a famine. Own less, cling less, give the gap a job.',
    readTime: '4 min read',
    link: '/blog/build-margin-through-gospel-poverty-lessons-from-st-dominic',
    tags: ['Stewardship', 'Seasonal'],
    featured: false
  },
  {
    title: 'How to Get Started on Your FI Path',
    date: 'August 7, 2026',
    dateSort: '2026-08-07',
    excerpt: 'A clear, practical starting path for Catholic households: know the number, protect the tithe, build the buffer, then put surplus to work.',
    readTime: '8 min read',
    link: '/blog/how-to-get-started-on-your-fi-path',
    tags: ['Stewardship'],
    featured: true
  },
  {
    title: 'Why FI for Catholics',
    date: 'August 7, 2026',
    dateSort: '2026-08-07',
    excerpt: 'Financial independence for Catholic families means margin for vocation — Providence and prudence together, tithing in the plan, honest math for large households, and freedom for the mission rather than secular FIRE cosplay.',
    readTime: '6 min read',
    link: '/blog/why-fi-for-catholics',
    tags: ['Stewardship'],
    featured: true
  },
  {
    title: 'Triple Savings on Online Purchases',
    date: 'August 7, 2026',
    dateSort: '2026-08-07',
    excerpt: 'Stack credit-card rewards, cashback portals, and checkout offers so everyday shopping funds the FI path — without debt and without turning thrift into a second full-time job.',
    readTime: '7 min read',
    link: '/blog/triple-savings-online-purchases',
    tags: ['Stewardship', 'Tools'],
    featured: true
  },
  {
    title: 'Build Margin to Trust Providence: Lessons from St. Cajetan',
    date: 'August 7, 2026',
    dateSort: '2026-08-07',
    excerpt: 'Trust Providence with a plan, not a shrug. A real buffer is how 2 a.m. anxiety loses its vote.',
    readTime: '4 min read',
    link: '/blog/build-margin-to-trust-providence-lessons-from-st-cajetan',
    tags: ['Stewardship', 'Seasonal'],
    featured: false
  },
  {
    title: 'See the Glory Ahead: Lessons from the Transfiguration',
    date: 'August 6, 2026',
    dateSort: '2026-08-06',
    excerpt: 'They saw the end before the climb. Write the FI number down so the ordinary week has a why.',
    readTime: '4 min read',
    link: '/blog/see-the-glory-ahead-lessons-from-the-transfiguration',
    tags: ['Stewardship', 'Seasonal'],
    featured: false
  },
  {
    title: 'Build on Trust, Not Anxiety: Lessons from Our Lady of the Snows',
    date: 'August 5, 2026',
    dateSort: '2026-08-05',
    excerpt: 'Snow in August was a sign to build. Trust first, then put a foundation under the household.',
    readTime: '4 min read',
    link: '/blog/build-on-trust-not-anxiety-lessons-from-our-lady-of-the-snows',
    tags: ['Stewardship', 'Seasonal'],
    featured: false
  },
  {
    title: 'Simplicity Creates Real Margin: Lessons from St. John Vianney',
    date: 'August 4, 2026',
    dateSort: '2026-08-04',
    excerpt: 'A curé who lived on almost nothing. Simplicity is still the cheapest path to real slack in the plan.',
    readTime: '4 min read',
    link: '/blog/simplicity-creates-real-margin-lessons-from-st-john-vianney',
    tags: ['Stewardship', 'Seasonal'],
    featured: false
  },
  {
    title: 'Build Margin for True Hospitality: Lessons from St. Lydia',
    date: 'August 3, 2026',
    dateSort: '2026-08-03',
    excerpt: 'She opened her house to Paul. Hospitality needs a buffer, not just good intentions.',
    readTime: '4 min read',
    link: '/blog/build-margin-for-true-hospitality-lessons-from-st-lydia',
    tags: ['Stewardship', 'Seasonal'],
    featured: false
  },
  {
    title: 'When Little Is Enough: Lessons from the Loaves and Fishes',
    date: 'August 2, 2026',
    dateSort: '2026-08-02',
    excerpt: 'Five loaves looked like scarcity. Live as if little is enough and you can give from what you already have.',
    readTime: '4 min read',
    link: '/blog/when-little-is-enough-lessons-from-the-loaves-and-fishes',
    tags: ['Stewardship', 'Seasonal'],
    featured: false
  },
  {
    title: 'Detachment Creates Real Freedom: Lessons from St. Alphonsus Liguori',
    date: 'August 1, 2026',
    dateSort: '2026-08-01',
    excerpt: 'Status is a quiet tax. Detach from the need to look successful and the FI plan becomes possible.',
    readTime: '4 min read',
    link: '/blog/detachment-creates-real-freedom-lessons-from-st-alphonsus-liguori',
    tags: ['Stewardship', 'Seasonal'],
    featured: false
  },
  {
    title: 'Serve Without the Anxiety: Lessons from Martha, Mary, and Lazarus',
    date: 'July 29, 2026',
    dateSort: '2026-07-29',
    excerpt: 'Martha was anxious and troubled about many things. Build enough slack that service does not crowd out the better part.',
    readTime: '4 min read',
    link: '/blog/serve-without-the-anxiety-lessons-from-martha-mary-and-lazarus',
    tags: ['Stewardship', 'Seasonal'],
    featured: false
  },
  {
    title: 'Build a Money Sabbath into Your Week',
    date: 'July 28, 2026',
    dateSort: '2026-07-28',
    excerpt: 'A practical weekly pause from money decisions so the household can rest, pray, and remember that provision is from the Lord — not from constant optimization.',
    readTime: '5 min read',
    link: '/blog/build-a-money-sabbath-into-your-week',
    tags: ['Stewardship', 'Prayer'],
    featured: false
  },
  {
    title: 'Build Margin to Give Freely: Lessons from St. Pantaleon',
    date: 'July 27, 2026',
    dateSort: '2026-07-27',
    excerpt: 'An unmercenary physician. Give without calculating the return — which only works if the plan already gave.',
    readTime: '4 min read',
    link: '/blog/build-margin-to-give-freely-lessons-from-st-pantaleon',
    tags: ['Stewardship', 'Seasonal'],
    featured: false
  },
  {
    title: 'Lessons from Joachim and Anne for Building a Lasting Family Legacy',
    date: 'July 26, 2026',
    dateSort: '2026-07-26',
    excerpt: 'The parents of the Blessed Virgin show us that ordinary faithfulness in the home is the real foundation of lasting family legacy — including the financial kind.',
    readTime: '4 min read',
    link: '/blog/lessons-from-joachim-and-anne-for-building-a-lasting-family-legacy',
    tags: ['Stewardship', 'Legacy', 'Seasonal'],
    featured: false
  },
  {
    title: 'Treat Your FI Journey Like a Pilgrimage: Lessons from St. James for Catholic Families',
    date: 'July 25, 2026',
    dateSort: '2026-07-25',
    excerpt: 'The Camino reminds us that the path itself shapes us. Catholic families can treat the long work of financial independence the same way — steady steps, not a race.',
    readTime: '4 min read',
    link: '/blog/treat-your-fi-journey-like-a-pilgrimage-lessons-from-st-james-for-catholic-families',
    tags: ['Stewardship', 'Seasonal'],
    featured: false
  },
  {
    title: 'Meal Planning When You’re Tired',
    date: 'July 24, 2026',
    dateSort: '2026-07-24',
    excerpt: 'Simple ways to keep food costs down and the table peaceful even on the days when energy is low.',
    readTime: '5 min read',
    link: '/blog/ai-meal-planning-for-catholic-families-stretch-the-budget-and-accelerate-fi',
    tags: ['Stewardship', 'Parenting', 'AI Tools'],
    featured: false
  },
  {
    title: 'Protect Your Family’s Digital Privacy',
    date: 'July 23, 2026',
    dateSort: '2026-07-23',
    excerpt: 'Practical tools and habits that keep the household’s data safer without turning privacy into a full-time job.',
    readTime: '6 min read',
    link: '/blog/protect-your-familys-digital-privacy-stewardship-tools-for-catholic-fi',
    tags: ['Stewardship', 'Privacy', 'Tools'],
    featured: false
  },
  {
    title: 'Back-to-School Costs Without the Spiral',
    date: 'July 22, 2026',
    dateSort: '2026-07-22',
    excerpt: 'A calm approach to the annual back-to-school spend so it doesn’t derail the savings plan.',
    readTime: '5 min read',
    link: '/blog/catholic-families-ai-for-back-to-school-savings-and-faith-filled-financial-freedom',
    tags: ['Stewardship', 'Parenting', 'AI Tools'],
    featured: false
  },
  {
    title: 'Faithful Parenting on the Path to FI',
    date: 'July 12, 2026',
    dateSort: '2026-07-12',
    excerpt: 'Raising kids while building margin: what actually helps and what turns into pressure.',
    readTime: '5 min read',
    link: '/blog/faithful-parenting-on-the-path-to-fi-creating-margin-for-what-matters-most-in-your-christian-home',
    tags: ['Parenting', 'Stewardship'],
    featured: false
  },
  {
    title: 'Raising Generous, Grounded Kids: Faith, Family Budgeting & Shared Financial Freedom',
    date: 'July 11, 2026',
    dateSort: '2026-07-11',
    excerpt: 'How the daily practices of tithing, saving, and talking openly about money form kids who can both steward and give.',
    readTime: '6 min read',
    link: '/blog/raising-generous-grounded-kids-faith-family-budgeting-and-shared-financial-freedom',
    tags: ['Parenting', 'Stewardship', 'Legacy'],
    featured: false
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
  'AI Tools',
  'Parenting',
  'Prayer',
  'Legacy',
  'Stewardship',
  'Tithing',
  'Couples',
  'Seasonal',
  'Privacy',
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
