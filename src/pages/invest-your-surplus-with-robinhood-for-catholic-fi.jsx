import React from 'react';
import { Link } from 'react-router-dom';
import BlogPostFooter from '../components/BlogPostFooter';

export default function InvestYourSurplusWithRobinhoodForCatholicFi() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto prose prose-slate">
        <p className="text-sm text-emerald-700 font-semibold uppercase tracking-wide mb-3 not-prose">
          Practical tool
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Invest Your Surplus with Robinhood for Catholic FI
        </h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Once the household has an emergency fund and is giving consistently, the next step is simple: put the surplus to work. Here is how Robinhood fits a faith-aligned path to financial independence.
        </p>

        <p className="mb-6">
          Hey everyone,
        </p>

        <p className="mb-6">
          Building margin is not only about spending less. It is about directing the dollars that remain toward the long-term freedom that supports vocation, family, and generosity. After the tithe and a real cash buffer, investing the surplus is the engine that turns monthly discipline into lasting capacity.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Why a simple brokerage belongs on the path
        </h2>
        <p className="mb-6">
          Most Catholic households do not need a complicated strategy. They need a low-friction place to buy broad, low-cost index funds or ETFs, contribute regularly, and leave the money alone for decades. Robinhood is one practical option for that first layer of taxable or IRA investing when the basics are already in place.
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
          <li>Commission-free trades on stocks and ETFs keep costs low for small, regular contributions.</li>
          <li>Fractional shares make it realistic to invest a fixed dollar amount every payday instead of waiting for a full share price.</li>
          <li>A clean mobile experience reduces the friction that stops good intentions from becoming automatic habits.</li>
        </ul>
        <p className="mb-6">
          None of that replaces the order of operations. Capture the employer 401(k) match first. Build the emergency fund. Keep giving. Then invest the surplus. For the broader sequence, see the{' '}
          <Link to="/blog/how-to-get-started-on-your-fi-path" className="text-emerald-700 font-medium hover:underline">Get Started guide</Link>{' '}
          and{' '}
          <Link to="/blog/faith-based-investing-basics-for-catholic-households" className="text-emerald-700 font-medium hover:underline">Faith-Based Investing Basics</Link>.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          How it serves Catholic FI
        </h2>
        <p className="mb-6">
          Financial independence for Catholic families means margin for vocation — the freedom to say yes to the next good work without constant money anxiety. Investing surplus is not an end in itself. It is how today's faithfulness funds tomorrow's capacity for hospitality, education, mission, and care for the poor.
        </p>
        <p className="mb-6">
          Use the tool; do not let the tool use you. Avoid speculative day-trading, leverage, and the dopamine loop of constant checking. Prefer broad market exposure, consistent contributions, and a long horizon. That is stewardship, not speculation.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Getting started
        </h2>
        <p className="mb-6">
          Open an account through the referral below. New accounts that fund often unlock free stock rewards (terms vary — confirm current offer at signup). Then set a recurring transfer from checking on payday and buy a simple, low-cost index fund or ETF. Review once a quarter, not once a day.
        </p>
        <p className="not-prose mb-8">
          <a
            href="https://join.robinhood.com/dustinh-1bff5a"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors text-sm sm:text-base shadow-sm"
          >
            Claim free stock via Robinhood →
          </a>
        </p>

        <p className="mb-6 text-sm text-gray-600">
          This is a referral link. If you sign up, the site may earn a commission at no extra cost to you. Investing involves risk, including possible loss of principal. This is not personalized investment advice.
        </p>

        <p className="not-prose mb-8 flex flex-wrap gap-3">
          <Link
            to="/calculators"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors text-sm sm:text-base shadow-sm"
          >
            Find your FI number →
          </Link>
          <Link
            to="/blog/build-margin-for-catholic-families"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 hover:border-emerald-300 text-gray-800 font-medium rounded-xl transition-colors text-sm sm:text-base"
          >
            Build margin
          </Link>
        </p>

        <p className="text-lg font-medium text-gray-800 mt-10">
          Give first. Protect the household. Invest the surplus. Keep the mission first.
        </p>
        <p className="text-gray-700 font-medium mt-6">– Dustin</p>

        <BlogPostFooter />
      </div>
    </div>
  );
}
