import { useMemo, useState } from 'react';
import SoftSellNudge from './calculators/SoftSellNudge';

function money(n) {
  if (!Number.isFinite(n)) return '—';
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
}

export default function EmergencyFundCalculator() {
  const [monthlyEssentials, setMonthlyEssentials] = useState(7000);
  const [monthsTarget, setMonthsTarget] = useState(6);
  const [currentReserves, setCurrentReserves] = useState(15000);
  const [monthlyToFund, setMonthlyToFund] = useState(500);

  const result = useMemo(() => {
    const essentials = Math.max(0, Number(monthlyEssentials) || 0);
    const months = Math.max(1, Number(monthsTarget) || 1);
    const target = essentials * months;
    const current = Math.max(0, Number(currentReserves) || 0);
    const gap = Math.max(0, target - current);
    const contrib = Math.max(0, Number(monthlyToFund) || 0);
    const monthsToFill = contrib > 0 ? gap / contrib : null;
    const coverage = essentials > 0 ? current / essentials : 0;
    return { target, gap, monthsToFill, coverage };
  }, [monthlyEssentials, monthsTarget, currentReserves, monthlyToFund]);

  const inputClass =
    'w-full rounded-xl border border-gray-200 px-3 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/40';
  const labelClass = 'block text-sm font-medium text-gray-700 mb-1.5';

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-8">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Emergency fund target</h2>
      <p className="text-sm text-gray-600 mb-6">
        Size cash reserves to essentials — not lifestyle inflation — so a job loss or repair does not derail the FI plan or the tithe.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label className={labelClass}>Essential monthly expenses ($)</label>
          <input type="number" value={monthlyEssentials} onChange={(e) => setMonthlyEssentials(Number(e.target.value))} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Target months of coverage</label>
          <input type="number" min={1} max={24} value={monthsTarget} onChange={(e) => setMonthsTarget(Number(e.target.value))} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Current liquid reserves ($)</label>
          <input type="number" value={currentReserves} onChange={(e) => setCurrentReserves(Number(e.target.value))} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Monthly amount to build fund ($)</label>
          <input type="number" value={monthlyToFund} onChange={(e) => setMonthlyToFund(Number(e.target.value))} className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
        <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-4">
          <p className="text-xs font-semibold uppercase text-emerald-700 mb-1">Target fund</p>
          <p className="text-2xl font-bold">{money(result.target)}</p>
        </div>
        <div className="rounded-xl bg-gray-50 border border-gray-100 p-4">
          <p className="text-xs font-semibold uppercase text-gray-500 mb-1">Gap to target</p>
          <p className="text-2xl font-bold">{money(result.gap)}</p>
          <p className="text-xs text-gray-500">Now covering {result.coverage.toFixed(1)} months</p>
        </div>
        <div className="rounded-xl bg-gray-50 border border-gray-100 p-4">
          <p className="text-xs font-semibold uppercase text-gray-500 mb-1">Months to fill</p>
          <p className="text-2xl font-bold">
            {result.monthsToFill == null ? '—' : result.monthsToFill.toFixed(1)}
          </p>
        </div>
      </div>

      <p className="text-xs text-gray-500">Single-income or commission-heavy households often lean toward 6–12 months of essentials.</p>
      <SoftSellNudge pool="investing" slot={2} hint="Park the emergency fund in a high-yield cash account, then invest surplus beyond the target." />
    </div>
  );
}
