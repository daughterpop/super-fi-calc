import { useMemo, useState } from 'react';
import SoftSellNudge from './calculators/SoftSellNudge';

function money(n) {
  if (!Number.isFinite(n)) return '—';
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
}

function payment(principal, annualRate, years) {
  const P = Math.max(0, principal);
  const n = Math.max(1, Math.round(years * 12));
  const r = annualRate / 100 / 12;
  if (P === 0) return 0;
  if (r === 0) return P / n;
  return (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
}

export default function RefinanceBreakEvenCalculator() {
  const [balance, setBalance] = useState(300000);
  const [currentRate, setCurrentRate] = useState(6.75);
  const [currentYearsLeft, setCurrentYearsLeft] = useState(27);
  const [newRate, setNewRate] = useState(5.75);
  const [newYears, setNewYears] = useState(30);
  const [closingCosts, setClosingCosts] = useState(4500);

  const result = useMemo(() => {
    const bal = Math.max(0, Number(balance) || 0);
    const oldPmt = payment(bal, Number(currentRate) || 0, Number(currentYearsLeft) || 1);
    const newPmt = payment(bal, Number(newRate) || 0, Number(newYears) || 1);
    const monthlySavings = oldPmt - newPmt;
    const costs = Math.max(0, Number(closingCosts) || 0);
    const breakEvenMonths =
      monthlySavings > 0 ? costs / monthlySavings : monthlySavings < 0 ? Infinity : null;

    return { oldPmt, newPmt, monthlySavings, breakEvenMonths };
  }, [balance, currentRate, currentYearsLeft, newRate, newYears, closingCosts]);

  const inputClass =
    'w-full rounded-xl border border-gray-200 px-3 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/40';
  const labelClass = 'block text-sm font-medium text-gray-700 mb-1.5';

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-8">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Refinance break-even</h2>
      <p className="text-sm text-gray-600 mb-6">
        See whether a lower rate pays for closing costs before you move or sell. Payment drop alone is not enough.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label className={labelClass}>Current balance ($)</label>
          <input type="number" value={balance} onChange={(e) => setBalance(Number(e.target.value))} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Closing costs ($)</label>
          <input type="number" value={closingCosts} onChange={(e) => setClosingCosts(Number(e.target.value))} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Current rate (%)</label>
          <input type="number" step={0.125} value={currentRate} onChange={(e) => setCurrentRate(Number(e.target.value))} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Years left on current loan</label>
          <input type="number" value={currentYearsLeft} onChange={(e) => setCurrentYearsLeft(Number(e.target.value))} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>New rate (%)</label>
          <input type="number" step={0.125} value={newRate} onChange={(e) => setNewRate(Number(e.target.value))} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>New term (years)</label>
          <input type="number" value={newYears} onChange={(e) => setNewYears(Number(e.target.value))} className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
        <div className="rounded-xl bg-gray-50 border border-gray-100 p-4">
          <p className="text-xs font-semibold uppercase text-gray-500 mb-1">Current payment</p>
          <p className="text-2xl font-bold">{money(result.oldPmt)}</p>
        </div>
        <div className="rounded-xl bg-gray-50 border border-gray-100 p-4">
          <p className="text-xs font-semibold uppercase text-gray-500 mb-1">New payment</p>
          <p className="text-2xl font-bold">{money(result.newPmt)}</p>
        </div>
        <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-4">
          <p className="text-xs font-semibold uppercase text-emerald-700 mb-1">Break-even</p>
          <p className="text-2xl font-bold text-gray-900">
            {result.breakEvenMonths == null
              ? '—'
              : !Number.isFinite(result.breakEvenMonths)
                ? 'Never'
                : `${result.breakEvenMonths.toFixed(1)} mo`}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Monthly change: {money(result.monthlySavings)}
          </p>
        </div>
      </div>

      <p className="text-xs text-gray-500">P&I only. Extending term can lower payment while increasing total interest — check both.</p>
      <SoftSellNudge pool="household" slot={5} hint="Closing-cost savings and payment drops free cash flow for FI surplus." />
    </div>
  );
}
