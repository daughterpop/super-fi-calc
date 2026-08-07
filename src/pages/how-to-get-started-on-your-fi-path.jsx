import React from 'react';
import { Link } from 'react-router-dom';
import BlogPostFooter from '../components/BlogPostFooter';

export default function HowToGetStartedOnYourFiPath() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto prose prose-slate">
        <p className="text-sm text-emerald-700 font-semibold uppercase tracking-wide mb-3 not-prose">
          Evergreen guide
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          How to Get Started on Your FI Path
        </h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          A simple, faith-aligned starting point for Catholic families who want clearer numbers without turning money into an idol.
        </p>

        <p className="mb-6">
          Most households don’t need a 40-page plan. They need a honest picture, one next step, and the courage to begin.
          Financial independence (FI) here means <strong>margin for vocation</strong> — more room for Mass, kids, generosity, and the work God actually called you to — not a secular race to never work again.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          1. Name the real goal
        </h2>
        <p className="mb-6">
          Write one sentence you and your spouse can both own. Examples:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
          <li>“We want enough invested that work is a choice, not a trap.”</li>
          <li>“We want tuition, tithing, and family life to fit without constant anxiety.”</li>
          <li>“We want the freedom to say yes when God asks something of us.”</li>
        </ul>
        <p className="mb-6">
          If the goal is only “more money” or “retire at 40,” pause. FI is a tool for fidelity, not a substitute for it.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          2. Get one honest money picture
        </h2>
        <p className="mb-6">
          You don’t need perfect data. Rough numbers beat no numbers.
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
          <li><strong>Investable assets</strong> — retirement accounts, taxable investments, cash earmarked for long-term goals</li>
          <li><strong>Annual spending</strong> — what it actually costs to run the household (include tithing if it’s non-negotiable)</li>
          <li><strong>Monthly surplus</strong> — what you can invest after essentials and giving</li>
          <li><strong>Big future costs</strong> — remaining college years, vehicle replacements, mortgage payoff targets</li>
        </ul>
        <p className="mb-6">
          Do this once together. Disagreement is normal; clarity is the point.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          3. Run the calculator once
        </h2>
        <p className="mb-6">
          Plug those rough numbers into the free FI calculator. The output is not a prophecy. It is a flashlight:
          “At this surplus and these expenses, we are roughly <em>X</em> years out.”
        </p>
        <p className="mb-6">
          That single number usually makes the next move obvious — raise surplus, cut one category, or accept a longer timeline with peace.
        </p>
        <p className="not-prose mb-8">
          <Link
            to="/calculators"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors text-sm sm:text-base shadow-sm"
          >
            Open the FI calculator →
          </Link>
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          4. Choose one lever this month
        </h2>
        <p className="mb-6">
          Avoid the trap of changing twelve things at once. Pick <strong>one</strong>:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
          <li><strong>Cut</strong> — cancel or reduce one expense that doesn’t serve the mission</li>
          <li><strong>Earn</strong> — overtime, a skill, a side project that fits family life</li>
          <li><strong>Automate</strong> — raise the 401(k) contribution, set a recurring taxable transfer, or capture the employer match</li>
        </ul>
        <p className="mb-6">
          One lever, done consistently, beats an elaborate system you abandon in three weeks.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          5. Protect the non-negotiables
        </h2>
        <p className="mb-6">
          As surplus grows, guard what the spreadsheet cannot measure:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
          <li>Sunday Mass and a sustainable prayer rhythm</li>
          <li>Marriage time that isn’t only logistics</li>
          <li>Presence with your kids</li>
          <li>Tithing and ordinary hospitality</li>
        </ul>
        <p className="mb-6">
          If the plan requires burning out the family to hit a number, the plan is wrong. Adjust the number.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          6. Put surplus to work simply
        </h2>
        <p className="mb-6">
          You do not need a exotic portfolio to begin. Capture any employer match, favor low-cost broad funds, and keep fees low.
          Complexity can come later. Consistency matters more than cleverness in the first years.
        </p>
        <p className="mb-6">
          When you’re ready for practical tools (investing apps, budgeting, privacy, everyday savings), browse the Tools page — including referral perks that can free up cash without extra cost to you.
        </p>
        <p className="not-prose mb-8">
          <Link
            to="/tools"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 hover:border-emerald-300 text-gray-800 font-medium rounded-xl transition-colors text-sm sm:text-base"
          >
            Browse stewardship tools →
          </Link>
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          7. Review on a calm schedule
        </h2>
        <p className="mb-6">
          Revisit the calculator a few times a year — not every payday. Update big changes (new baby, job shift, tuition decision).
          Between reviews, live the plan. Obsessive checking usually feeds anxiety more than progress.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          If you feel overwhelmed
        </h2>
        <p className="mb-6">
          Start with steps 1–3 only. One shared goal, rough numbers, one calculator run. That is a real beginning.
          Questions about the site, tithing, the 4% rule, or large-family priorities live on the FAQ.
        </p>
        <p className="not-prose mb-8 flex flex-wrap gap-3">
          <Link
            to="/faq"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 hover:border-emerald-300 text-gray-800 font-medium rounded-xl transition-colors text-sm"
          >
            Read the FAQ
          </Link>
          <Link
            to="/subscribe"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors text-sm"
          >
            Join the list
          </Link>
        </p>

        <p className="text-lg font-medium text-gray-800 mt-10">
          Clarity first. One lever second. Fidelity always.
        </p>
        <p className="text-gray-700 font-medium mt-6">– Dustin</p>

        <BlogPostFooter />
      </div>
    </div>
  );
}
