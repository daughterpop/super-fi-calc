import React from 'react';
import { Link } from 'react-router-dom';
import BlogPostFooter from '../components/BlogPostFooter';

export default function BuildMarginToCarryWhatMattersLessonsFromStHyacinth() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto prose prose-slate">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Build Margin to Carry What Matters: Lessons from St. Hyacinth
        </h1>

        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Hey everyone,
        </p>

        <p className="text-xl font-semibold text-gray-800 mb-4">
          Today the Church remembers St. Hyacinth of Poland, the Dominican “Apostle of the North” who carried the faith across Eastern Europe with remarkable freedom.
        </p>

        <p className="mb-6">
          The liturgy for his memorial includes these words from Sirach: “Happy the man found without fault, who turns not aside after gain, nor puts his trust in money nor in treasures!” That line is not abstract piety. When the Tartars sacked Kiev, Hyacinth finished Mass, took the Blessed Sacrament in his hands, and began to leave. As he passed an image of Our Lady a voice is said to have asked why he would leave her behind. He carried both the Eucharist and the statue — the true treasures — and walked away free.
        </p>

        <p className="mb-6">
          For Catholic families on the path to financial independence, the same principle holds. Real{' '}
          <Link to="/blog/build-margin-for-catholic-families" className="text-emerald-700 font-medium hover:underline">
            financial margin
          </Link>{' '}
          is what lets us hold money lightly enough that we can actually follow when God asks us to move, give, change jobs, welcome someone, or simplify. When every dollar is spoken for, the true treasures get left behind in the scramble.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Why margin frees us to carry what matters
        </h2>
        <p className="mb-6">
          Hyacinth could respond in the moment because he was not entangled in possessions that owned him. Ordinary households face smaller versions of the same test. A sudden need in the family, a call to serve, a chance to live more simply, or even the quiet invitation to tithe more generously — all of these require a little room. Margin is the practical space that keeps the household from turning every decision into a calculation of scarcity.
        </p>

        <ul className="list-disc pl-6 space-y-3 mb-8 text-gray-700">
          <li>Build a real emergency fund so unexpected costs never force you to abandon the things that matter most.</li>
          <li>Keep lifestyle inflation in check so raises expand capacity rather than tighten the grip of comfort.</li>
          <li>Automate the first fruits (tithe and a small alms category) so generosity remains a settled priority instead of a leftover.</li>
          <li>Protect time as part of the margin: lower required income frees hours to actually be present to the people and mission God places in front of you.</li>
        </ul>

        <p className="mb-6">
          St. Hyacinth’s life shows that the happiest man is the one who does not put his trust in money or treasures. Building deliberate margin through steady stewardship is one concrete way ordinary families live that same freedom in the checkbook, the calendar, and the quiet decisions of daily life.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Keep the surplus ordered toward freedom
        </h2>
        <p className="mb-6">
          Once the gap appears, keep investing simple. Low-cost index funds can grow quietly while the family stays free of constant money drama. The goal is not to pile up treasures. It is the same quiet strength Hyacinth modeled: a life stable enough that ordinary ups and downs never crowd out the ability to carry what truly matters.
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
