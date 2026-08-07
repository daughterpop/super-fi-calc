import { useMemo, useState } from 'react';
import SoftSellNudge from './calculators/SoftSellNudge';

function money(n) {
  if (!Number.isFinite(n)) return '—';
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
}

export default function TithingSurplusCalculator() {
  const [grossMonthly, setGrossMonthly] = useState(15000);
  const [tithePct, setTithePct] = useState(10);
  const [otherGiving, setOtherGiving] = useState(100);
  const [taxesBenefits, setTaxesBenefits] = useState(4200);
  const [livingExpenses, setLivingExpenses] = useState(7500);
  const [debtPayments, setDebtPayments] = useState(800);

  const result = useMemo(() => {
    const gross = Math.max(0, Number(grossMonthly) || 0);
    const tithe = gross * (Math.max(0, Number(tithePct) || 0) / 100);
    const giving = tithe + Math.max(0, Number(otherGiving) || 0);
    const takeHome = Math.max(0, gross - Math.max(0, Number(taxesBenefits) || 0));
    const afterGiving = takeHome - giving;
    const fixed = Math.max(0, Number(livingExpenses) || 0) + Math.max(0, Number(debtPayments) || 0);
    const surplus = afterGiving - fixed;
    const savingsRateOnGross = gross > 0 ? (surplus / gross) * 100 : 0;
    const savingsRateOnTakeHome = takeHome > 0 ? (surplus / takeHome) * 100 : 0;
    return { tithe, giving, takeHome, afterGiving, surplus, savingsRateOnGross, savingsRateOnTakeHome };
  }, [grossMonthly, tithePct, otherGiving, taxesBenefits, livingExpenses, debtPayments]);

  const inputClass =
    'w-full rounded-xl border border-gray-200 px-3 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/40';
  const labelClass = 'block text-sm font-medium text-gray-700 mb-1.5';

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-8">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Tithing & surplus</h2>
      <p className="text-sm text-gray-600 mb-6">
        Put giving in the plan first, then see investable surplus. Fidelity and FI are not opposites when the order is right.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label className={labelClass}>Gross monthly income ($)</label>
          <input type="number" value={grossMonthly} onChange={(e) => setGrossMonthly(Number(e.target.value))} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Tithe (%)</label>
          <input type="number" step={0.5} value={tithePct} onChange={(e) => setTithePct(Number(e.target.value))} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Other monthly giving ($)</label>
          <input type="number" value={otherGiving} onChange={(e) => setOtherGiving(Number(e.target.value))} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Taxes & benefits withheld ($ / mo)</label>
          <input type="number" value={taxesBenefits} onChange={(e) => setTaxesBenefits(Number(e.target.value))} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Living expenses ($ / mo)</label>
          <input type="number" value={livingExpenses} onChange={(e) => setLivingExpenses(Number(e.target.value))} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Debt payments ($ / mo)</label>
          <input type="number" value={debtPayments} onChange={(e) => setDebtPayments(Number(e.target.value))} className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
        <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-4">
          <p className="text-xs font-semibold uppercase text-emerald-700 mb-1">Monthly giving</p>
          <p className="text-2xl font-bold">{money(result.giving)}</p>
          <p className="text-xs text-gray-500">Tithe {money(result.tithe)}</p>
        </div>
        <div className="rounded-xl bg-gray-50 border border-gray-100 p-4">
          <p className="text-xs font-semibold uppercase text-gray-500 mb-1">Surplus after giving</p>
          <p className={`text-2xl font-bold ${result.surplus >= 0 ? 'text-gray-900' : 'text-amber-700'}`}>{money(result.surplus)}</p>
        </div>
        <div className="rounded-xl bg-gray-50 border border-gray-100 p-4">
          <p className="text-xs font-semibold uppercase text-gray-500 mb-1">Savings rate (take-home)</p>
          <p className="text-2xl font-bold">{result.savingsRateOnTakeHome.toFixed(1)}%</p>
        </div>
      </div>

      <p className="text-xs text-gray-500">Planning tool — not tax or spiritual advice. Adjust what “gross” means for your household (e.g. after employer benefits).</p>
      <SoftSellNudge pool="investing" slot={3} hint="Automate surplus after the tithe so generosity and investing both stay consistent." />
    </div>
  );
}
