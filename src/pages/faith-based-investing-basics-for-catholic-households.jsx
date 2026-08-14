import React from 'react';
import { Link } from 'react-router-dom';
import BlogPostFooter from '../components/BlogPostFooter';

export default function FaithBasedInvestingBasicsForCatholicHouseholds() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto prose prose-slate">
        <p className="text-sm text-emerald-700 font-semibold uppercase tracking-wide mb-3 not-prose">
          Practical guide
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Faith-Based Investing Basics for Catholic Households
        </h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          A simple starting point for Catholic families who want their investments to serve long-term margin without turning money into an idol or ignoring moral considerations.
        </p>

        <p className="mb-6">
          Hey everyone,
        </p>

        <p className="mb-6">
          Once a household has an emergency fund and is giving consistently, the next question is usually: “Where do we put the surplus?” The answer does not need to be complicated.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Stewardship first, optimization second
        </h2>
        <p className="mb-6">
          Investing is one way of being a good steward of the resources entrusted to the family. The primary goal is not maximum return at any cost. It is reasonable growth that supports the family’s vocation — education, stability, future generosity, and the freedom to say yes when God asks something new.
        </p>
        <p className="mb-6">
          That framing keeps the activity in its proper place. The portfolio serves the mission. The mission does not serve the portfolio.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          The default that works for most families
        </h2>
        <p className="mb-6">
          For the large majority of Catholic households the simplest effective approach is:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
          <li>Capture every dollar of employer 401(k) match — it is free money.</li>
          <li>Favor low-cost, broad-market index funds or target-date funds inside retirement accounts.</li>
          <li>Keep fees low. Expense ratios matter more than almost any other variable over decades.</li>
          <li>Invest consistently through market ups and downs rather than trying to time them.</li>
          <li>Avoid complexity, leverage, and speculative individual stocks until the basics are solid and the household has real margin.</li>
        </ul>
        <p className="mb-6">
          Consistency beats cleverness for the first ten or twenty years. Most of the benefit comes from the savings rate and time in the market, not from stock-picking skill.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Moral screening and Catholic values funds
        </h2>
        <p className="mb-6">
          Some families want additional screening so their capital is not supporting industries that conflict with Catholic teaching (for example, abortion, contraception, or certain forms of embryonic research). Options exist:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
          <li>Catholic or faith-based mutual funds and ETFs that apply moral screens.</li>
          <li>Broader ESG or biblically responsible funds (review the actual screens; not all align with Catholic priorities).</li>
          <li>Individual stock ownership with personal research — higher effort and usually higher risk of under-diversification.</li>
        </ul>
        <p className="mb-6">
          There is legitimate diversity of opinion on how strict the screens should be. What matters is that the household decides consciously rather than by default, and that the decision does not become an excuse for paralysis or for chasing underperforming products with high fees.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          What to avoid early on
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
          <li>High-fee actively managed funds that rarely beat simple indexes after costs.</li>
          <li>Speculative concentrated bets that can wipe out years of careful saving.</li>
          <li>Constant trading that turns investing into a second job and a source of anxiety.</li>
          <li>Ignoring tax-advantaged accounts (401(k), IRA, HSA where available) in favor of taxable accounts without a clear reason.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          How this fits the larger plan
        </h2>
        <p className="mb-6">
          Investing is the engine that turns monthly surplus into long-term margin. It only works if the surplus exists in the first place. That is why the rest of this site emphasizes{' '}
          <Link to="/blog/build-margin-for-catholic-families" className="text-emerald-700 font-medium hover:underline">building margin</Link>,{' '}
          <Link to="/blog/how-to-budget-as-a-catholic-family-with-tithing-first" className="text-emerald-700 font-medium hover:underline">budgeting with tithing first</Link>, and an{' '}
          <Link to="/blog/building-an-emergency-fund-without-neglecting-the-tithe" className="text-emerald-700 font-medium hover:underline">emergency fund that protects both prudence and generosity</Link>.
        </p>
        <p className="mb-6">
          Run the{' '}
          <Link to="/calculators" className="text-emerald-700 font-medium hover:underline">FI calculator</Link>{' '}
          with honest numbers. The output will tell you more about the required savings rate than any product brochure.
        </p>

        <p className="not-prose mb-8 flex flex-wrap gap-3">
          <Link
            to="/calculators"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors text-sm sm:text-base shadow-sm"
          >
            Find your FI number →
          </Link>
          <Link
            to="/tools"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 hover:border-emerald-300 text-gray-800 font-medium rounded-xl transition-colors text-sm sm:text-base"
          >
            Stewardship tools
          </Link>
        </p>

        <p className="text-lg font-medium text-gray-800 mt-10">
          Keep it simple. Keep the fees low. Let the surplus serve the mission.
        </p>
        <p className="text-gray-700 font-medium mt-6">– Dustin</p>

        <BlogPostFooter />
      </div>
    </div>
  );
}
