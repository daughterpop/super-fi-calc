import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Car } from 'lucide-react';

function money(n) {
  if (!Number.isFinite(n)) return '—';
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
}

export default function VehicleTcoCalculator() {
  const [purchasePrice, setPurchasePrice] = useState(32000);
  const [downPayment, setDownPayment] = useState(5000);
  const [loanRate, setLoanRate] = useState(6.5);
  const [loanYears, setLoanYears] = useState(5);
  const [ownershipYears, setOwnershipYears] = useState(7);
  const [residualPct, setResidualPct] = useState(35);
  const [mpg, setMpg] = useState(28);
  const [milesPerYear, setMilesPerYear] = useState(12000);
  const [gasPrice, setGasPrice] = useState(3.5);
  const [insuranceYear, setInsuranceYear] = useState(1800);
  const [maintenanceYear, setMaintenanceYear] = useState(900);
  const [regTaxYear, setRegTaxYear] = useState(200);

  const result = useMemo(() => {
    const price = Math.max(0, Number(purchasePrice) || 0);
    const down = Math.min(price, Math.max(0, Number(downPayment) || 0));
    const principal = price - down;
    const yearsLoan = Math.max(1, Number(loanYears) || 1);
    const n = yearsLoan * 12;
    const r = (Math.max(0, Number(loanRate) || 0) / 100) / 12;
    let monthlyPayment = 0;
    let totalLoanPayments = 0;
    if (principal <= 0) {
      monthlyPayment = 0;
      totalLoanPayments = 0;
    } else if (r === 0) {
      monthlyPayment = principal / n;
      totalLoanPayments = principal;
    } else {
      monthlyPayment = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      totalLoanPayments = monthlyPayment * n;
    }
    const financeCost = totalLoanPayments - principal;

    const yearsOwn = Math.max(1, Number(ownershipYears) || 1);
    const residual = price * (Math.max(0, Number(residualPct) || 0) / 100);
    const depreciation = Math.max(0, price - residual);

    const mpy = Math.max(0, Number(milesPerYear) || 0);
    const mpgVal = Math.max(1, Number(mpg) || 1);
    const gas = Math.max(0, Number(gasPrice) || 0);
    const fuelYear = (mpy / mpgVal) * gas;
    const fuelTotal = fuelYear * yearsOwn;

    const ins = Math.max(0, Number(insuranceYear) || 0) * yearsOwn;
    const maint = Math.max(0, Number(maintenanceYear) || 0) * yearsOwn;
    const reg = Math.max(0, Number(regTaxYear) || 0) * yearsOwn;

    const totalCashOut = down + totalLoanPayments + fuelTotal + ins + maint + reg;
    const netCost = totalCashOut - residual;
    const perYear = netCost / yearsOwn;
    const perMile = mpy > 0 ? netCost / (mpy * yearsOwn) : 0;

    return {
      monthlyPayment,
      financeCost,
      depreciation,
      residual,
      fuelTotal,
      ins,
      maint,
      reg,
      totalCashOut,
      netCost,
      perYear,
      perMile,
    };
  }, [
    purchasePrice,
    downPayment,
    loanRate,
    loanYears,
    ownershipYears,
    residualPct,
    mpg,
    milesPerYear,
    gasPrice,
    insuranceYear,
    maintenanceYear,
    regTaxYear,
  ]);

  const inputClass =
    'w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-400';
  const labelClass = 'block text-sm font-medium text-gray-700 mb-1.5';

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-8">
      <div className="flex items-center gap-2 mb-2">
        <Car className="text-emerald-600" size={22} />
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Vehicle total cost of ownership</h2>
      </div>
      <p className="text-sm text-gray-600 mb-6 max-w-2xl">
        Look past the sticker price: financing, fuel, insurance, maintenance, and resale. Large families feel vehicle
        costs in the FI timeline — this makes the true annual burden clearer.
      </p>

      <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">Purchase & loan</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label className={labelClass}>Purchase price ($)</label>
          <input type="number" min={0} step={500} value={purchasePrice} onChange={(e) => setPurchasePrice(Number(e.target.value))} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Down payment ($)</label>
          <input type="number" min={0} step={500} value={downPayment} onChange={(e) => setDownPayment(Number(e.target.value))} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Loan APR (%)</label>
          <input type="number" min={0} step={0.125} value={loanRate} onChange={(e) => setLoanRate(Number(e.target.value))} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Loan term (years)</label>
          <input type="number" min={1} max={8} value={loanYears} onChange={(e) => setLoanYears(Number(e.target.value))} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Years you will keep it</label>
          <input type="number" min={1} max={20} value={ownershipYears} onChange={(e) => setOwnershipYears(Number(e.target.value))} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Expected resale value (% of price)</label>
          <input type="number" min={0} max={100} step={1} value={residualPct} onChange={(e) => setResidualPct(Number(e.target.value))} className={inputClass} />
        </div>
      </div>

      <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">Operating costs</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label className={labelClass}>MPG</label>
          <input type="number" min={1} step={1} value={mpg} onChange={(e) => setMpg(Number(e.target.value))} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Miles per year</label>
          <input type="number" min={0} step={500} value={milesPerYear} onChange={(e) => setMilesPerYear(Number(e.target.value))} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Fuel price ($ / gal)</label>
          <input type="number" min={0} step={0.1} value={gasPrice} onChange={(e) => setGasPrice(Number(e.target.value))} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Insurance ($ / year)</label>
          <input type="number" min={0} step={50} value={insuranceYear} onChange={(e) => setInsuranceYear(Number(e.target.value))} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Maintenance ($ / year)</label>
          <input type="number" min={0} step={50} value={maintenanceYear} onChange={(e) => setMaintenanceYear(Number(e.target.value))} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Registration / taxes ($ / year)</label>
          <input type="number" min={0} step={25} value={regTaxYear} onChange={(e) => setRegTaxYear(Number(e.target.value))} className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700 mb-1">Net cost of ownership</p>
          <p className="text-2xl font-bold text-gray-900">{money(result.netCost)}</p>
          <p className="text-xs text-gray-500 mt-1">After estimated resale</p>
        </div>
        <div className="rounded-xl bg-gray-50 border border-gray-100 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">Cost per year</p>
          <p className="text-2xl font-bold text-gray-900">{money(result.perYear)}</p>
          <p className="text-xs text-gray-500 mt-1">Averaged over {ownershipYears} years</p>
        </div>
        <div className="rounded-xl bg-gray-50 border border-gray-100 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">Cost per mile</p>
          <p className="text-2xl font-bold text-gray-900">
            {Number.isFinite(result.perMile) ? `$${result.perMile.toFixed(2)}` : '—'}
          </p>
          <p className="text-xs text-gray-500 mt-1">Payment ≈ {money(result.monthlyPayment)}/mo</p>
        </div>
      </div>

      <div className="rounded-xl border border-gray-100 bg-gray-50 p-4 mb-6 text-sm text-gray-700 space-y-1">
        <p>Depreciation (price − resale): <strong>{money(result.depreciation)}</strong></p>
        <p>Finance cost (interest): <strong>{money(result.financeCost)}</strong></p>
        <p>Fuel total: <strong>{money(result.fuelTotal)}</strong></p>
        <p>Insurance total: <strong>{money(result.ins)}</strong></p>
        <p>Maintenance total: <strong>{money(result.maint)}</strong></p>
        <p>Reg / tax total: <strong>{money(result.reg)}</strong></p>
        <p>Estimated resale credit: <strong>{money(result.residual)}</strong></p>
      </div>

      <p className="text-xs text-gray-500 mb-4">
        Illustrative only — excludes major repairs, accidents, and opportunity cost of the down payment. Compare options
        before trading a paid-off car.
      </p>

      <p className="text-sm text-gray-600">
        Check the monthly payment in the{' '}
        <button
          type="button"
          onClick={() => window.dispatchEvent(new CustomEvent('vf-calc-tab', { detail: 'loan' }))}
          className="text-emerald-700 font-medium underline-offset-2 hover:underline"
        >
          loan calculator
        </button>{' '}
        and fold vehicle years into the{' '}
        <button
          type="button"
          onClick={() => window.dispatchEvent(new CustomEvent('vf-calc-tab', { detail: 'fi' }))}
          className="text-emerald-700 font-medium underline-offset-2 hover:underline"
        >
          FI path
        </button>
        .
      </p>
    </div>
  );
}
