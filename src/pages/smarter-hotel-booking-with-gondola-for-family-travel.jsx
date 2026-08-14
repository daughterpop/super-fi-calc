import React from 'react';
import { Link } from 'react-router-dom';
import BlogPostFooter from '../components/BlogPostFooter';

export default function SmarterHotelBookingWithGondolaForFamilyTravel() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto prose prose-slate">
        <p className="text-sm text-emerald-700 font-semibold uppercase tracking-wide mb-3 not-prose">
          Practical tool
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Smarter Hotel Booking with Gondola for Family Travel
        </h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Rate tracking and cash back on hotels you were already going to book — small savings that add up when families travel for visits, retreats, or vacations.
        </p>

        <p className="mb-6">Hey everyone,</p>

        <p className="mb-6">
          Travel is not the enemy of financial independence. Untracked, last-minute, full-price travel is. When a trip is already on the calendar — family, pilgrimage, work adjacent to a vacation — tools that monitor rates and return cash can lower the cost without requiring you to become a points expert.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What Gondola does</h2>
        <p className="mb-6">
          Gondola helps book hotels, tracks whether rates drop after you book, and pays additional cash back on qualifying stays. The practical value is automation: you are not refreshing rate calendars by hand, and a portion of spend comes back instead of vanishing.
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
          <li>Useful when you have a firm travel date and hotel category in mind.</li>
          <li>Rate-drop monitoring reduces the FOMO of “I should have waited.”</li>
          <li>Referral bonuses after a first booking can offset part of the first trip's cost for both parties.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Stewardship guardrails</h2>
        <p className="mb-6">
          Do not invent trips to harvest a bonus. Book only what the household would book anyway. Compare the final price against your usual booking path. Direct any cash back toward the same places other surplus goes: buffer, investing, giving. See{' '}
          <Link to="/blog/triple-savings-online-purchases" className="text-emerald-700 font-medium hover:underline">Triple Savings on Online Purchases</Link>{' '}
          for the same stacking mindset applied to everyday shopping.
        </p>

        <p className="not-prose mb-8">
          <a
            href="https://gondola.ai/invite/0WGYR4PEY"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors text-sm sm:text-base shadow-sm"
          >
            Join Gondola — $50 each →
          </a>
        </p>

        <p className="mb-6 text-sm text-gray-600">
          This is a referral link. If you book through it, the site may earn a commission at no extra cost to you. Bonuses and cash-back rates change; confirm current terms on Gondola's site.
        </p>

        <p className="not-prose mb-8 flex flex-wrap gap-3">
          <Link to="/blog/build-margin-for-catholic-families" className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors text-sm sm:text-base shadow-sm">
            Build margin →
          </Link>
          <Link to="/tools" className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 hover:border-emerald-300 text-gray-800 font-medium rounded-xl transition-colors text-sm sm:text-base">
            All tools
          </Link>
        </p>

        <p className="text-lg font-medium text-gray-800 mt-10">Travel on purpose. Capture the easy savings. Move on.</p>
        <p className="text-gray-700 font-medium mt-6">– Dustin</p>
        <BlogPostFooter />
      </div>
    </div>
  );
}
