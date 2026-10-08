import React from 'react';
import BlogPostFooter from '../components/BlogPostFooter';

export default function LendTheThreeLoaves() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto prose prose-slate">
        <p className="mb-6">
          <a href="/blog" className="text-blue-700 hover:underline font-medium">← Back to the blog</a>
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Lend the Three Loaves to the Friend at Midnight
        </h1>

        <p className="text-xl font-semibold text-gray-800 mb-4">
          The house was already shut. Then a friend arrived from the road, and the bread box was empty.
        </p>

        <p className="mb-6">
          Jesus told that story to people who knew what a locked door costs. The host did not send the traveler away with an apology. He crossed the street in the dark and asked for three loaves. Friendship did not open the cupboard. He kept knocking until the man inside got up and handed over whatever the night required.
        </p>

        <p className="mb-6 italic">
          “Our Lord and God does not want to know what we want — for he cannot fail to know it — but wants us rather to exercise our desire through our prayers, so that we may be able to receive what he is preparing to give us.”
        </p>

        <p className="mb-6">
          St. Augustine wrote that to the widow Proba after the sack of Rome, while she was learning how to ask. He was not telling her to skip the loaf. He was telling her the Father already sees the need, and still wants the knock.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          A card is not the neighbor
        </h2>
        <p className="mb-6">
          The parish version is smaller and just as late. A cousin’s flight lands after bedtime. The lock-in parent texts that breakfast fell through. The house next door loses power and needs a meal. You can pray “give us this day our daily bread” and still have spent the grocery money on a cart that was already full of wants. Persistence is not a substitute for the loaf.
        </p>

        <p className="mb-6">
          Do not treat the credit card as the friend who always answers. The card gets up every time. It also keeps a tab the parable never blessed. The neighbor lent bread he already had. He did not finance the night and call it hospitality.
        </p>

        <ul className="list-disc pl-6 space-y-3 mb-8 text-gray-700">
          <li>Name a small grocery buffer “three loaves” and fund it before the next want</li>
          <li>Keep it boring — enough for a late meal, a breakfast run, or a tank of gas to the airport</li>
          <li>When the knock is real, spend that line, then refill it the same week</li>
          <li>Pray the petition anyway. The knock trains the heart. The loaf answers the door.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          One practical step this week
        </h2>
        <p className="mb-6">
          Set aside enough for three ordinary loaves and the meal that goes with them. Cash in an envelope, or a savings bucket you will not raid for takeout. Tell your spouse what it is for. Do not spend it to feel ready. Wait until someone is actually on the step.
        </p>

        <p className="mb-4">
          If you are not sure the household can spare that line, check the cash buffer before you promise the traveler a place at the table.
        </p>

        <a
          href="/calculators/emergency-fund"
          className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all shadow-md hover:shadow-lg mb-6"
        >
          Check the cash buffer →
        </a>

        <p className="mb-6">
          Augustine’s letter still stands. Ask. The Father is not asleep. The household part is humbler: have something in the box when the knock comes, so the prayer is not covering for a cupboard you already emptied.
        </p>

        <p className="text-lg font-medium text-gray-800 mt-10">
          Put the loaves where your hand can find them. Then keep knocking.
        </p>

        <p className="text-gray-700 font-medium mt-6">
          – Dustin
        </p>

        <BlogPostFooter />
      </div>
    </div>
  );
}
