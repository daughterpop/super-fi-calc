import { Link } from 'react-router-dom';
import { TrendingUp, ArrowRight, Gift, Shield, Sparkles, ExternalLink } from 'lucide-react';

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
    },
  };
  return map[accent] || map.emerald;
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
                      <Gift size={12} />{tool.badge}
                    </span>
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">{tool.category}</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 shrink-0 ${a.icon} rounded-xl flex items-center justify-center shadow-sm`}>
                      <TrendingUp className="text-white" size={24} />
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
                        <Sparkles className="text-emerald-500 shrink-0 mt-0.5" size={16} />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={tool.href} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 ${a.button} text-white font-semibold rounded-xl transition-all shadow-md hover:shadow-lg text-sm sm:text-base`}>
                    {tool.cta}
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 sm:mt-12 p-5 sm:p-6 bg-white rounded-2xl border border-gray-100 text-center">
          <div className="flex justify-center mb-3"><Shield className="text-gray-400" size={22} /></div>
          <p className="text-sm text-gray-600 leading-relaxed max-w-lg mx-auto">
            These are affiliate / referral links. If you sign up through them, you often get a bonus and Super FI may earn a small commission — at no extra cost to you. We only list tools we'd use ourselves on the path to faithful financial independence.
          </p>
        </div>

        <div className="mt-8 text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium text-sm">
            Back to FI Calculator <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
