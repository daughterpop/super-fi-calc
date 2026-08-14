import React from 'react';
import { Link } from 'react-router-dom';
import BlogPostFooter from '../components/BlogPostFooter';

export default function IsFireCompatibleWithCatholicism() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto prose prose-slate">
        <p className="text-sm text-emerald-700 font-semibold uppercase tracking-wide mb-3 not-prose">
          Core question
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Is FIRE Compatible with Catholicism?
        </h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          A clear Catholic answer to the Financial Independence, Retire Early movement — what to keep, what to leave behind, and how margin for vocation differs from the secular race to stop working.
        </p>

        <p className="mb-6">
          Hey everyone,
        </p>

        <p className="mb-6">
          The question comes up often: Is FIRE — Financial Independence, Retire Early — compatible with the Catholic faith?
        </p>

        <p className="mb-6">
          The short answer is that some of its tools are excellent and some of its spirit is not. The difference matters.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          What classic FIRE gets right
        </h2>
        <p className="mb-6">
          FIRE popularized a few truths that Catholics already know under different names:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
          <li>Living below your means creates freedom.</li>
          <li>Debt is a form of bondage that limits generosity and vocation.</li>
          <li>Compound growth rewards patience and consistency.</li>
          <li>Clarity about numbers reduces anxiety more effectively than vague hope.</li>
        </ul>
        <p className="mb-6">
          Those practices are forms of prudence. Scripture and the saints never opposed wise planning. Joseph stored grain. The wise virgins brought oil. Parents are responsible for the material needs of their children. Building investable surplus can be a modern expression of that duty.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Where classic FIRE often goes wrong
        </h2>
        <p className="mb-6">
          The problems appear when the goal becomes independence from work, from ordinary limits, or — subtly — from dependence on God.
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
          <li><strong>Leisure as the highest good.</strong> Classic FIRE often frames early retirement as the prize. For a Catholic, the prize is fidelity to vocation — marriage, children, parish, the work God actually assigned — whether or not that work is paid.</li>
          <li><strong>Extreme frugality that harms the household.</strong> Some versions treat deprivation as a badge. That can starve marriage, hospitality, and the ordinary goods of family life.</li>
          <li><strong>Self-sufficiency as the ideal.</strong> The language of “independence” can crowd out the truth that everything is gift and that we remain dependent on Providence even when the portfolio is large.</li>
          <li><strong>Ignoring large-family realities.</strong> Spreadsheets built for one or two people break when tuition, vehicles, and groceries scale with six or eight people under one roof.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          A better Catholic framing: margin for vocation
        </h2>
        <p className="mb-6">
          On this site we use financial independence differently. FI is the point at which money no longer crowds out prayer, presence, tithing, and the work God asks of the household. It is{' '}
          <Link to="/blog/build-margin-for-catholic-families" className="text-emerald-700 font-medium hover:underline">margin</Link>{' '}
          — cash, time, and attention — so the family can say yes without constant panic.
        </p>
        <p className="mb-6">
          Paid work may continue. The number is a tool, not an idol. Generosity stays in the plan. Large-family costs are modeled honestly. That is the difference between Catholic FI and secular FIRE cosplay. For the fuller case, see{' '}
          <Link to="/blog/why-fi-for-catholics" className="text-emerald-700 font-medium hover:underline">Why FI for Catholics</Link>.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Practical test
        </h2>
        <p className="mb-6">
          Ask three questions of any FI plan:
        </p>
        <ol className="list-decimal pl-6 space-y-2 mb-6 text-gray-700">
          <li>Does it protect or erode the capacity for Mass, confession, family prayer, and ordinary hospitality?</li>
          <li>Does tithing and almsgiving remain a first claim, or only a leftover after the number is hit?</li>
          <li>Does the pursuit itself make the family more anxious, more envious, or less present?</li>
        </ol>
        <p className="mb-6">
          If the answers are healthy, the tools of FIRE can serve the Gospel. If not, the plan needs conversion, not more optimization.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          How to begin
        </h2>
        <p className="mb-6">
          Name the real goal with your spouse. Get rough numbers. Run the calculator once. Protect the non-negotiables. Then pick one lever this month. The sequence is laid out in the{' '}
          <Link to="/blog/how-to-get-started-on-your-fi-path" className="text-emerald-700 font-medium hover:underline">Get Started guide</Link>.
        </p>

        <p className="not-prose mb-8 flex flex-wrap gap-3">
          <Link
            to="/calculators"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors text-sm sm:text-base shadow-sm"
          >
            Find your FI number →
          </Link>
          <Link
            to="/blog/why-fi-for-catholics"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 hover:border-emerald-300 text-gray-800 font-medium rounded-xl transition-colors text-sm sm:text-base"
          >
            Why FI for Catholics
          </Link>
          <Link
            to="/blog/build-margin-for-catholic-families"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 hover:border-emerald-300 text-gray-800 font-medium rounded-xl transition-colors text-sm sm:text-base"
          >
            Build Margin
          </Link>
        </p>

        <p className="text-lg font-medium text-gray-800 mt-10">
          The tools can serve. The goal must remain fidelity.
        </p>
        <p className="text-gray-700 font-medium mt-6">– Dustin</p>

        <BlogPostFooter />
      </div>
    </div>
  );
}
