import { useCallback, useRef, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, BookOpen } from 'lucide-react';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import SubscribeForm from '../components/SubscribeForm';
import SoftSellNudge from '../components/calculators/SoftSellNudge';
import CalculatorEmailCapture, {
  readCalculatorResults,
} from '../components/calculators/CalculatorEmailCapture';
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
  CALCULATOR_BY_SLUG,
  NUDGE_BY_ID,
  HAS_INTERNAL_NUDGE,
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
  const calcRef = useRef(null);
  // The email capture appears once the visitor changes an input or presses a
  // calculator button while a result is showing. It then replaces the generic
  // Ledger box below. Prerendered HTML always has the generic box, so
  // hydration matches.
  const [touchedSlug, setTouchedSlug] = useState(null);
  const [dismissedSlug, setDismissedSlug] = useState(null);
  // Wait a tick so the calculator re-renders, then only count it once a result
  // is on screen (the FI path wizard shows results after "See results").
  const markTouched = useCallback(() => {
    setTimeout(() => {
      if (readCalculatorResults(calcRef.current, 1).length > 0) setTouchedSlug(slug);
    }, 0);
  }, [slug]);
  const onCalcClick = useCallback(
    (e) => {
      if (e.target.closest && e.target.closest('button')) markTouched();
    },
    [markTouched],
  );
  const getResults = useCallback(() => readCalculatorResults(calcRef.current), []);

  if (!tool) {
    return <Navigate to="/calculators" replace />;
  }

  const nudge = NUDGE_BY_ID[tool.id];
  const showCapture = touchedSlug === slug && dismissedSlug !== slug;

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
        <div
          ref={calcRef}
          onInputCapture={markTouched}
          onChangeCapture={markTouched}
          onClickCapture={onCalcClick}
        >
          {renderCalculator(tool.id)}
        </div>

        {showCapture && (
          <CalculatorEmailCapture
            key={slug}
            tool={tool}
            getResults={getResults}
            onDismiss={() => setDismissedSlug(slug)}
          />
        )}

        {nudge && !HAS_INTERNAL_NUDGE.has(tool.id) && (
          <SoftSellNudge pool={nudge.pool} slot={nudge.slot} hint={nudge.hint} />
        )}

        {/* One next step after the tool. Ledger and FAQ stay in the footer. */}
        <div className="bg-white border border-gray-100 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex gap-3 min-w-0">
            <BookOpen className="text-emerald-600 shrink-0 mt-0.5" size={20} />
            <div>
              <p className="font-semibold text-sm text-gray-900">Next: read the sequence</p>
              <p className="text-xs text-gray-500 mt-0.5">
                What to do with the number, before another tool or another calculator.
              </p>
            </div>
          </div>
          <Link
            to="/blog/how-to-get-started-on-your-fi-path"
            className="inline-flex items-center justify-center gap-1.5 shrink-0 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-lg"
          >
            How to get started
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {!showCapture && (
        <div className="px-4 sm:px-6 pb-10 pt-2">
          <SubscribeForm />
        </div>
      )}
      <SiteFooter />
    </div>
  );
}
