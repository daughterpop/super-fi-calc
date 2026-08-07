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
import SiteFooter from '../components/SiteFooter';
import { tools } from '../data/tools';

const CATEGORY_ORDER = [
  'Investing',
  'Banking & Payments',
  'Budgeting',
  'Shopping & Rewards',
  'Dining',
  'Giving',
  'Wireless Savings',
  'Privacy & Security',
  'Health & Training',
  'Family & Home',
  'Travel & Hosting',
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
                    <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
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
                          className={`inline-flex items-center gap-2 w-full sm:w-auto px-6 py-3.5 border-2 ${a.buttonOutline} bg-white font-semibold rounded-xl transition-all text-sm sm:text-base`}
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
            small commission — at no extra cost to you. We only list tools we would use ourselves on the path to faithful
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
      <SiteFooter />
    </div>
  );
}
