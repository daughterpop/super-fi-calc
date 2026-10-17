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
          Most money tension in a marriage is an information problem. One spouse carries the mental load of where the money goes; the other sees fragments. You cannot fix that with a better spreadsheet — you fix it by both looking at the same numbers.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          The spouse gap
        </h2>
        <p className="mb-6">
          Large households, dual incomes, irregular bonuses, and the constant pull of kids' activities make it easy for spending to drift. When one partner holds all the context, every question about a purchase sounds like an interrogation and every decision about tithing, debt, or investing waits on one person. A shared dashboard does not settle every disagreement. It makes the conversation factual instead of accusatory.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          What Monarch actually does
        </h2>
        <p className="mb-6">
          Monarch Money connects bank, credit, and investment accounts so cash flow and net worth live in one view. Budgeting works by category with room for custom labels that match how your family actually spends, and both spouses can log in to see the same picture. Investments track alongside checking and debt, which matters once you are past the emergency-fund stage and the question becomes allocation rather than survival.
        </p>
        <p className="mb-6">
          When both of you can see the same categories, the same net worth trend, and the same surplus or shortfall,{' '}
          <Link to="/blog/build-margin-for-catholic-families" className="text-emerald-700 font-medium hover:underline">building margin</Link>{' '}
          becomes a joint project instead of a solo burden.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          The one rule that makes it work
        </h2>
        <p className="mb-6">
          Monarch is the mirror, not the strategy. Use it to support a budget that treats{' '}
          <Link to="/blog/how-to-budget-as-a-catholic-family-with-tithing-first" className="text-emerald-700 font-medium hover:underline">tithing as a first claim</Link>{' '}
          — then set a recurring 20-minute review with your spouse, weekly or biweekly, and limit each session to one adjustment. Do not try to perfect every category on day one; aim for "good enough to see the surplus" within the first week. And pair the monthly picture with the{' '}
          <Link to="/calculators" className="text-emerald-700 font-medium hover:underline">FI calculator</Link>{' '}
          so the numbers connect to the multi-year goal. Clarity without a destination is just anxiety with better charts.
        </p>

        <div className="not-prose border border-emerald-200 bg-emerald-50 rounded-2xl p-6 my-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700 mb-2">
            Try it
          </p>
          <p className="text-gray-700 mb-4">
            New users through the referral link below can get 50% off the first year of Core — confirm current pricing and terms at signup.
          </p>
          <a
            href="https://monarch.com/referral/hvup58srp1?r_source=share"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors text-sm sm:text-base shadow-sm"
          >
            Get 50% off Monarch →
          </a>
        </div>

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
