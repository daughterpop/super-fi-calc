import React from 'react';
import { Link } from 'react-router-dom';
import BlogPostFooter from '../components/BlogPostFooter';

export default function SideIncomeFromASpareSpaceWithAirbnbHosting() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto prose prose-slate">
        <p className="text-sm text-emerald-700 font-semibold uppercase tracking-wide mb-3 not-prose">
          Practical tool
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Side Income from a Spare Space with Airbnb Hosting
        </h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          When a room or secondary space sits empty, hosting can turn underused square footage into cash for the FI plan — if the household capacity and local rules allow it.
        </p>

        <p className="mb-6">Hey everyone,</p>

        <p className="mb-6">
          Not every family has a spare room worth listing. For those who do — a finished basement, a room after a child leaves, a small ADU — short-term hosting is one way to convert idle space into income without a second full-time job. The key is honesty about time, privacy, and local regulations.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">When it can make sense</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
          <li>You have a discrete space guests can use without constant disruption to family life.</li>
          <li>Local zoning and HOA rules allow short-term rentals (verify before you list).</li>
          <li>You can handle turnover cleaning or afford to outsource it without erasing the margin.</li>
          <li>The income has a clear destination: debt payoff, emergency fund, or investing — not lifestyle expansion.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How it fits Catholic FI</h2>
        <p className="mb-6">
          Extra income accelerates{' '}
          <Link to="/blog/build-margin-for-catholic-families" className="text-emerald-700 font-medium hover:underline">margin</Link>{' '}
          only if it does not consume the peace and presence the margin was meant to protect. Treat hosting as a temporary or partial lever, not an identity. Direct the net proceeds to the plan: high-interest debt first, then the cash buffer, then long-term investing and continued giving.
        </p>
        <p className="mb-6">
          New hosts who complete a qualifying booking within the referral window can receive a hosting bonus (amount and terms vary — confirm at signup).
        </p>

        <p className="not-prose mb-8">
          <a
            href="https://www.airbnb.com/rp/dustinh15591?p=stay&s=76&unique_share_id=A07C9D7C-DCE9-4CF5-81A0-23108904059F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors text-sm sm:text-base shadow-sm"
          >
            Become an Airbnb host — $115 bonus →
          </a>
        </p>

        <p className="mb-6 text-sm text-gray-600">
          This is a referral link. If you host through it, the site may earn a commission at no extra cost to you. Bonus eligibility and local rules change; confirm current terms on Airbnb and with your municipality.
        </p>

        <p className="not-prose mb-8 flex flex-wrap gap-3">
          <Link to="/calculators" className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors text-sm sm:text-base shadow-sm">
            Model your FI number →
          </Link>
          <Link to="/blog/how-to-get-started-on-your-fi-path" className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 hover:border-emerald-300 text-gray-800 font-medium rounded-xl transition-colors text-sm sm:text-base">
            Get started guide
          </Link>
        </p>

        <p className="text-lg font-medium text-gray-800 mt-10">Use the space. Protect the household. Direct the cash to the mission.</p>
        <p className="text-gray-700 font-medium mt-6">– Dustin</p>
        <BlogPostFooter />
      </div>
    </div>
  );
}
