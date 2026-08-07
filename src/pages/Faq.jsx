import { Link } from 'react-router-dom';
import { BookOpen, Calculator, ChevronDown, Wrench } from 'lucide-react';
import { useState } from 'react';
import SiteHeader from '../components/SiteHeader';

const FAQS = [
  {
    q: 'What is Via Fidelitatis?',
    a: 'Via Fidelitatis means “the way of fidelity.” It is a small set of practical tools and writing for Catholic families who want financial independence so money serves the mission — Mass, kids, generosity, and vocation — instead of the other way around.',
  },
  {
    q: 'Who is this for?',
    a: 'Catholic households (and other Christian families of goodwill) who are juggling real costs — tuition, mortgage, vehicles, tithing — and want clearer numbers without adopting a secular FIRE lifestyle. Large families, dual-income couples, and single-income homes are all welcome.',
  },
  {
    q: 'Is financial independence the same as early retirement or FIRE?',
    a: 'Not exactly. Classic FIRE often aims to stop working as early as possible. Here, FI means freedom to live your vocation: more margin for prayer, presence, parish, and the work God actually called you to — whether or not that includes paid work. The number is a tool for margin, not an idol of leisure.',
  },
  {
    q: 'Does pursuing FI conflict with trusting Providence?',
    a: 'No. Scripture and the saints repeatedly pair wise planning with radical trust. Joseph stored grain; the wise virgins brought oil. Building margin is one practical way to reduce the anxiety that crowds out prayer and generosity — so you can trust more, not less.',
  },
  {
    q: 'Should tithing and charitable giving be part of an FI plan?',
    a: 'Yes. Many Catholic families treat giving as a non-negotiable expense, not an afterthought. Planning for it keeps generosity alive after the paycheck stops and turns surplus into fuel for parish, missions, and hospitality.',
  },
  {
    q: 'How should a large Catholic family think about the 4% rule?',
    a: 'Treat 4% as a starting point, not gospel. Larger households often have higher ongoing costs (food, education, vehicles, healthcare) and may prefer a more conservative withdrawal rate or a floor of guaranteed income. Stress-test your real spending, not a single-person spreadsheet.',
  },
  {
    q: 'What should we prioritize: emergency fund, retirement, 529s, or Catholic school tuition?',
    a: 'A common order is: capture any employer match, build a real emergency fund, cover the next few years of known tuition if cash-flow is tight, then balance long-term retirement and education savings. Clarity on years-to-FI usually reveals the right next dollar better than a rigid rule.',
  },
  {
    q: 'What will I find on this site?',
    a: 'A free FI calculator built for family realities, a blog of faith-filled stewardship essays (including seasonal saint reflections), practical tools and referral perks that free up cash, and this FAQ. Everything is aimed at margin for vocation, not lifestyle inflation.',
  },
  {
    q: 'Is anything for sale? Are the referral links affiliate?',
    a: 'The calculator and articles are free. Some tool recommendations include referral links; if you use them, the site may earn a small commission at no extra cost to you. Those offers are chosen because they can legitimately help a household free up cash or simplify money management on the path to FI.',
  },
  {
    q: 'Where should we start if we feel overwhelmed?',
    a: 'Start with the calculator and rough numbers — they do not need to be perfect. One clear “years to FI” figure usually makes the next step obvious: one expense to cut, one surplus to increase, or a honest conversation with your spouse. Then read a post or two that matches your season of life.',
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
            FAITH · FAMILY · STEWARDSHIP
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Frequently asked questions
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            What Via Fidelitatis is, who it is for, and how Catholic families can pursue financial independence without losing the plot.
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
            Ready for clearer numbers?
          </p>
          <Link
            to="/calculators"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl text-sm transition-colors"
          >
            <Calculator size={16} />
            Open the FI calculator
          </Link>
        </div>

        <p className="text-center text-sm text-gray-500 mt-8 mb-4">Explore the site</p>
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
