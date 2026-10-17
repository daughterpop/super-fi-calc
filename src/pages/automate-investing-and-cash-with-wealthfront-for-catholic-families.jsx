import React from 'react';
import { Link } from 'react-router-dom';
import BlogPostFooter from '../components/BlogPostFooter';

export default function AutomateInvestingAndCashWithWealthfrontForCatholicFamilies() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto prose prose-slate">
        <p className="text-sm text-emerald-700 font-semibold uppercase tracking-wide mb-3 not-prose">
          Practical tool
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Automate Investing and Cash with Wealthfront for Catholic Families
        </h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Automated investing and a high-yield cash account in one place — a practical way for busy Catholic households to put surplus to work without turning money management into a second job.
        </p>

        <p className="mb-6">
          The households that reach real margin rarely have the cleverest portfolios. They have the most automated ones. Wealthfront is a robo-advisor that builds and rebalances a diversified portfolio of low-cost ETFs around your risk profile and goals — plus a high-yield Cash Account for the money that should stay liquid: emergency layers, near-term goals, surplus waiting to be invested.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          The case for boring
        </h2>
        <p className="mb-6">
          Automated portfolio management removes the temptation to time the market or chase last quarter's winners, and tax-loss harvesting on taxable accounts above certain thresholds can improve after-tax results without extra effort. A competitive cash yield keeps short-term dollars productive while staying accessible. Recurring transfers turn "invest the surplus" into a set-it-and-review-quarterly habit instead of a monthly decision — which is exactly the point for a family with better things to do than watch markets.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          One honest caveat
        </h2>
        <p className="mb-6">
          Automation is not a substitute for virtue. It is a tool that protects good intentions from distraction and decision fatigue. Keep the order clear: give, protect, then grow. And automating does not mean neglecting moral screening if that matters to your household — review the underlying funds and adjust if needed. See{' '}
          <Link to="/blog/faith-based-investing-basics-for-catholic-households" className="text-emerald-700 font-medium hover:underline">Faith-Based Investing Basics</Link>{' '}
          for the framing, and make sure the{' '}
          <Link to="/blog/how-to-budget-as-a-catholic-family-with-tithing-first" className="text-emerald-700 font-medium hover:underline">budget with tithing first</Link>{' '}
          and the{' '}
          <Link to="/blog/building-an-emergency-fund-without-neglecting-the-tithe" className="text-emerald-700 font-medium hover:underline">emergency fund</Link>{' '}
          are in place before the surplus starts flowing here.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          The link
        </h2>
        <p className="mb-6">
          Referral perks often include a temporary APY boost on cash and/or an investing deposit match — confirm current terms when you sign up. Open the account through the link, connect your bank, set a recurring transfer sized to your real surplus, and let the system rebalance. Check in quarterly, and pair the numbers with the{' '}
          <Link to="/calculators" className="text-emerald-700 font-medium hover:underline">FI calculator</Link>{' '}
          so you know whether the savings rate is actually moving the timeline.
        </p>
        <p className="not-prose mb-8">
          <a
            href="https://www.wealthfront.com/c/affiliates/invited/AFFD-AL7T-QSBZ-J0Q8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors text-sm sm:text-base shadow-sm"
          >
            Claim Wealthfront offer →
          </a>
        </p>

        <p className="mb-6 text-sm text-gray-600">
          This is a referral link. If you sign up, the site may earn a commission at no extra cost to you. Investing involves risk. Cash yields and match offers change; confirm current terms on Wealthfront's site. This is not personalized investment advice.
        </p>

        <p className="not-prose mb-8 flex flex-wrap gap-3">
          <Link
            to="/calculators"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors text-sm sm:text-base shadow-sm"
          >
            Model your FI path →
          </Link>
          <Link
            to="/blog/how-to-get-started-on-your-fi-path"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 hover:border-emerald-300 text-gray-800 font-medium rounded-xl transition-colors text-sm sm:text-base"
          >
            Get started guide
          </Link>
        </p>

        <p className="text-lg font-medium text-gray-800 mt-10">
          Automate the surplus. Review quarterly. Keep the mission first.
        </p>
        <p className="text-gray-700 font-medium mt-6">– Dustin</p>

        <BlogPostFooter />
      </div>
    </div>
  );
}
