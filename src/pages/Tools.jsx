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
    id: 'kalshi',
    name: 'Kalshi',
    category: 'Investing',
    badge: 'Trading credit (varies)',
    headline: 'CFTC-regulated event contracts — trade on real-world outcomes',
    description:
      'Kalshi is a regulated U.S. exchange for event contracts (elections, economics, weather, sports milestones, and more). Sign up through this referral link. New users who complete a small qualifying trade (often around $25 within about a week) can unlock a trading credit — amounts vary and are sometimes advertised up to $500. Prefer Perps? Use the Perps signup path below — same referral.',
    perks: [
      'Referral / welcome trading credit after a qualifying trade (amount varies)',
      'CFTC-regulated event contracts, not traditional sportsbook odds',
      'Trade yes/no outcomes on public data and scheduled events',
      'Perps path available via secondary link (same referral ID)',
      'Not available in every state — check eligibility at signup',
    ],
    cta: 'Join Kalshi',
    href: 'https://kalshi.com/sign-up/?referral=4a67c61f-1958-4a0a-a02c-18aa478ef653&m=true&utm_source=mobile_app&utm_medium=copy&utm_campaign=referral&utm_content=referral_qr_sheet',
    secondaryCta: 'Kalshi Perps',
    secondaryHref:
      'https://kalshi.com/sign-up/?referral=4a67c61f-1958-4a0a-a02c-18aa478ef653&m=true&utm_source=perps_app_int&utm_medium=copy&utm_campaign=referral&utm_content=referral_qr_sheet',
    accent: 'violet',
    icon: 'chart',
    footnote:
      'Event contracts and perps involve risk of loss. Bonus amounts and qualifying trade rules vary and are set by Kalshi. Not available in all U.S. states. Credits are typically for trading, not cash withdrawal. 18+.',
    valueScore: 50,
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
    id: 'amex-bbc',
    name: 'Amex Blue Business Cash',
    category: 'Banking & Payments',
    badge: '$250 after $5k spend',
    headline: 'Business cash-back card — $250 statement credit + ongoing 2%',
    description:
      'American Express Blue Business Cash: spend $5,000 in qualifying purchases within the first 6 months and get a $250 statement credit. After that, earn 2% cash back on the first $50,000 of eligible purchases each calendar year (then 1%). No annual fee. Apply through this referral link and we can both earn rewards if you’re approved.',
    perks: [
      '$250 statement credit after $5,000 in qualifying purchases in the first 6 months',
      '2% cash back on the first $50k of eligible purchases per calendar year, then 1%',
      'No annual fee',
      'Employee cards at no additional cost',
    ],
    cta: 'Apply for Blue Business Cash',
    href: 'https://americanexpress.com/en-us/referral/bluebusinesscash-credit-card?ref=DUSTIHtvYM&XL=MIMNS',
    accent: 'blue',
    icon: 'banknote',
    footnote: 'Referral terms set by American Express. Approval not guaranteed. Welcome offer requires $5,000 in qualifying purchases within first 6 months of Card Membership. Offers and rates subject to change. See Amex site for current details and eligibility.',
    valueScore: 250,
  },
  {
    id: 'amazon-visa',
    name: 'Amazon Visa',
    category: 'Banking & Payments',
    badge: 'Gift card on approval',
    headline: 'Amazon Gift Card instantly upon approval — rewards on Amazon & everyday spend',
    description:
      'Chase Amazon Visa: get an Amazon Gift Card instantly upon approval (no minimum spend for the welcome gift card). Earn elevated rewards at Amazon, Whole Foods, and other everyday categories. No annual fee. Apply through this referral link and we can both benefit if you’re approved.',
    perks: [
      'Amazon Gift Card delivered instantly upon approval',
      'Strong rewards rates at Amazon.com, Whole Foods, and Amazon Fresh (higher with Prime on the Prime Visa variant)',
      'No annual fee',
      'Useful for household Amazon spend without complicating the FI plan',
    ],
    cta: 'Apply for Amazon Visa',
    href: 'https://www.amazon.com/dp/BT00LN946S?externalReferenceId=c404395c-ab3c-4b14-b637-54046a347ee6',
    accent: 'orange',
    icon: 'banknote',
    footnote: 'Welcome gift card amount varies by offer and Prime status (commonly $50 standard / higher for Prime Visa). Approval not guaranteed. Rates, fees, and terms set by Chase / Amazon and subject to change.',
    valueScore: 100,
  },
  {
    id: 'chase-sapphire',
    name: 'Chase Sapphire (Reserve / Preferred)',
    category: 'Banking & Payments',
    badge: '100k Ultimate Rewards',
    headline: 'Earn 100,000 bonus points on Sapphire Reserve or Preferred',
    description:
      'Apply for Chase Sapphire Reserve or Sapphire Preferred through this referral and earn 100,000 bonus Ultimate Rewards points when you meet the welcome offer on either card. Premium travel and everyday value for families protecting FI margin. We can both be rewarded if you\'re approved.',
    perks: [
      '100,000 bonus Ultimate Rewards points on Sapphire Reserve or Preferred after qualifying spend',
      'Strong travel transfer partners and elevated spend categories',
      'Useful for family trips without bloating the FI budget long-term',
      'Chase 5/24 rule may apply — check eligibility before applying',
    ],
    cta: 'Apply for Sapphire Reserve or Preferred',
    href: 'https://www.referyourchasecard.com/19x/RO2CCHE1LT',
    accent: 'indigo',
    icon: 'landmark',
    footnote:
      'Welcome offer amounts and spend requirements vary by card and are shown at application. Annual fees apply (Reserve is premium-priced; Preferred is lower). Approval not guaranteed. Chase 5/24 rule may apply. See Chase site for current rates, fees, and full terms.',
    valueScore: 1000,
  },
  {
    id: 'marriott-bonvoy',
    name: 'Marriott Bonvoy (Chase)',
    category: 'Banking & Payments',
    badge: '125k pts + free night',
    headline: 'Choose Boundless, Bold, or another Marriott Bonvoy card — strong welcome bonuses',
    description:
      'Apply for a Chase Marriott Bonvoy credit card through this referral and pick the one that fits your travel and spend. The Boundless card currently offers 125,000 bonus points plus a Free Night Award (valued up to 50,000 points) after $3,000 in purchases within 3 months. The Bold card is $0 annual fee with 60,000 points after $1,000 spend. We can both earn rewards if you’re approved.',
    perks: [
      'Boundless: 125,000 bonus points + Free Night Award (up to 50k pts) after $3,000 spend in 3 months',
      'Boundless also: up to $100 in airline statement credits (special offer through mid-2027)',
      'Bold: 60,000 points after $1,000 spend in 3 months — $0 annual fee',
      'Automatic elite status and elite night credits with the right card',
    ],
    cta: 'Choose a Marriott Bonvoy Card',
    href: 'https://www.referyourchasecard.com/252v/4CYRWB2LIZ',
    accent: 'indigo',
    icon: 'landmark',
    footnote: 'Offers vary by card and are subject to change. Boundless annual fee $95. Approval not guaranteed. Chase 5/24 rule may apply. See Chase site for current rates, fees, and full terms.',
    valueScore: 800,
  },
];

export default function Tools() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold mb-4">Tools (restoring full catalog…)</h1>
      <p className="text-gray-600 mb-6">Temporary minimal Tools page so the site builds. Full catalog restore in progress.</p>
      <ul className="space-y-3">
        {tools.map((t) => (
          <li key={t.id} className="bg-white border rounded-xl p-4">
            <div className="font-semibold">{t.name}</div>
            <div className="text-sm text-gray-600">{t.badge}</div>
            <a href={t.href} target="_blank" rel="noopener noreferrer" className="text-emerald-600 text-sm font-medium">
              {t.cta}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
