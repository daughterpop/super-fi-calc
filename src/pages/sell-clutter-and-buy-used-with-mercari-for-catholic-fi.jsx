import React from 'react';
import { Link } from 'react-router-dom';
import BlogPostFooter from '../components/BlogPostFooter';

export default function SellClutterAndBuyUsedWithMercariForCatholicFi() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto prose prose-slate">
        <p className="text-sm text-emerald-700 font-semibold uppercase tracking-wide mb-3 not-prose">
          Practical tool
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Sell Clutter and Buy Used with Mercari for Catholic FI
        </h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Turn unused stuff into cash and buy what you need gently used — a simple way to free margin without a second job.
        </p>

        <p className="mb-6">Hey everyone,</p>

        <p className="mb-6">
          Most homes hold money in closets, garages, and kids' rooms: clothes outgrown in a season, toys that lost interest, gear bought for a phase that ended. Selling what you no longer use and buying used when quality is good is ordinary stewardship, not deprivation.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What Mercari is good for</h2>
        <p className="mb-6">
          Mercari is a marketplace for buying and selling used goods with relatively low friction. Listings, shipping labels, and payments are handled in-app. For families it works well for kids' clothing, small electronics, household extras, and hobby gear that would otherwise sit idle.
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
          <li>Sell items you already own instead of storing them indefinitely.</li>
          <li>Buy used for categories where condition matters less than function (many kids' items, tools, books).</li>
          <li>New-user credit through referral codes softens the first transaction.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How it serves Catholic FI</h2>
        <p className="mb-6">
          Detachment is easier when excess has a path out of the house. Cash from sales can hit the emergency fund or the investment account. Buying used lowers the cost of legitimate needs so more of income stays available for giving and long-term margin. Pair this with the broader habit of living light — see{' '}
          <Link to="/blog/live-light-like-st-clare-lessons-for-family-freedom" className="text-emerald-700 font-medium hover:underline">Live Light Like St. Clare</Link>.
        </p>
        <p className="mb-6">
          Guardrail: do not invent shopping so you have something to sell. The point is less clutter and lower cost on real needs, not a new hobby of flipping.
        </p>

        <p className="not-prose mb-8">
          <a
            href="https://merc.li/MrZD2EDtb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors text-sm sm:text-base shadow-sm"
          >
            Get up to $20 on Mercari →
          </a>
        </p>

        <p className="mb-6 text-sm text-gray-600">
          This is a referral link. If you sign up, the site may earn a commission at no extra cost to you. Bonuses and fees change; confirm current terms on Mercari's site.
        </p>

        <p className="not-prose mb-8 flex flex-wrap gap-3">
          <Link to="/blog/build-margin-for-catholic-families" className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors text-sm sm:text-base shadow-sm">
            Build margin →
          </Link>
          <Link to="/tools" className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 hover:border-emerald-300 text-gray-800 font-medium rounded-xl transition-colors text-sm sm:text-base">
            All tools
          </Link>
        </p>

        <p className="text-lg font-medium text-gray-800 mt-10">Own less. Fund the mission with what remains.</p>
        <p className="text-gray-700 font-medium mt-6">– Dustin</p>
        <BlogPostFooter />
      </div>
    </div>
  );
}
