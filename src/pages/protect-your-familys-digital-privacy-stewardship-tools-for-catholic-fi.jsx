import React from 'react';
import { Link } from 'react-router-dom';
import BlogPostFooter from '../components/BlogPostFooter';

export default function ProtectYourFamilysDigitalPrivacyStewardshipToolsForCatholicFi() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto prose prose-slate">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Protect Your Family’s Digital Privacy: Stewardship Tools That Belong on the Path to FI
        </h1>

        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Hey everyone,
        </p>

        <p className="text-xl font-semibold text-gray-800 mb-4">
          Most of us track our budgets carefully — and still leave our family’s personal data wide open online.
        </p>

        <p className="mb-6">
          Your address, phone numbers, relatives’ names, and even approximate income get scraped by data brokers and
          sold on people-search sites. Public Wi-Fi at hotels, airports, and coffee shops can expose logins. For a
          Catholic household building toward financial independence, that isn’t just an inconvenience. Identity theft,
          account takeovers, and relentless spam cost real money, real time, and real peace of mind — the opposite of
          the margin FI is supposed to create.
        </p>

        <p className="mb-6">
          Stewardship isn’t only about dollars invested. It’s about protecting what God has entrusted to you: your
          family’s safety, reputation, and ability to focus on faith and vocation instead of cleaning up digital messes.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Two practical tools that actually help
        </h2>

        <p className="mb-6">
          I’ve added both of these to the{' '}
          <Link to="/tools" className="text-indigo-600 hover:text-indigo-800 font-medium">
            Tools page
          </Link>{' '}
          with the same referral perks we use ourselves. They’re not flashy “get rich” apps — they’re quiet defenses
          that free up attention and reduce downside risk.
        </p>

        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">1. Incogni — remove your family from data brokers</h3>
        <p className="mb-4">
          Incogni is an automated service that finds your personal information on 420+ data-broker and people-search
          sites and requests removal — then keeps requesting removal when the data reappears. Family plans can cover up
          to five people from one account, which matters when you have a spouse and kids whose names and addresses show
          up in the same search results as yours.
        </p>
        <p className="mb-4">
          Why it fits FI: less exposure means fewer scams, fewer cold calls about “your car’s extended warranty,” and
          less chance that a bad actor stitches together enough details to open accounts or harass your household. The
          hours you don’t spend fighting identity issues are hours you can put toward work, prayer, and family.
        </p>
        <p className="mb-4">
          Through the friends link on our Tools page you can get a deep discount (up to about 58% off annual plans),
          with a 30-day money-back guarantee. Code GIFTOFPRIVACY is applied at checkout via the referral.
        </p>
        <a
          href="https://incogni.cello.so/C622q7UjoeJ"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg mb-8"
        >
          Get Incogni at Friends Pricing →
        </a>

        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">2. Surfshark — one VPN for the whole household</h3>
        <p className="mb-4">
          A VPN encrypts your traffic on public Wi-Fi and makes everyday browsing less visible to random networks. Surfshark’s
          standout for families is unlimited devices on one account — practical when you have phones, tablets, and a
          couple of laptops under the same roof.
        </p>
        <p className="mb-4">
          Use it on travel, hotel stays, and any network you don’t control. It’s a small monthly cost relative to the
          headache of a compromised email or banking login. Through the friend link you get free months added depending
          on the plan you choose (including multi-month options).
        </p>
        <a
          href="https://surfshark.club/friend/sgSt5YqV"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl hover:bg-slate-900 transition-all shadow-md hover:shadow-lg mb-8"
        >
          Get Surfshark + Free Months →
        </a>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          How this connects to faithful FI
        </h2>
        <p className="mb-6">
          Financial independence is partly about numbers — savings rate, investments, debt. It’s also about reducing
          the hidden taxes on your attention and peace. Privacy tools won’t replace tithing, investing, or living below
          your means. They do protect the household so those efforts aren’t derailed by preventable digital risk.
        </p>
        <p className="mb-6">
          Teach older kids the basics: don’t overshare addresses and birthdays online, use strong unique passwords, and
          treat public Wi-Fi as untrusted. Model the same habits. Stewardship is often unglamorous — and that’s fine.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          A simple next step
        </h2>
        <p className="mb-4">
          If you’ve never audited your family’s digital footprint, start with data-broker removal (Incogni) and a VPN
          for travel and public networks (Surfshark). Both are on our{' '}
          <Link to="/tools" className="text-indigo-600 hover:text-indigo-800 font-medium">
            Tools page
          </Link>{' '}
          with the referral perks above. Pair that with the FI Calculator when you’re ready to put any freed-up cash
          toward the bigger plan.
        </p>

        <p className="text-lg font-medium text-gray-800 mt-10">
          Protect the household. Invest the margin. Keep the mission first.
        </p>

        <p className="text-gray-700 font-medium mt-6">– Dustin</p>

        <BlogPostFooter />
      </div>
    </div>
  );
}
