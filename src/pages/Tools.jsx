import { Link } from 'react-router-dom';
import { TrendingUp, ArrowRight, Gift, Shield, Sparkles, ExternalLink, Landmark, BarChart3, Wallet, Bitcoin, Send, Banknote, HeartHandshake, ShoppingBag, Gem } from 'lucide-react';

const tools = [
  {
    id: 'robinhood',
    name: 'Robinhood',
    category: 'Investing',
    badge: 'Free stocks',
    headline: 'Start investing with free stocks worth up to $200',
    description:
      'Commission-free trading, easy mobile app, and a solid starting point for building long-term wealth. Open an account through this link and get free stock(s) after your first investment.',
    perks: [
      'Free stocks worth up to $200 when you fund and invest',
      'Commission-free stock & ETF trades',
      'Beginner-friendly app',
      'Great for dollar-cost averaging toward FI',
    ],
    cta: 'Claim Your Free Stock',
    href: 'https://join.robinhood.com/dustinh-1bff5a',
    accent: 'emerald',
    icon: 'trending',
  },
  {
    id: 'wealthfront',
    name: 'Wealthfront',
    category: 'Cash + Investing',
    badge: 'Limited-time referral',
    headline: 'Boost cash APY and get investing deposits matched',
    description:
      'Automated investing and a high-yield Cash Account in one place. When you sign up through this referral, you both can earn a +0.75% APY boost, a 0.50% investing deposit match — or both. Limited-time offer.',
    perks: [
      'Cash Account boost to 4.05% APY (+0.75% for up to 3 months, up to $150k) when you open a Cash or taxable investing account',
      'Up to $500 invested on you — 0.50% match on investing deposits for 3 months (up to $100k deposited) with a taxable individual account',
      'Automated portfolio management built for long-term FI',
      'Clean cash + investing experience for busy families',
    ],
    cta: 'Join Wealthfront with This Link',
    href: 'https://www.wealthfront.com/c/affiliates/invited/AFFD-AL7T-QSBZ-J0Q8',
    accent: 'indigo',
    icon: 'landmark',
    footnote: 'Base APY as of 7/24/26 and subject to change. Offer terms set by Wealthfront.',
  },
  {
    id: 'moomoo',
    name: 'Moomoo',
    category: 'Trading + Research',
    badge: 'Up to $1,000 NVDA',
    headline: 'Welcome bonus: free NVDA stock + promotional cash APY',
    description:
      'Powerful charts, research tools, and $0 commission U.S. stock trading. Sign up through this link to unlock the current welcome rewards — deposit tiers can earn free NVDA stock (from $30 at $500 deposited up to $1,000 at higher levels) plus promotional APY on uninvested cash.',
    perks: [
      'Deposit $500+ for $30 in NVDA stock; higher tiers up to $1,000 in NVDA (offer terms apply)',
      'Promotional high APY on uninvested cash (e.g. up to ~8.1% during the welcome period — subject to change)',
      '$0 commission U.S. stock & ETF trading for eligible residents',
      'Advanced charts and market data useful for serious FI investors',
    ],
    cta: 'Open Moomoo with This Link',
    href: 'https://j.moomoo.com/02NLJm',
    accent: 'orange',
    icon: 'chart',
    footnote: 'Welcome / referral terms set by Moomoo Financial Inc. Deposit thresholds, stock values, and APY rates change — check current offer on sign-up. Investing involves risk.',
  },
  {
    id: 'monarch',
    name: 'Monarch Money',
    category: 'Budgeting',
    badge: '50% off year 1',
    headline: '50% off your first year of a Core subscription',
    description:
      'All-in-one money app for tracking spending, budgeting, net worth, investments, and shared household finances. Use this referral link to get 50% off your first year of Core — ideal for Catholic families who want clear stewardship of every dollar.',
    perks: [
      '50% off first year of Core when you sign up through this link',
      'Track accounts, budgets, goals, and investments in one place',
      'Collaborate with your spouse at no extra cost',
      'Ad-free; does not sell your financial data',
    ],
    cta: 'Get 50% Off Monarch',
    href: 'https://monarch.com/referral/hvup58srp1?r_source=share',
    accent: 'teal',
    icon: 'wallet',
    footnote: 'Discount applies to first year of Core subscription per Monarch’s referral terms. Offer subject to change.',
  },
  {
    id: 'coinbase',
    name: 'Coinbase',
    category: 'Crypto',
    badge: '$20 BTC · up to $50 USDC',
    headline: 'Retail: $20 Bitcoin · Advanced: up to $50 USDC',
    description:
      'Trusted crypto exchange for buying, selling, and holding. Two referral paths: the standard app is best for beginners (new users can get $20 in Bitcoin after a qualifying trade). Coinbase Advanced is for more active traders — trade in the first 14 days and earn up to $50 in USDC based on volume.',
    perks: [
      'Standard: $20 in Bitcoin for new users after a qualifying transaction',
      'Advanced: $5 / $20 / $50 USDC for >$100 / >$5k / >$10k volume in first 14 days',
      'Trade Bitcoin, Ethereum, and hundreds of other assets',
      'Insured custody for crypto stored on Coinbase servers',
    ],
    cta: 'Get $20 in Bitcoin',
    href: 'https://coinbase.com/join/EJUZBJS?src=ios-link',
    secondaryCta: 'Advanced: Up to $50 USDC',
    secondaryHref: 'https://advanced.coinbase.com/join/6V396V9',
    accent: 'blue',
    icon: 'bitcoin',
    footnote: 'Limited-time offers. New customers only; must complete qualifying activity. Advanced rewards based on trading volume in first 14 days. Terms set by Coinbase; rewards not guaranteed.',
  },
  {
    id: 'gemini',
    name: 'Gemini',
    category: 'Crypto',
    badge: '$50 in crypto',
    headline: 'Claim an extra $50 in crypto when you qualify',
    description:
      'Regulated U.S. crypto exchange from the Winklevoss twins. Sign up through this link and claim an extra $50 in crypto when you get approved for the Gemini Credit Card or trade at least $100.',
    perks: [
      'Extra $50 in crypto when approved for the Gemini Credit Card or you trade $100+',
      'Full-reserve exchange with strong U.S. regulatory focus',
      'Trade major cryptocurrencies with a clean app experience',
      'Gemini Credit Card option for crypto rewards on spending',
    ],
    cta: 'Join Gemini — Claim $50',
    href: 'https://exchange.gemini.com/register?referral=kewa4resr&type=referral&unified=true',
    accent: 'cyan',
    icon: 'gem',
    footnote: 'Offer requires signup via referral and either Gemini Credit Card approval or $100+ in trades. Terms set by Gemini; crypto rewards and eligibility can change.',
  },
  {
    id: 'venmo',
    name: 'Venmo',
    category: 'Payments',
    badge: '$5 each',
    headline: 'Join Venmo — you and a friend can each get $5',
    description:
      'Simple peer-to-peer payments for splitting bills, sending gifts, and everyday money between friends and family. Sign up through this link, complete a qualifying payment of $5 or more from a linked bank or card, and both of you can earn a $5 reward (terms apply).',
    perks: [
      'New users and referrers can each earn $5 after a qualifying $5+ payment',
      'Quick P2P payments with bank or card funding',
      'Handy for family allowance tracking and shared expenses',
      'Limit applies (e.g. one reward per new user; referrer caps apply)',
    ],
    cta: 'Join Venmo with This Link',
    href: 'https://get.venmo.com/RfoiNhtu24b',
    accent: 'sky',
    icon: 'send',
    footnote: 'Reward requires signup via referral link and a qualifying personal payment of $5+ using a linked funding source. Terms: https://payp.al/ref — offer subject to change.',
  },
  {
    id: 'cashapp',
    name: 'Cash App',
    category: 'Payments',
    badge: 'Get $5',
    headline: 'Get $5 when you send $5+ with Cash App',
    description:
      'Fast mobile payments, debit card, and investing features in one app. Create your account with referral code 42DKBR2 (or use this link), send $5 or more, and get $5 — terms apply.',
    perks: [
      'Get $5 when you send $5+ after signing up with code 42DKBR2',
      'Instant peer-to-peer payments',
      'Optional Cash App Card and stock/Bitcoin investing tools',
      'Useful for allowances, reimbursements, and everyday transfers',
    ],
    cta: 'Join Cash App — Code 42DKBR2',
    href: 'https://cash.app/refer/42DKBR2',
    accent: 'lime',
    icon: 'banknote',
    footnote: 'Offer requires new account via referral and a qualifying send of $5+. Terms apply and may change.',
  },
  {
    id: 'daffy',
    name: 'Daffy',
    category: 'Giving',
    badge: '$25 for charity',
    headline: 'Get $25 for charity when you make your first contribution',
    description:
      'Modern donor-advised fund that makes charitable giving simple and habitual — give to nearly any U.S. nonprofit, involve family, and build generosity into your FI plan. Join through this invite and get $25 added for charity after Daffy receives your first contribution.',
    perks: [
      '$25 for charity when Daffy receives your first contribution',
      'Donor-advised fund built for everyday families, not just the ultra-wealthy',
      'Invite spouse and kids so giving becomes a shared family practice',
      'Give to nearly any U.S. public charity from one place',
    ],
    cta: 'Join Daffy — $25 for Charity',
    href: 'https://www.daffy.org/dhimmer1/invite',
    accent: 'rose',
    icon: 'heart',
    footnote: 'Reward credits to your Daffy charitable account after first contribution. See Daffy’s referral terms. Offer subject to change.',
  },
  {
    id: 'kudos',
    name: 'Kudos',
    category: 'Cashback',
    badge: '$20 bonus',
    headline: 'Get $20 when you shop $30+ at a Boost merchant',
    description:
      'Cashback shopping portal and browser extension that passes through affiliate commissions. Sign up with code Super_FI, then make a qualifying purchase of $30 or more at a Kudos Boost merchant to unlock the $20 referral bonus (confirmation can take 60–120 days).',
    perks: [
      '$20 referral bonus after a $30+ purchase at a Boost merchant',
      'Use referral code Super_FI at signup',
      'Cashback / rewards on everyday shopping',
      'Chrome extension + app for one-click activation',
    ],
    cta: 'Join Kudos — Code Super_FI',
    href: 'https://www.joinkudos.com',
    accent: 'violet',
    icon: 'shopping',
    footnote: 'Bonus issues after merchant confirms the qualifying Boost purchase (often 60–120 days). $30 minimum cashout typically applies. Terms set by Kudos.',
  },
];

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
  if (type === 'heart') return <HeartHandshake className="text-white" size={24} />;
  if (type === 'shopping') return <ShoppingBag className="text-white" size={24} />;
  return <TrendingUp className="text-white" size={24} />;
}

export default function Tools() {
  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 py-2.5 sm:py-4 flex justify-between items-center gap-2">
          <Link to="/" className="font-bold text-emerald-600 hover:text-emerald-700 shrink-0 leading-tight">
            <span className="sm:hidden text-base">Super FI</span>
            <span className="hidden sm:inline text-2xl">Super FI Calculator</span>
          </Link>
          <div className="flex items-center gap-3 sm:gap-8 text-sm">
            <Link to="/" className="text-gray-700 hover:text-emerald-600 font-medium whitespace-nowrap">Calculator</Link>
            <Link to="/blog" className="text-gray-700 hover:text-emerald-600 font-medium whitespace-nowrap">Blog</Link>
            <Link to="/tools" className="text-emerald-600 font-medium whitespace-nowrap">Tools</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] sm:text-xs font-semibold tracking-[1.5px] mb-4">
            STEWARDSHIP TOOLS • REFERRAL PERKS
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 leading-tight">
            Tools to Speed Up Your FI Journey
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            Hand-picked apps and platforms we actually use. Some links include referral bonuses — you get a perk, and it helps keep Super FI free.
          </p>
        </div>

        <div className="space-y-6">
          {tools.map((tool) => {
            const a = accentClasses(tool.accent);
            return (
              <div key={tool.id} className={`bg-white rounded-2xl sm:rounded-3xl shadow-sm border ${a.border} overflow-hidden transition-all`}>
                <div className={`bg-gradient-to-r ${a.soft} px-5 sm:px-8 pt-6 sm:pt-8 pb-4`}>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${a.badge}`}>
                      <Gift size={12} />
                      {tool.badge}
                    </span>
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">{tool.category}</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 shrink-0 ${a.icon} rounded-xl flex items-center justify-center shadow-sm`}>
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
                  {tool.footnote && (
                    <p className="text-xs text-gray-400 mt-3">{tool.footnote}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 sm:mt-12 p-5 sm:p-6 bg-white rounded-2xl border border-gray-100 text-center">
          <div className="flex justify-center mb-3">
            <Shield className="text-gray-400" size={22} />
          </div>
          <p className="text-sm text-gray-600 leading-relaxed max-w-lg mx-auto">
            These are affiliate / referral links. If you sign up through them, you often get a bonus and Super FI may earn a small commission — at no extra cost to you. We only list tools we'd use ourselves on the path to faithful financial independence.
          </p>
        </div>

        <div className="mt-8 text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium text-sm">
            Back to FI Calculator
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
