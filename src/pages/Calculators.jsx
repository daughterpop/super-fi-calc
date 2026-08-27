import { Link, Navigate, useSearchParams } from 'react-router-dom';
import SubscribeForm from '../components/SubscribeForm';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/ui/accordion';
import { CALCULATOR_CATALOG, LEGACY_TOOL_TO_SLUG, pathForCalculator } from '../data/calculators';

export { CALCULATOR_CATALOG } from '../data/calculators';

const FAQ_LINK_CLASS =
  'text-emerald-700 hover:text-emerald-800 font-medium underline-offset-2 hover:underline';

export default function Calculators() {
  const [searchParams] = useSearchParams();
  const legacyTool = searchParams.get('tool');
  if (legacyTool && LEGACY_TOOL_TO_SLUG[legacyTool]) {
    return <Navigate to={pathForCalculator(legacyTool)} replace />;
  }

  const faqs = [
    {
      q: 'Which calculator should I use first?',
      a: (
        <>
          Start with{' '}
          <Link to={pathForCalculator('savings-rate-runway')} className={FAQ_LINK_CLASS}>
            Savings rate &amp; runway
          </Link>{' '}
          for a quick pulse, then{' '}
          <Link to={pathForCalculator('fi-path')} className={FAQ_LINK_CLASS}>
            FI path
          </Link>{' '}
          for the full family timeline. Use{' '}
          <Link to={pathForCalculator('college-529')} className={FAQ_LINK_CLASS}>
            College/529
          </Link>
          ,{' '}
          <Link to={pathForCalculator('vehicle-tco')} className={FAQ_LINK_CLASS}>
            Vehicle TCO
          </Link>
          , and{' '}
          <Link to={pathForCalculator('debt-payoff')} className={FAQ_LINK_CLASS}>
            Debt payoff
          </Link>{' '}
          when those decisions are live.
        </>
      ),
      link: '/blog/how-to-get-started-on-your-fi-path',
    },
    {
      q: 'How does this align with Catholic stewardship?',
      a: (
        <>
          These tools build margin for vocation — prayer, presence, education, and generosity — not accumulation for its own sake. The{' '}
          <Link to={pathForCalculator('tithing-surplus')} className={FAQ_LINK_CLASS}>
            tithing calculator
          </Link>{' '}
          puts giving in the plan before surplus.
        </>
      ),
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
      a: (
        <>
          No. Bonuses only help if you pay in full and meet spend with purchases you already needed. The{' '}
          <Link to={pathForCalculator('bonus-value')} className={FAQ_LINK_CLASS}>
            bonus tool
          </Link>{' '}
          flags manufactured spend explicitly.
        </>
      ),
      link: '/blog/triple-savings-online-purchases',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <SiteHeader />

      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Calculators</h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Free planning tools for Catholic families — FI path, college, debt, vehicles, tithing, and more. Open any tool on its own page.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-8">
        {CALCULATOR_CATALOG.map((group) => (
          <section key={group.category}>
            <h2 className="text-lg font-bold text-gray-900 mb-1">{group.category}</h2>
            <p className="text-sm text-gray-500 mb-3">{group.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {group.items.map((item) => (
                <Link
                  key={item.slug}
                  to={pathForCalculator(item.slug)}
                  className="text-left rounded-xl border border-gray-100 bg-white px-4 py-3 transition hover:border-emerald-200 hover:bg-emerald-50/40 hover:shadow-sm"
                >
                  <p className="font-semibold text-sm text-gray-900">{item.label}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{item.blurb}</p>
                </Link>
              ))}
            </div>
          </section>
        ))}
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
