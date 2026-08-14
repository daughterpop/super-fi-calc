import React from 'react';
import { Link } from 'react-router-dom';
import BlogPostFooter from '../components/BlogPostFooter';

export default function StretchTheGroceryBudgetWithThriveMarketForCatholicFi() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto prose prose-slate">
        <p className="text-sm text-emerald-700 font-semibold uppercase tracking-wide mb-3 not-prose">
          Practical tool
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Stretch the Grocery Budget with Thrive Market for Catholic FI
        </h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Organic and pantry staples at membership pricing — one practical way large Catholic families can free real dollars from the grocery line without turning thrift into a full-time job.
        </p>

        <p className="mb-6">
          Hey everyone,
        </p>

        <p className="mb-6">
          For a household of eight, groceries are not a minor line item. They are one of the largest controllable expenses after housing. Small percentage improvements compound into hundreds of dollars a month — surplus that can hit the emergency fund, the investment account, or the tithe without anyone feeling deprived.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          What Thrive Market is
        </h2>
        <p className="mb-6">
          Thrive Market is a membership-based online grocery store focused on organic, non-GMO, and more sustainable household products at wholesale-style prices. You pay an annual membership, then shop pantry staples, snacks, cleaning supplies, and more with member pricing. Delivery is straightforward; the value depends on buying items you would purchase anyway.
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
          <li>Member pricing on brands many families already prefer for quality or dietary reasons.</li>
          <li>Useful for bulk pantry and household items that would otherwise come from higher-priced retail trips.</li>
          <li>First-order discounts through referral links make the trial low-risk; staying a member long enough can unlock additional Thrive Cash for the referrer.</li>
        </ul>
        <p className="mb-6">
          Through the link below, friends often get about 40% off the first order. After they remain an annual member for 30+ days, the referrer can earn Thrive Cash. Confirm current terms at signup.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          How it serves the FI path
        </h2>
        <p className="mb-6">
          Grocery savings are not glamorous. They are reliable. A few percent off recurring spend is the same logic as the{' '}
          <Link to="/blog/triple-savings-online-purchases" className="text-emerald-700 font-medium hover:underline">triple-savings stack</Link>{' '}
          for online shopping: capture easy margin on dollars you were already going to spend, then redirect that margin toward the plan.
        </p>
        <p className="mb-6">
          Guardrails matter. Do not invent purchases to “maximize” a discount. Stick to the list. Compare unit prices against your usual store for the items you buy most. If the membership does not pay for itself in real savings within a few months, cancel — tools exist to serve the household, not the other way around.
        </p>
        <p className="mb-6">
          Pair any freed cash with a clear budget that treats{' '}
          <Link to="/blog/how-to-budget-as-a-catholic-family-with-tithing-first" className="text-emerald-700 font-medium hover:underline">giving as a first claim</Link>{' '}
          and tracks the surplus. Savings without a destination tend to disappear into lifestyle creep.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          A simple next step
        </h2>
        <p className="mb-6">
          Join through the referral, place one order of staples you already buy, and note the difference versus your usual sources. If it works for your family size and preferences, make it a monthly or quarterly restock habit — not a new source of browsing.
        </p>
        <p className="not-prose mb-8">
          <a
            href="http://thrv.me/PxCk1V"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors text-sm sm:text-base shadow-sm"
          >
            Get 40% off first order →
          </a>
        </p>

        <p className="mb-6 text-sm text-gray-600">
          This is a referral link. If you join, the site may earn a benefit at no extra cost to you. Discounts and membership terms change; confirm current offers on Thrive Market's site.
        </p>

        <p className="not-prose mb-8 flex flex-wrap gap-3">
          <Link
            to="/blog/build-margin-for-catholic-families"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors text-sm sm:text-base shadow-sm"
          >
            Build margin →
          </Link>
          <Link
            to="/tools"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 hover:border-emerald-300 text-gray-800 font-medium rounded-xl transition-colors text-sm sm:text-base"
          >
            All tools
          </Link>
        </p>

        <p className="text-lg font-medium text-gray-800 mt-10">
          Save on what you already buy. Redirect the difference. Keep the mission first.
        </p>
        <p className="text-gray-700 font-medium mt-6">– Dustin</p>

        <BlogPostFooter />
      </div>
    </div>
  );
}
