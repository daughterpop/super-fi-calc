import { useMemo, useState } from 'react';
import SoftSellNudge from './calculators/SoftSellNudge';

function money(n) {
  if (!Number.isFinite(n)) return '—';
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
}

const DEFAULT_DEBTS = [
  { id: 1, name: 'Credit card', balance: 4500, rate: 22, minPay: 120 },
  { id: 2, name: 'Auto loan', balance: 12000, rate: 7.5, minPay: 320 },
  { id: 3, name: 'Student loan', balance: 18000, rate: 5.5, minPay: 180 },
];

function simulate(debts, extra, method) {
  const list = debts
    .map((d) => ({
      ...d,
      balance: Math.max(0, Number(d.balance) || 0),
      rate: Math.max(0, Number(d.rate) || 0) / 100 / 12,
      minPay: Math.max(0, Number(d.minPay) || 0),
    }))
    .filter((d) => d.balance > 0);

  if (!list.length) return { months: 0, totalInterest: 0, order: [] };

  const order =
    method === 'snowball'
      ? [...list].sort((a, b) => a.balance - b.balance)
      : [...list].sort((a, b) => b.rate - a.rate);

  let balances = order.map((d) => ({ ...d }));
  let months = 0;
  let totalInterest = 0;
  const maxMonths = 600;
  let extraPool = Math.max(0, Number(extra) || 0);

  while (balances.some((d) => d.balance > 0.5) && months < maxMonths) {
    months += 1;
    // interest
    for (const d of balances) {
      if (d.balance <= 0) continue;
      const interest = d.balance * d.rate;
      d.balance += interest;
      totalInterest += interest;
    }
    // minimums
    let availableExtra = extraPool;
    for (const d of balances) {
      if (d.balance <= 0) continue;
      const pay = Math.min(d.minPay, d.balance);
      d.balance -= pay;
      if (d.balance < 0) d.balance = 0;
    }
    // extra to target debt (first with balance in order)
    const target = balances.find((d) => d.balance > 0.5);
    if (target && availableExtra > 0) {
      const pay = Math.min(availableExtra, target.balance);
      target.balance -= pay;
      availableExtra -= pay;
    }
    // freed minimums become extra next month — approximate by rolling min of paid-off into extraPool
    const stillOwed = balances.filter((d) => d.balance > 0.5);
    const freed = order
      .filter((o) => !stillOwed.find((s) => s.id === o.id))
      .reduce((s, d) => s + d.minPay, 0);
    // only count freed once: track paid off
    extraPool = Math.max(0, Number(extra) || 0) + balances.filter((d) => d.balance <= 0.5).reduce((s, d) => {
      const orig = order.find((o) => o.id === d.id);
      return s + (orig ? orig.minPay : 0);
    }, 0);
  }

  return {
    months,
    totalInterest,
    order: order.map((d) => d.name),
  };
}

export default function DebtPayoffCalculator() {
  const [debts, setDebts] = useState(DEFAULT_DEBTS);
  const [extra, setExtra] = useState(200);
  const [method, setMethod] = useState('avalanche');

  const result = useMemo(() => simulate(debts, extra, method), [debts, extra, method]);

  const update = (id, field, value) => {
    setDebts((prev) => prev.map((d) => (d.id === id ? { ...d, [field]: value } : d)));
  };

  const inputClass =
    'w-full rounded-lg border border-gray-200 px-2.5 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/40';

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-8">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Debt payoff planner</h2>
      <p className="text-sm text-gray-600 mb-6">
        Compare snowball (smallest balance first) vs avalanche (highest rate first). Extra monthly payment accelerates freedom.
      </p>

      <div className="flex gap-2 mb-5">
        <button
          type="button"
          onClick={() => setMethod('avalanche')}
          className={`px-4 py-2 rounded-xl text-sm font-medium ${method === 'avalanche' ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-700'}`}
        >
          Avalanche (rate)
        </button>
        <button
          type="button"
          onClick={() => setMethod('snowball')}
          className={`px-4 py-2 rounded-xl text-sm font-medium ${method === 'snowball' ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-700'}`}
        >
          Snowball (balance)
        </button>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Extra toward debt ($ / month)</label>
        <input type="number" min={0} step={25} value={extra} onChange={(e) => setExtra(Number(e.target.value))} className={inputClass + ' max-w-xs'} />
      </div>

      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500 border-b">
              <th className="py-2 pr-2">Name</th>
              <th className="py-2 pr-2">Balance</th>
              <th className="py-2 pr-2">APR %</th>
              <th className="py-2">Min pay</th>
            </tr>
          </thead>
          <tbody>
            {debts.map((d) => (
              <tr key={d.id} className="border-b border-gray-50">
                <td className="py-2 pr-2">
                  <input className={inputClass} value={d.name} onChange={(e) => update(d.id, 'name', e.target.value)} />
                </td>
                <td className="py-2 pr-2">
                  <input type="number" className={inputClass} value={d.balance} onChange={(e) => update(d.id, 'balance', Number(e.target.value))} />
                </td>
                <td className="py-2 pr-2">
                  <input type="number" className={inputClass} value={d.rate} onChange={(e) => update(d.id, 'rate', Number(e.target.value))} />
                </td>
                <td className="py-2">
                  <input type="number" className={inputClass} value={d.minPay} onChange={(e) => update(d.id, 'minPay', Number(e.target.value))} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
        <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-4">
          <p className="text-xs font-semibold uppercase text-emerald-700 mb-1">Months to debt-free</p>
          <p className="text-2xl font-bold text-gray-900">{result.months}</p>
          <p className="text-xs text-gray-500">{(result.months / 12).toFixed(1)} years</p>
        </div>
        <div className="rounded-xl bg-gray-50 border border-gray-100 p-4">
          <p className="text-xs font-semibold uppercase text-gray-500 mb-1">Est. total interest</p>
          <p className="text-2xl font-bold text-gray-900">{money(result.totalInterest)}</p>
        </div>
        <div className="rounded-xl bg-gray-50 border border-gray-100 p-4">
          <p className="text-xs font-semibold uppercase text-gray-500 mb-1">Pay order</p>
          <p className="text-sm font-medium text-gray-900">{result.order.join(' → ') || '—'}</p>
        </div>
      </div>

      <p className="text-xs text-gray-500">Illustrative amortization. Minimum payments and rates should match your statements.</p>
      <SoftSellNudge
        pool="investing"
        slot={4}
        hint="After high-interest debt is gone, the same extra payment can fund long-term investments."
      />
    </div>
  );
}
