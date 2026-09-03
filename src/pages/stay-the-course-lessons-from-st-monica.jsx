import React from 'react';
import BlogPostFooter from '../components/BlogPostFooter';
import FurtherReading from '../components/FurtherReading';

export default function StayTheCourseLessonsFromStMonica() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto prose prose-slate">
        <p className="mb-6">
          <a href="/blog" className="text-blue-700 hover:underline font-medium">← Back to the blog</a>
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Stay the Course: Lessons from St. Monica
        </h1>

        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Hey everyone,
        </p>

        <p className="text-xl font-semibold text-gray-800 mb-4">
          On the Memorial of St. Monica, we remember a mother who prayed for years without a visible harvest — and that is exactly how faithful FI actually works.
        </p>

        <p className="mb-6">
          Monica did not get a tidy conversion story in a month. She wept, asked, waited, and kept showing up. Households building financial independence need the same virtue. The fruit is slow. The temptation is to quit after a tight season and call it realism.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          What she actually lived
        </h2>
        <p className="mb-6">
          Augustine later recorded a bishop’s words to his mother: it could not be that the son of so many tears should perish. That is not magic. It is a testimony to persistence ordered toward God. Monica prayed for her son for something like seventeen years. She did not treat delay as a closed door.
        </p>

        <p className="mb-6">
          Near the end of her life, after the conversion she had begged for, she told Augustine, “Lay this body anywhere… I only ask that you remember me at the altar of the Lord, wherever you may be.” She wanted the Eucharist more than a monument. That is detachment: even a long-sought earthly hope is not the last word.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          How this lands in the household plan
        </h2>
        <p className="mb-6">
          Faithful FI is not a mood. It is a course. Tithe first. Keep a cash buffer. Put surplus to work. Repeat when the month is boring and when it is hard. Monica’s years of prayer are the spiritual twin of automatic transfers and a simple written plan: you keep going because the destination is real, not because you feel inspired every payday.
        </p>

        <ul className="list-disc pl-6 space-y-3 mb-8 text-gray-700">
          <li>Name the destination once — a real FI number — so persistence has somewhere to go</li>
          <li>Automate the gap: tithe, emergency fund, then investing, so a tired week cannot cancel the plan</li>
          <li>Treat one tight month as weather, not as proof the path failed</li>
          <li>Refuse the quiet quit of lifestyle creep that undoes last year’s progress</li>
        </ul>

        <p className="mb-6">
          When the household stays the course, money anxiety slowly loses its vote. You can pray for a child’s conversion, a spouse’s peace, or a vocation without the budget screaming over every conversation. Margin is what makes patience practical.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          One practical step this week
        </h2>
        <p className="mb-6">
          Sit down with last month’s numbers and ask one Monica question: did we stay the course, or did we improvise because we were tired? If the tithe, the buffer, and the surplus transfer all happened, thank God and leave the system alone. If one of them slipped, restore it this week — not with shame, with the same quiet stubbornness Monica brought to prayer.
        </p>

        <p className="mb-4">
          If you have never named the destination, run the numbers once. Persistence without a number is just hoping. Persistence with a number is stewardship.
        </p>

        <a
          href="/calculators/fi-path"
          className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg mb-6"
        >
          Run the FI path calculator →
        </a>

        <p className="mb-6">
          St. Monica did not win her son by novelty. She won by remaining. Our part is smaller and still holy: order the household so the good work can continue when feelings fade — and remember, as she asked, to bring the whole family back to the altar.
        </p>

        <FurtherReading
          title="Confessions"
          note="Augustine's own record of the long wait she kept — and of the God who finally answered."
        />

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
