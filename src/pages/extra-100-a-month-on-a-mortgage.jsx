import React from 'react';
import BlogPostFooter from '../components/BlogPostFooter';

export default function Extra100AMonthOnAMortgage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto prose prose-slate">
        <p className="mb-6">
          <a href="/blog" className="text-blue-700 hover:underline font-medium">← Back to the blog</a>
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          What an Extra $100 a Month on a Mortgage Actually Does
        </h1>

        <p className="text-xl font-semibold text-gray-800 mb-4">
          Forty-two payments and about $62,600.
        </p>

        <p className="mb-6">
          That is what an extra $100 a month on a mortgage does to a $350,000, 30-year loan at 6.5%, if the $100 goes to principal with every payment from the first one. The loan ends after 318 payments instead of 360, so it is gone in 26 and a half years instead of 30. Over that stretch you put in $31,800 of extra money and save about $62,600 in interest — roughly twice what you put in.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Why the early $100 does the heavy lifting
        </h2>
        <p className="mb-6">
          The scheduled payment on that loan is $2,212.24. In month one, $1,895.83 of it is interest and only $316.40 reduces what you owe. Adding $100 raises the principal paid that month by almost a third. Each dollar knocked off the balance stops collecting 6.5% for every month the loan has left, which is why the first years matter most. The same $100 sent in year 25 still helps. It just has very little time left to save you anything.
        </p>

        <p className="mb-6">
          Two mechanics decide whether any of this happens. Mark the extra as principal when you pay, then open the next statement and make sure the servicer applied it to the balance instead of parking it as an early payment. And read your note for a prepayment penalty before you start. If you already have a loan, put your current balance, rate and remaining years into the{" "}
          <a href="/calculators/loan-payment" className="text-blue-700 hover:underline font-medium">
            loan payment calculator
          </a>
          {" "}and change the extra amount; the months-saved line moves as you type.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          When I would send the $100 somewhere else
        </h2>
        <p className="mb-6">
          The interest rate is the whole argument. Run the same $100 against a $300,000 loan at 3% and it saves about $19,400 and 40 payments. That is real money, but it is a 3% return, and it is locked inside the house. A smaller balance does not lower the required payment, so it will not help the month the furnace quits in January and the bank still wants the full amount.
        </p>

        <p className="mb-6">
          So my order is plain. A household without <a href="/blog/building-an-emergency-fund-without-neglecting-the-tithe" className="text-blue-700 hover:underline font-medium">an emergency fund</a>, or still carrying a credit card balance, should send the $100 there first. Once those are handled and the rate is around 6% or higher, I think the extra mortgage payment is one of the better homes a modest monthly surplus can find: a guaranteed return equal to the rate, with no market risk.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Prudence, not a duty
        </h2>
        <p className="mb-6">
          Nothing in Catholic teaching makes an extra mortgage payment an obligation. The Catechism names paying debts and fulfilling obligations freely contracted as demands of commutative justice (CCC 2411), and a family paying the scheduled amount on time is doing exactly that. The extra $100 is a prudential call. A family that gives it to the parish instead has not failed some test.
        </p>

        <p className="mb-6">
          Today’s Gospel at Mass asks who the faithful and prudent steward is, and answers with the servant who hands out the food allowance at the proper time (Lk 12:42). I read that as an argument for the order above: the household’s ordinary needs and its cushion come first, and only then the early payoff. St. Paul pushes from the other side when he writes, “Owe no one anything, except to love one another” (Rom 13:8, RSV-CE). He was not writing about 30-year amortization, and I will not pretend he was. But I feel the pull of it every time the mortgage draft clears.
        </p>

        <p className="mb-6">
          Forty-two payments is three and a half years. I would rather spend them writing the biggest check of the month to someone who is not a bank.
        </p>

        <BlogPostFooter />
      </div>
    </div>
  );
}
