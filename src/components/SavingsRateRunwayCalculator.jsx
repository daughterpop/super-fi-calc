import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { PiggyBank } from 'lucide-react';

function money(n) {
  if (!Number.isFinite(n)) return '—';
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
}

export default function SavingsRateRunwayCalculator() {
  const [monthlyIncome, setMonthlyIncome] = useState(12000);
  const [monthlyExpenses, setMonthlyExpenses] = useState(8500);
  const [liquidReserves, setLiquidReserves] = useState(40000);
  const [investableAssets, setInvestableAssets] = useState(500000);
  const [fiAnnualSpend, setFiAnnualSpend] = useState(100000);
  const [withdrawalRate, setWithdrawalRate] = useState(4);

  const result = useMemo(() => {
    const income = Math.max(0, Number(monthlyIncome) || 0);
    const expenses = Math.max(0, Number(monthlyExpenses) || 0);
    const surplus = income - expenses;
    const savingsRate = income > 0 ? (surplus / income) * 100 : 0;
    const reserves = Math.max(0, Number(liquidReserves) || 0);
    const runwayMonths = expenses > 0 ? reserves / expenses : null;
    const annualSurplus = surplus * 12;
    const assets = Math.max(0, Number(investableAssets) || 0);
    const spend = Math.max(0, Number(fiAnnualSpend) || 0);
    const wr = Math.max(0.1, Number(withdrawalRate) || 4) / 100;
    const fiNumber = spend / wr;
    const gap = Math.max(0, fiNumber - assets);
    let yearsToFi = null;
    if (annualSurplus > 0 && gap > 0) {
      // simple no-return years; rough
      yearsToFi = gap / annualSurplus;
    } else if (gap <= 0) {
      yearsToFi = 0;
    }

    let runwayLabel = '—';
    if (runwayMonths != null) {
      if (runwayMonths >= 12) runwayLabel = `${(runwayMonths / 12).toFixed(1)} years`;
      else runwayLabel = `${runwayMonths.toFixed(1)} months`;
    }

    return {
      surplus,
      savingsRate,
      runwayMonths,
      runwayLabel,
      annualSurplus,
      fiNumber,
      gap,
      yearsToFi,
    };
  }, [monthlyIncome, monthlyExpenses, liquidReserves, investableAssets, fiAnnualSpend, withdrawalRate]);

  const inputClass =
    'w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-400';
  const labelClass = 'block text-sm font-medium text-gray-700 mb-1.5';

  const rateTone =
    result.savingsRate >= 25
      ? 'text-emerald-700'
      : result.savingsRate >= 15
        ? 'text-gray-900'
        : result.savingsRate >= 0
          ? 'text-amber-700'
          : 'text-red-700';

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-8">
      <div className="flex items-center gap-2 mb-2">
        <PiggyBank className="text-emerald-600" size={22} />
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Savings rate & runway</h2>
      </div>
      <p className="text-sm text-gray-600 mb-6 max-w-2xl">
        Two numbers that reduce anxiety fast: what percent of income becomes surplus, and how many months your cash
        reserves cover essential spending.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label className={labelClass}>Monthly take-home income ($)</label>
          <input type="number" min={0} step={100} value={monthlyIncome} onChange={(e) => setMonthlyIncome(Number(e.target.value))} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Monthly expenses ($)</label>
          <input type="number" min={0} step={100} value={monthlyExpenses} onChange={(e) => setMonthlyExpenses(Number(e.target.value))} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Liquid emergency reserves ($)</label>
          <input type="number" min={0} step={500} value={liquidReserves} onChange={(e) => setLiquidReserves(Number(e.target.value))} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Investable assets ($)</label>
          <input type="number" min={0} step={1000} value={investableAssets} onChange={(e) => setInvestableAssets(Number(e.target.value))} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Target annual FI spending ($)</label>
          <input type="number" min={0} step={1000} value={fiAnnualSpend} onChange={(e) => setFiAnnualSpend(Number(e.target.value))} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Withdrawal rate assumption (%)</label>
          <input type="number" min={0.5} max={8} step={0.25} value={withdrawalRate} onChange={(e) => setWithdrawalRate(Number(e.target.value))} className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700 mb-1">Savings rate</p>
          <p className={`text-2xl font-bold ${rateTone}`}>{result.savingsRate.toFixed(1)}%</p>
          <p className="text-xs text-gray-500 mt-1">Surplus {money(result.surplus)} / month</p>
        </div>
        <div className="rounded-xl bg-gray-50 border border-gray-100 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">Cash runway</p>
          <p className="text-2xl font-bold text-gray-900">{result.runwayLabel}</p>
          <p className="text-xs text-gray-500 mt-1">Reserves ÷ monthly expenses</p>
        </div>
        <div className="rounded-xl bg-gray-50 border border-gray-100 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">Rough FI number</p>
          <p className="text-2xl font-bold text-gray-900">{money(result.fiNumber)}</p>
          <p className="text-xs text-gray-500 mt-1">At {withdrawalRate}% withdrawal</p>
        </div>
      </div>

      <div className="rounded-xl border border-gray-100 bg-gray-50 p-4 mb-6 text-sm text-gray-700 space-y-1">
        <p>Annual surplus: <strong>{money(result.annualSurplus)}</strong></p>
        <p>Gap to FI number: <strong>{money(result.gap)}</strong></p>
        <p>
          Years to close gap at current surplus (no market growth):{' '}
          <strong>
            {result.yearsToFi == null ? '—' : result.yearsToFi === 0 ? 'Already there' : result.yearsToFi.toFixed(1)}
          </strong>
        </p>
      </div>

      <div className="rounded-xl border border-emerald-100 bg-emerald-50/40 p-4 mb-6 text-sm text-gray-700">
        <p className="font-semibold text-gray-900 mb-1">Stewardship note</p>
        <p>
          Include tithing inside expenses if it is non-negotiable — then savings rate measures surplus after fidelity, not
          instead of it. Aim for enough runway to sleep (often 3–12 months) without hoarding cash that belongs in the long-term plan.
        </p>
      </div>

      <p className="text-xs text-gray-500 mb-4">
        Rough planning math only. The full FI path calculator adds college, mortgage, vehicles, and returns.
      </p>

      <p className="text-sm text-gray-600">
        Next:{' '}
        <button
          type="button"
          onClick={() => window.dispatchEvent(new CustomEvent('vf-calc-tab', { detail: 'fi' }))}
          className="text-emerald-700 font-medium underline-offset-2 hover:underline"
        >
          Open FI path calculator
        </button>{' '}
        or read{' '}
        <Link to="/blog/how-to-get-started-on-your-fi-path" className="text-emerald-700 font-medium underline-offset-2 hover:underline">
          How to get started
        </Link>
        .
      </p>
    </div>
  );
}
