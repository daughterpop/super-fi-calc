import React from 'react';
import { Link } from 'react-router-dom';
import BlogPostFooter from '../components/BlogPostFooter';

export default function SeeEveryDollarWithMonarchMoneyForCatholicHouseholds() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto prose prose-slate">
        <p className="text-sm text-emerald-700 font-semibold uppercase tracking-wide mb-3 not-prose">
          Practical tool
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          See Every Dollar with Monarch Money for Catholic Households
        </h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Shared visibility for budgets, net worth, and investments — so spouses can steward the household together without spreadsheets becoming a second job.
        </p>

        <p className="mb-6">
          Hey everyone,
        </p>

        <p className="mb-6">
          You cannot manage what you cannot see. For Catholic families building toward financial independence, the first practical step is often the same: get honest, shared numbers in one place. Monarch Money is one of the cleaner tools for that job.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Why shared clarity matters
        </h2>
        <p className="mb-6">
          Large households, dual incomes, irregular bonuses, and the constant pull of kids' activities make it easy for spending to drift. One spouse often carries the mental load of “where the money goes.” The other may only see fragments. That gap produces friction, surprise, and delayed decisions about tithing, debt, or investing.
        </p>
        <p className="mb-6">
          A shared dashboard does not solve every disagreement. It does make the conversation factual instead of accusatory. When both of you can see the same categories, the same net worth trend, and the same surplus (or shortfall), the path to{' '}
          <Link to="/blog/build-margin-for-catholic-families" className="text-emerald-700 font-medium hover:underline">building margin</Link>{' '}
          becomes a joint project instead of a solo burden.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          What Monarch does well
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
          <li>Connects bank, credit, and investment accounts so cash flow and net worth live in one view.</li>
          <li>Supports budgeting by category with room for custom labels that match how your family actually spends.</li>
          <li>Works well for couples — both can log in and see the same picture.</li>
          <li>Tracks investments alongside checking and debt, which matters once you are past the emergency-fund stage.</li>
        </ul>
        <p className="mb-6">
          Through the referral link below, new users can get 50% off the first year of Core. Confirm current pricing and terms at signup.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          How it fits the Catholic FI sequence
        </h2>
        <p className="mb-6">
          Monarch is not the strategy. It is the mirror. Use it to support a budget that treats{' '}
          <Link to="/blog/how-to-budget-as-a-catholic-family-with-tithing-first" className="text-emerald-700 font-medium hover:underline">tithing as a first claim</Link>, protects the essentials, and reveals the surplus that can fund the emergency buffer and long-term investing. Review together weekly or biweekly — short, calm, and focused on one adjustment at a time.
        </p>
        <p className="mb-6">
          Pair the dashboard with the{' '}
          <Link to="/calculators" className="text-emerald-700 font-medium hover:underline">FI calculator</Link>{' '}
          so the monthly picture connects to the multi-year goal. Clarity without a destination is just anxiety with better charts.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Getting started
        </h2>
        <p className="mb-6">
          Sign up through the link, connect the primary accounts, invite your spouse, and set a recurring 20-minute review. Do not try to perfect every category on day one. Aim for “good enough to see the surplus” within the first week.
        </p>
        <p className="not-prose mb-8">
          <a
            href="https://monarch.com/referral/hvup58srp1?r_source=share"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors text-sm sm:text-base shadow-sm"
          >
            Get 50% off Monarch →
          </a>
        </p>

        <p className="mb-6 text-sm text-gray-600">
          This is a referral link. If you sign up, the site may earn a commission at no extra cost to you. Pricing and features change; confirm current terms on Monarch's site.
        </p>

        <p className="not-prose mb-8 flex flex-wrap gap-3">
          <Link
            to="/blog/how-to-budget-as-a-catholic-family-with-tithing-first"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors text-sm sm:text-base shadow-sm"
          >
            Catholic family budgeting →
          </Link>
          <Link
            to="/blog/how-to-get-started-on-your-fi-path"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 hover:border-emerald-300 text-gray-800 font-medium rounded-xl transition-colors text-sm sm:text-base"
          >
            Get started guide
          </Link>
        </p>

        <p className="text-lg font-medium text-gray-800 mt-10">
          See the numbers together. Adjust one thing. Repeat.
        </p>
        <p className="text-gray-700 font-medium mt-6">– Dustin</p>

        <BlogPostFooter />
      </div>
    </div>
  );
}
