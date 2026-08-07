import { useMemo, useState } from 'react';
import SoftSellNudge from './calculators/SoftSellNudge';

function money(n) {
  if (!Number.isFinite(n)) return '—';
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
}

export default function CompoundGrowthCalculator() {
  const [principal, setPrincipal] = useState(50000);
  const [monthly, setMonthly] = useState(1000);
  const [years, setYears] = useState(20);
  const [rate, setRate] = useState(8);

  const result = useMemo(() => {
    const r = (Number(rate) || 0) / 100 / 12;
    const n = Math.max(0, Math.round((Number(years) || 0) * 12));
    let bal = Math.max(0, Number(principal) || 0);
    const pmt = Math.max(0, Number(monthly) || 0);
    let contributions = bal;
    for (let i = 0; i < n; i++) {
      bal = bal * (1 + r) + pmt;
      contributions += pmt;
    }
    const growth = bal - contributions;
    return { bal, contributions, growth };
  }, [principal, monthly, years, rate]);

  const inputClass =
    'w-full rounded-xl border border-gray-200 px-3 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/40';
  const labelClass = 'block text-sm font-medium text-gray-700 mb-1.5';

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-8">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Compound growth</h2>
      <p className="text-sm text-gray-600 mb-6">
        Starting balance + monthly contributions + time. Useful for visualizing why consistent surplus investing beats sporadic windfalls.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label className={labelClass}>Starting principal ($)</label>
          <input type="number" value={principal} onChange={(e) => setPrincipal(Number(e.target.value))} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Monthly contribution ($)</label>
          <input type="number" value={monthly} onChange={(e) => setMonthly(Number(e.target.value))} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Years</label>
          <input type="number" min={0} value={years} onChange={(e) => setYears(Number(e.target.value))} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Expected annual return (%)</label>
          <input type="number" step={0.25} value={rate} onChange={(e) => setRate(Number(e.target.value))} className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
        <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-4">
          <p className="text-xs font-semibold uppercase text-emerald-700 mb-1">Future value</p>
          <p className="text-2xl font-bold">{money(result.bal)}</p>
        </div>
        <div className="rounded-xl bg-gray-50 border border-gray-100 p-4">
          <p className="text-xs font-semibold uppercase text-gray-500 mb-1">Your contributions</p>
          <p className="text-2xl font-bold">{money(result.contributions)}</p>
        </div>
        <div className="rounded-xl bg-gray-50 border border-gray-100 p-4">
          <p className="text-xs font-semibold uppercase text-gray-500 mb-1">Growth</p>
          <p className="text-2xl font-bold">{money(result.growth)}</p>
        </div>
      </div>

      <p className="text-xs text-gray-500">Assumes constant monthly contributions and a fixed return — markets vary. Not a forecast.</p>
      <SoftSellNudge pool="investing" slot={1} hint="Open or fund a brokerage so this monthly contribution actually happens." />
    </div>
  );
}
