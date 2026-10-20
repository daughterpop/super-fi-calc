import React from 'react';
import BlogPostFooter from '../components/BlogPostFooter';

export default function CountTheCostBeforeYouBuildLessonsFromStLuke() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto prose prose-slate">
        <p className="mb-6">
          <a href="/blog" className="text-blue-700 hover:underline font-medium">← Back to the blog</a>
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Count the Cost Before You Build: Lessons from St. Luke
        </h1>

        <p className="text-xl font-semibold text-gray-800 mb-4">
          The tower builder sat down first.
        </p>

        <p className="mb-6">
          St. Luke was a physician, a Gentile, and the only evangelist to tell us about the rich fool, the prodigal son, and Zacchaeus in the tree. Money runs through his Gospel like a thread because Luke watched what it did to people. And in chapter fourteen he records the question Jesus put to every would-be builder: which of you, wanting to build a tower, does not first sit down and count the cost?
        </p>

        <p className="mb-6">
          The rich fool in Luke 12 built bigger barns without ever sitting down. He counted the harvest, not the cost. God called him a fool that very night — not because the barns were full, but because the builder had never reckoned what the building was for.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Most households are building without the sitting down
        </h2>
        <p className="mb-6">
          The tower most families are building has a name: the years when work becomes optional, the mortgage gone, the kids' schooling covered. Almost nobody has sat down to count what that tower costs. They know the mortgage payment to the dollar and the grocery bill to the week, but ask what number would make them free and the room goes quiet.
        </p>

        <p className="mb-6">
          Luke the physician would have understood. A doctor does not prescribe before diagnosing. Counting the cost is the diagnosis: annual spending, the real number, multiplied into the capital that sustains it. Until that number exists on paper, every financial decision is a barn built in the dark.
        </p>

        <ul className="list-disc pl-6 space-y-3 mb-8 text-gray-700">
          <li>Write down last year's actual spending — not the budget, the reality</li>
          <li>Multiply it by twenty-five to see the tower's rough cost</li>
          <li>Compare that with what is already saved and what is saved each year</li>
          <li>Let the gap set the savings rate instead of letting the savings rate stay a wish</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          One practical step this week
        </h2>
        <p className="mb-6">
          Sit down — literally, at the table, with the statements — and add up what the household spent in the last twelve months. One evening. That single number is the beginning of the count, and everything after it gets easier.
        </p>

        <p className="mb-6">
          From there, work the steps in order —{" "}
          <a href="/blog/how-to-get-started-on-your-fi-path" className="text-blue-700 hover:underline font-medium">
            How to Get Started on Your FI Path
          </a>{" "}
          lays out the sequence.
        </p>

        <p className="mb-4">
          Once you know the spending, the FI number behind it is simple arithmetic. Run it and see what the tower actually costs.
        </p>

        <a
          href="/calculators"
          className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all shadow-md hover:shadow-lg mb-6"
        >
          Count the cost with the calculators →
        </a>

        <p className="mb-6">
          Luke gave the Church the parables of the counted and the uncounted. The fool built without reckoning; the prodigal came home when the numbers finally ran out. The household that sits down first gets to choose which story it lives.
        </p>

        <p className="text-lg font-medium text-gray-800 mt-10">
          Sit down before you build.
        </p>

        <p className="text-gray-700 font-medium mt-6">
          – Dustin
        </p>

        <BlogPostFooter />
      </div>
    </div>
  );
}
