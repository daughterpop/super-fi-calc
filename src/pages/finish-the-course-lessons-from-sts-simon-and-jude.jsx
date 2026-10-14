import React from 'react';
import BlogPostFooter from '../components/BlogPostFooter';

export default function FinishTheCourseLessonsFromStsSimonAndJude() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto prose prose-slate">
        <p className="mb-6">
          <a href="/blog" className="text-blue-700 hover:underline font-medium">← Back to the blog</a>
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Finish the Course: Lessons from Sts. Simon and Jude
        </h1>

        <p className="text-xl font-semibold text-gray-800 mb-4">
          They walked to Persia and never came back.
        </p>

        <p className="mb-6">
          Simon the Zealot and Jude Thaddeus share a feast day and, by ancient tradition, a martyrdom. After Pentecost they carried the Gospel east into Persia, preaching year after unrecorded year, and were killed for it together. No bestselling letters survive from them — Jude's short epistle excepted. Their apostolate was the long, obscure middle: keep walking, keep preaching, keep going.
        </p>

        <p className="mb-6">
          Every household on the road to financial independence eventually enters its own Persia. The early wins are behind — the debt paid, the first ten thousand saved — and the goal is still a decade off. Nothing dramatic happens in these years. The market does what it does. The contributions go in. The temptation is not spectacular failure but quiet drift: lifestyle inflation here, a paused contribution there, a "we deserve it" that repeats monthly.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          The middle is the mission
        </h2>
        <p className="mb-6">
          Simon and Jude did not get to choose a shorter apostolate. The road to Persia was the assignment, and the assignment was the whole of it. In the same way, the middle years of building are not the waiting room before the real life starts — they are the formation. A household that learns to live on less than it earns for fifteen straight years has learned something no windfall can teach.
        </p>

        <p className="mb-6">
          Jude's epistle has one famous line for the struggling: he writes to those "called, beloved, and kept." Kept. The contributions kept, the course kept, the household kept. Perseverance in finance is rarely heroic. It is automatic transfers, annual rebalancing, and saying no to the upgrade in the same tone of voice, year after year.
        </p>

        <ul className="list-disc pl-6 space-y-3 mb-8 text-gray-700">
          <li>Automate the contribution so perseverance does not depend on mood</li>
          <li>Pick one annual review date and ignore the portfolio the other 364 days</li>
          <li>Name the lifestyle upgrades you will not buy this year — in writing</li>
          <li>Mark milestones (each $50k, each debt killed) so the middle has landmarks</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          One practical step this week
        </h2>
        <p className="mb-6">
          Check that the automatic investment is still running at the amount you chose — and raise it by one percent. Not a dramatic gesture. A Persia-sized step: small, eastward, and repeated until the road ends.
        </p>

        <p className="mb-4">
          If you have never calculated how long the road actually is, that is the first landmark to set. Run the numbers and mark the course.
        </p>

        <a
          href="/calculators"
          className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all shadow-md hover:shadow-lg mb-6"
        >
          Mark the course with the calculators →
        </a>

        <p className="mb-6">
          Simon and Jude finished together, far from home, with no crowd watching. The household that keeps the course in the quiet years finishes the same way — not with applause, but with the freedom that was the point all along.
        </p>

        <p className="text-lg font-medium text-gray-800 mt-10">
          Keep the course in the quiet years.
        </p>

        <p className="text-gray-700 font-medium mt-6">
          – Dustin
        </p>

        <BlogPostFooter />
      </div>
    </div>
  );
}
