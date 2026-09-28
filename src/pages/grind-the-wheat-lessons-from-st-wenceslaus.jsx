import React from 'react';
import BlogPostFooter from '../components/BlogPostFooter';

export default function GrindTheWheatLessonsFromStWenceslaus() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto prose prose-slate">
        <p className="mb-6">
          <a href="/blog" className="text-blue-700 hover:underline font-medium">← Back to the blog</a>
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Grind the Wheat: Lessons from St. Wenceslaus
        </h1>

        <p className="text-xl font-semibold text-gray-800 mb-4">
          The duke of Bohemia rose from his bed at night, went barefoot to the mill, and ground wheat with his own hands so the poor could eat bread the next day.
        </p>

        <p className="mb-6">
          Wenceslaus did not wait for a free afternoon or a surplus that felt comfortable. He took the hours others spent sleeping and turned them into flour. The chronicler Cosmas later wrote that he was regarded not as a prince but as “the father of all the wretched.” When his brother finally struck him down at the church door, the saint’s last words were a prayer of forgiveness.
        </p>

        <p className="mb-6 italic">
          “May God forgive you, brother.”
        </p>

        <p className="mb-6">
          That is the measure of a man who kept capacity free. The ledger of the court never claimed every coin or every hour.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          The surplus that still answers at night
        </h2>
        <p className="mb-6">
          Most households treat every extra dollar and every free block of time as already spoken for—next comfort, next buffer that still feels thin, next small luxury that arrives before the quiet need. When a neighbor’s fridge is empty, a parish family faces eviction, or a child simply needs presence instead of another screen, the calendar and the budget already say there is no room.
        </p>

        <p className="mb-6">
          Wenceslaus’s freedom was not the absence of duty. It was the decision to leave a portion of strength unclaimed so that the wheat could still be ground when the ordinary pressures pressed in. Families that keep a clear share of surplus unassigned—money and time—keep the same freedom. The bread does not have to wait for ideal conditions that rarely arrive.
        </p>

        <ul className="list-disc pl-6 space-y-3 mb-8 text-gray-700">
          <li>When any surplus arrives, set aside a named share the same day for the quiet works—mercy, formation, presence—before the rest is allocated</li>
          <li>Protect one monthly line that is never pre-spent on lifestyle expansion so that limitation does not erase the ability to act</li>
          <li>Before increasing any discretionary category, ask whether the increase would make the next free act of fidelity harder</li>
          <li>Treat the emergency fund and the mercy-and-formation line as the two places where surplus actually protects capacity</li>
        </ul>

        <p className="mb-6">
          Wenceslaus did not postpone the grinding until the court was quieter. He rose while others slept. Our quieter version is the same: keep a portion of the surplus free so that the next quiet call still finds a ready hand.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          One practical step this week
        </h2>
        <p className="mb-6">
          Look at the last three times a quiet need appeared—someone hungry, a family short, a moment that asked for presence instead of spending. How quickly did the surplus already feel claimed? Choose one upcoming surplus or free block and decide in advance what portion stays reserved for the goods that do not shout. Move the money or protect the hour the same day it appears.
        </p>

        <p className="mb-4">
          The calculators help you see the real gap so the reserved share stays visible instead of disappearing into the ordinary burn rate.
        </p>

        <a
          href="/calculators"
          className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all shadow-md hover:shadow-lg mb-6"
        >
          See the numbers →
        </a>

        <p className="mb-6">
          St. Wenceslaus still teaches from the night mill. Any household willing to leave the same room on the ledger can grind the next wheat when the quiet call arrives.
        </p>

        <p className="text-lg font-medium text-gray-800 mt-10">
          Keep capacity for the quiet work. Grind the wheat while others sleep. Begin the bread that lasts.
        </p>

        <p className="text-gray-700 font-medium mt-6">
          – Dustin
        </p>

        <BlogPostFooter />
      </div>
    </div>
  );
}
