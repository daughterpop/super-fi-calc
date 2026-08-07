import { useMemo, useState } from 'react';
import SoftSellNudge from './calculators/SoftSellNudge';

function money(n) {
  if (!Number.isFinite(n)) return '—';
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
}

export default function EmployerMatchCalculator() {
  const [salary, setSalary] = useState(120000);
  const [employeePct, setEmployeePct] = useState(5);
  const [matchPctOfDeferral, setMatchPctOfDeferral] = useState(100);
  const [matchUpToSalaryPct, setMatchUpToSalaryPct] = useState(6);
  const [currentDeferralPct, setCurrentDeferralPct] = useState(3);

  const result = useMemo(() => {
    const sal = Math.max(0, Number(salary) || 0);
    const upTo = Math.max(0, Number(matchUpToSalaryPct) || 0) / 100;
    const matchRate = Math.max(0, Number(matchPctOfDeferral) || 0) / 100;
    const maxMatch = sal * upTo * matchRate;

    const curr = Math.max(0, Number(currentDeferralPct) || 0) / 100;
    const currDeferral = sal * curr;
    const currMatch = Math.min(currDeferral, sal * upTo) * matchRate;

    const target = Math.max(0, Number(employeePct) || 0) / 100;
    const targetDeferral = sal * target;
    const targetMatch = Math.min(targetDeferral, sal * upTo) * matchRate;

    const freeMoneyLeft = Math.max(0, maxMatch - currMatch);
    const pctToMaxMatch = upTo * 100; // employee needs to defer at least match-up-to % if match is 100%

    return {
      maxMatch,
      currDeferral,
      currMatch,
      targetDeferral,
      targetMatch,
      freeMoneyLeft,
      pctToMaxMatch,
    };
  }, [salary, employeePct, matchPctOfDeferral, matchUpToSalaryPct, currentDeferralPct]);

  const inputClass =
    'w-full rounded-xl border border-gray-200 px-3 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/40';
  const labelClass = 'block text-sm font-medium text-gray-700 mb-1.5';

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-8">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Employer match maximizer</h2>
      <p className="text-sm text-gray-600 mb-6">
        Leaving match on the table is a silent tax on your FI timeline. Capture free money before optimizing brokerage accounts.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label className={labelClass}>Annual salary ($)</label>
          <input type="number" value={salary} onChange={(e) => setSalary(Number(e.target.value))} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Employer matches (% of your deferral)</label>
          <input type="number" value={matchPctOfDeferral} onChange={(e) => setMatchPctOfDeferral(Number(e.target.value))} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Match applies up to (% of salary)</label>
          <input type="number" value={matchUpToSalaryPct} onChange={(e) => setMatchUpToSalaryPct(Number(e.target.value))} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Your current deferral (% of salary)</label>
          <input type="number" value={currentDeferralPct} onChange={(e) => setCurrentDeferralPct(Number(e.target.value))} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Target deferral (% of salary)</label>
          <input type="number" value={employeePct} onChange={(e) => setEmployeePct(Number(e.target.value))} className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
        <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-4">
          <p className="text-xs font-semibold uppercase text-emerald-700 mb-1">Max annual match</p>
          <p className="text-2xl font-bold">{money(result.maxMatch)}</p>
        </div>
        <div className="rounded-xl bg-gray-50 border border-gray-100 p-4">
          <p className="text-xs font-semibold uppercase text-gray-500 mb-1">Your current match</p>
          <p className="text-2xl font-bold">{money(result.currMatch)}</p>
        </div>
        <div className="rounded-xl bg-amber-50 border border-amber-100 p-4">
          <p className="text-xs font-semibold uppercase text-amber-800 mb-1">Match left on table</p>
          <p className="text-2xl font-bold">{money(result.freeMoneyLeft)}</p>
        </div>
      </div>

      <p className="text-sm text-gray-700 mb-2">
        At target deferral, estimated match: <strong>{money(result.targetMatch)}</strong> on{' '}
        <strong>{money(result.targetDeferral)}</strong> of your contributions.
      </p>
      <p className="text-xs text-gray-500">Simplified formula — true match schedules (tiered, true-up, after-tax) vary by employer plan document.</p>
      <SoftSellNudge pool="investing" slot={7} hint="After the match, invest surplus in a low-cost taxable or IRA account." />
    </div>
  );
}
