import { Link } from 'react-router-dom';
import { TrendingUp, ArrowRight, Gift, Shield, Sparkles, ExternalLink, Landmark, BarChart3 } from 'lucide-react';

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
];

function accentClasses(accent) {
  const map = {
    emerald: {
      badge: 'bg-emerald-100 text-emerald-700',
      icon: 'bg-emerald-500',
      button: 'bg-emerald-600 hover:bg-emerald-700',
      border: 'border-emerald-100 hover:border-emerald-200',
      soft: 'from-emerald-50 to-green-50',
      sparkle: 'text-emerald-500',
    },
    indigo: {
      badge: 'bg-indigo-100 text-indigo-700',
      icon: 'bg-indigo-600',
      button: 'bg-indigo-600 hover:bg-indigo-700',
      border: 'border-indigo-100 hover:border-indigo-200',
      soft: 'from-indigo-50 to-violet-50',
      sparkle: 'text-indigo-500',
    },
    orange: {
      badge: 'bg-orange-100 text-orange-700',
      icon: 'bg-orange-500',
      button: 'bg-orange-600 hover:bg-orange-700',
      border: 'border-orange-100 hover:border-orange-200',
      soft: 'from-orange-50 to-amber-50',
      sparkle: 'text-orange-500',
    },
  };
  return map[accent] || map.emerald;
}

function ToolIcon({ type }) {
  if (type === 'landmark') return <Landmark className="text-white" size={24} />;
  if (type === 'chart') return <BarChart3 className="text-white" size={24} />;
  return <TrendingUp className="text-white" size={24} />;
}

export default function Tools() {
  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 py-2.5 sm:py-4 flex justify-between items-center gap-2">
          <Link
            to="/"
            className="font-bold text-emerald-600 hover:text-emerald-700 shrink-0 leading-tight"
          >
            <span className="sm:hidden text-base">Super FI</span>
            <span className="hidden sm:inline text-2xl">Super FI Calculator</span>
          </Link>
          <div className="flex items-center gap-3 sm:gap-8 text-sm">
            <Link to="/" className="text-gray-700 hover:text-emerald-600 font-medium whitespace-nowrap">
              Calculator
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-emerald-600 font-medium whitespace-nowrap">
              Blog
            </Link>
            <Link to="/tools" className="text-emerald-600 font-medium whitespace-nowrap">
              Tools
            </Link>
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
              <div
                key={tool.id}
                className={`bg-white rounded-2xl sm:rounded-3xl shadow-sm border ${a.border} overflow-hidden transition-all`}
              >
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

                  <a
                    href={tool.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 ${a.button} text-white font-semibold rounded-xl transition-all shadow-md hover:shadow-lg text-sm sm:text-base`}
                  >
                    {tool.cta}
                    <ExternalLink size={18} />
                  </a>

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
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium text-sm"
          >
            Back to FI Calculator
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
