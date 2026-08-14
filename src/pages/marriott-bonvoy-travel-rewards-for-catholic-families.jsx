import React from 'react';
import { Link } from 'react-router-dom';
import BlogPostFooter from '../components/BlogPostFooter';

export default function MarriottBonvoyTravelRewardsForCatholicFamilies() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto prose prose-slate">
        <p className="text-sm text-emerald-700 font-semibold uppercase tracking-wide mb-3 not-prose">
          Practical tool
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Marriott Bonvoy Travel Rewards for Catholic Families
        </h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Hotel points can lower the cost of real family travel — when the card fits your spending, you pay the balance in full, and the annual fee is justified by use you already planned.
        </p>

        <p className="mb-6">Hey everyone,</p>

        <p className="mb-6">
          Credit cards are tools, not strategies. Used carefully, a hotel rewards card can convert ordinary spend into nights that would otherwise come out of the travel budget. Used carelessly, annual fees and interest erase the benefit.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Where Marriott Bonvoy can fit</h2>
        <p className="mb-6">
          Chase issues several Marriott Bonvoy cards. Boundless is often chosen for a strong welcome offer (bonus points plus a free night after qualifying spend). Bold is a lower-fee option for simpler earning. The right choice depends on how often your family actually stays in Marriott properties and whether you can meet the welcome spend with purchases you would make anyway.
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
          <li>Welcome bonuses can cover a meaningful share of a family trip if you hit the spend naturally.</li>
          <li>Ongoing earn rates reward hotel stays and selected everyday categories.</li>
          <li>Always pay the statement balance. Interest destroys rewards math.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Stewardship rules</h2>
        <p className="mb-6">
          Do not invent purchases to hit a bonus. Do not carry a balance. Compare the annual fee against nights and benefits you will really use. If the card does not clearly pay for itself, skip it or product-change later. For broader card + portal stacking on everyday shopping, see{' '}
          <Link to="/blog/triple-savings-online-purchases" className="text-emerald-700 font-medium hover:underline">Triple Savings on Online Purchases</Link>.
        </p>

        <p className="not-prose mb-8">
          <a
            href="https://www.referyourchasecard.com/252v/4CYRWB2LIZ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors text-sm sm:text-base shadow-sm"
          >
            Apply for Marriott Bonvoy →
          </a>
        </p>

        <p className="mb-6 text-sm text-gray-600">
          This is a referral link. If you are approved, the site may earn a commission at no extra cost to you. Offers, rates, and fees change; read Chase's current terms. This is not credit advice.
        </p>

        <p className="not-prose mb-8 flex flex-wrap gap-3">
          <Link to="/blog/build-margin-for-catholic-families" className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors text-sm sm:text-base shadow-sm">
            Build margin →
          </Link>
          <Link to="/tools" className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 hover:border-emerald-300 text-gray-800 font-medium rounded-xl transition-colors text-sm sm:text-base">
            All tools
          </Link>
        </p>

        <p className="text-lg font-medium text-gray-800 mt-10">Pay in full. Travel on purpose. Let points serve the trip, not the other way around.</p>
        <p className="text-gray-700 font-medium mt-6">– Dustin</p>
        <BlogPostFooter />
      </div>
    </div>
  );
}
