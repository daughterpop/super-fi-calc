import { ALL_CALCULATORS } from '../data/calculators';
import { defaultOgImage } from './ogUrl';

export const SITE = 'https://www.viafidelitatis.com';
export const SITE_NAME = 'Via Fidelitatis';
export const DEFAULT_OG = defaultOgImage();
export const AUTHOR = 'Dustin Himmerich';

export const STATIC = {
  '/': {
    title: 'Via Fidelitatis — Faithful FI Tools for Catholic Families',
    description:
      'Practical financial independence tools for Catholic families. FI calculator for college, mortgage, and family expenses — plus faith-filled stewardship resources.',
    type: 'website',
  },
  '/calculators': {
    title: 'FI & Family Calculators for Catholic Households | Via Fidelitatis',
    description:
      'Free calculators for Catholic families: FI path, savings rate, college/529 with state tax lookup, vehicle TCO, debt payoff, tithing surplus, employer match, and more.',
    type: 'website',
  },
  '/blog': {
    title: 'Blog — Faith, Family & Financial Independence | Via Fidelitatis',
    description:
      'Faith-filled insights on financial independence, family stewardship, tithing, and building generational legacy for Catholic households.',
    type: 'website',
  },
  '/tools': {
    title: 'Stewardship Tools & Referral Perks | Via Fidelitatis',
    description:
      'Investing, budgeting, privacy, and household tools Catholic families use on the path to FI — with clear referral perks.',
    type: 'website',
  },
  '/subscribe': {
    title: 'Subscribe — Get The Ledger on Sunday | Via Fidelitatis',
    description:
      'Join the Via Fidelitatis list for The Ledger every Sunday — a short household read for Catholic families on the path to FI.',
    type: 'website',
  },
  '/ledger': {
    title: 'The Ledger — Sunday Surplus for Catholic Households | Via Fidelitatis',
    description:
      'A short Sunday read for Catholic households: what matters in the budget this week, whether a deal is worth it, and a note from the Mass readings.',
    type: 'website',
  },
  '/faq': {
    title: 'FAQ — Catholic Financial Independence Questions | Via Fidelitatis',
    description:
      'What Via Fidelitatis is, who it is for, and how Catholic families can pursue FI without losing the plot — tithing, Providence, 4% rule, and more.',
    type: 'website',
  },
};

export const CALCULATOR_HOWTO = {
  '@type': 'HowTo',
  name: "How to Calculate Your Family's Path to Financial Independence",
  description:
    'Use the free Via Fidelitatis FI calculator to model college, mortgage, vehicles, and real household expenses — including tithing — and see years to financial independence for Catholic families.',
  image: DEFAULT_OG,
  totalTime: 'PT10M',
  estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '0' },
  tool: { '@type': 'HowToTool', name: 'Via Fidelitatis FI Calculator' },
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Enter current finances', text: 'Input your current investable assets and any outstanding debts.', url: `${SITE}/calculators/fi-path` },
    { '@type': 'HowToStep', position: 2, name: 'Set annual spending and surplus', text: 'Enter household spending and monthly surplus after tithing.', url: `${SITE}/calculators/fi-path` },
    { '@type': 'HowToStep', position: 3, name: 'Model major family expenses', text: 'Add college, mortgage, vehicles, and other large planned expenses.', url: `${SITE}/calculators/fi-path` },
    { '@type': 'HowToStep', position: 4, name: 'Review your years-to-FI projection', text: 'See how many years until investments can support the household.', url: `${SITE}/calculators/fi-path` },
    { '@type': 'HowToStep', position: 5, name: 'Take the next faithful steps', text: 'Adjust inputs with your spouse and put surplus to work.', url: `${SITE}/calculators/fi-path` },
  ],
};

export const CALCULATOR_FAQ = {
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is Via Fidelitatis?', acceptedAnswer: { '@type': 'Answer', text: 'Via Fidelitatis means “the way of fidelity.” Tools and writing for Catholic families who want financial independence so money serves Mass, kids, generosity, and vocation.' } },
    { '@type': 'Question', name: 'Who is this for?', acceptedAnswer: { '@type': 'Answer', text: 'Catholic households juggling tuition, mortgage, vehicles, and tithing who want clearer numbers without adopting a secular FIRE lifestyle.' } },
    { '@type': 'Question', name: 'Is financial independence the same as early retirement or FIRE?', acceptedAnswer: { '@type': 'Answer', text: 'Not exactly. Here FI means freedom to live your vocation — margin for prayer, presence, and parish, whether or not that includes paid work.' } },
    { '@type': 'Question', name: 'Does pursuing FI conflict with trusting Providence?', acceptedAnswer: { '@type': 'Answer', text: 'No. Wise planning and radical trust belong together. Building margin can reduce the anxiety that crowds out prayer and generosity.' } },
    { '@type': 'Question', name: 'Should tithing and charitable giving be part of an FI plan?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Treat giving as a non-negotiable expense so generosity stays alive after the paycheck stops.' } },
    { '@type': 'Question', name: 'How should a large Catholic family think about the 4% rule?', acceptedAnswer: { '@type': 'Answer', text: 'Treat 4% as a starting point. Larger households often prefer a more conservative withdrawal rate and should stress-test real spending.' } },
    { '@type': 'Question', name: 'What should we prioritize: emergency fund, retirement, 529s, or Catholic school tuition?', acceptedAnswer: { '@type': 'Answer', text: 'A common order is employer match, emergency fund, near-term tuition if cash-flow is tight, then long-term retirement and education savings.' } },
    { '@type': 'Question', name: 'Is anything for sale? Are the referral links affiliate?', acceptedAnswer: { '@type': 'Answer', text: 'The calculator and articles are free. Some tool recommendations include referral links that may earn a small commission at no extra cost to you.' } },
  ],
};

export const CALCULATOR_ITEM_LIST = {
  '@type': 'ItemList',
  name: 'Via Fidelitatis Calculators',
  numberOfItems: ALL_CALCULATORS.length,
  itemListElement: ALL_CALCULATORS.map((c, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: c.label,
    url: `${SITE}/calculators/${c.slug}`,
  })),
};
