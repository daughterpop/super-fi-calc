import React from 'react';
import { Link } from 'react-router-dom';
import BlogPostFooter from '../components/BlogPostFooter';

export default function BuildGenerosityIntoYourFiPlanWithDaffy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto prose prose-slate">
        <p className="text-sm text-emerald-700 font-semibold uppercase tracking-wide mb-3 not-prose">
          Practical tool
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Build Generosity into Your FI Plan with Daffy
        </h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          A modern donor-advised fund for everyday families — so giving stays a first claim on the path to financial independence instead of an afterthought when cash is tight.
        </p>

        <p className="mb-6">
          Hey everyone,
        </p>

        <p className="mb-6">
          Catholic FI is not secular FIRE with a rosary attached. The goal is margin for vocation — including the freedom to give without anxiety. If generosity only happens when the surplus is obvious, it will shrink in lean seasons and compete with every other good claim. Better to build giving into the plan from the start.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Why a donor-advised fund helps ordinary families
        </h2>
        <p className="mb-6">
          A donor-advised fund (DAF) lets you contribute cash or appreciated assets, receive the tax benefit in the year you give, and then recommend grants to qualified charities over time. Daffy is designed for everyday households rather than only high-net-worth philanthropy. You can automate contributions, track giving in one place, and involve the family in choosing where the money goes.
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
          <li>Automate a monthly or annual gift so generosity does not depend on willpower at month-end.</li>
          <li>Bunch contributions in high-income years if that helps your tax situation, then grant steadily.</li>
          <li>Keep a clear record of where the household's charity dollars go — useful for teaching kids and for your own review.</li>
          <li>Separate the decision to give from the decision of which organization receives the next grant.</li>
        </ul>
        <p className="mb-6">
          Through the invite link below, new members can receive $25 for charity after a first contribution (confirm current terms at signup).
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          How this fits the Catholic order of operations
        </h2>
        <p className="mb-6">
          On this site the sequence is consistent:{' '}
          <Link to="/blog/how-to-budget-as-a-catholic-family-with-tithing-first" className="text-emerald-700 font-medium hover:underline">give first</Link>,{' '}
          <Link to="/blog/building-an-emergency-fund-without-neglecting-the-tithe" className="text-emerald-700 font-medium hover:underline">protect the household</Link>, then grow the surplus toward long-term margin. A DAF does not replace the parish envelope or direct support of the poor. It can sit alongside them as a structured way to make generosity ordinary — the same spirit St. Lawrence modeled when he treated the poor as the Church's true treasure. See{' '}
          <Link to="/blog/make-generosity-ordinary-lessons-from-st-lawrence" className="text-emerald-700 font-medium hover:underline">Make Generosity Ordinary</Link>.
        </p>
        <p className="mb-6">
          Use Daffy for the portion of giving you want to systematize. Keep some giving immediate and personal. The tool serves the virtue; it does not replace it.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          A simple next step
        </h2>
        <p className="mb-6">
          Join through the link, set a recurring contribution sized to your real capacity, and pick one or two organizations you already trust. Review grants quarterly with your spouse. Let the kids see (age-appropriately) that money is for mission, not only for the household.
        </p>
        <p className="not-prose mb-8">
          <a
            href="https://www.daffy.org/dhimmer1/invite"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors text-sm sm:text-base shadow-sm"
          >
            Join Daffy — $25 for charity →
          </a>
        </p>

        <p className="mb-6 text-sm text-gray-600">
          This is a referral link. If you join, the site may earn a benefit at no extra cost to you. Bonus and plan details change; confirm current terms on Daffy's site. This is not tax advice — consult your own advisor for your situation.
        </p>

        <p className="not-prose mb-8 flex flex-wrap gap-3">
          <Link
            to="/blog/how-to-budget-as-a-catholic-family-with-tithing-first"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors text-sm sm:text-base shadow-sm"
          >
            Budget with tithing first →
          </Link>
          <Link
            to="/blog/build-margin-for-catholic-families"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 hover:border-emerald-300 text-gray-800 font-medium rounded-xl transition-colors text-sm sm:text-base"
          >
            Build margin
          </Link>
        </p>

        <p className="text-lg font-medium text-gray-800 mt-10">
          Give first. Systematize what helps. Keep the heart free.
        </p>
        <p className="text-gray-700 font-medium mt-6">– Dustin</p>

        <BlogPostFooter />
      </div>
    </div>
  );
}
