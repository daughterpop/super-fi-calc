import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Gift } from 'lucide-react';

function money(n) {
  if (!Number.isFinite(n)) return '—';
  return n.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  });
}

function moneyExact(n) {
  if (!Number.isFinite(n)) return '—';
  return n.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  });
}

export default function BonusValueCalculator() {
  const [bonusType, setBonusType] = useState('card');
  const [bonusValue, setBonusValue] = useState(250);
  const [requiredSpend, setRequiredSpend] = useState(5000);
  const [months, setMonths] = useState(6);
  const [normalMonthlySpend, setNormalMonthlySpend] = useState(800);
  const [annualFee, setAnnualFee] = useState(0);
  const [ongoingCashbackPct, setOngoingCashbackPct] = useState(2);
  const [year1OtherSpend, setYear1OtherSpend] = useState(12000);

  const result = useMemo(() => {
    const bonus = Math.max(0, Number(bonusValue) || 0);
    const req = Math.max(0, Number(requiredSpend) || 0);
    const windowMonths = Math.max(1, Number(months) || 1);
    const normal = Math.max(0, Number(normalMonthlySpend) || 0);
    const fee = Math.max(0, Number(annualFee) || 0);
    const cb = Math.max(0, Number(ongoingCashbackPct) || 0) / 100;
    const other = Math.max(0, Number(year1OtherSpend) || 0);

    const organicSpendInWindow = normal * windowMonths;
    const manufacturedOrExtra = Math.max(0, req - organicSpendInWindow);
    const organicTowardBonus = Math.min(req, organicSpendInWindow);

    // Year-1 rewards: bonus + cash back on organic portion of required spend + other spend
    // (extra manufactured spend is treated as break-even on goods, not "profit")
    const cashbackOnOrganic = organicTowardBonus * cb;
    const cashbackOnOther = other * cb;
    const grossYear1 = bonus + cashbackOnOrganic + cashbackOnOther;
    const netYear1 = grossYear1 - fee;

    // Effective hourly value if family has to force spend / research — soft metric
    const forced = manufacturedOrExtra;
    const meetsNaturally = manufacturedOrExtra <= 0;

    return {
      organicSpendInWindow,
      manufacturedOrExtra,
      meetsNaturally,
      cashbackOnOrganic,
      cashbackOnOther,
      grossYear1,
      netYear1,
      forced,
      requiredMonthlyPace: req / windowMonths,
    };
  }, [
    bonusValue,
    requiredSpend,
    months,
    normalMonthlySpend,
    annualFee,
    ongoingCashbackPct,
    year1OtherSpend,
  ]);

  const inputClass =
    'w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-400';
  const labelClass = 'block text-sm font-medium text-gray-700 mb-1.5';

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-8">
      <div className="flex items-center gap-2 mb-2">
        <Gift className="text-emerald-600" size={22} />
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Bonus value calculator</h2>
      </div>
      <p className="text-sm text-gray-600 mb-6 max-w-2xl">
        Credit-card and bank bonuses only help FI if you meet the spend with purchases you already needed — and pay the
        balance in full. This tool shows net year-one value after fees and whether the required spend fits your normal
        budget.
      </p>

      <div className="flex gap-2 mb-6">
        <button
          type="button"
          onClick={() => {
            setBonusType('card');
            setBonusValue(250);
            setRequiredSpend(5000);
            setMonths(6);
            setAnnualFee(0);
            setOngoingCashbackPct(2);
          }}
          className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
            bonusType === 'card'
              ? 'bg-emerald-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Card welcome bonus
        </button>
        <button
          type="button"
          onClick={() => {
            setBonusType('bank');
            setBonusValue(300);
            setRequiredSpend(0);
            setMonths(1);
            setAnnualFee(0);
            setOngoingCashbackPct(0);
            setYear1OtherSpend(0);
          }}
          className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
            bonusType === 'bank'
              ? 'bg-emerald-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Bank / deposit bonus
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label className={labelClass}>Bonus value ($)</label>
          <input
            type="number"
            min={0}
            step={25}
            value={bonusValue}
            onChange={(e) => setBonusValue(Number(e.target.value))}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>
            {bonusType === 'card' ? 'Required spend ($)' : 'Minimum deposit / activity ($)'}
          </label>
          <input
            type="number"
            min={0}
            step={100}
            value={requiredSpend}
            onChange={(e) => setRequiredSpend(Number(e.target.value))}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Window (months)</label>
          <input
            type="number"
            min={1}
            max={24}
            step={1}
            value={months}
            onChange={(e) => setMonths(Number(e.target.value))}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Your normal spend / month in those categories ($)</label>
          <input
            type="number"
            min={0}
            step={50}
            value={normalMonthlySpend}
            onChange={(e) => setNormalMonthlySpend(Number(e.target.value))}
            className={inputClass}
          />
        </div>
        {bonusType === 'card' && (
          <>
            <div>
              <label className={labelClass}>Annual fee ($)</label>
              <input
                type="number"
                min={0}
                step={25}
                value={annualFee}
                onChange={(e) => setAnnualFee(Number(e.target.value))}
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Ongoing rewards rate (%)</label>
              <input
                type="number"
                min={0}
                step={0.25}
                value={ongoingCashbackPct}
                onChange={(e) => setOngoingCashbackPct(Number(e.target.value))}
                className={inputClass}
              />
            </div>
            <div className="sm:col-span-2">
              <label className={labelClass}>
                Other year-1 spend on this card beyond the bonus window ($)
              </label>
              <input
                type="number"
                min={0}
                step={500}
                value={year1OtherSpend}
                onChange={(e) => setYear1OtherSpend(Number(e.target.value))}
                className={inputClass}
              />
            </div>
          </>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700 mb-1">Net year-1 value</p>
          <p className="text-2xl font-bold text-gray-900">{moneyExact(result.netYear1)}</p>
          <p className="text-xs text-gray-500 mt-1">Bonus + rewards − fee</p>
        </div>
        <div className="rounded-xl bg-gray-50 border border-gray-100 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">Pace to hit spend</p>
          <p className="text-2xl font-bold text-gray-900">{money(result.requiredMonthlyPace)}</p>
          <p className="text-xs text-gray-500 mt-1">Per month in the window</p>
        </div>
        <div className="rounded-xl bg-gray-50 border border-gray-100 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">Extra spend needed</p>
          <p className="text-2xl font-bold text-gray-900">{money(result.manufacturedOrExtra)}</p>
          <p className="text-xs text-gray-500 mt-1">
            {result.meetsNaturally ? 'Fits normal spending' : 'Above your usual budget'}
          </p>
        </div>
      </div>

      <div
        className={`rounded-xl border p-4 mb-6 ${
          result.meetsNaturally
            ? 'border-emerald-200 bg-emerald-50/50'
            : 'border-amber-200 bg-amber-50/60'
        }`}
      >
        <p className="text-sm font-semibold text-gray-900 mb-1">Stewardship check</p>
        {result.meetsNaturally ? (
          <p className="text-sm text-gray-700">
            Your normal category spend covers the requirement. The bonus is closer to true surplus — still pay the
            statement in full.
          </p>
        ) : (
          <p className="text-sm text-gray-700">
            You would need about <strong>{money(result.manufacturedOrExtra)}</strong> in extra purchases to hit the
            bonus. Only chase that if those buys were already on the family list (tuition, groceries, planned vehicle
            costs). Manufactured spend is not FI progress.
          </p>
        )}
      </div>

      <p className="text-xs text-gray-500 mb-4">
        Illustrative only. Issuer terms, category exclusions, and tax treatment of bonuses vary. Prefer no-interest
        carryover — rewards never beat revolving balances.
      </p>

      <p className="text-sm text-gray-600">
        Compare real card and bank offers on the{' '}
        <Link to="/tools" className="text-emerald-700 font-medium underline-offset-2 hover:underline">
          Tools page
        </Link>
        , and stack everyday purchases with the{' '}
        <Link
          to="/blog/triple-savings-online-purchases"
          className="text-emerald-700 font-medium underline-offset-2 hover:underline"
        >
          Triple Savings guide
        </Link>
        .
      </p>
    </div>
  );
}
