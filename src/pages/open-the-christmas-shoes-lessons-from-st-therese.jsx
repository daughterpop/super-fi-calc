import React from 'react';
import BlogPostFooter from '../components/BlogPostFooter';
import FurtherReading from '../components/FurtherReading';

export default function OpenTheChristmasShoesLessonsFromStTherese() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto prose prose-slate">
        <p className="mb-6">
          <a href="/blog" className="text-blue-700 hover:underline font-medium">← Back to the blog</a>
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Open the Christmas Shoes: Lessons from St. Thérèse
        </h1>

        <p className="text-xl font-semibold text-gray-800 mb-4">
          Christmas Eve, 1886. Thérèse, fourteen, overheard her father say the shoes by the hearth at Les Buissonnets would be filled for the last time. She was ready to cry. She went downstairs and opened them laughing.
        </p>

        <p className="mb-6">
          That night was her conversion, and it was small. No vow. No fortune given away. She refused the old habit of treating a tiny disappointment as a wound that someone else had to soothe. Catholic households meet the same habit at the register. The plan slips. The week was hard. The cart gets a consolation item before anyone has named the want.
        </p>

        <p className="mb-6 italic">
          “Miss no single opportunity of making some small sacrifice, here by a smiling look, there by a kindly word; always doing the smallest right and doing it all for love.”
        </p>

        <p className="mb-6">
          Thérèse wrote that after years of sweeping the Carmel stairs, smiling at the sister who irritated her, and offering the hidden hour instead of a noticed deed. The little way is not a mood. It is the next small right thing, done on purpose. Money has a little way too. It is the denied want that stays denied, and the five dollars that still gets a name.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Do not buy the tears back
        </h2>
        <p className="mb-6">
          Céline warned her not to go down yet. The old Thérèse would have sulked until the evening was repaired. The new one dried her face and joined the joy. A family budget leaks in that same pause. The child is disappointed. The adult is tired. Someone reaches for delivery, a bigger gift, a subscription that promises the evening will feel fixed.
        </p>

        <p className="mb-6">
          The shoes were already full. The wound was the news that childhood was ending, not an empty hearth. Most “I deserve this” purchases are the same mix-up. The want is real. The object will not answer it. Leaving the object in the aisle is a small sacrifice, and it is enough for one night.
        </p>

        <ul className="list-disc pl-6 space-y-3 mb-8 text-gray-700">
          <li>Name the consolation buy before it hits the cart: tired, disappointed, or keeping the peace</li>
          <li>Keep one envelope for real gifts so Christmas shoes are planned, not a mood</li>
          <li>Move five dollars the same day you skip the add-on, so the no has a job</li>
          <li>Let a child hear the no without a lecture, then stay for the actual evening</li>
        </ul>

        <p className="mb-6">
          She later said she could not climb the steep stair of perfection, so she asked Jesus to be the elevator. Households do not need a heroic reset to start. One skipped add-on, sent somewhere on purpose, is the whole method. Repeat it. The stair takes care of itself.
        </p>

        <FurtherReading
          title="Introduction to the Devout Life"
          note="Francis de Sales trains the same hidden practice: little virtues in an ordinary day, including the want you do not soothe with a purchase."
        />

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          One practical step this week
        </h2>
        <p className="mb-6">
          Pick the next trip to the store. Before you walk in, name one item you usually grab because the day was long. Leave it. When you get home, move that amount into the gift envelope or the giving line. Tell nobody. Thérèse swept stairs nobody praised.
        </p>

        <p className="mb-4">
          If you want to see whether those small nos are actually opening a gap, the calculators will show it.
        </p>

        <a
          href="/calculators"
          className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all shadow-md hover:shadow-lg mb-6"
        >
          See the numbers →
        </a>

        <p className="mb-6">
          The hearth was not empty. The freedom was in how she opened what was already there.
        </p>

        <p className="text-lg font-medium text-gray-800 mt-10">
          Leave the consolation item on the shelf. The evening can still be received.
        </p>

        <p className="text-gray-700 font-medium mt-6">
          – Dustin
        </p>

        <BlogPostFooter />
      </div>
    </div>
  );
}
