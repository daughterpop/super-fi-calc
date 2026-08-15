import React from 'react';
import { Link } from 'react-router-dom';
import BlogPostFooter from '../components/BlogPostFooter';

export default function BuildMarginForHeavenlyHopeLessonsFromTheAssumption() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto prose prose-slate">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Build Margin for Heavenly Hope: Lessons from the Assumption
        </h1>

        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Hey everyone,
        </p>

        <p className="text-xl font-semibold text-gray-800 mb-4">
          Today the Church celebrates the Assumption of the Blessed Virgin Mary.
        </p>

        <p className="mb-6">
          At the end of her earthly life, Mary was taken up body and soul into heavenly glory. The dogma reminds us that our bodies matter, that death is not the final word, and that the destiny of every faithful soul is not endless accumulation on earth but the joy of heaven. St. Josemaría Escrivá put it plainly: the feast prompts us to acknowledge the basis for joyful hope. We are still pilgrims, but our Mother has gone on ahead and points to the reward of our efforts.
        </p>

        <p className="mb-6">
          For Catholic families building financial independence, this feast is a quiet course correction. Money is a real tool. It buys food, roofs, education, and the capacity to give. Yet the Assumption keeps our eyes from settling too low. When the household lives as if the only future that counts is the one measured in net worth, anxiety grows and generosity shrinks. Real{' '}
          <Link to="/blog/build-margin-for-catholic-families" className="text-emerald-700 font-medium hover:underline">
            financial margin
          </Link>{' '}
          creates the practical freedom to keep heaven in view — so ordinary decisions about spending, saving, and giving stay ordered toward the true end rather than the next lifestyle upgrade.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Why margin serves heavenly hope
        </h2>
        <p className="mb-6">
          Margin is the gap between what comes in and what goes out. That gap is not an end in itself. It is the breathing room that lets a family refuse the pressure to treat every dollar as sacred to status or security. When the emergency fund is solid, the tithe is automated, and lifestyle inflation is resisted, the household can look up. A medical bill, a relative in need, or the simple choice to work a little less so a parent can be present no longer feels like a threat to survival. The same freedom that lets Mary’s children live lightly on earth is the freedom that keeps them oriented to the glory that already belongs to her.
        </p>

        <ul className="list-disc pl-6 space-y-3 mb-8 text-gray-700">
          <li>Keep a true emergency fund so ordinary crises never force panic selling or debt that crowds out prayer and presence.</li>
          <li>Give first (tithe and alms) so generosity remains a settled claim rather than an afterthought when cash feels tight.</li>
          <li>Refuse lifestyle creep so raises and bonuses expand capacity to serve rather than raise the floor of comfort.</li>
          <li>Treat time as part of the margin: lower required income frees hours for family, parish, and rest that money alone cannot buy.</li>
        </ul>

        <p className="mb-6">
          The Assumption does not ask us to despise the body or the material world. It asks us to remember where both are headed. Building margin through steady, faithful stewardship is one concrete way Catholic families practice that memory in the checkbook and the calendar.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Keep the surplus pointed toward the goal
        </h2>
        <p className="mb-6">
          Once the gap appears, keep the investing simple. Low-cost index funds can grow quietly while the family stays free of constant money drama. The point is not to pile up treasures that rust. It is the same quiet strength the Assumption reveals: a life light enough and stable enough that ordinary ups and downs never pull the eyes away from the glory already prepared.
        </p>
        <p className="mb-6">
          If you want the fuller picture of how margin fits a Catholic FI path — and a concrete sequence to begin — read{' '}
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
