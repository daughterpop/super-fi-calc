import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Check, Home, GraduationCap, DollarSign, Sparkles, Share2 } from 'lucide-react';

function formatCompact(n) {
  if (!Number.isFinite(n)) return '—';
  const sign = n < 0 ? '-' : '';
  const v = Math.abs(n);
  if (v >= 1000000) {
    const m = v / 1000000;
    return `${sign}$${m >= 10 ? m.toFixed(1) : m.toFixed(2)}M`;
  }
  if (v >= 1000) return `${sign}$${Math.round(v / 1000).toLocaleString('en-US')}k`;
  return `${sign}$${Math.round(v).toLocaleString('en-US')}`;
}

function parseMoney(raw) {
  const cleaned = String(raw).replace(/[^0-9.]/g, '');
  if (cleaned === '' || cleaned === '.') return 0;
  const n = Number(cleaned);
  return Number.isFinite(n) ? n : 0;
}

function formatMoneyInput(n) {
  if (!Number.isFinite(n)) return '';
  const [intPart, decPart] = String(n).split('.');
  const grouped = Number(intPart).toLocaleString('en-US');
  return decPart != null && decPart !== '' ? `${grouped}.${decPart}` : grouped;
}

function MoneyField({ value, onChange, className, id, ariaLabel }) {
  const [focused, setFocused] = React.useState(false);
  const [draft, setDraft] = React.useState('');
  const display = focused ? draft : formatMoneyInput(value);
  return (
    <input id={id} type="text" inputMode="decimal" autoComplete="off" enterKeyHint="done" aria-label={ariaLabel} value={display}
      onFocus={() => { setDraft(value === 0 ? '' : String(value)); setFocused(true); }}
      onBlur={() => { onChange(parseMoney(draft)); setFocused(false); }}
      onChange={(e) => { setDraft(e.target.value); onChange(parseMoney(e.target.value)); }}
      className={className} />
  );
}

const mc = 'w-full pl-8 pr-4 py-3 text-base border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none';

export default function SuperFiCalculator() {
  const [searchParams] = useSearchParams();
  const [step, setStep] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const wizardRef = useRef(null);
  const skipWizardScroll = useRef(true);
  const [annualExpenses, setAnnualExpenses] = useState(90000);
  const [currentAge, setCurrentAge] = useState(37);
  const [currentSavings, setCurrentSavings] = useState(1350000);
  const [annualSavings, setAnnualSavings] = useState(46200);
  const [rateOfReturn, setRateOfReturn] = useState(10);
  const [inflationRate, setInflationRate] = useState(3);
  const [hasMortgage, setHasMortgage] = useState(true);
  const [mortgageBalance, setMortgageBalance] = useState(334000);
  const [mortgageRate, setMortgageRate] = useState(3.25);
  const [monthlyPayment, setMonthlyPayment] = useState(1657);
  const [payingForCollege, setPayingForCollege] = useState(true);
  const [kids, setKids] = useState([
    { id: 1, age: 11, annualTuition: 46000 }, { id: 2, age: 10, annualTuition: 46000 },
    { id: 3, age: 7, annualTuition: 46000 }, { id: 4, age: 5, annualTuition: 46000 },
    { id: 5, age: 1, annualTuition: 46000 }, { id: 6, age: 1, annualTuition: 46000 }
  ]);
  const [buyingVehicle, setBuyingVehicle] = useState(true);
  const [vehicles, setVehicles] = useState([{ id: 1, amount: 50000, year: 2027 }]);
  const [hasOtherExpenses, setHasOtherExpenses] = useState(false);
  const [otherExpenses, setOtherExpenses] = useState([]);

  useEffect(() => {
    const assetsParam = searchParams.get('assets');
    const surplusParam = searchParams.get('surplus');
    if (assetsParam != null && assetsParam !== '' && !Number.isNaN(Number(assetsParam))) setCurrentSavings(Number(assetsParam));
    if (surplusParam != null && surplusParam !== '' && !Number.isNaN(Number(surplusParam))) setAnnualSavings(Math.round(Number(surplusParam) * 12));
  }, [searchParams]);

  useEffect(() => {
    if (skipWizardScroll.current) { skipWizardScroll.current = false; return; }
    const el = wizardRef.current;
    const y = el ? el.getBoundingClientRect().top + window.scrollY - 80 : 0;
    window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
  }, [step, showResults]);

  const updateKid = (i, field, value) => { const n = [...kids]; n[i] = { ...n[i], [field]: value }; setKids(n); };
  const updateVehicle = (i, field, value) => { const n = [...vehicles]; n[i] = { ...n[i], [field]: value }; setVehicles(n); };
  const updateOtherExpense = (i, field, value) => { const n = [...otherExpenses]; n[i] = { ...n[i], [field]: value }; setOtherExpenses(n); };

  const calculateMortgageBalance = (yearsFromNow) => {
    if (!hasMortgage || mortgageBalance <= 0) return 0;
    const monthlyRate = mortgageRate / 100 / 12;
    let balance = mortgageBalance;
    for (let month = 0; month < yearsFromNow * 12; month++) {
      balance -= monthlyPayment - balance * monthlyRate;
      if (balance <= 0) return 0;
    }
    return Math.max(0, balance);
  };

  const results = useMemo(() => {
    const currentYear = new Date().getFullYear();
    const fiNumber = annualExpenses * 25;
    let projectedBalance = currentSavings;
    let yearsFIReached = null;
    const projections = [];
    const collegeExpensesByYear = {};
    if (payingForCollege) {
      kids.forEach((kid) => {
        const yearsUntilCollege = 18 - kid.age;
        if (yearsUntilCollege > 0 && kid.annualTuition > 0) {
          for (let i = 0; i < 4; i++) {
            const year = currentYear + yearsUntilCollege + i;
            const yearsFromNow = yearsUntilCollege + i;
            collegeExpensesByYear[year] = (collegeExpensesByYear[year] || 0) + kid.annualTuition * Math.pow(1 + inflationRate / 100, yearsFromNow);
          }
        }
      });
    }
    const expensesByYear = {};
    if (buyingVehicle) vehicles.forEach((v) => { if (v.amount > 0) expensesByYear[v.year] = (expensesByYear[v.year] || 0) + v.amount; });
    if (hasOtherExpenses) otherExpenses.forEach((e) => { if (e.amount > 0) expensesByYear[e.year] = (expensesByYear[e.year] || 0) + e.amount; });
    for (let year = 0; year < 50; year++) {
      const actualYear = currentYear + year;
      const collegeExpense = collegeExpensesByYear[actualYear] || 0;
      const plannedExpense = expensesByYear[actualYear] || 0;
      projectedBalance = projectedBalance * (1 + rateOfReturn / 100) + annualSavings * Math.pow(1 + inflationRate / 100, year) - collegeExpense - plannedExpense;
      const totalFINumber = fiNumber * Math.pow(1 + inflationRate / 100, year) + calculateMortgageBalance(year);
      projections.push({ year: actualYear, age: currentAge + year, balance: projectedBalance, collegeExpense, plannedExpense, totalFINumber });
      if (projectedBalance < 0) break;
    }
    for (let i = 0; i < projections.length; i++) {
      let ok = true;
      for (let j = i; j < projections.length; j++) { if (projections[j].balance < projections[j].totalFINumber) { ok = false; break; } }
      if (ok) { yearsFIReached = i; break; }
    }
    const currentMortgage = hasMortgage ? mortgageBalance : 0;
    const currentTotalFI = fiNumber + currentMortgage;
    const milestones = [
      { name: 'F-You Money', target: annualExpenses * 2, achieved: currentSavings >= annualExpenses * 2 },
      { name: 'Coast FI', target: fiNumber * 0.25, achieved: currentSavings >= fiNumber * 0.25 },
      { name: 'Half FI', target: fiNumber * 0.50, achieved: currentSavings >= fiNumber * 0.50 },
      { name: 'Lean FI', target: fiNumber * 0.65, achieved: currentSavings >= fiNumber * 0.65 },
      { name: 'Barista FI', target: fiNumber * 0.75, achieved: currentSavings >= fiNumber * 0.75 },
      { name: 'Flex FI', target: fiNumber * 0.85, achieved: currentSavings >= fiNumber * 0.85 },
      { name: 'Full FI', target: currentTotalFI, achieved: currentSavings >= currentTotalFI },
      { name: 'Fat FI', target: fiNumber * 1.5 + currentMortgage, achieved: currentSavings >= fiNumber * 1.5 + currentMortgage }
    ];
    return { fiProgress: Math.min((currentSavings / currentTotalFI) * 100, 100), yearsFIReached, fiAge: yearsFIReached != null ? currentAge + yearsFIReached : null, projections, currentTotalFI, milestones, fiNumber };
  }, [annualExpenses, currentAge, currentSavings, annualSavings, rateOfReturn, inflationRate, hasMortgage, mortgageBalance, mortgageRate, monthlyPayment, payingForCollege, kids, buyingVehicle, vehicles, hasOtherExpenses, otherExpenses]);

  const steps = [{ title: 'Your Finances', icon: DollarSign }, { title: 'Mortgage', icon: Home }, { title: 'Children', icon: GraduationCap }, { title: 'Large Expenses', icon: Sparkles }];
  const nextStep = () => { if (step < 3) setStep(step + 1); else setShowResults(true); };

  const handleShareLegacy = () => {
    const text = `My Stewardship Legacy: By God's grace, I will reach Financial Independence at age ${results.fiAge || 'XX'}. "Well done, good and faithful servant!" - Matthew 25:21. Join me on this journey of faithful family wealth building at viafidelitatis.com`;
    if (navigator.share) navigator.share({ title: 'My Catholic FI Stewardship Legacy', text });
    else { navigator.clipboard.writeText(text); alert('Legacy copied to clipboard! Share it with your family.'); }
  };

  if (showResults) {
    return (
      <div className="w-full" ref={wizardRef}>
        <div className="max-w-6xl mx-auto">
          <button onClick={() => setShowResults(false)} className="mb-4 flex items-center gap-2 text-sm text-gray-600"><ArrowLeft size={16} /> Edit Inputs</button>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <div className="text-sm text-gray-500 mb-2">FI Progress</div>
              <div className="text-3xl font-bold text-emerald-700 mb-3">{results.fiProgress.toFixed(1)}%</div>
              <div className="w-full bg-gray-100 rounded-full h-2"><div className="bg-emerald-600 h-2 rounded-full" style={{ width: `${Math.min(results.fiProgress, 100)}%` }} /></div>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <div className="text-sm text-gray-500 mb-2">Total investments</div>
              <div className="text-2xl font-bold">{formatCompact(currentSavings)}</div>
              <div className="text-xs text-gray-500">House excluded. Target: {formatCompact(results.currentTotalFI)}</div>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <div className="text-sm text-gray-500 mb-2">Time to FI</div>
              <div className="text-2xl font-bold text-green-600">{results.yearsFIReached != null ? `${results.yearsFIReached} years` : '50+ years'}</div>
              {results.fiAge && <div className="text-xs text-gray-500 mt-1">At age {results.fiAge}</div>}
            </div>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 text-center mb-4 max-w-2xl mx-auto">FI uses total investments only — not net worth. The house is assumed kept. Remaining mortgage is added to the FI target (annual expenses × 25 + mortgage left), not counted as an asset. “Time to FI” is the first year the projected portfolio stays above that inflation-adjusted target every year afterward.</p>
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-4">
            <h3 className="text-lg font-semibold mb-4">FI Milestones</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {results.milestones.map((m, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${m.achieved ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>{m.achieved ? <Check size={16} /> : <div className="w-2 h-2 rounded-full bg-gray-300" />}</div>
                  <div className="min-w-0"><div className={`text-sm font-medium truncate ${m.achieved ? 'text-gray-900' : 'text-gray-400'}`}>{m.name}</div><div className="text-xs text-gray-500">{formatCompact(m.target)}</div></div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-3xl p-5 mb-6">
            <h3 className="text-xl font-bold text-amber-900 mb-2">Your Stewardship Legacy</h3>
            <p className="italic text-amber-800 mb-3">"Well done, good and faithful servant. You have been faithful with a few things; I will put you in charge of many things." — Matthew 25:21</p>
            <p className="text-sm text-amber-700 mb-4">By God's grace, you are on track to achieve Financial Independence at age <span className="font-semibold">{results.fiAge || 'XX'}</span>. This is a sacred legacy of stewardship — providing for your family, supporting the Church, and advancing the Kingdom.</p>
            <button onClick={handleShareLegacy} className="w-full flex items-center justify-center gap-2 bg-amber-600 text-white font-semibold py-3 rounded-2xl"><Share2 size={18} /> Bless & Share This Legacy</button>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="p-4 border-b"><h3 className="font-semibold">Projection Timeline</h3></div>
            <div className="overflow-x-auto"><table className="w-full min-w-[540px] text-sm">
              <thead className="bg-gray-50 text-xs uppercase text-gray-500"><tr><th className="px-3 py-3 text-left">Year</th><th className="px-3 py-3 text-left">Age</th><th className="px-3 py-3 text-right">Balance</th><th className="px-3 py-3 text-right">FI Target</th><th className="px-3 py-3 text-right">College</th><th className="px-3 py-3 text-center">Status</th></tr></thead>
              <tbody className="divide-y">
                {results.projections.slice(0, 25).map((p, idx) => (
                  <tr key={idx}>
                    <td className="px-3 py-3">{p.year}</td><td className="px-3 py-3 text-gray-600">{p.age}</td>
                    <td className="px-3 py-3 text-right font-semibold">{formatCompact(p.balance)}</td>
                    <td className="px-3 py-3 text-right text-emerald-600">{formatCompact(p.totalFINumber)}</td>
                    <td className="px-3 py-3 text-right text-orange-600">{p.collegeExpense > 0 ? `−${formatCompact(p.collegeExpense)}` : '-'}</td>
                    <td className="px-3 py-3 text-center">{p.balance >= p.totalFINumber ? <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">FI ✓</span> : '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center" ref={wizardRef}>
      <div className="w-full max-w-2xl">
        <div className="flex justify-center mb-6 overflow-x-auto">
          <div className="flex items-center gap-2">
            {steps.map((s, idx) => (
              <React.Fragment key={idx}>
                <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full shrink-0 ${idx === step ? 'bg-emerald-600 text-white' : idx < step ? 'bg-white text-emerald-600 border border-emerald-200' : 'bg-white text-gray-400 border'}`}>
                  {idx < step ? <Check size={14} /> : <s.icon size={14} />}
                  <span className="text-sm font-medium hidden sm:inline">{s.title}</span>
                </div>
                {idx < 3 && <div className={`w-6 h-0.5 ${idx < step ? 'bg-emerald-600' : 'bg-gray-200'}`} />}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-5 sm:p-8">
          {step === 0 && (
            <div className="space-y-5">
              <h2 className="text-xl font-bold">Tell us about your finances</h2>
              <p className="text-sm text-gray-500">Starter example for a large household. Replace every figure with yours before you trust the timeline.</p>
              <div>
                <label htmlFor="fi-annual-expenses" className="block text-sm font-semibold mb-2">Annual Expenses <span className="text-gray-500 font-normal text-xs">(in today's dollars)</span></label>
                <div className="relative"><span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                  <MoneyField id="fi-annual-expenses" ariaLabel="Annual expenses" value={annualExpenses} onChange={setAnnualExpenses} className={mc} /></div>
                <p className="text-sm text-gray-500 mt-2">FI Target: ${(annualExpenses * 25).toLocaleString()}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div><label className="block text-sm font-semibold mb-2">Your Age</label>
                  <input type="number" inputMode="numeric" value={currentAge} onChange={(e) => setCurrentAge(parseInt(e.target.value) || 0)} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl" /></div>
                <div><label htmlFor="fi-current-savings" className="block text-sm font-semibold mb-2">Total investments</label>
                  <div className="relative"><span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                    <MoneyField id="fi-current-savings" ariaLabel="Total investments" value={currentSavings} onChange={setCurrentSavings} className={mc} /></div>
                  <p className="text-xs text-gray-500 mt-1">{formatCompact(currentSavings)} invested today — exclude house equity</p></div>
              </div>
              <div><label htmlFor="fi-annual-savings" className="block text-sm font-semibold mb-2">Annual Savings</label>
                <div className="relative"><span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                  <MoneyField id="fi-annual-savings" ariaLabel="Annual savings" value={annualSavings} onChange={setAnnualSavings} className={mc} /></div>
                <p className="text-xs text-gray-500 mt-2">Increases with inflation automatically</p></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div><label className="block text-sm font-semibold mb-2">Expected Rate of Return</label>
                  <div className="relative"><input type="number" step="0.1" value={rateOfReturn} onChange={(e) => setRateOfReturn(parseFloat(e.target.value) || 0)} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl" /><span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">%</span></div></div>
                <div><label className="block text-sm font-semibold mb-2">Inflation Rate</label>
                  <div className="relative"><input type="number" step="0.1" value={inflationRate} onChange={(e) => setInflationRate(parseFloat(e.target.value) || 0)} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl" /><span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">%</span></div></div>
              </div>
            </div>
          )}
          {step === 1 && (
            <div className="space-y-5">
              <h2 className="text-xl font-bold">Mortgage Information</h2>
              <label className="flex items-center gap-3"><input type="checkbox" checked={hasMortgage} onChange={(e) => setHasMortgage(e.target.checked)} className="w-5 h-5" /><span className="font-medium">I have a mortgage</span></label>
              {hasMortgage && (<><div><label htmlFor="fi-mortgage-balance" className="block text-sm font-semibold mb-2">Current Balance</label>
                <div className="relative"><span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                  <MoneyField id="fi-mortgage-balance" ariaLabel="Mortgage balance" value={mortgageBalance} onChange={setMortgageBalance} className={mc} /></div></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div><label className="block text-sm font-semibold mb-2">Interest Rate</label>
                    <div className="relative"><input type="number" step="0.01" value={mortgageRate} onChange={(e) => setMortgageRate(parseFloat(e.target.value) || 0)} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl" /><span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">%</span></div></div>
                  <div><label htmlFor="fi-monthly-payment" className="block text-sm font-semibold mb-2">Monthly Payment</label>
                    <div className="relative"><span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                      <MoneyField id="fi-monthly-payment" ariaLabel="Monthly payment" value={monthlyPayment} onChange={setMonthlyPayment} className={mc} /></div></div>
                </div></>)}
            </div>
          )}
          {step === 2 && (
            <div className="space-y-5">
              <h2 className="text-xl font-bold">Children & College</h2>
              <p className="text-sm text-gray-500">Sample children are pre-filled. Remove any that aren’t yours, or uncheck college if you are not paying tuition.</p>
              <label className="flex items-center gap-3 p-3 border-2 rounded-xl"><input type="checkbox" checked={payingForCollege} onChange={(e) => setPayingForCollege(e.target.checked)} className="w-5 h-5" /><span className="font-medium">I'm paying for my children's college</span></label>
              {payingForCollege && (<>
                <div className="flex justify-between"><span className="text-sm text-gray-600">How many children?</span><button onClick={() => setKids([...kids, { id: Date.now(), age: 0, annualTuition: 46000 }])} className="text-sm text-emerald-600 font-medium">+ Add Child</button></div>
                {kids.map((kid, idx) => (
                  <div key={kid.id} className="p-3 border-2 border-gray-100 rounded-xl space-y-3">
                    <div className="flex justify-between"><span className="text-sm font-semibold">Child {idx + 1}</span>{kids.length > 1 && <button onClick={() => setKids(kids.filter((_, i) => i !== idx))} className="text-sm text-red-600">Remove</button>}</div>
                    <div className="grid grid-cols-2 gap-3">
                      <div><label className="text-xs text-gray-600">Age</label><input type="number" value={kid.age} onChange={(e) => updateKid(idx, 'age', parseInt(e.target.value) || 0)} className="w-full px-3 py-2 border-2 rounded-lg" /></div>
                      <div><label className="text-xs text-gray-600">Annual Tuition</label><div className="relative"><span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                        <MoneyField ariaLabel={`Child ${idx + 1} tuition`} value={kid.annualTuition} onChange={(n) => updateKid(idx, 'annualTuition', n)} className="w-full pl-7 pr-3 py-2 border-2 rounded-lg" /></div></div>
                    </div>
                    <p className="text-xs text-gray-500">College in {Math.max(0, 18 - kid.age)} years • 4-year total: ${(kid.annualTuition * 4).toLocaleString()}</p>
                  </div>
                ))}
              </>)}
            </div>
          )}
          {step === 3 && (
            <div className="space-y-5">
              <h2 className="text-xl font-bold">Large Planned Expenses</h2>
              <label className="flex items-center gap-3 p-3 border-2 rounded-xl"><input type="checkbox" checked={buyingVehicle} onChange={(e) => setBuyingVehicle(e.target.checked)} className="w-5 h-5" /><span className="font-medium">Vehicle purchase(s)</span></label>
              {buyingVehicle && (<>
                <div className="flex justify-between"><span className="text-sm text-gray-600">Plan to buy vehicle(s)?</span><button onClick={() => setVehicles([...vehicles, { id: Date.now(), amount: 50000, year: new Date().getFullYear() + 1 }])} className="text-sm text-emerald-600 font-medium">+ Add Vehicle</button></div>
                {vehicles.map((v, idx) => (
                  <div key={v.id} className="p-3 border-2 border-gray-100 rounded-xl space-y-3">
                    <div className="flex justify-between"><span className="text-sm font-semibold">Vehicle {idx + 1}</span>{vehicles.length > 1 && <button onClick={() => setVehicles(vehicles.filter((_, i) => i !== idx))} className="text-sm text-red-600">Remove</button>}</div>
                    <div className="grid grid-cols-2 gap-3">
                      <div><label className="text-xs text-gray-600">Amount</label><div className="relative"><span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                        <MoneyField ariaLabel={`Vehicle ${idx + 1} amount`} value={v.amount} onChange={(n) => updateVehicle(idx, 'amount', n)} className="w-full pl-7 pr-3 py-2 border-2 rounded-lg" /></div></div>
                      <div><label className="text-xs text-gray-600">Year</label><input type="number" value={v.year} onChange={(e) => updateVehicle(idx, 'year', parseInt(e.target.value) || 0)} className="w-full px-3 py-2 border-2 rounded-lg" /></div>
                    </div>
                  </div>
                ))}
              </>)}
              <label className="flex items-center gap-3 p-3 border-2 rounded-xl"><input type="checkbox" checked={hasOtherExpenses} onChange={(e) => setHasOtherExpenses(e.target.checked)} className="w-5 h-5" /><span className="font-medium">Other large expenses</span></label>
              {hasOtherExpenses && (<>
                <div className="flex justify-between"><span className="text-sm text-gray-600">Add your planned expenses</span><button onClick={() => setOtherExpenses([...otherExpenses, { id: Date.now(), name: '', amount: 0, year: new Date().getFullYear() + 1 }])} className="text-sm text-emerald-600 font-medium">+ Add Expense</button></div>
                {otherExpenses.map((ex, idx) => (
                  <div key={ex.id} className="p-3 border-2 border-gray-100 rounded-xl space-y-3">
                    <div className="flex justify-between gap-2"><input type="text" value={ex.name} onChange={(e) => updateOtherExpense(idx, 'name', e.target.value)} placeholder="Expense name" className="flex-1 text-sm font-semibold border-0" /><button onClick={() => setOtherExpenses(otherExpenses.filter((_, i) => i !== idx))} className="text-sm text-red-600">Remove</button></div>
                    <div className="grid grid-cols-2 gap-3">
                      <div><label className="text-xs text-gray-600">Amount</label><div className="relative"><span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                        <MoneyField ariaLabel="Other expense amount" value={ex.amount} onChange={(n) => updateOtherExpense(idx, 'amount', n)} className="w-full pl-7 pr-3 py-2 border-2 rounded-lg" /></div></div>
                      <div><label className="text-xs text-gray-600">Year</label><input type="number" value={ex.year} onChange={(e) => updateOtherExpense(idx, 'year', parseInt(e.target.value) || 0)} className="w-full px-3 py-2 border-2 rounded-lg" /></div>
                    </div>
                  </div>
                ))}
              </>)}
            </div>
          )}
          <div className="flex flex-col-reverse sm:flex-row gap-3 mt-6 pt-5 border-t">
            {step > 0 && <button onClick={() => setStep(step - 1)} className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 font-medium"><ArrowLeft size={20} /> Back</button>}
            <button onClick={nextStep} className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold">{step === 3 ? 'See Your Results' : 'Continue'} <ArrowRight size={20} /></button>
          </div>
        </div>
      </div>
    </div>
  );
}
