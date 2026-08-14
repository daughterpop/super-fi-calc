import React from 'react';
import { Link } from 'react-router-dom';
import BlogPostFooter from '../components/BlogPostFooter';

export default function LiveLightLikeStClareLessonsForFamilyFreedom() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto prose prose-slate">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Live Light Like St. Clare: Lessons for Family Freedom
        </h1>

        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Hey everyone,
        </p>

        <p className="text-xl font-semibold text-gray-800 mb-4">
          Today the Church remembers St. Clare of Assisi.
        </p>

        <p className="mb-6">
          Daughter of a wealthy family, she heard St. Francis preach and quietly left everything behind. She founded the Poor Clares, wrote the first rule for a women’s order, and spent decades living a life of radical simplicity that still radiates joy. One of her clearest teachings remains practical for every household: the lighter the load, the freer the heart to follow Christ.
        </p>

        <p className="mb-6">
          Clare did not choose poverty as a punishment. She chose it as freedom. By owning almost nothing, she became available for prayer, for her sisters, and for whatever God asked next. That same principle works for Catholic families seeking financial independence. When we deliberately live light — fewer possessions, less lifestyle pressure, clearer limits — we create real{' '}
          <Link to="/blog/build-margin-for-catholic-families" className="text-emerald-700 font-medium hover:underline">
            margin
          </Link>
          . Margin turns financial independence from a distant number into everyday freedom to love and serve.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Why living light builds lasting margin
        </h2>
        <p className="mb-6">
          Most of the pressure on a family budget does not come from basic needs. It comes from the quiet accumulation of things and commitments that once felt optional and then became “necessary.” Housing that is larger than the mission requires. Vehicles that cost more in payments and insurance than the family actually uses. Subscriptions and stuff that demand time, space, and money. Clare’s example cuts through all of it: decide what is truly enough, then stop adding.
        </p>

        <ul className="list-disc pl-6 space-y-3 mb-8 text-gray-700">
          <li>Walk through your home and name what still serves the family’s real mission and what only demands attention.</li>
          <li>Set firm upper limits on the big categories — housing, cars, food, clothing — that still feel generous for your season of life.</li>
          <li>When income rises, move the increase into savings and investments before lifestyle can expand to meet it.</li>
          <li>Practice one seasonal “lighten the load” day each year: give away, sell, or simply stop buying what no longer helps the household move freely.</li>
        </ul>

        <p className="mb-6">
          St. Clare once wrote that those who embrace the poor Christ “possess a most precious treasure.” Her life proved it. The same treasure is available to families today. Small, deliberate choices to live lighter compound. The gap between income and spending grows. Anxiety shrinks. The family becomes freer to say yes to the next good work God places in front of them.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Let the surplus serve the mission
        </h2>
        <p className="mb-6">
          Once the margin appears, put it to work. Low-cost index funds can grow quietly in the background while the household stays light and free. The goal is not accumulation for its own sake. It is the same freedom Clare lived: a family light enough to move when God calls and free enough to give without calculation.
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
