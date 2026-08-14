/**
 * Calculator catalog — shared by hub (/calculators) and tool pages (/calculators/:slug).
 * Legacy query ids (?tool=fi) map via LEGACY_TOOL_TO_SLUG for redirects.
 */

export const CALCULATOR_CATALOG = [
  {
    category: 'FI planning',
    description: 'Big-picture numbers: path, rate, reserves, and growth.',
    items: [
      {
        id: 'fi',
        slug: 'fi-path',
        label: 'FI path',
        blurb: 'Full family timeline to financial independence',
        title: 'FI Path Calculator for Catholic Families',
        description:
          'Free FI path calculator for Catholic families — model college, mortgage, tithing, and real household expenses to see years to financial independence.',
      },
      {
        id: 'runway',
        slug: 'savings-rate-runway',
        label: 'Savings rate & runway',
        blurb: 'Surplus % and months of cash coverage',
        title: 'Savings Rate & Runway Calculator',
        description:
          'Calculate your household savings rate and cash runway — how many months of expenses your reserves cover on the path to FI.',
      },
      {
        id: 'emergency',
        slug: 'emergency-fund',
        label: 'Emergency fund',
        blurb: 'Target reserves and months to fill the gap',
        title: 'Emergency Fund Calculator',
        description:
          'Set an emergency fund target and see how long it takes to fill the gap while keeping tithing and FI goals in view.',
      },
      {
        id: 'compound',
        slug: 'compound-growth',
        label: 'Compound growth',
        blurb: 'Principal + monthly investing over time',
        title: 'Compound Growth Calculator',
        description:
          'Project compound growth from principal and monthly contributions — a simple view of how surplus compounds toward FI.',
      },
      {
        id: 'match',
        slug: 'employer-match',
        label: 'Employer match',
        blurb: 'Stop leaving free 401(k) match on the table',
        title: 'Employer 401(k) Match Calculator',
        description:
          'See how much free employer match you may be leaving on the table and what full participation is worth over time.',
      },
    ],
  },
  {
    category: 'Family costs',
    description: 'College, housing, and vehicles for larger households.',
    items: [
      {
        id: 'college',
        slug: 'college-529',
        label: 'College / 529',
        blurb: 'Cost projection + state tax benefit lookup',
        title: 'College & 529 Calculator with State Tax Lookup',
        description:
          'Project college costs and 529 savings with an illustrative state tax benefit lookup for family education planning.',
      },
      {
        id: 'vehicle',
        slug: 'vehicle-tco',
        label: 'Vehicle TCO',
        blurb: 'True cost per year and per mile',
        title: 'Vehicle Total Cost of Ownership Calculator',
        description:
          'Estimate true vehicle cost per year and per mile — purchase, fuel, insurance, maintenance — to free cash flow for FI.',
      },
      {
        id: 'rentbuy',
        slug: 'rent-vs-buy',
        label: 'Rent vs buy',
        blurb: 'Holding-period comparison with equity',
        title: 'Rent vs Buy Calculator',
        description:
          'Compare renting vs buying over a holding period, including equity buildup, for family housing decisions.',
      },
    ],
  },
  {
    category: 'Debt & loans',
    description: 'Payments, payoff order, and refinance math.',
    items: [
      {
        id: 'loan',
        slug: 'loan-payment',
        label: 'Loan payment',
        blurb: 'Mortgage or auto payment + extra principal',
        title: 'Loan Payment Calculator',
        description:
          'Calculate mortgage or auto loan payments and see the impact of extra principal payments on payoff time.',
      },
      {
        id: 'debt',
        slug: 'debt-payoff',
        label: 'Debt payoff',
        blurb: 'Snowball vs avalanche with extra payments',
        title: 'Debt Payoff Calculator (Snowball vs Avalanche)',
        description:
          'Compare debt snowball vs avalanche strategies with extra payments — clear payoff order for Catholic family budgets.',
      },
      {
        id: 'refi',
        slug: 'refinance-break-even',
        label: 'Refinance break-even',
        blurb: 'Months to recover closing costs',
        title: 'Refinance Break-Even Calculator',
        description:
          'Estimate months to recover refinance closing costs so you know whether a refi is worth it for your household.',
      },
    ],
  },
  {
    category: 'Cash flow & rewards',
    description: 'Giving first, then bonuses that actually help.',
    items: [
      {
        id: 'tithe',
        slug: 'tithing-surplus',
        label: 'Tithing & surplus',
        blurb: 'Give first, then measure investable surplus',
        title: 'Tithing & Surplus Calculator for Catholic Families',
        description:
          'Model tithing first, then see investable surplus — a stewardship-first cash flow tool for Catholic households.',
      },
      {
        id: 'bonus',
        slug: 'bonus-value',
        label: 'Bonus value',
        blurb: 'Card/bank bonus after fees and real spend',
        title: 'Credit Card & Bank Bonus Value Calculator',
        description:
          'Value a card or bank bonus after fees and real household spend — only count bonuses you can meet without manufactured spend.',
      },
    ],
  },
];

/** Flat list of all calculator items */
export const ALL_CALCULATORS = CALCULATOR_CATALOG.flatMap((g) => g.items);

/** slug → item */
export const CALCULATOR_BY_SLUG = Object.fromEntries(ALL_CALCULATORS.map((c) => [c.slug, c]));

/** legacy ?tool= id → slug */
export const LEGACY_TOOL_TO_SLUG = Object.fromEntries(ALL_CALCULATORS.map((c) => [c.id, c.slug]));

export function pathForCalculator(slugOrId) {
  const slug = CALCULATOR_BY_SLUG[slugOrId]?.slug || LEGACY_TOOL_TO_SLUG[slugOrId] || slugOrId;
  return `/calculators/${slug}`;
}

export const NUDGE_BY_ID = {
  fi: { pool: 'investing', slot: 1, hint: 'Once you know the timeline, put monthly surplus on autopilot.' },
  runway: { pool: 'investing', slot: 2, hint: 'A strong savings rate needs a place to land — invest the surplus.' },
  college: { pool: 'investing', slot: 3, hint: '529 contributions are only half the story; taxable surplus still compounds.' },
  vehicle: { pool: 'household', slot: 4, hint: 'Lower TCO frees cash flow — stack rewards on necessary spend.' },
  loan: { pool: 'household', slot: 5, hint: 'Payment clarity helps the budget; rewards help everyday purchases.' },
  bonus: { pool: 'household', slot: 6, hint: 'Compare live card and portal offers on the Tools page.' },
};

export const HAS_INTERNAL_NUDGE = new Set([
  'fi',
  'debt',
  'refi',
  'tithe',
  'emergency',
  'compound',
  'rentbuy',
  'match',
]);
