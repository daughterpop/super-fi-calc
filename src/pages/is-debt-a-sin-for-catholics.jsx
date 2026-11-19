import React from 'react';
import BlogPostFooter from '../components/BlogPostFooter';

export default function IsDebtASinForCatholics() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto prose prose-slate">
        <p className="mb-6">
          <a href="/blog" className="text-blue-700 hover:underline font-medium">← Back to the blog</a>
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Is Debt a Sin for Catholics?
        </h1>

        <p className="text-xl font-semibold text-gray-800 mb-4">
          No.
        </p>

        <p className="mb-6">
          Debt itself is not a sin. The Church has never taught that borrowing money is forbidden. What it does require is that a freely contracted debt be paid.
        </p>

        <p className="mb-6">
          The Catechism is plain on the point. “Contracts are subject to commutative justice, which regulates exchanges between persons in accordance with a strict respect for their rights” (CCC 2411). Paying what you agreed to pay is part of that justice. Refusing to pay, or contracting a debt you know you cannot meet, is the problem. Taking a mortgage or a car loan or a student loan is not.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          What Romans 13:8 does and does not say
        </h2>
        <p className="mb-6">
          St. Paul writes, “Owe no one anything, except to love one another” (Rom 13:8, RSV-CE). The sentence sits inside a paragraph about civil authorities and taxes. It is not a prohibition on all forms of credit. The Fathers and the later tradition read it as a call to keep current on ordinary obligations and to avoid the kind of debt that enslaves. A household that meets its scheduled payments is already doing what the verse asks.
        </p>

        <p className="mb-6">
          Say a family of five has a $280,000 mortgage at 6.25% and a $12,000 car note. Both are fixed, both are being paid on time, both leave enough after the tithe for ordinary life. Nothing in the Catechism or in Romans requires them to sell the house tomorrow. The sin would be adding a new high-interest balance they have no plan to clear, or missing payments on the ones they already have.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          When the rate itself becomes the question
        </h2>
        <p className="mb-6">
          Catholic teaching has long distinguished ordinary lending from usury. The older manuals treated usury as the taking of interest when the loan itself carried no risk or opportunity cost for the lender. Modern markets are different; the Catechism does not restate a blanket ban on interest. What remains is the duty to avoid contracts that are unjust or that leave a person unable to meet basic obligations (CCC 2412–2414). A 28% credit-card balance used for ordinary groceries is not the same thing as a 6% mortgage used to buy a house.
        </p>

        <p className="mb-6">
          Once the high-rate balances are gone, the remaining question is order, not guilt. The{" "}
          <a href="/calculators/debt-payoff" className="text-blue-700 hover:underline font-medium">
            debt-payoff calculator
          </a>
          {" "}lets you compare snowball and avalanche on the actual numbers you have. Either method is licit. The one that keeps the next payment current and free of new charges is the one that satisfies justice.
        </p>

        <p className="mb-6">
          I would rather pay the debts I already took than invent a new rule that forbids the next ordinary loan. The free hand stays free when the obligations that were freely made are met on time.
        </p>

        <p className="text-lg font-medium text-gray-800 mt-10">
          Pay what you contracted. Do not contract what you cannot pay.
        </p>

        <BlogPostFooter />
      </div>
    </div>
  );
}
