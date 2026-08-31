import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, BookOpen, Wrench, Newspaper } from 'lucide-react';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import SubscribeForm from '../components/SubscribeForm';
import SoftSellNudge from '../components/calculators/SoftSellNudge';
import SuperFiCalculator from '../Super-Fi-Calculator.jsx';
import LoanPaymentCalculator from '../components/LoanPaymentCalculator';
import BonusValueCalculator from '../components/BonusValueCalculator';
import College529Calculator from '../components/College529Calculator';
import VehicleTcoCalculator from '../components/VehicleTcoCalculator';
import SavingsRateRunwayCalculator from '../components/SavingsRateRunwayCalculator';
import DebtPayoffCalculator from '../components/DebtPayoffCalculator';
import RefinanceBreakEvenCalculator from '../components/RefinanceBreakEvenCalculator';
import TithingSurplusCalculator from '../components/TithingSurplusCalculator';
import EmergencyFundCalculator from '../components/EmergencyFundCalculator';
import CompoundGrowthCalculator from '../components/CompoundGrowthCalculator';
import RentVsBuyCalculator from '../components/RentVsBuyCalculator';
import EmployerMatchCalculator from '../components/EmployerMatchCalculator';
import {
  ALL_CALCULATORS,
  CALCULATOR_BY_SLUG,
  NUDGE_BY_ID,
  HAS_INTERNAL_NUDGE,
  pathForCalculator,
} from '../data/calculators';

function renderCalculator(id) {
  switch (id) {
    case 'fi':
      return <SuperFiCalculator />;
    case 'runway':
      return <SavingsRateRunwayCalculator />;
    case 'emergency':
      return <EmergencyFundCalculator />;
    case 'compound':
      return <CompoundGrowthCalculator />;
    case 'match':
      return <EmployerMatchCalculator />;
    case 'college':
      return <College529Calculator />;
    case 'vehicle':
      return <VehicleTcoCalculator />;
    case 'rentbuy':
      return <RentVsBuyCalculator />;
    case 'loan':
      return <LoanPaymentCalculator />;
    case 'debt':
      return <DebtPayoffCalculator />;
    case 'refi':
      return <RefinanceBreakEvenCalculator />;
    case 'tithe':
      return <TithingSurplusCalculator />;
    case 'bonus':
      return <BonusValueCalculator />;
    default:
      return null;
  }
}

export default function CalculatorTool() {
  const { slug } = useParams();
  const tool = CALCULATOR_BY_SLUG[slug];

  if (!tool) {
    return <Navigate to="/calculators" replace />;
  }

  const nudge = NUDGE_BY_ID[tool.id];
  const others = ALL_CALCULATORS.filter((c) => c.slug !== tool.slug).slice(0, 6);

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <SiteHeader />

      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-5 sm:py-7">
          <Link
            to="/calculators"
            className="inline-flex items-center gap-1.5 text-sm text-emerald-700 hover:text-emerald-800 font-medium mb-3"
          >
            <ArrowLeft size={16} />
            All calculators
          </Link>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{tool.label}</h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl">{tool.blurb}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
        {renderCalculator(tool.id)}

        {nudge && !HAS_INTERNAL_NUDGE.has(tool.id) && (
          <SoftSellNudge pool={nudge.pool} slot={nudge.slot} hint={nudge.hint} />
        )}

        <div className="rounded-2xl border border-gray-100 bg-white p-5 sm:p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3">More calculators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {others.map((c) => (
              <Link
                key={c.slug}
                to={pathForCalculator(c.slug)}
                className="rounded-xl border border-gray-100 px-4 py-3 hover:border-emerald-200 hover:bg-emerald-50/40 transition"
              >
                <p className="font-semibold text-sm text-gray-900">{c.label}</p>
                <p className="text-xs text-gray-500 mt-0.5">{c.blurb}</p>
              </Link>
            ))}
          </div>
          <Link to="/calculators" className="inline-block mt-4 text-sm font-medium text-emerald-700 hover:text-emerald-800">
            View full catalog →
          </Link>
        </div>

        {/* One next-step row: blog + Ledger + tools. Header strip / SoftSellNudge already cover referrals. */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link
            to="/blog/how-to-get-started-on-your-fi-path"
            className="bg-white border border-gray-100 rounded-xl p-4 hover:border-emerald-200 transition flex gap-3"
          >
            <BookOpen className="text-emerald-600 shrink-0" size={20} />
            <div>
              <p className="font-semibold text-sm text-gray-900">How to get started</p>
              <p className="text-xs text-gray-500 mt-0.5">Path after the numbers</p>
            </div>
          </Link>
          <Link
            to="/ledger"
            className="bg-white border border-gray-100 rounded-xl p-4 hover:border-emerald-200 transition flex gap-3"
          >
            <Newspaper className="text-emerald-600 shrink-0" size={20} />
            <div>
              <p className="font-semibold text-sm text-gray-900">This week’s Ledger</p>
              <p className="text-xs text-gray-500 mt-0.5">Sunday note for the household</p>
            </div>
          </Link>
          <Link
            to="/tools"
            className="bg-white border border-gray-100 rounded-xl p-4 hover:border-emerald-200 transition flex gap-3"
          >
            <Wrench className="text-emerald-600 shrink-0" size={20} />
            <div>
              <p className="font-semibold text-sm text-gray-900">Stewardship tools</p>
              <p className="text-xs text-gray-500 mt-0.5">Apps with referral perks</p>
            </div>
          </Link>
        </div>
      </div>

      <div className="px-4 sm:px-6 pb-10 pt-2">
        <SubscribeForm />
      </div>
      <SiteFooter />
    </div>
  );
}
