import React from 'react';
import { Link } from 'react-router-dom';
import BlogPostFooter from '../components/BlogPostFooter';

export default function HowToBudgetAsACatholicFamilyWithTithingFirst() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto prose prose-slate">
        <p className="text-sm text-emerald-700 font-semibold uppercase tracking-wide mb-3 not-prose">
          Practical guide
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          How to Budget as a Catholic Family (with Tithing First)
        </h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          A simple, faith-aligned budget that treats giving as a first claim, protects the non-negotiables, and still creates the surplus that builds real financial margin.
        </p>

        <p className="mb-6">
          Hey everyone,
        </p>

        <p className="mb-6">
          Most budgeting advice starts with “track every dollar” or “follow the 50/30/20 rule.” Those systems can help. For Catholic families they are incomplete. The first question is not “How do we stretch the paycheck?” but “How do we order money so it serves the mission?”
        </p>

        <p className="mb-6">
          That order begins with giving.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Give first, then decide the rest
        </h2>
        <p className="mb-6">
          Many Catholic households treat the tithe (or a prayerfully chosen percentage) as a non-negotiable expense, not a leftover. That is coherent with the Gospel and with financial independence. If generosity only exists while the W-2 is large, the plan was never ordered to fidelity.
        </p>
        <p className="mb-6">
          Practical move: the day income arrives, set aside the giving percentage before any other allocation. Automate it if possible. What remains is the true envelope for living, saving, and building margin.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          A simple three-part framework
        </h2>
        <ol className="list-decimal pl-6 space-y-3 mb-6 text-gray-700">
          <li>
            <strong>Give.</strong> Tithe and alms decided in advance. This is the first claim.
          </li>
          <li>
            <strong>Protect.</strong> Housing, food, utilities, transportation, insurance, minimum debt payments, and a real emergency-fund contribution. These keep the household stable.
          </li>
          <li>
            <strong>Build and live.</strong> Everything else — investments toward FI, education savings, ordinary wants, hospitality, and the small joys that make family life sustainable.
          </li>
        </ol>
        <p className="mb-6">
          The exact percentages will differ by income, family size, and season of life. A household of eight with tuition will look different from a dual-income couple without kids. The order stays the same.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          How to build the budget in one sitting
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
          <li>List every source of monthly income after taxes (or decide whether you tithe on gross — either is defensible; consistency matters more).</li>
          <li>Write the giving number first and move it out of the available total.</li>
          <li>List fixed obligations and realistic variable costs (groceries scale with family size — be honest).</li>
          <li>Decide the emergency-fund and long-term investment amounts next. These create the margin that later posts on this site keep returning to.</li>
          <li>What remains is the true discretionary budget. If it is too tight, the conversation is about cutting a category or raising income — not about shrinking the tithe by default.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Large-family realities
        </h2>
        <p className="mb-6">
          Catholic families often have more children than the cultural average. That changes the math on housing, vehicles, food, medical costs, and education. A single-person FIRE spreadsheet will lie to you. Stress-test real expenses. Prefer a conservative surplus estimate. The{' '}
          <Link to="/calculators" className="text-emerald-700 font-medium hover:underline">FI calculator</Link>{' '}
          is built for these realities — use it.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Review rhythm that does not become an idol
        </h2>
        <p className="mb-6">
          Check the numbers monthly with your spouse for fifteen quiet minutes. Do a deeper review a few times a year. Between reviews, live the plan. Obsessive checking usually feeds anxiety more than progress. A simple weekly{' '}
          <Link to="/blog/build-a-money-sabbath-into-your-week" className="text-emerald-700 font-medium hover:underline">money Sabbath</Link>{' '}
          can help protect both the budget and the marriage.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          The point of the numbers
        </h2>
        <p className="mb-6">
          A Catholic budget is not about control for its own sake. It is about creating the practical margin that lets the household stay free for prayer, presence, generosity, and the work God actually asked of you. For the deeper framing, see{' '}
          <Link to="/blog/build-margin-for-catholic-families" className="text-emerald-700 font-medium hover:underline">Build Margin for Catholic Families</Link>{' '}
          and{' '}
          <Link to="/blog/why-fi-for-catholics" className="text-emerald-700 font-medium hover:underline">Why FI for Catholics</Link>.
        </p>

        <p className="not-prose mb-8 flex flex-wrap gap-3">
          <Link
            to="/calculators"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors text-sm sm:text-base shadow-sm"
          >
            Run the FI calculator →
          </Link>
          <Link
            to="/blog/how-to-get-started-on-your-fi-path"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 hover:border-emerald-300 text-gray-800 font-medium rounded-xl transition-colors text-sm sm:text-base"
          >
            How to get started
          </Link>
        </p>

        <p className="text-lg font-medium text-gray-800 mt-10">
          Give first. Protect the household. Build the surplus that serves love.
        </p>
        <p className="text-gray-700 font-medium mt-6">– Dustin</p>

        <BlogPostFooter />
      </div>
    </div>
  );
}
