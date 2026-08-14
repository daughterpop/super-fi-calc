import React from 'react';
import { Link } from 'react-router-dom';
import BlogPostFooter from '../components/BlogPostFooter';

export default function WhyFiForCatholics() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto prose prose-slate">
        <p className="text-sm text-emerald-700 font-semibold uppercase tracking-wide mb-3 not-prose">
          Evergreen guide · Core pillar
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Why FI for Catholics
        </h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Financial independence is not a secular escape from work. For Catholic families it can be a practical form of stewardship — freedom <em>for</em> vocation, not freedom <em>from</em> fidelity.
        </p>

        <p className="mb-6">
          Classical FIRE culture often aims to stop working as early as possible and optimize life around leisure.
          That vision is too small for a Catholic household. The better question is not “How soon can I quit?” but
          “How can we build enough margin that money stops crowding out prayer, presence, generosity, and the work God actually asked of us?”
        </p>

        <p className="mb-6">
          For a direct comparison of the two approaches, see{' '}
          <Link to="/blog/is-fire-compatible-with-catholicism" className="text-emerald-700 font-medium hover:underline">
            Is FIRE Compatible with Catholicism?
          </Link>
          . The practical foundation of that freedom is{' '}
          <Link to="/blog/build-margin-for-catholic-families" className="text-emerald-700 font-medium hover:underline">
            financial margin
          </Link>
          — cash, time, and attention that are not already claimed by anxiety or lifestyle. Without it, even good intentions stay theoretical.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Providence and prudence belong together
        </h2>
        <p className="mb-6">
          Scripture does not pit trust against planning. Joseph stored grain. The wise virgins brought oil.
          The Church has long treated careful provision as a duty of state of life — especially for parents responsible for children.
        </p>
        <p className="mb-6">
          Building investable surplus is one modern way to practice that prudence. It does not replace prayer.
          Done well, it reduces the anxiety that makes prayer and generosity harder. Saints from{' '}
          <Link to="/blog/build-margin-to-trust-providence-lessons-from-st-cajetan" className="text-emerald-700 font-medium hover:underline">Cajetan</Link>{' '}
          to{' '}
          <Link to="/blog/simplicity-creates-real-margin-lessons-from-st-john-vianney" className="text-emerald-700 font-medium hover:underline">John Vianney</Link>{' '}
          show the same pattern: detachment creates capacity to serve.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          FI means margin for vocation
        </h2>
        <p className="mb-6">
          On this site, FI is a number that supports a way of life:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
          <li>More stable capacity for Mass, confession, and family prayer</li>
          <li>Room to educate children in the faith without constant financial panic</li>
          <li>Ability to tithe and practice hospitality after the paycheck changes</li>
          <li>Freedom to accept a lower-paying call, care for aging parents, or serve the parish more deeply</li>
        </ul>
        <p className="mb-6">
          Paid work may continue. The point is that work is no longer a trap. The household can say yes when God asks.
          That readiness is what{' '}
          <Link to="/blog/build-margin-for-radical-love-lessons-from-st-maximilian-kolbe" className="text-emerald-700 font-medium hover:underline">St. Maximilian Kolbe</Link>{' '}
          modeled in extreme form and what ordinary families practice when margin is present.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Tithing stays in the plan
        </h2>
        <p className="mb-6">
          Many Catholic families treat giving as a non-negotiable expense, not a leftover.
          That is coherent with FI. If generosity only exists while the W-2 is large, the plan was never really ordered to the Gospel.
        </p>
        <p className="mb-6">
          Model giving in your spending number. Then the surplus you invest is surplus after fidelity, not instead of it.
          A practical budget that puts the tithe first is laid out in{' '}
          <Link to="/blog/how-to-budget-as-a-catholic-family-with-tithing-first" className="text-emerald-700 font-medium hover:underline">How to Budget as a Catholic Family</Link>.
          See also how{' '}
          <Link to="/blog/make-generosity-ordinary-lessons-from-st-lawrence" className="text-emerald-700 font-medium hover:underline">St. Lawrence</Link>{' '}
          treated the poor as the true treasures of the Church — and why margin makes that ordinary rather than heroic.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Large families need honest math
        </h2>
        <p className="mb-6">
          Tuition, vehicles, groceries, medical costs, and housing scale with family size.
          A single-person FIRE spreadsheet will lie to a household of eight. Stress-test real expenses.
          Prefer a conservative withdrawal assumption or a floor of guaranteed income when the stakes are high.
        </p>
        <p className="mb-6">
          Clarity is not faithlessness. It is how parents refuse magical thinking.
          Run the numbers once with your actual household size in mind, then adjust the plan rather than the children’s needs.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          What FI is not
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
          <li>Not a license for lifestyle inflation once the number is hit</li>
          <li>Not contempt for ordinary work or for people who cannot pursue FI yet</li>
          <li>Not a substitute for trust, confession, or community</li>
          <li>Not a demand that every Catholic quit their job at 45</li>
        </ul>
        <p className="mb-6">
          If the pursuit of the number is making the family more anxious, more envious, or less generous, the pursuit needs conversion — not more optimization.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          A Catholic order of operations
        </h2>
        <ol className="list-decimal pl-6 space-y-2 mb-6 text-gray-700">
          <li>Pray and agree with your spouse on the real goal</li>
          <li>Get rough numbers (assets, spending, surplus, big future costs)</li>
          <li>Run the calculator once for a years-to-FI estimate</li>
          <li>Protect match,{' '}
            <Link to="/blog/building-an-emergency-fund-without-neglecting-the-tithe" className="text-emerald-700 font-medium hover:underline">emergency fund</Link>, and known near-term tuition</li>
          <li>Invest surplus simply and consistently — see{' '}
            <Link to="/blog/faith-based-investing-basics-for-catholic-households" className="text-emerald-700 font-medium hover:underline">faith-based investing basics</Link></li>
          <li>Review a few times a year — live the plan between reviews</li>
        </ol>
        <p className="mb-6">
          That path is developed fully in the{' '}
          <Link to="/blog/how-to-get-started-on-your-fi-path" className="text-emerald-700 font-medium hover:underline">Get Started guide</Link>.
          The practical foundation — cash, time, and attention margin — is unpacked in{' '}
          <Link to="/blog/build-margin-for-catholic-families" className="text-emerald-700 font-medium hover:underline">Build Margin for Catholic Families</Link>.
        </p>

        <p className="not-prose mb-8 flex flex-wrap gap-3">
          <Link
            to="/blog/how-to-get-started-on-your-fi-path"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors text-sm sm:text-base shadow-sm"
          >
            How to get started →
          </Link>
          <Link
            to="/blog/build-margin-for-catholic-families"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 hover:border-emerald-300 text-gray-800 font-medium rounded-xl transition-colors text-sm sm:text-base"
          >
            Build Margin hub
          </Link>
          <Link
            to="/calculators"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 hover:border-emerald-300 text-gray-800 font-medium rounded-xl transition-colors text-sm sm:text-base"
          >
            Open the calculator
          </Link>
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          The short answer
        </h2>
        <p className="mb-6">
          Catholics pursue FI so money serves the mission — Mass, marriage, children, parish, and the poor — instead of the other way around.
          The number is a tool. Fidelity is the point.
        </p>

        <p className="text-lg font-medium text-gray-800 mt-10">
          Build margin. Keep the faith. Let surplus serve love.
        </p>
        <p className="text-gray-700 font-medium mt-6">– Dustin</p>

        <BlogPostFooter />
      </div>
    </div>
  );
}
