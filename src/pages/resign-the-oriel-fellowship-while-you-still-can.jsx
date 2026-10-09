import React from 'react';
import BlogPostFooter from '../components/BlogPostFooter';
import FurtherReading from '../components/FurtherReading';

export default function ResignTheOrielFellowshipWhileYouStillCan() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto prose prose-slate">
        <p className="mb-6">
          <a href="/blog" className="text-blue-700 hover:underline font-medium">← Back to the blog</a>
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Resign the Oriel Fellowship While You Still Can
        </h1>

        <p className="text-xl font-semibold text-gray-800 mb-4">
          The cloak was still wet. The fellowship was already gone.
        </p>

        <p className="mb-6">
          Blessed Dominic Barberi reached Littlemore late on 8 October 1845, soaked from a day of rain. John Henry Newman had done the money part six days earlier. On 3 October he resigned his fellowship at Oriel College. The stipend that had kept an Oxford tutor in rooms and books was no longer his. The next morning, in the chapel of the converted stables, Barberi received him into the Catholic Church.
        </p>

        <p className="mb-6 italic">
          “Lead, Kindly Light, amid the encircling gloom, Lead Thou me on. … Keep Thou my feet; I do not ask to see the distant scene; one step enough for me.”
        </p>

        <p className="mb-6">
          Newman wrote that years before, sick on a boat in the Mediterranean, when he could not see the next harbor. Littlemore was the same rule with a rent book. He did not ask to see the Birmingham Oratory, a cardinal’s hat, or a salary that would replace Oriel. One step was the resignation letter.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          A house can spend the stipend first
        </h2>
        <p className="mb-6">
          The Gospel for this Friday warns that a kingdom split against itself is laid waste, and house falls against house. A household can do that without a fight. One spouse wants the freedom to leave a job that asks for a lie, a Sunday that never ends, or a client the conscience will not keep. The other has already spent the Oriel check on the car payment, the travel team, and a kitchen that only works if that deposit hits. Nobody is wicked. The house is divided. The fellowship cannot be resigned because the lifestyle already accepted it.
        </p>

        <p className="mb-6">
          Newman could hand the stipend back because Littlemore was already a poor house. The converted stables did not require next term’s pay to stay standing. That is the unromantic part of conscience. Freedom to obey is often a cash question before it is a speech.
        </p>

        <ul className="list-disc pl-6 space-y-3 mb-8 text-gray-700">
          <li>Name the check you might have to hand back — a role, a client, a bonus tied to something you will not do</li>
          <li>Count the months of ordinary bills that checking and a boring cash bucket can cover without that check</li>
          <li>Do not fund the next upgrade until that runway exists</li>
          <li>Say the number out loud to your spouse before a crisis asks for the letter</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          One practical step this week
        </h2>
        <p className="mb-6">
          Write down the stipend you could not resign today. Then mark what would have to shrink so six months of rent, groceries, and the parish envelope could survive without it. Not a dream budget. The actual bills.
        </p>

        <p className="mb-4">
          If you cannot see how long the household lasts once that check stops, run the gap before you promise anyone you are free to leave.
        </p>

        <a
          href="/calculators/savings-rate-runway"
          className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all shadow-md hover:shadow-lg mb-6"
        >
          See how long the gap lasts →
        </a>

        <FurtherReading
          title="Confessions"
          note="Augustine also left a career that paid, and he wrote down what the leaving cost. The same order still holds: the heart moves first, then the stipend has to be free to follow."
        />

        <p className="mb-6">
          Barberi arrived soaked and still heard the confession. Newman had already sent the letter. The reception took a night. The resignation was possible only because the house was not living on the next term’s pay.
        </p>

        <p className="text-lg font-medium text-gray-800 mt-10">
          Send the letter while the stables can still stand without it.
        </p>

        <p className="text-gray-700 font-medium mt-6">
          – Dustin
        </p>

        <BlogPostFooter />
      </div>
    </div>
  );
}
