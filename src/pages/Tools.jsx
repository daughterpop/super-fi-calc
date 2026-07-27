import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  TrendingUp,
  ArrowRight,
  Gift,
  Shield,
  Sparkles,
  ExternalLink,
  Landmark,
  BarChart3,
  Wallet,
  Bitcoin,
  Send,
  Banknote,
  HeartHandshake,
  ShoppingBag,
  Gem,
  Tag,
  UtensilsCrossed,
  Building2,
  Camera,
  Percent,
  MapPin,
  SlidersHorizontal,
  ArrowUpDown,
  Search,
  Smartphone,
  Lock,
  Calendar,
} from 'lucide-react';
import SiteHeader from '../components/SiteHeader';

const tools = [
  {
    id: 'robinhood',
    name: 'Robinhood',
    category: 'Investing',
    badge: 'Up to $200 free stock',
    headline: 'Open an account and get free stock after your first investment',
    description:
      'Commission-free stock and ETF trading in a simple app — built for long-term investing, not day-trading noise. Use this link so new accounts can receive free stock worth up to $200 after funding and making a first investment.',
    perks: [
      'Free stock(s) worth up to $200 after you fund and invest (new accounts via this link)',
      'Zero commissions on U.S. stocks and ETFs',
      'Clean mobile app that’s easy for beginners',
      'Solid starting point for dollar-cost averaging toward FI',
    ],
    cta: 'Claim Free Stock on Robinhood',
    href: 'https://join.robinhood.com/dustinh-1bff5a',
    accent: 'emerald',
    icon: 'trending',
    valueScore: 200,
  },
  {
    id: 'wealthfront',
    name: 'Wealthfront',
    category: 'Investing',
    badge: 'APY boost + deposit match',
    headline: 'Automated investing + cash — with a temporary APY boost and deposit match',
    description:
      'Set-it-and-forget-it investing plus a high-yield Cash Account in one place. Sign up through this referral and you can both unlock a limited-time +0.75% APY boost on cash, a 0.50% investing deposit match, or both.',
    perks: [
      '+0.75% APY boost on Cash (up to 3 months / $150k) when you open a Cash or taxable investing account',
      '0.50% match on investing deposits for 3 months (up to $100k) — up to $500 invested for you',
      'Automated portfolios designed for long-term wealth building',
      'One clean app for cash and investing — ideal for busy families',
    ],
    cta: 'Get the Wealthfront Referral Bonus',
    href: 'https://www.wealthfront.com/c/affiliates/invited/AFFD-AL7T-QSBZ-J0Q8',
    accent: 'indigo',
    icon: 'landmark',
    footnote: 'Base APY as of 7/24/26 and subject to change. Offer terms set by Wealthfront.',
    valueScore: 500,
  },
  {
    id: 'moomoo',
    name: 'Moomoo',
    category: 'Investing',
    badge: 'Up to $1,000 in NVDA',
    headline: 'Deposit and unlock free NVDA stock plus promo cash APY',
    description:
      'Serious charts, research tools, and $0 commission U.S. stock trading. Sign up with this link to access the current welcome offer — deposit tiers can unlock free NVIDIA stock (from $30 at $500 deposited, up to $1,000 at higher levels) plus promotional APY on uninvested cash.',
    perks: [
      'Free NVDA stock by deposit tier: from $30 (at $500+) up to $1,000 at higher levels',
      'Promotional high APY on uninvested cash during the welcome period (rates change)',
      '$0 commission U.S. stock and ETF trading for eligible residents',
      'Advanced charts and market data for investors who want deeper research',
    ],
    cta: 'Open Moomoo & Claim NVDA Bonus',
    href: 'https://j.moomoo.com/02NLJm',
    accent: 'orange',
    icon: 'chart',
    footnote: 'Welcome / referral terms set by Moomoo Financial Inc. Deposit thresholds, stock values, and APY rates change — check current offer on sign-up. Investing involves risk.',
    valueScore: 1000,
  },
  {
    id: 'monarch',
    name: 'Monarch Money',
    category: 'Budgeting',
    badge: '50% off year 1',
    headline: 'See every dollar in one place — half off your first year of Core',
    description:
      'All-in-one money app for spending, budgets, net worth, investments, and shared household finances. Use this referral to get 50% off your first year of Core — clear stewardship without the spreadsheet chaos.',
    perks: [
      '50% off first year of Core when you join through this link',
      'Track accounts, budgets, goals, and investments together',
      'Invite your spouse at no extra cost',
      'Ad-free and does not sell your financial data',
    ],
    cta: 'Get 50% Off Monarch Core',
    href: 'https://monarch.com/referral/hvup58srp1?r_source=share',
    accent: 'teal',
    icon: 'wallet',
    footnote: 'Discount applies to first year of Core subscription per Monarch’s referral terms. Offer subject to change.',
    valueScore: 60,
  },
  {
    id: 'coinbase',
    name: 'Coinbase',
    category: 'Investing',
    badge: '$20 BTC or up to $50 USDC',
    headline: 'Buy crypto the trusted way — pick the path that fits you',
    description:
      'One of the most established U.S. crypto platforms. New users on the standard app can get $20 in Bitcoin after a qualifying first transaction. More active traders can use Coinbase Advanced and earn up to $50 in USDC based on volume in the first 14 days.',
    perks: [
      'Standard app: $20 in Bitcoin after a qualifying first transaction',
      'Advanced: $5 / $20 / $50 USDC for >$100 / >$5k / >$10k volume in first 14 days',
      'Trade Bitcoin, Ethereum, and hundreds of other assets',
      'Insured custody for crypto held on Coinbase servers',
    ],
    cta: 'Get $20 in Bitcoin',
    href: 'https://coinbase.com/join/EJUZBJS?src=ios-link',
    secondaryCta: 'Advanced: Up to $50 USDC',
    secondaryHref: 'https://advanced.coinbase.com/join/6V396V9',
    accent: 'blue',
    icon: 'bitcoin',
    footnote: 'Limited-time offers. New customers only; must complete qualifying activity. Advanced rewards based on trading volume in first 14 days. Terms set by Coinbase; rewards not guaranteed.',
    valueScore: 50,
  },
  {
    id: 'gemini',
    name: 'Gemini',
    category: 'Investing',
    badge: 'Extra $50 in crypto',
    headline: 'Regulated U.S. exchange — earn $50 crypto when you qualify',
    description:
      'Full-reserve crypto exchange from the Winklevoss twins with a strong regulatory focus. Sign up through this link and claim an extra $50 in crypto when you’re approved for the Gemini Credit Card or trade at least $100.',
    perks: [
      'Extra $50 in crypto after Gemini Credit Card approval or $100+ in trades',
      'Full-reserve exchange with strong U.S. regulatory posture',
      'Clean app for major cryptocurrencies',
      'Optional Gemini Credit Card for crypto rewards on everyday spending',
    ],
    cta: 'Join Gemini — Claim $50 Crypto',
    href: 'https://exchange.gemini.com/register?referral=kewa4resr&type=referral&unified=true',
    accent: 'cyan',
    icon: 'gem',
    footnote: 'Offer requires signup via referral and either Gemini Credit Card approval or $100+ in trades. Terms set by Gemini; crypto rewards and eligibility can change.',
    valueScore: 50,
  },
  {
    id: 'venmo',
    name: 'Venmo',
    category: 'Banking & Payments',
    badge: '$5 for you & a friend',
    headline: 'Split bills and send money — both of you can earn $5',
    description:
      'The go-to app for splitting dinner, gifts, and everyday transfers with friends and family. Sign up with this link, complete a qualifying $5+ payment from a linked bank or card, and both of you can earn a $5 reward.',
    perks: [
      'You and the new user can each get $5 after a qualifying $5+ payment',
      'Fast peer-to-peer payments funded by bank or card',
      'Handy for family allowances and shared expenses',
      'Social payment history that keeps small transfers organized',
    ],
    cta: 'Join Venmo & Get $5',
    href: 'https://get.venmo.com/RfoiNhtu24b',
    accent: 'sky',
    icon: 'send',
    footnote: 'Reward requires signup via referral link and a qualifying personal payment of $5+ using a linked funding source. Terms: https://payp.al/ref — offer subject to change.',
    valueScore: 5,
  },
  {
    id: 'cashapp',
    name: 'Cash App',
    category: 'Banking & Payments',
    badge: 'Get $5',
    headline: 'Send $5+ after signup and get $5 back',
    description:
      'Instant mobile payments, optional debit card, and light investing tools in one app. Create your account with code 42DKBR2 (or this link), send $5 or more, and get $5 — simple and fast.',
    perks: [
      'Get $5 when you send $5+ after signing up with code 42DKBR2',
      'Instant peer-to-peer payments',
      'Optional Cash App Card plus stock and Bitcoin investing tools',
      'Useful for allowances, reimbursements, and everyday sends',
    ],
    cta: 'Join Cash App with Code 42DKBR2',
    href: 'https://cash.app/refer/42DKBR2',
    accent: 'lime',
    icon: 'banknote',
    footnote: 'Offer requires new account via referral and a qualifying send of $5+. Terms apply and may change.',
    valueScore: 5,
  },
  {
    id: 'chime',
    name: 'Chime',
    category: 'Banking & Payments',
    badge: 'Get $100',
    headline: 'Fee-friendly mobile banking — earn $100 when you qualify',
    description:
      'Checking and savings without monthly fees, plus early direct deposit on eligible paychecks. Sign up through this link and get $100 when you complete Chime’s qualifying steps (terms apply).',
    perks: [
      'Get $100 when you join and meet the current offer requirements',
      'No monthly fees or overdraft fees on eligible accounts',
      'Get paid up to 2 days early with qualifying direct deposit',
      'Mobile-first checking and savings designed for everyday use',
    ],
    cta: 'Join Chime — Get $100',
    href: 'https://www.chime.com/r/dustinhimmerich/?c=s',
    accent: 'green',
    icon: 'building',
    footnote: 'Bonus requires qualifying activity per Chime’s current referral terms. Offer subject to change.',
    valueScore: 100,
  },
  {
    id: 'daffy',
    name: 'Daffy',
    category: 'Giving',
    badge: '$25 for charity',
    headline: 'Make giving a habit — $25 added for charity on your first gift',
    description:
      'A modern donor-advised fund for everyday families, not just the ultra-wealthy. Give to nearly any U.S. nonprofit, involve your spouse and kids, and build generosity into your FI plan. Join with this invite and get $25 for charity after Daffy receives your first contribution.',
    perks: [
      '$25 credited for charity after your first contribution is received',
      'Donor-advised fund designed for regular family giving',
      'Invite spouse and kids so generosity becomes shared practice',
      'Support nearly any U.S. public charity from one place',
    ],
    cta: 'Join Daffy — $25 for Charity',
    href: 'https://www.daffy.org/dhimmer1/invite',
    accent: 'rose',
    icon: 'heart',
    footnote: 'Reward credits to your Daffy charitable account after first contribution. See Daffy’s referral terms. Offer subject to change.',
    valueScore: 25,
  },
  {
    id: 'kudos',
    name: 'Kudos',
    category: 'Shopping & Rewards',
    badge: '$20 after $30 shop',
    headline: 'Shop through Kudos, earn cashback, unlock $20 with code Super_FI',
    description:
      'Cashback portal and browser extension that routes affiliate commissions back to you. Sign up with code Super_FI, then make a $30+ purchase at a Kudos Boost merchant to unlock the $20 referral bonus (merchant confirmation can take 60–120 days).',
    perks: [
      '$20 referral bonus after a $30+ purchase at a Boost merchant',
      'Enter code Super_FI at signup',
      'Cashback on everyday online shopping',
      'Chrome extension and app for one-click activation',
    ],
    cta: 'Join Kudos with Code Super_FI',
    href: 'https://www.joinkudos.com',
    accent: 'violet',
    icon: 'shopping',
    footnote: 'Bonus issues after merchant confirms the qualifying Boost purchase (often 60–120 days). $30 minimum cashout typically applies. Terms set by Kudos.',
    valueScore: 20,
  },
  {
    id: 'rakuten',
    name: 'Rakuten',
    category: 'Shopping & Rewards',
    badge: 'Up to $50 signup bonus',
    headline: 'Cash back at thousands of stores — plus a signup bonus after you shop',
    description:
      'One of the most reliable cash-back portals for Amazon, Target, hotels, and more. Join through this link; new members who make a qualifying purchase (often around $50 within 90 days — amount varies by promo) can earn a signup bonus paid as real cash or gift cards.',
    perks: [
      'Signup bonus after a qualifying first purchase (commonly ~$50 when you spend ~$50 — check current promo)',
      'Cash back at thousands of major retailers',
      'Browser extension activates cash back automatically',
      'Paid quarterly as cash or gift cards',
    ],
    cta: 'Join Rakuten & Earn Cash Back',
    href: 'https://www.rakuten.com/r/DHIMME9?eeid=44749',
    accent: 'red',
    icon: 'shopping',
    footnote: 'Bonus amount and spend requirement vary by promotion and are shown at signup. New members only. Terms set by Rakuten.',
    valueScore: 50,
  },
  {
    id: 'capitaloneshopping',
    name: 'Capital One Shopping',
    category: 'Shopping & Rewards',
    badge: 'Auto coupons + rewards',
    headline: 'Never miss a coupon code — automatic savings at checkout',
    description:
      'Free browser extension and app that finds coupon codes, tracks prices, and unlocks Capital One Shopping rewards. Install through this referral link and stack it with portals like Rakuten for everyday online savings.',
    perks: [
      'Tests and applies coupon codes at checkout when available',
      'Price-drop alerts so you can buy smarter',
      'Shopping rewards across thousands of online stores',
      'Quick install — works in the background while you shop',
    ],
    cta: 'Install Capital One Shopping',
    href: 'https://capitaloneshopping.com/r/3045fb28-0a5c-4f54-91b0-5f52a22652ee',
    accent: 'slate',
    icon: 'tag',
    footnote: 'Referral and signup bonuses vary by promotion. Terms set by Capital One Shopping.',
    valueScore: 30,
  },
  {
    id: 'honey',
    name: 'Honey',
    category: 'Shopping & Rewards',
    badge: 'Coupons + Honey Gold',
    headline: 'PayPal’s coupon tool — auto-apply codes and earn rewards',
    description:
      'Honey (a PayPal service) tests working coupon codes at checkout and can earn Honey Gold on eligible purchases. Install free through this link and let it work while you shop the stores you already use.',
    perks: [
      'Automatically finds and applies coupon codes when available',
      'Earn Honey Gold rewards on eligible stores',
      'Works across thousands of online retailers',
      'Free browser extension with a one-click setup',
    ],
    cta: 'Add Honey to Your Browser',
    href: 'https://www.joinhoney.com/ref/55s1vcv',
    accent: 'orange',
    icon: 'percent',
    footnote: 'Honey is a PayPal service. Rewards and coupon availability vary by store. Terms set by Honey / PayPal.',
    valueScore: 15,
  },
  {
    id: 'fetch',
    name: 'Fetch',
    category: 'Shopping & Rewards',
    badge: 'Bonus on 1st receipt',
    headline: 'Snap any receipt, earn gift cards — we both get a bonus',
    description:
      'Point your phone at grocery, gas, or online order receipts and turn them into gift-card points. 6M+ five-star reviews and $1B+ in points awarded. Sign up with this link (code QQGAF3) and both of you get a bonus when you scan your first receipt.',
    perks: [
      'Both of you get a bonus on your first scanned receipt',
      'Works with almost any store receipt — groceries, gas, online orders',
      'Redeem points for popular gift cards',
      'Code QQGAF3 if the app asks at signup',
    ],
    cta: 'Join Fetch — Scan Your First Receipt',
    href: 'https://referral.fetch.com/vvv3/referralqr?code=QQGAF3',
    accent: 'fuchsia',
    icon: 'camera',
    footnote: 'Referral bonus requires signup via link and scanning a first receipt. Terms set by Fetch Rewards.',
    valueScore: 10,
  },
  {
    id: 'inkind',
    name: 'inKind',
    category: 'Dining',
    badge: 'Up to ~20% back',
    headline: 'Dine out smarter — rewards at thousands of restaurants',
    description:
      'Restaurant rewards app with up to about 20% back at participating spots nationwide. New guests often see a promo such as $25 off a $50+ meal — check the current offer when you join through this link, and stack it with your dining credit card when you can.',
    perks: [
      'Earn up to ~20% back at participating restaurants',
      'New-guest promos common (e.g. $25 off $50+ — varies by market)',
      'Thousands of restaurants, bars, and cafés',
      'Stack with credit-card dining rewards for extra value',
    ],
    cta: 'Join inKind for Dining Rewards',
    href: 'https://app.inkind.com/refer/MV6NGAWF',
    accent: 'amber',
    icon: 'utensils',
    footnote: 'Promos and reward rates vary by market and restaurant. Terms set by inKind.',
    valueScore: 25,
  },
  {
    id: 'franki',
    name: 'Franki',
    category: 'Dining',
    badge: '$10 on first purchase',
    headline: 'Discover local spots — get $10 when you make your first purchase',
    description:
      'Find restaurants and experiences nearby, link your card, and earn cash back when you dine — no special checkout process. Sign up through this link and get $10 when you make your first purchase.',
    perks: [
      '$10 reward when you make your first purchase after signing up via this link',
      'Cash back at participating local restaurants and experiences',
      'Link your card once; earn automatically when you dine',
      'Pairs well with inKind for family nights out',
    ],
    cta: 'Join Franki — Get $10',
    href: 'https://frankiapp.com/referral?user=stormyknightjumps420',
    accent: 'pink',
    icon: 'mappin',
    footnote: 'Referral reward of $10 after first qualifying purchase. Cash-back rates vary by market. Terms set by Franki.',
    valueScore: 10,
  },
  {
    id: 'mintmobile',
    name: 'Mint Mobile',
    category: 'Wireless Savings',
    badge: '$15 credit',
    headline: 'Stop overpaying for wireless — free up cash for FI and family',
    description:
      'Mint Mobile offers simple, affordable plans on a major network. Switch and stop spending so much on your wireless bill. Use this referral link to get $15 in renewal credit, then put the ongoing savings toward investing, tithing, or family priorities.',
    perks: [
      '$15 renewal credit when you sign up through this link',
      'Plans often start around $15/mo equivalent (prepaid, multi-month options)',
      'Same major-network coverage many families already use',
      'Easy way to free up $20–50+/month for your FI plan or generosity',
    ],
    cta: 'Switch to Mint & Get $15 Credit',
    href: 'https://my.mintmobile.com/refer/n5SgKMM',
    accent: 'teal',
    icon: 'phone',
    footnote: 'Referral credit appears after activation (typically ~15 days). Offer terms set by Mint Mobile. Availability and plan pricing subject to change.',
    valueScore: 15,
  },
  {
    id: 'surfshark',
    name: 'Surfshark',
    category: 'Privacy & Security',
    badge: 'Up to 3 free months',
    headline: 'Protect your family’s privacy online — free months when you start a plan',
    description:
      'Fast, unlimited-device VPN for secure browsing, safer public Wi-Fi, and extra privacy for the whole household. Sign up through this friend link and get free months added to your plan.',
    perks: [
      '1 free month when you purchase a 1-month plan',
      '3 free months when you purchase a 12-month plan',
      '3 free months when you purchase a 24-month plan',
      'Unlimited devices on one account — practical for a family',
    ],
    cta: 'Get Surfshark + Free Months',
    href: 'https://surfshark.club/friend/sgSt5YqV',
    accent: 'slate',
    icon: 'shield',
    footnote: 'Free months apply to the plan you purchase via this friend link. Offer terms set by Surfshark.',
    valueScore: 35,
  },
  {
    id: 'incogni',
    name: 'Incogni',
    category: 'Privacy & Security',
    badge: 'Up to 58% off annual',
    headline: 'Remove your family’s data from broker sites — friends-only discount',
    description:
      'Automated service that finds and removes your personal info from 420+ data brokers and people-search sites (and keeps removing it when it reappears). Use this link for a deep friends-only discount — code GIFTOFPRIVACY is applied at checkout. Family plans cover up to 5 members.',
    perks: [
      'Up to 58% off annual plans (and 16% off monthly) via this friends link',
      'Automated + recurring removals from 420+ data brokers',
      'Family plans protect up to 5 people from one account',
      '30-day money-back guarantee',
    ],
    cta: 'Get Incogni at Friends Pricing',
    href: 'https://incogni.cello.so/C622q7UjoeJ',
    accent: 'indigo',
    icon: 'lock',
    footnote: 'Discount auto-applied via referral code GIFTOFPRIVACY. Offer terms set by Incogni. 30-day money-back guarantee applies.',
    valueScore: 90,
  },
  {
    id: 'skylight',
    name: 'Skylight Calendar',
    category: 'Family & Home',
    badge: '$40 off',
    headline: 'Get the whole family organized — $40 off your Calendar',
    description:
      'Skylight Calendar helps get the whole family organized with chore charts, meal planning, lists, and shared schedules on a simple wall display. Use this link for $40 off your Calendar.',
    perks: [
      '$40 off your Skylight Calendar through this referral link',
      'Chore charts, meal planning, and shared lists in one place',
      'Wall-mounted display the whole family can see and use',
      'Practical tool for busy households managing kids, meals, and routines',
    ],
    cta: 'Get $40 Off Skylight Calendar',
    href: 'https://refer.skylightframe.com/mad3w9w8',
    accent: 'teal',
    icon: 'calendar',
    footnote: 'Discount applied via referral link. Offer terms set by Skylight.',
    valueScore: 40,
  },
];

const CATEGORY_ORDER = [
  'Investing',
  'Banking & Payments',
  'Budgeting',
  'Shopping & Rewards',
  'Dining',
  'Giving',
  'Wireless Savings',
  'Privacy & Security',
  'Family & Home',
];
const CATEGORIES = ['All', ...CATEGORY_ORDER];

function accentClasses(accent) {
  const map = {
    emerald: {
      badge: 'bg-emerald-100 text-emerald-700',
      icon: 'bg-emerald-500',
      button: 'bg-emerald-600 hover:bg-emerald-700',
      buttonOutline: 'border-emerald-600 text-emerald-700 hover:bg-emerald-50',
      border: 'border-emerald-100 hover:border-emerald-200',
      soft: 'from-emerald-50 to-green-50',
      sparkle: 'text-emerald-500',
    },
    indigo: {
      badge: 'bg-indigo-100 text-indigo-700',
      icon: 'bg-indigo-600',
      button: 'bg-indigo-600 hover:bg-indigo-700',
      buttonOutline: 'border-indigo-600 text-indigo-700 hover:bg-indigo-50',
      border: 'border-indigo-100 hover:border-indigo-200',
      soft: 'from-indigo-50 to-violet-50',
      sparkle: 'text-indigo-500',
    },
    orange: {
      badge: 'bg-orange-100 text-orange-700',
      icon: 'bg-orange-500',
      button: 'bg-orange-600 hover:bg-orange-700',
      buttonOutline: 'border-orange-600 text-orange-700 hover:bg-orange-50',
      border: 'border-orange-100 hover:border-orange-200',
      soft: 'from-orange-50 to-amber-50',
      sparkle: 'text-orange-500',
    },
    teal: {
      badge: 'bg-teal-100 text-teal-700',
      icon: 'bg-teal-600',
      button: 'bg-teal-600 hover:bg-teal-700',
      buttonOutline: 'border-teal-600 text-teal-700 hover:bg-teal-50',
      border: 'border-teal-100 hover:border-teal-200',
      soft: 'from-teal-50 to-cyan-50',
      sparkle: 'text-teal-500',
    },
    blue: {
      badge: 'bg-blue-100 text-blue-700',
      icon: 'bg-blue-600',
      button: 'bg-blue-600 hover:bg-blue-700',
      buttonOutline: 'border-blue-600 text-blue-700 hover:bg-blue-50',
      border: 'border-blue-100 hover:border-blue-200',
      soft: 'from-blue-50 to-sky-50',
      sparkle: 'text-blue-500',
    },
    cyan: {
      badge: 'bg-cyan-100 text-cyan-700',
      icon: 'bg-cyan-600',
      button: 'bg-cyan-600 hover:bg-cyan-700',
      buttonOutline: 'border-cyan-600 text-cyan-700 hover:bg-cyan-50',
      border: 'border-cyan-100 hover:border-cyan-200',
      soft: 'from-cyan-50 to-sky-50',
      sparkle: 'text-cyan-500',
    },
    sky: {
      badge: 'bg-sky-100 text-sky-700',
      icon: 'bg-sky-500',
      button: 'bg-sky-600 hover:bg-sky-700',
      buttonOutline: 'border-sky-600 text-sky-700 hover:bg-sky-50',
      border: 'border-sky-100 hover:border-sky-200',
      soft: 'from-sky-50 to-blue-50',
      sparkle: 'text-sky-500',
    },
    lime: {
      badge: 'bg-lime-100 text-lime-800',
      icon: 'bg-lime-500',
      button: 'bg-lime-600 hover:bg-lime-700',
      buttonOutline: 'border-lime-600 text-lime-800 hover:bg-lime-50',
      border: 'border-lime-100 hover:border-lime-200',
      soft: 'from-lime-50 to-green-50',
      sparkle: 'text-lime-600',
    },
    green: {
      badge: 'bg-green-100 text-green-700',
      icon: 'bg-green-600',
      button: 'bg-green-600 hover:bg-green-700',
      buttonOutline: 'border-green-600 text-green-700 hover:bg-green-50',
      border: 'border-green-100 hover:border-green-200',
      soft: 'from-green-50 to-emerald-50',
      sparkle: 'text-green-500',
    },
    rose: {
      badge: 'bg-rose-100 text-rose-700',
      icon: 'bg-rose-500',
      button: 'bg-rose-600 hover:bg-rose-700',
      buttonOutline: 'border-rose-600 text-rose-700 hover:bg-rose-50',
      border: 'border-rose-100 hover:border-rose-200',
      soft: 'from-rose-50 to-pink-50',
      sparkle: 'text-rose-500',
    },
    violet: {
      badge: 'bg-violet-100 text-violet-700',
      icon: 'bg-violet-600',
      button: 'bg-violet-600 hover:bg-violet-700',
      buttonOutline: 'border-violet-600 text-violet-700 hover:bg-violet-50',
      border: 'border-violet-100 hover:border-violet-200',
      soft: 'from-violet-50 to-purple-50',
      sparkle: 'text-violet-500',
    },
    red: {
      badge: 'bg-red-100 text-red-700',
      icon: 'bg-red-600',
      button: 'bg-red-600 hover:bg-red-700',
      buttonOutline: 'border-red-600 text-red-700 hover:bg-red-50',
      border: 'border-red-100 hover:border-red-200',
      soft: 'from-red-50 to-rose-50',
      sparkle: 'text-red-500',
    },
    slate: {
      badge: 'bg-slate-100 text-slate-700',
      icon: 'bg-slate-700',
      button: 'bg-slate-800 hover:bg-slate-900',
      buttonOutline: 'border-slate-700 text-slate-800 hover:bg-slate-50',
      border: 'border-slate-100 hover:border-slate-200',
      soft: 'from-slate-50 to-gray-50',
      sparkle: 'text-slate-500',
    },
    amber: {
      badge: 'bg-amber-100 text-amber-800',
      icon: 'bg-amber-500',
      button: 'bg-amber-600 hover:bg-amber-700',
      buttonOutline: 'border-amber-600 text-amber-800 hover:bg-amber-50',
      border: 'border-amber-100 hover:border-amber-200',
      soft: 'from-amber-50 to-orange-50',
      sparkle: 'text-amber-600',
    },
    fuchsia: {
      badge: 'bg-fuchsia-100 text-fuchsia-700',
      icon: 'bg-fuchsia-600',
      button: 'bg-fuchsia-600 hover:bg-fuchsia-700',
      buttonOutline: 'border-fuchsia-600 text-fuchsia-700 hover:bg-fuchsia-50',
      border: 'border-fuchsia-100 hover:border-fuchsia-200',
      soft: 'from-fuchsia-50 to-pink-50',
      sparkle: 'text-fuchsia-500',
    },
    pink: {
      badge: 'bg-pink-100 text-pink-700',
      icon: 'bg-pink-500',
      button: 'bg-pink-600 hover:bg-pink-700',
      buttonOutline: 'border-pink-600 text-pink-700 hover:bg-pink-50',
      border: 'border-pink-100 hover:border-pink-200',
      soft: 'from-pink-50 to-rose-50',
      sparkle: 'text-pink-500',
    },
  };
  return map[accent] || map.emerald;
}

function ToolIcon({ type }) {
  if (type === 'landmark') return <Landmark className="text-white" size={24} />;
  if (type === 'chart') return <BarChart3 className="text-white" size={24} />;
  if (type === 'wallet') return <Wallet className="text-white" size={24} />;
  if (type === 'bitcoin') return <Bitcoin className="text-white" size={24} />;
  if (type === 'gem') return <Gem className="text-white" size={24} />;
  if (type === 'send') return <Send className="text-white" size={24} />;
  if (type === 'banknote') return <Banknote className="text-white" size={24} />;
  if (type === 'building') return <Building2 className="text-white" size={24} />;
  if (type === 'heart') return <HeartHandshake className="text-white" size={24} />;
  if (type === 'shopping') return <ShoppingBag className="text-white" size={24} />;
  if (type === 'tag') return <Tag className="text-white" size={24} />;
  if (type === 'utensils') return <UtensilsCrossed className="text-white" size={24} />;
  if (type === 'camera') return <Camera className="text-white" size={24} />;
  if (type === 'percent') return <Percent className="text-white" size={24} />;
  if (type === 'mappin') return <MapPin className="text-white" size={24} />;
  if (type === 'phone') return <Smartphone className="text-white" size={24} />;
  if (type === 'shield') return <Shield className="text-white" size={24} />;
  if (type === 'lock') return <Lock className="text-white" size={24} />;
  if (type === 'calendar') return <Calendar className="text-white" size={24} />;
  return <TrendingUp className="text-white" size={24} />;
}

export default function Tools() {
  const [category, setCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default');
  const [search, setSearch] = useState('');

  const filteredTools = useMemo(() => {
    const q = search.trim().toLowerCase();
    let list = tools.filter((t) => {
      if (category !== 'All' && t.category !== category) return false;
      if (q) {
        const hay = `${t.name} ${t.headline} ${t.badge} ${t.category} ${t.description}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });

    if (sortBy === 'value-desc') {
      list = [...list].sort((a, b) => (b.valueScore || 0) - (a.valueScore || 0));
    } else if (sortBy === 'value-asc') {
      list = [...list].sort((a, b) => (a.valueScore || 0) - (b.valueScore || 0));
    } else if (sortBy === 'name') {
      list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    }

    return list;
  }, [category, sortBy, search]);

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <SiteHeader showReferralStrip={false} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] sm:text-xs font-semibold tracking-[1.5px] mb-4">
            STEWARDSHIP TOOLS • REFERRAL PERKS
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 leading-tight">
            Tools to Speed Up Your FI Journey
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            Hand-picked apps and platforms we actually use. Each card spells out what it is and what you get when you join through these links — you get the perk, and it helps keep Via Fidelitatis free.
          </p>
        </div>

        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search tools…"
              className="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-200 rounded-xl bg-white text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>

          <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <SlidersHorizontal size={16} className="text-emerald-600 shrink-0" />
            <span>Category</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => {
              const active = category === cat;
              const count =
                cat === 'All' ? tools.length : tools.filter((t) => t.category === cat).length;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all border ${
                    active
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-emerald-300 hover:text-emerald-700'
                  }`}
                >
                  {cat}
                  <span className={`ml-1.5 ${active ? 'text-emerald-100' : 'text-gray-400'}`}>{count}</span>
                </button>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-1">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <ArrowUpDown size={16} className="text-emerald-600 shrink-0" />
              <label htmlFor="sort-tools" className="font-medium text-gray-700">
                Sort
              </label>
              <select
                id="sort-tools"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="default">Default order</option>
                <option value="value-desc">Highest value first</option>
                <option value="value-asc">Lowest value first</option>
                <option value="name">Name A–Z</option>
              </select>
            </div>
            <p className="text-xs text-gray-500">
              Showing {filteredTools.length} of {tools.length}
              {category !== 'All' ? ` · ${category}` : ''}
              {search.trim() ? ` · “${search.trim()}”` : ''}
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {filteredTools.length === 0 ? (
            <div className="bg-white rounded-2xl border border-gray-100 p-8 text-center text-gray-500">
              No tools match these filters. Try clearing search or choosing All.
            </div>
          ) : (
            filteredTools.map((tool) => {
              const a = accentClasses(tool.accent);
              return (
                <div
                  key={tool.id}
                  className={`bg-white rounded-2xl sm:rounded-3xl shadow-sm border ${a.border} overflow-hidden transition-all`}
                >
                  <div className={`bg-gradient-to-r ${a.soft} px-5 sm:px-8 pt-6 sm:pt-8 pb-4`}>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${a.badge}`}
                      >
                        <Gift size={12} />
                        {tool.badge}
                      </span>
                      <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                        {tool.category}
                      </span>
                    </div>
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 shrink-0 ${a.icon} rounded-xl flex items-center justify-center shadow-sm`}
                      >
                        <ToolIcon type={tool.icon} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{tool.name}</h2>
                        <p className="text-sm sm:text-base text-gray-700 mt-1 font-medium">{tool.headline}</p>
                      </div>
                    </div>
                  </div>

                  <div className="px-5 sm:px-8 py-5 sm:py-6">
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5">{tool.description}</p>
                    <ul className="space-y-2.5 mb-6">
                      {tool.perks.map((perk, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                          <Sparkles className={`${a.sparkle} shrink-0 mt-0.5`} size={16} />
                          <span>{perk}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={tool.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 ${a.button} text-white font-semibold rounded-xl transition-all shadow-md hover:shadow-lg text-sm sm:text-base`}
                      >
                        {tool.cta}
                        <ExternalLink size={18} />
                      </a>
                      {tool.secondaryCta && tool.secondaryHref && (
                        <a
                          href={tool.secondaryHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 border-2 ${a.buttonOutline} bg-white font-semibold rounded-xl transition-all text-sm sm:text-base`}
                        >
                          {tool.secondaryCta}
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                    {tool.footnote && <p className="text-xs text-gray-400 mt-3">{tool.footnote}</p>}
                  </div>
                </div>
              );
            })
          )}
        </div>

        <div className="mt-10 sm:mt-12 p-5 sm:p-6 bg-white rounded-2xl border border-gray-100 text-center">
          <div className="flex justify-center mb-3">
            <Shield className="text-gray-400" size={22} />
          </div>
          <p className="text-sm text-gray-600 leading-relaxed max-w-lg mx-auto">
            These are affiliate / referral links. If you sign up through them, you often get a bonus and Via Fidelitatis may earn a
            small commission — at no extra cost to you. We only list tools we'd use ourselves on the path to faithful
            financial independence. Value sort ranks approximate signup / referral bonus potential and may change with
            offers.
          </p>
        </div>

        <div className="mt-8 text-center">
          <Link to="/calculators" className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium text-sm">
            Go to FI Calculators
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
