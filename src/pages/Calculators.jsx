import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Heart, BookOpen, Wrench, Users, TrendingUp } from 'lucide-react';
import SubscribeForm from '../components/SubscribeForm';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import SuperFiCalculator from '../Super-Fi-Calculator.jsx';
import LoanPaymentCalculator from '../components/LoanPaymentCalculator';
import BonusValueCalculator from '../components/BonusValueCalculator';
import College529Calculator from '../components/College529Calculator';
import VehicleTcoCalculator from '../components/VehicleTcoCalculator';
import SavingsRateRunwayCalculator from '../components/SavingsRateRunwayCalculator';
import DebtPayoffCalculator from '../components/DebtPayoffCalculator';
import RefinanceBreakEvenCalculator from '../components/RefinanceBreakEvenCalculator';
import TithingSurplusCalculator from '../components/TithingSurplusCalculator';
import EmergencyFundCalculator from '../components/EmergencyFundCalculator';
import CompoundGrowthCalculator from '../components/CompoundGrowthCalculator';
import RentVsBuyCalculator from '../components/RentVsBuyCalculator';
import EmployerMatchCalculator from '../components/EmployerMatchCalculator';
import SoftSellNudge from '../components/calculators/SoftSellNudge';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/ui/accordion';
import { getReferral } from '../data/referrals';

export const CALCULATOR_CATALOG = [
  {
    category: 'FI planning',
    description: 'Big-picture numbers: path, rate, reserves, and growth.',
    items: [
      { id: 'fi', label: 'FI path', blurb: 'Full family timeline to financial independence' },
      { id: 'runway', label: 'Savings rate & runway', blurb: 'Surplus % and months of cash coverage' },
      { id: 'emergency', label: 'Emergency fund', blurb: 'Target reserves and months to fill the gap' },
      { id: 'compound', label: 'Compound growth', blurb: 'Principal + monthly investing over time' },
      { id: 'match', label: 'Employer match', blurb: 'Stop leaving free 401(k) match on the table' },
    ],
  },
  {
    category: 'Family costs',
    description: 'College, housing, and vehicles for larger households.',
    items: [
      { id: 'college', label: 'College / 529', blurb: 'Cost projection + state tax benefit lookup' },
      { id: 'vehicle', label: 'Vehicle TCO', blurb: 'True cost per year and per mile' },
      { id: 'rentbuy', label: 'Rent vs buy', blurb: 'Holding-period comparison with equity' },
    ],
  },
  {
    category: 'Debt & loans',
    description: 'Payments, payoff order, and refinance math.',
    items: [
      { id: 'loan', label: 'Loan payment', blurb: 'Mortgage or auto payment + extra principal' },
      { id: 'debt', label: 'Debt payoff', blurb: 'Snowball vs avalanche with extra payments' },
      { id: 'refi', label: 'Refinance break-even', blurb: 'Months to recover closing costs' },
    ],
  },
  {
    category: 'Cash flow & rewards',
    description: 'Giving first, then bonuses that actually help.',
    items: [
      { id: 'tithe', label: 'Tithing & surplus', blurb: 'Give first, then measure investable surplus' },
      { id: 'bonus', label: 'Bonus value', blurb: 'Card/bank bonus after fees and real spend' },
    ],
  },
];

const NUDGE_BY_ID = {
  fi: { pool: 'investing', slot: 1, hint: 'Once you know the timeline, put monthly surplus on autopilot.' },
  runway: { pool: 'investing', slot: 2, hint: 'A strong savings rate needs a place to land — invest the surplus.' },
  college: { pool: 'investing', slot: 3, hint: '529 contributions are only half the story; taxable surplus still compounds.' },
  vehicle: { pool: 'household', slot: 4, hint: 'Lower TCO frees cash flow — stack rewards on necessary spend.' },
  loan: { pool: 'household', slot: 5, hint: 'Payment clarity helps the budget; rewards help everyday purchases.' },
  bonus: { pool: 'household', slot: 6, hint: 'Compare live card and portal offers on the Tools page.' },
};

const HAS_INTERNAL_NUDGE = new Set(['debt', 'refi', 'tithe', 'emergency', 'compound', 'rentbuy', 'match']);

export default function Calculators() {
  const [activeId, setActiveId] = useState('fi');
  const investStep = getReferral({ slot: 3, pool: 'investing' });

  useEffect(() => {
    const onTab = (e) => {
      if (e?.detail) {
        setActiveId(e.detail);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
    window.addEventListener('vf-calc-tab', onTab);
    return () => window.removeEventListener('vf-calc-tab', onTab);
  }, []);

  const faqs = [
    {
      q: 'Which calculator should I use first?',
      a: 'Start with Savings rate & runway for a quick pulse, then FI path for the full family timeline. Use College/529, Vehicle TCO, and Debt payoff when those decisions are live.',
      link: '/blog/how-to-get-started-on-your-fi-path',
    },
    {
      q: 'How does this align with Catholic stewardship?',
      a: 'These tools build margin for vocation — prayer, presence, education, and generosity — not accumulation for its own sake. The tithing calculator puts giving in the plan before surplus.',
      link: '/blog/why-fi-for-catholics',
    },
    {
      q: 'Should tithing count as an expense in FI math?',
      a: 'Many Catholic families treat giving as non-negotiable. Model it inside expenses so surplus is what remains after fidelity.',
      link: '/blog/build-margin-to-give-freely-lessons-from-st-pantaleon',
    },
    {
      q: 'Are the state 529 tax numbers exact?',
      a: 'They are illustrative planning figures. Caps, credits, parity rules, and income limits change — confirm with your plan and tax preparer before filing.',
      link: null,
    },
    {
      q: 'Do bonus and card calculators encourage debt?',
      a: 'No. Bonuses only help if you pay in full and meet spend with purchases you already needed. The bonus tool flags manufactured spend explicitly.',
      link: '/blog/triple-savings-online-purchases',
    },
  ];

  const nextSteps = [
    {
      icon: Users,
      title: 'Pray & talk with your spouse',
      body: 'Share the timeline. Ask: Does this plan free us for more prayer, presence, and generosity?',
      cta: null,
    },
    {
      icon: BookOpen,
      title: 'Read a related insight',
      body: 'Deepen the why behind the numbers with practical faith + FI writing.',
      links: [
        { to: '/blog/how-to-get-started-on-your-fi-path', label: 'How to get started' },
        { to: '/blog/why-fi-for-catholics', label: 'Why FI for Catholics' },
      ],
    },
    {
      icon: TrendingUp,
      title: 'Put surplus to work',
      body: investStep.cardBody,
      cta: { href: investStep.href, label: investStep.cardCta, external: true },
    },
    {
      icon: Wrench,
      title: 'Explore trusted tools',
      body: 'Investing, banking, shopping, and privacy tools with referral perks we actually use.',
      cta: { to: '/tools', label: 'See recommended tools' },
    },
  ];

  const nudge = NUDGE_BY_ID[activeId];

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <SiteHeader />

      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Calculators</h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Free planning tools for Catholic families — FI path, college, debt, vehicles, tithing, and more. Pick a category, then run the numbers.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-8">
        {CALCULATOR_CATALOG.map((group) => (
          <section key={group.category}>
            <h2 className="text-lg font-bold text-gray-900 mb-1">{group.category}</h2>
            <p className="text-sm text-gray-500 mb-3">{group.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {group.items.map((item) => {
                const active = activeId === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setActiveId(item.id);
                      document.getElementById('calc-active')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className={`text-left rounded-xl border px-4 py-3 transition ${
                      active
                        ? 'border-emerald-500 bg-emerald-50 shadow-sm'
                        : 'border-gray-100 bg-white hover:border-emerald-200'
                    }`}
                  >
                    <p className={`font-semibold text-sm ${active ? 'text-emerald-800' : 'text-gray-900'}`}>{item.label}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{item.blurb}</p>
                  </button>
                );
              })}
            </div>
          </section>
        ))}

        <div id="calc-active" className="scroll-mt-4">
          {activeId === 'fi' && <SuperFiCalculator />}
          {activeId === 'runway' && <SavingsRateRunwayCalculator />}
          {activeId === 'emergency' && <EmergencyFundCalculator />}
          {activeId === 'compound' && <CompoundGrowthCalculator />}
          {activeId === 'match' && <EmployerMatchCalculator />}
          {activeId === 'college' && <College529Calculator />}
          {activeId === 'vehicle' && <VehicleTcoCalculator />}
          {activeId === 'rentbuy' && <RentVsBuyCalculator />}
          {activeId === 'loan' && <LoanPaymentCalculator />}
          {activeId === 'debt' && <DebtPayoffCalculator />}
          {activeId === 'refi' && <RefinanceBreakEvenCalculator />}
          {activeId === 'tithe' && <TithingSurplusCalculator />}
          {activeId === 'bonus' && <BonusValueCalculator />}

          {nudge && !HAS_INTERNAL_NUDGE.has(activeId) && (
            <SoftSellNudge pool={nudge.pool} slot={nudge.slot} hint={nudge.hint} />
          )}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold tracking-[1.5px] mb-4">
            AFTER THE NUMBERS
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Your Next Faithful Steps</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Clarity is step one. These moves turn numbers into progress.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {nextSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 hover:border-emerald-200 hover:shadow-md transition-all flex flex-col"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 shrink-0 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <Icon className="text-emerald-600" size={20} />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-base leading-snug">{step.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">{step.body}</p>
                {step.links && (
                  <div className="flex flex-col gap-1.5">
                    {step.links.map((l) => (
                      <Link key={l.to} to={l.to} className="inline-flex items-center gap-1 text-emerald-600 hover:text-emerald-700 font-medium text-sm">
                        {l.label} →
                      </Link>
                    ))}
                  </div>
                )}
                {step.cta &&
                  (step.cta.external ? (
                    <a
                      href={step.cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-emerald-600 hover:text-emerald-700 font-medium text-sm"
                    >
                      {step.cta.label}
                      <ExternalLink size={14} />
                    </a>
                  ) : (
                    <Link to={step.cta.to} className="inline-flex items-center gap-1 text-emerald-600 hover:text-emerald-700 font-medium text-sm">
                      {step.cta.label} →
                    </Link>
                  ))}
              </div>
            );
          })}
        </div>

        <p className="text-center text-xs text-gray-500 mt-6 flex items-center justify-center gap-1.5">
          <Heart size={12} className="text-emerald-500" />
          Stewardship is a daily "yes" — start with one step today.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-12 bg-white border-t border-b border-gray-100">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold tracking-[1.5px] mb-4">
            FAITH • FAMILY • STEWARDSHIP
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Calculator FAQ</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Quick answers while you plan</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                <AccordionTrigger className="px-5 sm:px-6 py-4 text-left text-base font-semibold text-gray-900 hover:no-underline data-[state=open]:text-emerald-700">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="px-5 sm:px-6 pb-5 text-gray-700 text-sm leading-relaxed">
                  {faq.a}
                  {faq.link && (
                    <span className="block mt-3">
                      <Link to={faq.link} className="inline-flex items-center gap-1 text-emerald-600 hover:text-emerald-700 font-medium text-sm">
                        Related reading →
                      </Link>
                    </span>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      <div className="px-4 sm:px-6 pb-10 pt-6">
        <SubscribeForm />
      </div>
      <SiteFooter />
    </div>
  );
}
