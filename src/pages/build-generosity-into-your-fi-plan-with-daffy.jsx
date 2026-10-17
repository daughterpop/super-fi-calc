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
          Generosity has a planning problem. If giving only happens when the surplus is obvious, it shrinks in lean seasons and competes with every other good claim on the money. Catholic FI is not secular FIRE with a rosary attached — the goal is margin for vocation, including the freedom to give without anxiety. So build giving into the plan from the start instead of hoping it survives month-end.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Why generosity keeps losing the budget fight
        </h2>
        <p className="mb-6">
          Most families do not object to giving. They postpone it. The month fills up, the emergency fund needs a refill, the car needs brakes, and charity becomes whatever is left — which is nothing, most months. Willpower is a terrible system for anything you want to last. If generosity matters, it needs the same treatment as the mortgage: scheduled, automatic, and decided once.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          What a donor-advised fund actually does
        </h2>
        <p className="mb-6">
          A donor-advised fund (DAF) lets you contribute cash or appreciated assets, take the tax benefit in the year you give, and then recommend grants to qualified charities over time. Daffy is built for ordinary households rather than only high-net-worth philanthropy — you can automate contributions, track all of the household's giving in one place, and bring the family into choosing where it goes.
        </p>
        <p className="mb-6">
          The mechanics serve the virtue in a few specific ways. You can bunch contributions in high-income years and grant steadily afterward. You separate the decision to give from the decision of which organization gets the next check. And you get a clean record of where the charity dollars go — useful at tax time and useful when the kids are old enough to see the ledger.
        </p>
        <p className="mb-6">
          A DAF does not replace the parish envelope or direct help to the poor. It sits alongside them as a structured way to make generosity ordinary — the same spirit St. Lawrence showed when he treated the poor as the Church's true treasure. See{' '}
          <Link to="/blog/make-generosity-ordinary-lessons-from-st-lawrence" className="text-emerald-700 font-medium hover:underline">Make Generosity Ordinary</Link>.
        </p>

        <div className="not-prose border border-emerald-200 bg-emerald-50 rounded-2xl p-6 my-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700 mb-2">
            Try it
          </p>
          <p className="text-gray-700 mb-4">
            New members can get $25 for charity after a first contribution — confirm current terms at signup.
          </p>
          <a
            href="https://www.daffy.org/dhimmer1/invite"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors text-sm sm:text-base shadow-sm"
          >
            Join Daffy — $25 for charity →
          </a>
        </div>

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
