import React from 'react';
import { Link } from 'react-router-dom';
import BlogPostFooter from '../components/BlogPostFooter';

export default function MakeGenerosityOrdinaryLessonsFromStLawrence() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto prose prose-slate">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Make Generosity Ordinary: Lessons from St. Lawrence
        </h1>

        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Hey everyone,
        </p>

        <p className="text-xl font-semibold text-gray-800 mb-4">
          Today the Church celebrates the Feast of St. Lawrence, deacon and martyr.
        </p>

        <p className="mb-6">
          When the Roman prefect demanded the treasures of the Church, Lawrence asked for three days. He spent them distributing what remained to the poor. Then he gathered the blind, the lame, the widows, and the orphans and presented them with a simple statement that still echoes: “These are the treasures of the Church.”
        </p>

        <p className="mb-6">
          He was not being clever. He was telling the truth. The Church’s real wealth has always been the people Christ came to serve. Lawrence paid for that truth with his life — and he did it with a lightness that still startles us.
        </p>

        <p className="mb-6">
          For Catholic families walking the path of financial independence, the same principle is pure practical wisdom. Generosity becomes ordinary only when the household has real{' '}
          <Link to="/blog/build-margin-for-catholic-families" className="text-emerald-700 font-medium hover:underline">
            margin
          </Link>
          . Without margin, every gift feels like a sacrifice that might break the budget. With margin, the same gift becomes a quiet, joyful act of fidelity.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Margin turns giving from heroic to ordinary
        </h2>
        <p className="mb-6">
          Most of us want to be generous. We want to help a family in need, support the parish, or respond when a sudden call comes. The obstacle is almost never a lack of desire. It is living so close to the edge that every extra dollar already has a claim on it.
        </p>

        <ul className="list-disc pl-6 space-y-3 mb-8 text-gray-700">
          <li>Decide once what “enough” looks like for housing, vehicles, food, and the quiet lifestyle creep that expands without permission.</li>
          <li>Automate a fixed percentage into savings and investments the day income arrives so the surplus is protected before lifestyle claims it.</li>
          <li>Keep a real emergency fund. It is not hoarding; it is the buffer that lets you give without fear that the next car repair will empty the account.</li>
          <li>Review the numbers together as a couple a few times a year. Clarity about the gap is what makes cheerful giving possible.</li>
        </ul>

        <p className="mb-6">
          St. Lawrence did not wait for perfect conditions. He simply treated the poor as the true treasure and acted. Financial independence works the same way. Small, honest decisions compound. The margin grows. Anxiety shrinks. Generosity stops feeling like a stretch and starts feeling like the natural fruit of a free household.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Let the surplus serve the mission
        </h2>
        <p className="mb-6">
          Once the gap appears, the surplus can do two quiet jobs at once: it can grow for the family’s future security, and it can fund the ordinary generosity that marks a Catholic home. Low-cost index funds handle the first. A simple, consistent plan for giving handles the second. The goal is the same one Lawrence lived: a household light enough to move freely and free enough to treat the poor as the Church’s true treasure.
        </p>
        <p className="mb-6">
          For the fuller picture of how margin fits a Catholic FI path — and a concrete sequence to start — read{' '}
          <Link to="/blog/build-margin-for-catholic-families" className="text-emerald-700 font-medium hover:underline">
            Build Margin for Catholic Families
          </Link>{' '}
          and run the{' '}
          <Link to="/calculators" className="text-emerald-700 font-medium hover:underline">
            FI calculator
          </Link>{' '}
          once with honest numbers.
        </p>

        <p className="text-lg font-medium text-gray-800 mt-10">
          Financial freedom really is for everyone — including your family.
        </p>

        <p className="text-gray-700 font-medium mt-6">
          – Dustin
        </p>

        <BlogPostFooter />
      </div>
    </div>
  );
}
