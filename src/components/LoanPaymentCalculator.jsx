import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Car } from 'lucide-react';

function money(n) {
  if (!Number.isFinite(n)) return '—';
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
}

function moneyExact(n) {
  if (!Number.isFinite(n)) return '—';
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 });
}

export default function LoanPaymentCalculator() {
  const [loanType, setLoanType] = useState('mortgage');
  const [principal, setPrincipal] = useState(350000);
  const [rate, setRate] = useState(6.5);
  const [years, setYears] = useState(30);
  const [extra, setExtra] = useState(0);

  const result = useMemo(() => {
    const P = Math.max(0, Number(principal) || 0);
    const annual = Math.max(0, Number(rate) || 0) / 100;
    const n = Math.max(1, Math.round((Number(years) || 1) * 12));
    const r = annual / 12;
    const extraMonthly = Math.max(0, Number(extra) || 0);

    let basePayment;
    if (r === 0) {
      basePayment = P / n;
    } else {
      basePayment = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    }

    const totalBase = basePayment * n;
    const interestBase = totalBase - P;

    // Payoff with extra principal each month
    let balance = P;
    let months = 0;
    let totalPaid = 0;
    const maxMonths = n + 600; // safety
    while (balance > 0.01 && months < maxMonths) {
      const interest = balance * r;
      let payment = basePayment + extraMonthly;
      if (payment > balance + interest) payment = balance + interest;
      balance = balance + interest - payment;
      totalPaid += payment;
      months += 1;
      if (payment <= interest && extraMonthly === 0 && r > 0) {
        // never amortizing
        months = Infinity;
        break;
      }
    }

    const interestWithExtra = totalPaid - P;
    const monthsSaved = Number.isFinite(months) ? Math.max(0, n - months) : 0;
    const interestSaved = Number.isFinite(interestWithExtra)
      ? Math.max(0, interestBase - interestWithExtra)
      : 0;

    return {
      basePayment,
      totalBase,
      interestBase,
      months: Number.isFinite(months) ? months : null,
      totalPaid: Number.isFinite(totalPaid) ? totalPaid : null,
      interestWithExtra: Number.isFinite(interestWithExtra) ? interestWithExtra : null,
      monthsSaved,
      interestSaved,
    };
  }, [principal, rate, years, extra]);

  const inputClass =
    'w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-400';
  const labelClass = 'block text-sm font-medium text-gray-700 mb-1.5';

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-8">
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Loan payment calculator</h2>
      </div>
      <p className="text-sm text-gray-600 mb-6 max-w-2xl">
        Estimate mortgage or auto payments, total interest, and how extra principal shortens the term.
        Useful when you model vehicles and housing inside the main FI path calculator.
      </p>

      <div className="flex gap-2 mb-6">
        <button
          type="button"
          onClick={() => {
            setLoanType('mortgage');
            setYears(30);
            setPrincipal(350000);
            setRate(6.5);
          }}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition ${
            loanType === 'mortgage'
              ? 'bg-emerald-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <Home size={16} /> Mortgage
        </button>
        <button
          type="button"
          onClick={() => {
            setLoanType('auto');
            setYears(6);
            setPrincipal(35000);
            setRate(7.5);
          }}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition ${
            loanType === 'auto'
              ? 'bg-emerald-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <Car size={16} /> Auto
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label className={labelClass}>Loan amount ($)</label>
          <input
            type="number"
            min={0}
            step={1000}
            value={principal}
            onChange={(e) => setPrincipal(Number(e.target.value))}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Interest rate (APR %)</label>
          <input
            type="number"
            min={0}
            step={0.125}
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Term (years)</label>
          <input
            type="number"
            min={1}
            max={40}
            step={1}
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Extra principal / month ($)</label>
          <input
            type="number"
            min={0}
            step={50}
            value={extra}
            onChange={(e) => setExtra(Number(e.target.value))}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700 mb-1">Monthly payment</p>
          <p className="text-2xl font-bold text-gray-900">{moneyExact(result.basePayment)}</p>
          <p className="text-xs text-gray-500 mt-1">Principal & interest only</p>
        </div>
        <div className="rounded-xl bg-gray-50 border border-gray-100 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">Total interest (base)</p>
          <p className="text-2xl font-bold text-gray-900">{money(result.interestBase)}</p>
          <p className="text-xs text-gray-500 mt-1">Over full term</p>
        </div>
        <div className="rounded-xl bg-gray-50 border border-gray-100 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">Total paid (base)</p>
          <p className="text-2xl font-bold text-gray-900">{money(result.totalBase)}</p>
          <p className="text-xs text-gray-500 mt-1">Principal + interest</p>
        </div>
      </div>

      {extra > 0 && result.months != null && (
        <div className="rounded-xl border border-emerald-200 bg-white p-4 mb-6">
          <p className="text-sm font-semibold text-gray-900 mb-2">With ${extra}/mo extra principal</p>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>
              Paid off in about <strong>{result.months}</strong> months ({(result.months / 12).toFixed(1)} years)
            </li>
            <li>
              Time saved: <strong>{result.monthsSaved}</strong> months
            </li>
            <li>
              Interest saved: <strong>{money(result.interestSaved)}</strong>
            </li>
          </ul>
        </div>
      )}

      <p className="text-xs text-gray-500 mb-4">
        Does not include taxes, insurance, HOA, or PMI. Rates and payments are estimates for planning only.
      </p>

      <p className="text-sm text-gray-600">
        Plug the payment into your household budget, then see how it affects FI years in the{' '}
        <button
          type="button"
          onClick={() => window.dispatchEvent(new CustomEvent('vf-calc-tab', { detail: 'fi' }))}
          className="text-emerald-700 font-medium underline-offset-2 hover:underline"
        >
          FI path calculator
        </button>
        {' '}or the{' '}
        <Link to="/blog/how-to-get-started-on-your-fi-path" className="text-emerald-700 font-medium underline-offset-2 hover:underline">
          Get Started guide
        </Link>
        .
      </p>
    </div>
  );
}
