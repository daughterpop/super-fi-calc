import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';
import { STATE_529_BENEFITS, getState529 } from '../data/state529Benefits';

function money(n) {
  if (!Number.isFinite(n)) return '—';
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
}

export default function College529Calculator() {
  const [childAge, setChildAge] = useState(8);
  const [collegeStartAge, setCollegeStartAge] = useState(18);
  const [yearsOfCollege, setYearsOfCollege] = useState(4);
  const [currentAnnualCost, setCurrentAnnualCost] = useState(46000);
  const [costInflation, setCostInflation] = useState(5);
  const [balance, setBalance] = useState(25000);
  const [monthlyContribution, setMonthlyContribution] = useState(400);
  const [returnPct, setReturnPct] = useState(7);
  const [stateCode, setStateCode] = useState('IL');
  const [filing, setFiling] = useState('joint');
  const [annualContribution, setAnnualContribution] = useState(4800);
  const [marginalStateRate, setMarginalStateRate] = useState(4.95);

  const state = getState529(stateCode);

  const projection = useMemo(() => {
    const yearsToStart = Math.max(0, Number(collegeStartAge) - Number(childAge));
    const r = (Number(returnPct) || 0) / 100 / 12;
    const infl = (Number(costInflation) || 0) / 100;
    const months = Math.round(yearsToStart * 12);
    let bal = Math.max(0, Number(balance) || 0);
    const pmt = Math.max(0, Number(monthlyContribution) || 0);
    for (let i = 0; i < months; i++) {
      bal = bal * (1 + r) + pmt;
    }

    const cost0 = Math.max(0, Number(currentAnnualCost) || 0);
    const nYears = Math.max(1, Number(yearsOfCollege) || 1);
    let totalCost = 0;
    for (let y = 0; y < nYears; y++) {
      const yearCost = cost0 * Math.pow(1 + infl, yearsToStart + y);
      totalCost += yearCost;
    }
    const firstYearCost = cost0 * Math.pow(1 + infl, yearsToStart);
    const gap = totalCost - bal;

    return { yearsToStart, projectedBalance: bal, totalCost, firstYearCost, gap };
  }, [
    childAge,
    collegeStartAge,
    yearsOfCollege,
    currentAnnualCost,
    costInflation,
    balance,
    monthlyContribution,
    returnPct,
  ]);

  const taxBenefit = useMemo(() => {
    if (!state) return null;
    const contrib = Math.max(0, Number(annualContribution) || 0);
    const rate = Math.max(0, Number(marginalStateRate) || 0) / 100;

    if (state.benefitType === 'no_income_tax') {
      return { label: 'No state income tax', estimatedSavings: 0, detail: state.note };
    }
    if (state.benefitType === 'none') {
      return { label: 'No state 529 tax break', estimatedSavings: 0, detail: state.note };
    }
    if (state.benefitType === 'credit') {
      let maxCredit = filing === 'joint' ? state.joint : state.single;
      if (maxCredit == null) {
        return { label: 'State tax credit', estimatedSavings: null, detail: state.note };
      }
      // Indiana-style: credit is min(maxCredit, 20% of contrib) when note mentions 20%
      let credit = maxCredit;
      if (state.code === 'IN') {
        credit = Math.min(maxCredit, contrib * 0.2);
      }
      return {
        label: 'Estimated state tax credit',
        estimatedSavings: credit,
        detail: state.note,
      };
    }
    // deduction
    let maxDed = filing === 'joint' ? state.joint : state.single;
    if (maxDed == null) {
      // full contribution deductible — estimate on full contrib
      const savings = contrib * rate;
      return {
        label: 'Estimated state tax savings (full contribution deduction)',
        estimatedSavings: savings,
        deductible: contrib,
        detail: state.note,
      };
    }
    const deductible = Math.min(contrib, maxDed);
    const savings = deductible * rate;
    return {
      label: 'Estimated state tax savings',
      estimatedSavings: savings,
      deductible,
      maxDed,
      detail: state.note,
    };
  }, [state, annualContribution, filing, marginalStateRate]);

  const inputClass =
    'w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-400';
  const labelClass = 'block text-sm font-medium text-gray-700 mb-1.5';

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-8">
      <div className="flex items-center gap-2 mb-2">
        <GraduationCap className="text-emerald-600" size={22} />
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">College / 529 calculator</h2>
      </div>
      <p className="text-sm text-gray-600 mb-6 max-w-2xl">
        Project a 529 balance vs inflated college costs, and look up illustrative state tax benefits for contributions.
      </p>

      <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">Student & costs</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label className={labelClass}>Child age</label>
          <input type="number" min={0} max={25} value={childAge} onChange={(e) => setChildAge(Number(e.target.value))} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>College start age</label>
          <input type="number" min={16} max={30} value={collegeStartAge} onChange={(e) => setCollegeStartAge(Number(e.target.value))} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Years of college</label>
          <input type="number" min={1} max={8} value={yearsOfCollege} onChange={(e) => setYearsOfCollege(Number(e.target.value))} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Current annual cost ($)</label>
          <input type="number" min={0} step={1000} value={currentAnnualCost} onChange={(e) => setCurrentAnnualCost(Number(e.target.value))} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Cost inflation (% / yr)</label>
          <input type="number" min={0} step={0.25} value={costInflation} onChange={(e) => setCostInflation(Number(e.target.value))} className={inputClass} />
        </div>
      </div>

      <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">529 savings</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label className={labelClass}>Current 529 balance ($)</label>
          <input type="number" min={0} step={500} value={balance} onChange={(e) => setBalance(Number(e.target.value))} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Monthly contribution ($)</label>
          <input type="number" min={0} step={25} value={monthlyContribution} onChange={(e) => setMonthlyContribution(Number(e.target.value))} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Expected return (% / yr)</label>
          <input type="number" min={0} step={0.25} value={returnPct} onChange={(e) => setReturnPct(Number(e.target.value))} className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
        <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700 mb-1">Projected 529 at start</p>
          <p className="text-2xl font-bold text-gray-900">{money(projection.projectedBalance)}</p>
          <p className="text-xs text-gray-500 mt-1">{projection.yearsToStart} years to go</p>
        </div>
        <div className="rounded-xl bg-gray-50 border border-gray-100 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">Total college cost</p>
          <p className="text-2xl font-bold text-gray-900">{money(projection.totalCost)}</p>
          <p className="text-xs text-gray-500 mt-1">Inflated over {yearsOfCollege} years</p>
        </div>
        <div className="rounded-xl bg-gray-50 border border-gray-100 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">Gap (cost − 529)</p>
          <p className={`text-2xl font-bold ${projection.gap > 0 ? 'text-amber-700' : 'text-emerald-700'}`}>
            {money(projection.gap)}
          </p>
          <p className="text-xs text-gray-500 mt-1">First year ≈ {money(projection.firstYearCost)}</p>
        </div>
      </div>

      <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">State tax benefit lookup</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className={labelClass}>Your state</label>
          <select value={stateCode} onChange={(e) => setStateCode(e.target.value)} className={inputClass}>
            {STATE_529_BENEFITS.map((s) => (
              <option key={s.code} value={s.code}>
                {s.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass}>Filing status</label>
          <select value={filing} onChange={(e) => setFiling(e.target.value)} className={inputClass}>
            <option value="single">Single</option>
            <option value="joint">Married filing jointly</option>
          </select>
        </div>
        <div>
          <label className={labelClass}>This year’s 529 contribution ($)</label>
          <input type="number" min={0} step={100} value={annualContribution} onChange={(e) => setAnnualContribution(Number(e.target.value))} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Your marginal state tax rate (%)</label>
          <input type="number" min={0} step={0.25} value={marginalStateRate} onChange={(e) => setMarginalStateRate(Number(e.target.value))} className={inputClass} />
        </div>
      </div>

      {state && taxBenefit && (
        <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-4 mb-4">
          <p className="text-sm font-semibold text-gray-900 mb-1">{state.name}</p>
          <p className="text-sm text-gray-700 mb-2">{taxBenefit.label}</p>
          {taxBenefit.estimatedSavings != null && (
            <p className="text-2xl font-bold text-gray-900 mb-2">{money(taxBenefit.estimatedSavings)}</p>
          )}
          {taxBenefit.maxDed != null && (
            <p className="text-sm text-gray-600 mb-1">
              Deduction cap (illustrative): {money(taxBenefit.maxDed)} · Applied: {money(taxBenefit.deductible)}
            </p>
          )}
          <p className="text-xs text-gray-600">{taxBenefit.detail}</p>
          {state.parity && (
            <p className="text-xs text-emerald-800 mt-2 font-medium">Tax parity: out-of-state 529 contributions may still qualify.</p>
          )}
        </div>
      )}

      <p className="text-xs text-gray-500 mb-4">
        State rules change. Limits, income phaseouts, carryforwards, and in-state plan requirements are simplified here for
        planning — confirm with your plan and tax professional. Federal growth and qualified withdrawals remain tax-advantaged
        regardless of state.
      </p>

      <p className="text-sm text-gray-600">
        Model college inside the full family timeline on the{' '}
        <button
          type="button"
          onClick={() => window.dispatchEvent(new CustomEvent('vf-calc-tab', { detail: 'fi' }))}
          className="text-emerald-700 font-medium underline-offset-2 hover:underline"
        >
          FI path calculator
        </button>
        .
      </p>
    </div>
  );
}
