import React from 'react';
import { Link } from 'react-router-dom';
import BlogPostFooter from '../components/BlogPostFooter';

export default function EventContractsOnKalshiCuriosityWithGuardrails() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto prose prose-slate">
        <p className="text-sm text-emerald-700 font-semibold uppercase tracking-wide mb-3 not-prose">
          Practical tool
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Event Contracts on Kalshi: Curiosity with Guardrails
        </h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          A CFTC-regulated exchange for event contracts — interesting for learning how markets price real-world outcomes, not a core pillar of Catholic financial independence.
        </p>

        <p className="mb-6">Hey everyone,</p>

        <p className="mb-6">
          Most of the tools on this site are boring on purpose: budget, emergency fund, index investing, lower bills. Kalshi is different. It is a regulated marketplace where you can trade contracts on whether specified events occur (economics releases, elections, weather thresholds, and more). It belongs in the “curiosity and small experiments” category, not in the foundation of the FI plan.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What it is</h2>
        <p className="mb-6">
          Kalshi is a CFTC-regulated exchange for event contracts. New users who complete a small qualifying trade through a referral often unlock a trading credit (amounts and rules vary — confirm at signup). The product is real; the temptation is to treat it like entertainment spending dressed up as “investing.”
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Stewardship guardrails</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
          <li>Finish the basics first: giving, emergency fund, employer match, boring long-term investments. See{' '}
            <Link to="/blog/how-to-get-started-on-your-fi-path" className="text-emerald-700 font-medium hover:underline">Get Started</Link>.</li>
          <li>Cap any activity here at money you could lose without changing the household plan.</li>
          <li>Do not confuse short-term event trading with the multi-decade compounding that actually builds margin.</li>
          <li>If it becomes a habit of checking prices for dopamine, close the app.</li>
        </ul>
        <p className="mb-6">
          For the core investing approach this site recommends, stay with{' '}
          <Link to="/blog/faith-based-investing-basics-for-catholic-households" className="text-emerald-700 font-medium hover:underline">Faith-Based Investing Basics</Link>.
        </p>

        <p className="not-prose mb-8">
          <a
            href="https://kalshi.com/sign-up/?referral=4a67c61f-1958-4a0a-a02c-18aa478ef653&m=true&utm_source=mobile_app&utm_medium=copy&utm_campaign=referral&utm_content=referral_qr_sheet"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors text-sm sm:text-base shadow-sm"
          >
            Sign up via referral →
          </a>
        </p>

        <p className="mb-6 text-sm text-gray-600">
          This is a referral link. Trading event contracts involves risk of loss. This is not investment advice. Confirm current bonus terms and eligibility on Kalshi's site.
        </p>

        <p className="text-lg font-medium text-gray-800 mt-10">Curiosity is fine. The foundation stays boring.</p>
        <p className="text-gray-700 font-medium mt-6">– Dustin</p>
        <BlogPostFooter />
      </div>
    </div>
  );
}
