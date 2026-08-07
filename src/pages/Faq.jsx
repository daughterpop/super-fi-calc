import { Link } from 'react-router-dom';
import { BookOpen, Calculator, ChevronDown, Wrench } from 'lucide-react';
import { useState } from 'react';
import SiteHeader from '../components/SiteHeader';

const FAQS = [
  {
    q: 'How does this calculator align with Catholic teaching on stewardship and wealth?',
    a: 'It helps you build financial margin not for selfish accumulation, but to live generously, tithe faithfully, educate your children in the faith, and leave a legacy of virtue and provision. The projections include real family costs so your plan protects what matters most \u2014 time for prayer, service, and presence.',
  },
  {
    q: 'Should I factor tithing or charitable giving into my FI number?',
    a: 'Yes \u2014 many Catholic families treat giving as a non-negotiable expense in their FI planning. This ensures generosity continues even after you stop working for income. The surplus the calculator reveals becomes fuel for parish support, missions, and family hospitality.',
  },
  {
    q: "How can I plan for both college savings and my children's faith formation?",
    a: "Model tuition in the Children section (with realistic inflation). The timeline reveals how disciplined saving creates margin for Catholic education, youth groups, family prayer traditions, and retreats \u2014 so faith formation isn't squeezed out by financial pressure.",
  },
  {
    q: 'What if the numbers show a long road to FI \u2014 have I failed as a faithful steward?',
    a: "Not at all. Faithful stewardship is shown in consistent, prayerful action over time. This tool simply gives you clarity to adjust course, trust Providence more deeply, and celebrate every year of progress. Your legacy is built in the daily 'yes' to wise planning and generous living.",
  },
  {
    q: 'Can this calculator help us leave a generational inheritance while still living generously today?',
    a: 'Absolutely. By modeling large future expenses (college, vehicles, debt payoff) alongside steady investing, you see the true surplus available for both present tithing and long-term family provision. Generational wealth and cheerful giving are not opposites \u2014 they reinforce each other when planned together.',
  },
  {
    q: 'Is financial independence the same as early retirement or the FIRE movement?',
    a: 'Not exactly. Classic FIRE often aims to stop working as early as possible. Via Fidelitatis treats FI as freedom to live your vocation \u2014 more time for Mass, kids, parish, and the work God actually called you to, whether that includes paid work or not. The number is a tool for margin, not an idol of leisure.',
  },
  {
    q: 'How should a large Catholic family think about the 4% rule?',
    a: 'The classic 4% rule is a starting point, not gospel. Larger families often have higher ongoing costs (food, education, vehicles, healthcare) and may prefer a more conservative withdrawal rate or a "floor" of guaranteed income. The calculator lets you stress-test different spending levels so your plan matches your actual household, not a single-person spreadsheet.',
  },
  {
    q: 'Should we prioritize 529 plans, Catholic school tuition, or retirement accounts first?',
    a: 'There is no one-size answer, but a common order is: (1) capture any employer match, (2) build a real emergency fund, (3) fund the next few years of known tuition if cash-flow is tight, then (4) balance long-term retirement and education savings. The calculator helps you see the trade-offs in years-to-FI rather than guessing.',
  },
  {
    q: 'Does pursuing FI conflict with trusting Providence?',
    a: 'No. Scripture and the saints repeatedly pair wise planning with radical trust. Joseph stored grain. The wise virgins brought oil. St. Cajetan and countless others combined hard work with abandonment to God. Building margin is one practical way to reduce the anxiety that crowds out prayer and generosity \u2014 so you can actually trust more, not less.',
  },
  {
    q: 'Where should we start if we feel overwhelmed?',
    a: 'Open the calculator, enter rough numbers (they do not have to be perfect), and look at the years-to-FI result. That single number usually clarifies the next concrete step \u2014 whether it is cutting one expense, increasing surplus by $200/month, or simply talking with your spouse. Clarity reduces overwhelm.',
  },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-100 rounded-xl bg-white overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start justify-between gap-3 px-4 sm:px-5 py-4 text-left hover:bg-gray-50 transition-colors"
        aria-expanded={open}
      >
        <span className="font-medium text-gray-900 text-sm sm:text-base leading-snug">{q}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-emerald-600 mt-0.5 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-4 sm:px-5 pb-4 text-sm sm:text-[15px] text-gray-600 leading-relaxed border-t border-gray-50 pt-3">
          {a}
        </div>
      )}
    </div>
  );
}

export default function Faq() {
  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <SiteHeader />

      <div className="bg-white border-b">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10 sm:py-14 text-center">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] sm:text-xs font-semibold tracking-[1.5px] mb-4">
            FAITH \u2022 FAMILY \u2022 STEWARDSHIP
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Frequently asked questions
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            Practical answers for Catholic families building financial independence so money serves the mission.
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-10 space-y-3">
        {FAQS.map((item) => (
          <FaqItem key={item.q} q={item.q} a={item.a} />
        ))}
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pb-12">
        <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5 sm:p-6 text-center">
          <p className="text-sm sm:text-base text-gray-700 mb-4">
            Ready to see your own number?
          </p>
          <Link
            to="/calculators"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl text-sm transition-colors"
          >
            <Calculator size={16} />
            Open the FI calculator
          </Link>
        </div>

        <p className="text-center text-sm text-gray-500 mt-8 mb-4">While you're here</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link
            to="/calculators"
            className="flex items-center gap-2 justify-center px-4 py-3 bg-white border border-gray-100 hover:border-emerald-200 rounded-xl text-sm font-medium text-gray-800 hover:text-emerald-700 transition-colors"
          >
            <Calculator size={16} className="text-emerald-600" />
            Calculators
          </Link>
          <Link
            to="/blog"
            className="flex items-center gap-2 justify-center px-4 py-3 bg-white border border-gray-100 hover:border-emerald-200 rounded-xl text-sm font-medium text-gray-800 hover:text-emerald-700 transition-colors"
          >
            <BookOpen size={16} className="text-emerald-600" />
            Blog
          </Link>
          <Link
            to="/tools"
            className="flex items-center gap-2 justify-center px-4 py-3 bg-white border border-gray-100 hover:border-emerald-200 rounded-xl text-sm font-medium text-gray-800 hover:text-emerald-700 transition-colors"
          >
            <Wrench size={16} className="text-emerald-600" />
            Tools
          </Link>
        </div>
      </div>
    </div>
  );
}
