import React from 'react';
import BlogPostFooter from '../components/BlogPostFooter';
import FurtherReading from '../components/FurtherReading';

export default function InterruptTheLedgerLessonsFromPiusVAtLepanto() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto prose prose-slate">
        <p className="mb-6">
          <a href="/blog" className="text-blue-700 hover:underline font-medium">← Back to the blog</a>
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Interrupt the Ledger: Lessons from Pius V at Lepanto
        </h1>

        <p className="text-xl font-semibold text-gray-800 mb-4">
          The card was still on the counter when the kitchen went quiet. Nobody had said the decade yet.
        </p>

        <p className="mb-6">
          On October 7, 1571, Pius V was in a meeting with his treasurer when he stood up, crossed to the window, and ordered the bells of Rome rung. The messenger from the Gulf of Corinth had not arrived. Don John of Austria’s Holy League had just broken the Ottoman line at Lepanto, and the pope credited the rosary he had asked Christendom to pray before the fleet sailed. He finished the ledger later. He did not finish it first.
        </p>

        <p className="mb-6 italic">
          “To recite the Rosary is nothing other than to contemplate with Mary the face of Christ.”
        </p>

        <p className="mb-6">
          St. John Paul II wrote that in Rosarium Virginis Mariae. Pius had already lived the order of it. The beads were not a mood after the books closed. They were the interruption that kept the books from becoming the only room in the house.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Daily bread is not a revolving balance
        </h2>
        <p className="mb-6">
          Today’s Gospel is the Our Father as Luke gives it: give us each day our daily bread, and forgive us our sins, for we ourselves forgive everyone in debt to us. A household can say that line and still park the grocery run on a card that will not clear until next spring. The minimum payment feels like mercy. It is the opposite of daily bread. It takes one week of milk and meat and stretches it across a year of interest.
        </p>

        <p className="mb-6">
          Lepanto was not won by a speech after the battle. Pius had the rosary said in the churches of Rome while the galleys were still at sea. The decade is a counted thing. Ten Hail Marys, then the next mystery, then you stop and go back to the pot on the stove. A balance that only gets the minimum never reaches the next mystery. It stays on the same bead.
        </p>

        <ul className="list-disc pl-6 space-y-3 mb-8 text-gray-700">
          <li>Name the card that is still carrying last month’s groceries</li>
          <li>Put the beads on the counter before the card comes out of the wallet</li>
          <li>Pay more than the minimum on that one balance this week, even if the extra is small</li>
          <li>Leave the next ordinary purchase in cash or in the checking account, not on the same plastic</li>
        </ul>

        <p className="mb-6">
          The Holy League did not sail with an empty hold. They still needed powder, bread, and oars. Prayer did not replace the ledger. It refused to let the ledger have the first word. A family that can cover this week’s bread without borrowing it back from a bank can still give when a neighbor’s bill lands. A family that has already pledged the bread to a minimum payment cannot.
        </p>

        <FurtherReading
          title="The Secret of the Rosary"
          note="Montfort’s little book is the household rule behind the beads Pius asked Christendom to pray before the fleet left port — counted decades, not a slogan after the books close."
        />

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          One practical step this week
        </h2>
        <p className="mb-6">
          Take the card off the counter. Write the balance and the minimum on a scrap beside the rosary. Pray one decade before you decide what extra, if any, goes to that balance tonight. Do not open a new store card to “simplify” the old one. Pius did not ring the bells and then schedule a second meeting to admire the debt.
        </p>

        <p className="mb-4">
          If you want the payoff date in plain numbers, run the balance before the next swipe.
        </p>

        <a
          href="/calculators/debt-payoff"
          className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all shadow-md hover:shadow-lg mb-6"
        >
          See the payoff date →
        </a>

        <p className="mb-6">
          The messenger still came. The bells had already been rung.
        </p>

        <p className="text-lg font-medium text-gray-800 mt-10">
          Interrupt the ledger. Pray the decade. Then pay the bread you already ate.
        </p>

        <p className="text-gray-700 font-medium mt-6">
          – Dustin
        </p>

        <BlogPostFooter />
      </div>
    </div>
  );
}