import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Heart, BookOpen, Wrench, Users, TrendingUp } from 'lucide-react';
import SubscribeForm from '../components/SubscribeForm';
import SiteHeader from '../components/SiteHeader';
import ReferralCard from '../components/ReferralCard';
import SuperFiCalculator from '../Super-Fi-Calculator.jsx';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/ui/accordion';
import { getReferral } from '../data/referrals';

export default function Calculators() {
  const [activeTab, setActiveTab] = useState('quick');
  // Investing pool + different slot from header so footer isn't the same offer as the strip
  const calcReferral = getReferral({ slot: 2, pool: 'investing' });
  const investStep = getReferral({ slot: 3, pool: 'investing' });

  const faqs = [
    {
      q: "How does this calculator align with Catholic teaching on stewardship and wealth?",
      a: "It helps you build financial margin not for selfish accumulation, but to live generously, tithe faithfully, educate your children in the faith, and leave a legacy of virtue and provision. The projections include real family costs so your plan protects what matters most — time for prayer, service, and presence.",
      link: "/blog/stewarding-your-familys-future-building-generational-wealth-through-faith-and-fi"
    },
    {
      q: "Should I factor tithing or charitable giving into my FI number?",
      a: "Yes — many Catholic families treat giving as a non-negotiable 'expense' in their FI planning. This ensures generosity continues even after you stop working for income. The surplus the calculator reveals becomes fuel for parish support, missions, and family hospitality.",
      link: null
    },
    {
      q: "How can I plan for both college savings and my children's faith formation?",
      a: "Model tuition in the Children section (with realistic inflation). The timeline reveals how disciplined saving creates margin for Catholic education, youth groups, family prayer traditions, and retreats — so faith formation isn't squeezed out by financial pressure.",
      link: "/blog/raising-faith-filled-kids-while-building-financial-freedom"
    },
    {
      q: "What if the numbers show a long road to FI — have I failed as a faithful steward?",
      a: "Not at all. Faithful stewardship is shown in consistent, prayerful action over time. This tool simply gives you clarity to adjust course, trust Providence more deeply, and celebrate every year of progress. Your legacy is built in the daily 'yes' to wise planning and generous living.",
      link: null
    },
    {
      q: "Can this calculator help us leave a generational inheritance while still living generously today?",
      a: "Absolutely. By modeling large future expenses (college, vehicles, debt payoff) alongside steady investing, you see the true surplus available for both present tithing and long-term family provision. Generational wealth and cheerful giving are not opposites — they reinforce each other when planned together.",
      link: "/blog/stewarding-your-familys-future-building-generational-wealth-through-faith-and-fi"
    }
  ];

  const nextSteps = [
    {
      icon: Users,
      title: "Pray & talk with your spouse",
      body: "Share the timeline. Ask: Does this plan free us for more prayer, presence, and generosity? Adjust inputs together until the numbers serve the mission.",
      cta: null
    },
    {
      icon: BookOpen,
      title: "Read a related insight",
      body: 'Deepen the "why" behind the numbers with practical faith + FI articles written for Catholic families.',
      cta: { to: "/blog", label: "Browse the blog" }
    },
    {
      icon: TrendingUp,
      title: "Put surplus to work",
      body: investStep.cardBody,
      cta: { href: investStep.href, label: investStep.cardCta, external: true }
    },
    {
      icon: Wrench,
      title: "Explore trusted tools",
      body: "Privacy, investing, and household tools we actually use — chosen to protect time, money, and peace on the path to FI.",
      cta: { to: "/tools", label: "See recommended tools" }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <SiteHeader />

      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">FI Calculators</h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Model real family expenses — college, mortgage, vehicles — and see your path to financial independence.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="flex border-b mb-6 sm:mb-8 bg-white rounded-t-lg overflow-hidden">
          <button
            onClick={() => setActiveTab('quick')}
            className={`flex-1 px-3 sm:px-8 py-3 sm:py-4 font-medium text-sm sm:text-lg transition-colors text-center ${
              activeTab === 'quick'
                ? 'border-b-4 border-emerald-600 text-emerald-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Quick Calculator
          </button>
          <button
            onClick={() => setActiveTab('advanced')}
            className={`flex-1 px-3 sm:px-8 py-3 sm:py-4 font-medium text-sm sm:text-lg transition-colors text-center ${
              activeTab === 'advanced'
                ? 'border-b-4 border-emerald-600 text-emerald-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Advanced Calculator
          </button>
        </div>

        {activeTab === 'quick' ? (
          <SuperFiCalculator />
        ) : (
          <div className="bg-white rounded-xl shadow-sm p-6 sm:p-12 text-center">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Advanced FI Calculator</h2>
            <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
              Coming soon — more detailed scenario modeling, Monte Carlo, and tax-aware projections.
            </p>
            <p className="text-sm text-gray-500">
              For now, the Quick Calculator covers mortgage, college, vehicles, and large expenses with full projections.
            </p>
          </div>
        )}
      </div>

      {/* Next Faithful Steps */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold tracking-[1.5px] mb-4">
            AFTER THE NUMBERS
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Your Next Faithful Steps</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            The calculator gives clarity. These four moves turn that clarity into progress for your family and the next generation.
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
                  <h3 className="font-semibold text-gray-900 text-base sm:text-[17px] leading-snug">{step.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">{step.body}</p>
                {step.cta && (
                  step.cta.external ? (
                    <a
                      href={step.cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-emerald-600 hover:text-emerald-700 font-medium text-sm group"
                    >
                      {step.cta.label}
                      <ExternalLink size={14} className="group-hover:translate-x-0.5 transition" />
                    </a>
                  ) : (
                    <Link
                      to={step.cta.to}
                      className="inline-flex items-center gap-1 text-emerald-600 hover:text-emerald-700 font-medium text-sm group"
                    >
                      {step.cta.label}
                      <span className="group-hover:translate-x-0.5 transition">→</span>
                    </Link>
                  )
                )}
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
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Common Questions from Catholic Families</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Answers rooted in practical faith and generational legacy building</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm"
              >
                <AccordionTrigger className="px-5 sm:px-6 py-4 text-left text-base sm:text-lg font-semibold text-gray-900 hover:no-underline data-[state=open]:text-emerald-700">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="px-5 sm:px-6 pb-5 text-gray-700 text-sm sm:text-[15px] leading-relaxed">
                  {faq.a}
                  {faq.link && (
                    <span className="block mt-3">
                      <Link
                        to={faq.link}
                        className="inline-flex items-center gap-1 text-emerald-600 hover:text-emerald-700 font-medium text-sm group"
                      >
                        Explore related insights in the blog
                        <span className="group-hover:translate-x-0.5 transition">→</span>
                      </Link>
                    </span>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <p className="text-center text-xs text-gray-500 mt-6">Have a question we missed? Share your story or thoughts on the blog.</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
        <ReferralCard referral={calcReferral} />
      </div>

      <div className="px-4 sm:px-6 pb-10">
        <SubscribeForm />
      </div>
    </div>
  );
}
