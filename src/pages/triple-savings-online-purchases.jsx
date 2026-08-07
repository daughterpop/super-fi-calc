import React from 'react';
import { Link } from 'react-router-dom';
import BlogPostFooter from '../components/BlogPostFooter';

export default function TripleSavingsOnlinePurchases() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto prose prose-slate">
        <p className="text-sm text-emerald-700 font-semibold uppercase tracking-wide mb-3 not-prose">
          Evergreen guide
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Triple Savings on Online Purchases
        </h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Stack credit-card rewards, cashback portals, and checkout offers so everyday shopping funds the FI path — without debt and without turning thrift into a second full-time job.
        </p>

        <p className="mb-6">
          Most households leave money on the table by paying with a plain debit card and skipping the portal.
          The opposite extreme — chasing every 0.5% promo for an hour — is not stewardship either.
          The middle path is a simple three-layer stack you can run in under a minute once the tools are installed.
        </p>

        <div className="not-prose my-8 p-5 rounded-2xl bg-emerald-50 border border-emerald-100">
          <p className="text-sm font-semibold text-emerald-900 mb-2">The stack</p>
          <ol className="list-decimal pl-5 space-y-1 text-gray-800 text-sm sm:text-base">
            <li><strong>Card</strong> — category or flat cash-back rewards</li>
            <li><strong>Portal</strong> — activate Rakuten / Capital One Shopping before checkout</li>
            <li><strong>Offer</strong> — coupon / auto-apply code (Honey, Minty, store promo)</li>
          </ol>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          1. The card layer
        </h2>
        <p className="mb-6">
          Pay in full every month. Rewards only help if they are not financing interest.
          Prefer no-annual-fee or easily justified cards that fit how your family already spends.
        </p>
        <ul className="list-disc pl-6 space-y-3 mb-6 text-gray-700">
          <li>
            <strong>Amex Blue Business Cash</strong> — strong flat cash-back on eligible purchases after the welcome offer;
            useful if you already run household or side activity through a business card responsibly.
            <a
              href="https://americanexpress.com/en-us/referral/bluebusinesscash-credit-card?ref=DUSTIHtvYM&XL=MIMNS"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 font-medium underline-offset-2 hover:underline ml-1"
            >
              Referral link →
            </a>
          </li>
          <li>
            <strong>Amazon Visa (Chase)</strong> — elevated rewards where many families already buy; gift card on approval through referral when terms apply.
            <a
              href="https://www.amazon.com/dp/BT00LN946S?externalReferenceId=c404395c-ab3c-4b14-b637-54046a347ee6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 font-medium underline-offset-2 hover:underline ml-1"
            >
              Referral link →
            </a>
          </li>
          <li>
            <strong>Chase Sapphire (Preferred / Reserve)</strong> — when travel and transferable points fit your real life, not aspirational travel you will never take.
            <a
              href="https://www.referyourchasecard.com/19x/RO2CCHE1LT"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 font-medium underline-offset-2 hover:underline ml-1"
            >
              Referral link →
            </a>
          </li>
          <li>
            <strong>Rakuten Rewards Amex</strong> — no annual fee; extra cash back when you already shop through Rakuten, which stacks cleanly with the portal layer.
            <a
              href="https://r.imprint.co/qTwhQA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 font-medium underline-offset-2 hover:underline ml-1"
            >
              Referral link →
            </a>
          </li>
        </ul>
        <p className="mb-6 text-sm text-gray-600">
          Card offers, rates, and eligibility change. Always read the issuer’s current terms. Apply only if the product fits your spending and you will pay the statement balance.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          2. The portal layer
        </h2>
        <p className="mb-6">
          Before you check out, open the store through a cashback portal. Rates move daily; a two-click habit is enough.
        </p>
        <ul className="list-disc pl-6 space-y-3 mb-6 text-gray-700">
          <li>
            <strong>Rakuten</strong> — the default portal for many households; browser extension + app; pays quarterly.
            <a
              href="https://www.rakuten.com/r/DHIMME9?eeid=44749"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 font-medium underline-offset-2 hover:underline ml-1"
            >
              Sign up via referral →
            </a>
          </li>
          <li>
            <strong>Capital One Shopping</strong> — compares prices and finds coupon codes; useful second check when Rakuten is quiet on a merchant.
            <a
              href="https://capitaloneshopping.com/r/3045fb28-0a5c-4f54-91b0-5f52a22652ee"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 font-medium underline-offset-2 hover:underline ml-1"
            >
              Join Capital One Shopping →
            </a>
          </li>
        </ul>
        <p className="mb-6">
          Rule of thumb: activate the portal <em>before</em> adding the card at checkout. If two portals both pay on the same store, pick the higher rate — do not double-click both and risk a denied cashback claim.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          3. The offer layer
        </h2>
        <p className="mb-6">
          Coupons and store promos sit on top of card + portal when the merchant allows stacking. Keep this light.
        </p>
        <ul className="list-disc pl-6 space-y-3 mb-6 text-gray-700">
          <li>
            <strong>Honey</strong> — auto-tries coupon codes at checkout; free extension.
            <a
              href="https://www.joinhoney.com/ref/55s1vcv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 font-medium underline-offset-2 hover:underline ml-1"
            >
              Try Honey →
            </a>
          </li>
          <li>
            <strong>Minty</strong> — AI coupons + cashback; new-user bonus when you start through the referral.
            <a
              href="https://www.minty.com/me/1SFMA1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 font-medium underline-offset-2 hover:underline ml-1"
            >
              Get started on Minty →
            </a>
          </li>
          <li>
            <strong>Fetch</strong> — snap receipts (including online order emails) for points; small but automatic after grocery and household runs.
            <a
              href="https://referral.fetch.com/vvv3/referralqr?code=QQGAF3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 font-medium underline-offset-2 hover:underline ml-1"
            >
              Join Fetch →
            </a>
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Worked example
        </h2>
        <p className="mb-6">
          Suppose a $200 online order at a store paying 3% on Rakuten, a 2% cash-back card, and a $10 coupon that still stacks:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
          <li>Coupon: −$10 → pay $190</li>
          <li>Card rewards: ~2% of $190 ≈ $3.80</li>
          <li>Portal: 3% of $190 ≈ $5.70</li>
          <li><strong>Effective cost ≈ $180.50</strong> (about 10% back before tax considerations)</li>
        </ul>
        <p className="mb-6">
          Rates vary. The point is the order of operations, not a guaranteed percentage.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Guardrails (so this stays faithful)
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
          <li><strong>Pay the balance in full</strong> — rewards never beat interest</li>
          <li><strong>Do not invent purchases</strong> to hit a bonus if you would not buy the item anyway</li>
          <li><strong>Cap the time</strong> — if stacking takes longer than the dollars are worth, skip the third layer</li>
          <li><strong>Protect attention</strong> — extensions and apps are tools, not a new feed to live inside</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          How this serves FI
        </h2>
        <p className="mb-6">
          A few percent on recurring household spend compounds into real surplus over a year — surplus that can hit the investment account instead of vanishing into unnoticed checkout friction.
          Stacking is not the strategy. Raising your savings rate is. This is one practical lever among others.
        </p>

        <p className="not-prose mb-8 flex flex-wrap gap-3">
          <Link
            to="/tools"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors text-sm sm:text-base shadow-sm"
          >
            Browse all Tools →
          </Link>
          <Link
            to="/blog/how-to-get-started-on-your-fi-path"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 hover:border-emerald-300 text-gray-800 font-medium rounded-xl transition-colors text-sm sm:text-base"
          >
            Get started guide
          </Link>
        </p>

        <p className="text-sm text-gray-500 mb-6">
          Some links above are referrals. If you sign up, the site may earn a commission at no extra cost to you. Offers and rates change; confirm current terms on each provider’s site.
        </p>

        <p className="text-lg font-medium text-gray-800 mt-10">
          Card. Portal. Offer. Pay in full. Move on with your day.
        </p>
        <p className="text-gray-700 font-medium mt-6">– Dustin</p>

        <BlogPostFooter />
      </div>
    </div>
  );
}
