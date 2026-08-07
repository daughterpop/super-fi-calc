import { useMemo, useState } from 'react';
import SoftSellNudge from './calculators/SoftSellNudge';

function money(n) {
  if (!Number.isFinite(n)) return '—';
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
}

function mortgagePayment(principal, annualRate, years) {
  const P = Math.max(0, principal);
  const n = Math.max(1, Math.round(years * 12));
  const r = annualRate / 100 / 12;
  if (P === 0) return 0;
  if (r === 0) return P / n;
  return (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
}

export default function RentVsBuyCalculator() {
  const [rent, setRent] = useState(2200);
  const [rentInflation, setRentInflation] = useState(3);
  const [homePrice, setHomePrice] = useState(400000);
  const [downPct, setDownPct] = useState(20);
  const [rate, setRate] = useState(6.5);
  const [term, setTerm] = useState(30);
  const [taxInsMaintMonthly, setTaxInsMaintMonthly] = useState(900);
  const [years, setYears] = useState(7);
  const [homeAppreciation, setHomeAppreciation] = useState(3);

  const result = useMemo(() => {
    const y = Math.max(1, Number(years) || 1);
    const price = Math.max(0, Number(homePrice) || 0);
    const down = price * (Math.max(0, Number(downPct) || 0) / 100);
    const loan = price - down;
    const pmt = mortgagePayment(loan, Number(rate) || 0, Number(term) || 30);
    const ownershipMonthly = pmt + Math.max(0, Number(taxInsMaintMonthly) || 0);

    let rentTotal = 0;
    let r = Math.max(0, Number(rent) || 0);
    const rInf = (Number(rentInflation) || 0) / 100 / 12;
    for (let m = 0; m < y * 12; m++) {
      rentTotal += r;
      r *= 1 + rInf;
    }

    const buyCashOut = down + ownershipMonthly * y * 12;
    const futureValue = price * Math.pow(1 + (Number(homeAppreciation) || 0) / 100, y);
    // rough remaining principal estimate: amortize y years
    const monthlyRate = (Number(rate) || 0) / 100 / 12;
    let bal = loan;
    for (let m = 0; m < y * 12; m++) {
      const interest = bal * monthlyRate;
      const principalPay = Math.min(bal, pmt - interest);
      if (principalPay > 0) bal -= principalPay;
      else break;
    }
    const equity = futureValue - bal;
    const netBuyCost = buyCashOut - equity;

    return {
      pmt,
      ownershipMonthly,
      rentTotal,
      buyCashOut,
      equity,
      netBuyCost,
      advantage: rentTotal - netBuyCost,
    };
  }, [rent, rentInflation, homePrice, downPct, rate, term, taxInsMaintMonthly, years, homeAppreciation]);

  const inputClass =
    'w-full rounded-xl border border-gray-200 px-3 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/40';
  const labelClass = 'block text-sm font-medium text-gray-700 mb-1.5';

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-8">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Rent vs buy</h2>
      <p className="text-sm text-gray-600 mb-6">
        Rough comparison over a holding period: total rent paid vs net cost of buying after building equity. Stability and vocation matter more than the spreadsheet alone.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label className={labelClass}>Monthly rent ($)</label>
          <input type="number" value={rent} onChange={(e) => setRent(Number(e.target.value))} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Rent inflation (% / yr)</label>
          <input type="number" step={0.25} value={rentInflation} onChange={(e) => setRentInflation(Number(e.target.value))} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Home price ($)</label>
          <input type="number" value={homePrice} onChange={(e) => setHomePrice(Number(e.target.value))} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Down payment (%)</label>
          <input type="number" value={downPct} onChange={(e) => setDownPct(Number(e.target.value))} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Mortgage rate (%)</label>
          <input type="number" step={0.125} value={rate} onChange={(e) => setRate(Number(e.target.value))} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Term (years)</label>
          <input type="number" value={term} onChange={(e) => setTerm(Number(e.target.value))} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Tax + insurance + maint ($ / mo)</label>
          <input type="number" value={taxInsMaintMonthly} onChange={(e) => setTaxInsMaintMonthly(Number(e.target.value))} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Years in home</label>
          <input type="number" value={years} onChange={(e) => setYears(Number(e.target.value))} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Home appreciation (% / yr)</label>
          <input type="number" step={0.25} value={homeAppreciation} onChange={(e) => setHomeAppreciation(Number(e.target.value))} className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
        <div className="rounded-xl bg-gray-50 border border-gray-100 p-4">
          <p className="text-xs font-semibold uppercase text-gray-500 mb-1">Total rent paid</p>
          <p className="text-2xl font-bold">{money(result.rentTotal)}</p>
        </div>
        <div className="rounded-xl bg-gray-50 border border-gray-100 p-4">
          <p className="text-xs font-semibold uppercase text-gray-500 mb-1">Net buy cost</p>
          <p className="text-2xl font-bold">{money(result.netBuyCost)}</p>
          <p className="text-xs text-gray-500">Cash out − equity</p>
        </div>
        <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-4">
          <p className="text-xs font-semibold uppercase text-emerald-700 mb-1">Buy advantage</p>
          <p className="text-2xl font-bold">{money(result.advantage)}</p>
          <p className="text-xs text-gray-500">P&I ≈ {money(result.pmt)}/mo</p>
        </div>
      </div>

      <p className="text-xs text-gray-500">Ignores selling costs, PMI, and opportunity cost of the down payment invested elsewhere. Directional only.</p>
      <SoftSellNudge pool="household" slot={6} hint="Whether you rent or buy, card rewards and cashback on household spend still stack." />
    </div>
  );
}
