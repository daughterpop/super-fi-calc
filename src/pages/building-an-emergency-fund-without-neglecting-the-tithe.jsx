import React from 'react';
import { Link } from 'react-router-dom';
import BlogPostFooter from '../components/BlogPostFooter';

export default function BuildingAnEmergencyFundWithoutNeglectingTheTithe() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto prose prose-slate">
        <p className="text-sm text-emerald-700 font-semibold uppercase tracking-wide mb-3 not-prose">
          Practical guide
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Building an Emergency Fund Without Neglecting the Tithe
        </h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          How Catholic families can build a real cash buffer and keep generosity as a first claim — so unexpected costs never force a choice between prudence and fidelity.
        </p>

        <p className="mb-6">
          Hey everyone,
        </p>

        <p className="mb-6">
          Two good instincts often collide. One says: “We need an emergency fund so a broken transmission or medical bill does not become a crisis.” The other says: “We cannot stop giving just because money is tight.” Both are right. The order matters.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Why the emergency fund is not a lack of faith
        </h2>
        <p className="mb-6">
          Some Catholics worry that saving for emergencies signals distrust of Providence. Scripture and the tradition say otherwise. Joseph stored grain against famine. The Church has long treated prudent provision as a duty of state of life, especially for parents. An emergency fund is simply the modern form of that grain.
        </p>
        <p className="mb-6">
          It is also what makes ordinary generosity sustainable. Without a buffer, every car repair or illness feels like a choice between helping others and protecting the household. With a buffer, both remain possible.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          The right order: give, then protect, then grow
        </h2>
        <p className="mb-6">
          A workable sequence for most Catholic households looks like this:
        </p>
        <ol className="list-decimal pl-6 space-y-3 mb-6 text-gray-700">
          <li>
            <strong>Keep the tithe (or your decided giving percentage) as a first claim.</strong> Automate it. Do not let the emergency fund become the excuse that quietly reduces generosity to zero.
          </li>
          <li>
            <strong>Build a starter emergency fund of $1,000–$2,000</strong> while still giving. This stops small surprises from becoming high-interest debt.
          </li>
          <li>
            <strong>Attack high-interest consumer debt</strong> aggressively once the starter fund exists.
          </li>
          <li>
            <strong>Grow the emergency fund to 3–6 months of essential expenses</strong> (housing, food, utilities, transportation, insurance, minimum debt payments, and the tithe itself). Larger or single-income families often aim toward the higher end.
          </li>
          <li>
            <strong>Only then accelerate long-term investing</strong> toward the FI number while continuing to give.
          </li>
        </ol>
        <p className="mb-6">
          This order keeps fidelity and prudence in the same plan. For the broader sequence, see the{' '}
          <Link to="/blog/how-to-get-started-on-your-fi-path" className="text-emerald-700 font-medium hover:underline">Get Started guide</Link>.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          How much is enough?
        </h2>
        <p className="mb-6">
          Calculate essential monthly costs — not the full lifestyle number. Include the tithe. Multiply by three to six depending on job stability, family size, and health. A household of eight with one income needs a larger buffer than a dual-income couple with no dependents. Honesty here is an act of care, not fear.
        </p>
        <p className="mb-6">
          Keep the fund in a high-yield savings account that is separate from daily checking. It should be accessible within a day or two, not locked in long-term investments.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          When money is genuinely tight
        </h2>
        <p className="mb-6">
          There are seasons — job loss, medical crisis, the early years of many children — when the full tithe and a full emergency fund both feel impossible. In those seasons the Church has never demanded a fixed percentage from those who cannot give it. Give what you can with a free heart, protect the household, and resume the fuller pattern as soon as capacity returns. Scrupulosity helps no one.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          What the fund actually buys
        </h2>
        <p className="mb-6">
          Peace. The ability to help a neighbor without calculating the return. The freedom to keep tithing when income dips temporarily. The capacity to say yes to a vocational call that temporarily reduces income. That is the same{' '}
          <Link to="/blog/build-margin-for-catholic-families" className="text-emerald-700 font-medium hover:underline">margin</Link>{' '}
          the rest of this site keeps describing. The emergency fund is simply the first, most concrete layer of it.
        </p>

        <p className="not-prose mb-8 flex flex-wrap gap-3">
          <Link
            to="/calculators"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors text-sm sm:text-base shadow-sm"
          >
            Model your numbers →
          </Link>
          <Link
            to="/blog/how-to-budget-as-a-catholic-family-with-tithing-first"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 hover:border-emerald-300 text-gray-800 font-medium rounded-xl transition-colors text-sm sm:text-base"
          >
            Catholic family budgeting
          </Link>
        </p>

        <p className="text-lg font-medium text-gray-800 mt-10">
          Give first. Protect the household. Let the buffer serve both prudence and love.
        </p>
        <p className="text-gray-700 font-medium mt-6">– Dustin</p>

        <BlogPostFooter />
      </div>
    </div>
  );
}
