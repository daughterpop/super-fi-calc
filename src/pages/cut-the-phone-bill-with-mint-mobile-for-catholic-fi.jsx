import React from 'react';
import { Link } from 'react-router-dom';
import BlogPostFooter from '../components/BlogPostFooter';

export default function CutThePhoneBillWithMintMobileForCatholicFi() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto prose prose-slate">
        <p className="text-sm text-emerald-700 font-semibold uppercase tracking-wide mb-3 not-prose">
          Practical tool
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Cut the Phone Bill with Mint Mobile for Catholic FI
        </h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          A recurring bill most households can shrink without lifestyle drama — freeing cash for the emergency fund, investing, or the tithe.
        </p>

        <div className="not-prose border border-emerald-200 bg-emerald-50 rounded-2xl p-6 mb-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700 mb-2">
            Try it
          </p>
          <p className="text-gray-700 mb-4">
            New signups through the referral link below can get a $15 Mint credit — confirm current terms on Mint Mobile's site.
          </p>
          <a
            href="https://my.mintmobile.com/refer/n5SgKMM"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors text-sm sm:text-base shadow-sm"
          >
            Get $15 Mint credit →
          </a>
        </div>

        <p className="mb-6 text-sm text-gray-600">
          This is a referral link. If you sign up, the site may earn a commission at no extra cost to you. Plan prices and coverage vary; confirm current terms on Mint Mobile's site.
        </p>

        <p className="mb-6">
          The most boring line on the budget is the phone bill. That is exactly why it is worth attacking. Financial independence is built from many small levers, not one dramatic move — and prepaid plans on major networks often cost a fraction of postpaid family plans while delivering the same coverage for ordinary use.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Why Mint won the comparison
        </h2>
        <p className="mb-6">
          Mint Mobile runs on T-Mobile's network with simple prepaid plans. You pay upfront for three, six, or twelve months, which removes surprise fees and makes the true monthly cost easy to compare against your current bill. Paying in advance also forces an honest side-by-side: no autopilot renewal hiding the math. For many households, the first-year savings versus a traditional postpaid plan are large enough to notice — and a referral credit can soften the first renewal on top of that.
        </p>
        <p className="mb-6">
          Every dollar you stop sending to a carrier is a dollar available for{' '}
          <Link to="/blog/building-an-emergency-fund-without-neglecting-the-tithe" className="text-emerald-700 font-medium hover:underline">the emergency fund</Link>, investing, or{' '}
          <Link to="/blog/how-to-budget-as-a-catholic-family-with-tithing-first" className="text-emerald-700 font-medium hover:underline">consistent giving</Link>.
          Cutting a fixed cost is often more reliable than chasing another side hustle. Check coverage at your address and commute routes before you port numbers. If it works, the savings compound every month you stay on the plan.
        </p>

        <p className="not-prose mb-8 flex flex-wrap gap-3">
          <Link to="/blog/build-margin-for-catholic-families" className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors text-sm sm:text-base shadow-sm">
            Build margin →
          </Link>
          <Link to="/tools" className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 hover:border-emerald-300 text-gray-800 font-medium rounded-xl transition-colors text-sm sm:text-base">
            All tools
          </Link>
        </p>

        <p className="text-lg font-medium text-gray-800 mt-10">Cut the fixed cost. Redirect the difference. Keep the mission first.</p>
        <p className="text-gray-700 font-medium mt-6">– Dustin</p>
        <BlogPostFooter />
      </div>
    </div>
  );
}
