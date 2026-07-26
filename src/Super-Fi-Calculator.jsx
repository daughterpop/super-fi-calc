import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Check, TrendingUp, Home, GraduationCap, DollarSign, Sparkles, Share2, Heart, BookOpen, Wrench } from 'lucide-react';
import ReferralPromo from './components/ReferralPromo';

export default function SuperFiCalculator() {
  const [step, setStep] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  // Form data
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
    { id: 1, age: 11, annualTuition: 46000 },
    { id: 2, age: 10, annualTuition: 46000 },
    { id: 3, age: 7, annualTuition: 46000 },
    { id: 4, age: 5, annualTuition: 46000 },
    { id: 5, age: 1, annualTuition: 46000 },
    { id: 6, age: 1, annualTuition: 46000 }
  ]);

  const [buyingVehicle, setBuyingVehicle] = useState(true);
  const [vehicles, setVehicles] = useState([
    { id: 1, amount: 50000, year: 2027 }
  ]);

  const [hasOtherExpenses, setHasOtherExpenses] = useState(false);
  const [otherExpenses, setOtherExpenses] = useState([]);

  const updateVehicle = (index, field, value) => {
    const newVehicles = [...vehicles];
    newVehicles[index] = { ...newVehicles[index], [field]: value };
    setVehicles(newVehicles);
  };

  const addVehicle = () => {
    setVehicles([...vehicles, { id: Date.now(), amount: 50000, year: new Date().getFullYear() + 1 }]);
  };

  const removeVehicle = (index) => {
    setVehicles(vehicles.filter((_, i) => i !== index));
  };

  const updateKid = (index, field, value) => {
    const newKids = [...kids];
    newKids[index] = { ...newKids[index], [field]: value };
    setKids(newKids);
  };

  const addKid = () => {
    setKids([...kids, { id: Date.now(), age: 0, annualTuition: 46000 }]);
  };

  const removeKid = (index) => {
    setKids(kids.filter((_, i) => i !== index));
  };

  const updateOtherExpense = (index, field, value) => {
    const newExpenses = [...otherExpenses];
    newExpenses[index] = { ...newExpenses[index], [field]: value };
    setOtherExpenses(newExpenses);
  };

  const addOtherExpense = () => {
    setOtherExpenses([...otherExpenses, { id: Date.now(), name: '', amount: 0, year: new Date().getFullYear() + 1 }]);
  };

  const removeOtherExpense = (index) => {
    setOtherExpenses(otherExpenses.filter((_, i) => i !== index));
  };

  const calculateMortgageBalance = (yearsFromNow) => {
    if (!hasMortgage || mortgageBalance <= 0) return 0;

    const monthlyRate = mortgageRate / 100 / 12;
    const totalMonths = yearsFromNow * 12;
    let balance = mortgageBalance;

    for (let month = 0; month < totalMonths; month++) {
      const interest = balance * monthlyRate;
      const principal = monthlyPayment - interest;
      balance -= principal;
      if (balance <= 0) return 0;
    }

    return Math.max(0, balance);
  };

  const results = useMemo(() => {
    const currentYear = new Date().getFullYear();
    const fiNumber = annualExpenses * 25;
    let projectedBalance = currentSavings;
    let yearsFIReached = null;
    let projections = [];
    const collegeExpensesByYear = {};
    if (payingForCollege) {
      kids.forEach(kid => {
        const yearsUntilCollege = 18 - kid.age;
        if (yearsUntilCollege > 0 && kid.annualTuition > 0) {
          for (let i = 0; i < 4; i++) {
            const year = currentYear + yearsUntilCollege + i;
            const yearsFromNow = yearsUntilCollege + i;
            const inflationMultiplier = Math.pow(1 + inflationRate / 100, yearsFromNow);
            const adjustedCost = kid.annualTuition * inflationMultiplier;
            collegeExpensesByYear[year] = (collegeExpensesByYear[year] || 0) + adjustedCost;
          }
        }
      });
    }
    const expensesByYear = {};
    if (buyingVehicle) {
      vehicles.forEach(vehicle => {
        if (vehicle.amount > 0) {
          expensesByYear[vehicle.year] = (expensesByYear[vehicle.year] || 0) + vehicle.amount;
        }
      });
    }
    if (hasOtherExpenses) {
      otherExpenses.forEach(exp => {
        if (exp.amount > 0) {
          expensesByYear[exp.year] = (expensesByYear[exp.year] || 0) + exp.amount;
        }
      });
    }
    for (let year = 0; year < 50; year++) {
      const actualYear = currentYear + year;
      const collegeExpense = collegeExpensesByYear[actualYear] || 0;
      const plannedExpense = expensesByYear[actualYear] || 0;
      const totalYearExpense = collegeExpense + plannedExpense;
      const inflationAdjustedSavings = annualSavings * Math.pow(1 + inflationRate / 100, year);

      projectedBalance = projectedBalance * (1 + rateOfReturn / 100) + inflationAdjustedSavings - totalYearExpense;

      const inflationAdjustedFI = fiNumber * Math.pow(1 + inflationRate / 100, year);
      const remainingMortgage = calculateMortgageBalance(year);
      const totalFINumber = inflationAdjustedFI + remainingMortgage;
      projections.push({
        year: actualYear,
        age: currentAge + year,
        balance: projectedBalance,
        collegeExpense,
        plannedExpense,
        inflationAdjustedFI,
        remainingMortgage,
        totalFINumber
      });
      if (projectedBalance < 0) break;
    }
    for (let i = 0; i < projections.length; i++) {
      let allFutureYearsAboveFI = true;
      for (let j = i; j < projections.length; j++) {
        if (projections[j].balance < projections[j].totalFINumber) {
          allFutureYearsAboveFI = false;
          break;
        }
      }
      if (allFutureYearsAboveFI && yearsFIReached === null) {
        yearsFIReached = i;
        break;
      }
    }
    const currentMortgage = hasMortgage ? mortgageBalance : 0;
    const currentTotalFI = fiNumber + currentMortgage;
    const fiProgress = (currentSavings / currentTotalFI) * 100;
    const milestones = [
      { name: 'F-You Money', target: annualExpenses * 2, achieved: currentSavings >= annualExpenses * 2 },
      { name: 'Coast FI', target: fiNumber * 0.25, achieved: currentSavings >= fiNumber * 0.25 },
      { name: 'Half FI', target: fiNumber * 0.50, achieved: currentSavings >= fiNumber * 0.50 },
      { name: 'Lean FI', target: fiNumber * 0.65, achieved: currentSavings >= fiNumber * 0.65 },
      { name: 'Barista FI', target: fiNumber * 0.75, achieved: currentSavings >= fiNumber * 0.75 },
      { name: 'Flex FI', target: fiNumber * 0.85, achieved: currentSavings >= fiNumber * 0.85 },
      { name: 'Full FI', target: currentTotalFI, achieved: currentSavings >= currentTotalFI },
      { name: 'Fat FI', target: fiNumber * 1.5 + currentMortgage, achieved: currentSavings >= (fiNumber * 1.5 + currentMortgage) }
    ];
    return {
      fiProgress: Math.min(fiProgress, 100),
      yearsFIReached,
      fiAge: yearsFIReached !== null ? currentAge + yearsFIReached : null,
      projections,
      currentTotalFI,
      milestones,
      fiNumber
    };
  }, [annualExpenses, currentAge, currentSavings, annualSavings, rateOfReturn, inflationRate, hasMortgage, mortgageBalance, mortgageRate, monthlyPayment, payingForCollege, kids, buyingVehicle, vehicles, hasOtherExpenses, otherExpenses]);

  const steps = [
    { title: 'Your Finances', icon: DollarSign },
    { title: 'Mortgage', icon: Home },
    { title: 'Children', icon: GraduationCap },
    { title: 'Large Expenses', icon: Sparkles }
  ];

  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      if (email.includes('@')) {
        setShowResults(true);
      } else {
        alert('Please enter a valid email to see results');
      }
    }
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleShareLegacy = () => {
    const text = `My Stewardship Legacy: By God's grace, I will reach Financial Independence at age ${results.fiAge || 'XX'}. "Well done, good and faithful servant!" - Matthew 25:21. Join me on this journey of faithful family wealth building at super-fi-calculator.vercel.app`;
    if (navigator.share) {
      navigator.share({
        title: 'My Catholic FI Stewardship Legacy',
        text: text,
      });
    } else {
      navigator.clipboard.writeText(text);
      alert('Legacy copied to clipboard! Share it with your family.');
    }
  };

  const IntroSection = () => (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-4 sm:py-8 prose prose-slate dark:prose-invert">
      <h1 className="text-2xl sm:text-4xl font-bold text-center mb-3 sm:mb-4 leading-tight">Financial Independence Calculator</h1>
      <p className="text-base sm:text-xl text-center text-muted-foreground mb-6 sm:mb-8">
        Free tool to calculate your <strong>FI Number</strong> and see exactly when you can achieve financial independence.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-10 text-sm text-left">
        <div>
          <h2 className="text-base sm:text-lg font-semibold mb-2">How it works</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Enter your savings rate, expenses, and investment returns</li>
            <li>Watch real-time updates to your FI number and timeline</li>
            <li>Built with the 4% safe withdrawal rule</li>
          </ul>
        </div>
        <div>
          <h2 className="text-base sm:text-lg font-semibold mb-2">Popular searches</h2>
          <p className="text-muted-foreground text-sm">financial independence calculator • fi calculator • fire calculator • retire early tool • fi number calculator</p>
        </div>
      </div>
    </div>
  );

  if (showResults) {
    return (
      <div className="w-full">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => setShowResults(false)}
            className="mb-4 sm:mb-6 flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft size={16} />
            Edit Inputs
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100">
              <div className="text-sm font-medium text-gray-500 mb-2">FI Progress</div>
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-3">
                {results.fiProgress.toFixed(1)}%
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-indigo-600 to-blue-600 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${Math.min(results.fiProgress, 100)}%` }}
                />
              </div>
            </div>
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100">
              <div className="text-sm font-medium text-gray-500 mb-2">Current Savings</div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                ${(currentSavings / 1000000).toFixed(2)}M
              </div>
              <div className="text-xs text-gray-500">
                Target: ${(results.currentTotalFI / 1000000).toFixed(2)}M
              </div>
            </div>
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100">
              <div className="text-sm font-medium text-gray-500 mb-2">Time to FI</div>
              <div className="text-2xl sm:text-3xl font-bold text-green-600">
                {results.yearsFIReached !== null ? `${results.yearsFIReached} years` : 'Off track'}
              </div>
              {results.fiAge && (
                <div className="text-xs text-gray-500 mt-1">At age {results.fiAge}</div>
              )}
            </div>
          </div>

          {/* Compact next steps — right after the numbers */}
          <div className="bg-white border border-emerald-100 rounded-2xl p-4 sm:p-5 mb-4 sm:mb-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700 mb-3">What now?</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Link
                to="/blog/stewarding-your-familys-future-building-generational-wealth-through-faith-and-fi"
                className="flex items-start gap-2.5 p-3 rounded-xl bg-gray-50 hover:bg-emerald-50 border border-transparent hover:border-emerald-100 transition-colors group"
              >
                <BookOpen className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                <span className="text-sm text-gray-700 group-hover:text-emerald-800 leading-snug">
                  Read: Stewarding your family's future
                </span>
              </Link>
              <Link
                to="/blog/raising-faith-filled-kids-while-building-financial-freedom"
                className="flex items-start gap-2.5 p-3 rounded-xl bg-gray-50 hover:bg-emerald-50 border border-transparent hover:border-emerald-100 transition-colors group"
              >
                <BookOpen className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                <span className="text-sm text-gray-700 group-hover:text-emerald-800 leading-snug">
                  Read: Raising faith-filled kids on the path to FI
                </span>
              </Link>
              <Link
                to="/tools"
                className="flex items-start gap-2.5 p-3 rounded-xl bg-gray-50 hover:bg-emerald-50 border border-transparent hover:border-emerald-100 transition-colors group"
              >
                <Wrench className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                <span className="text-sm text-gray-700 group-hover:text-emerald-800 leading-snug">
                  Browse tools to put surplus to work
                </span>
              </Link>
            </div>
          </div>

          {/* Rotating investing referral */}
          <div className="mb-4 sm:mb-6 max-w-2xl">
            <ReferralPromo slot={5} pool="investing" />
          </div>

          <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100 mb-4 sm:mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">FI Milestones</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {results.milestones.map((milestone, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                  <div className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center ${
                    milestone.achieved ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                  }`}>
                    {milestone.achieved ? <Check size={16} /> : <div className="w-2 h-2 rounded-full bg-gray-300" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className={`text-sm font-medium truncate ${
                      milestone.achieved ? 'text-gray-900' : 'text-gray-400'
                    }`}>
                      {milestone.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      ${(milestone.target / 1000).toFixed(0)}k
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 via-white to-rose-50 border border-amber-200 rounded-3xl p-5 sm:p-8 mb-6 sm:mb-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 text-amber-300 opacity-60 pointer-events-none">
              <Heart size={36} className="sm:hidden" />
              <Heart size={48} className="hidden sm:block" />
            </div>
            <div className="flex items-center gap-3 mb-4 sm:mb-6 pr-10">
              <div className="w-10 h-10 shrink-0 bg-amber-100 rounded-2xl flex items-center justify-center">
                <Sparkles className="text-amber-600" size={22} />
              </div>
              <div className="min-w-0">
                <h3 className="text-xl sm:text-2xl font-bold text-amber-900 leading-tight">Your Stewardship Legacy</h3>
                <p className="text-amber-700 text-sm">A faithful reflection for your family</p>
              </div>
            </div>

            <div className="prose prose-amber max-w-none mb-6 sm:mb-8">
              <p className="text-base sm:text-lg italic leading-relaxed text-amber-800">
                "Well done, good and faithful servant. You have been faithful with a few things; I will put you in charge of many things." — Matthew 25:21
              </p>
              <p className="mt-4 sm:mt-6 text-sm sm:text-base text-amber-700">
                By God's grace, you are on track to achieve Financial Independence at age <span className="font-semibold text-amber-900">{results.fiAge || 'XX'}</span>. This is not merely wealth for comfort, but a sacred legacy of stewardship — providing for your family across generations, supporting the Church, and advancing the Kingdom. Invest wisely, teach your children diligence, and trust in Divine Providence.
              </p>
            </div>

            <button
              onClick={handleShareLegacy}
              className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-amber-600 to-rose-600 hover:from-amber-700 hover:to-rose-700 text-white font-semibold py-3.5 sm:py-4 px-6 sm:px-8 rounded-2xl transition-all shadow-lg active:scale-[0.985] text-sm sm:text-base"
            >
              <Share2 size={20} />
              Bless &amp; Share This Legacy
            </button>
            <p className="text-center text-amber-600 text-xs mt-3 sm:mt-4">Share with spouse, children, or parish community</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4 sm:p-6 border-b border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900">Projection Timeline</h3>
            </div>
            <div className="overflow-x-auto -mx-0">
              <table className="w-full min-w-[540px]">
                <thead className="bg-gray-50 text-xs uppercase text-gray-500">
                  <tr>
                    <th className="px-3 sm:px-4 py-3 text-left font-medium">Year</th>
                    <th className="px-3 sm:px-4 py-3 text-left font-medium">Age</th>
                    <th className="px-3 sm:px-4 py-3 text-right font-medium">Balance</th>
                    <th className="px-3 sm:px-4 py-3 text-right font-medium">FI Target</th>
                    <th className="px-3 sm:px-4 py-3 text-right font-medium">College</th>
                    <th className="px-3 sm:px-4 py-3 text-center font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {results.projections.slice(0, 25).map((proj, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition-colors">
                      <td className="px-3 sm:px-4 py-3 text-sm text-gray-900">{proj.year}</td>
                      <td className="px-3 sm:px-4 py-3 text-sm text-gray-600">{proj.age}</td>
                      <td className="px-3 sm:px-4 py-3 text-sm text-right font-semibold text-gray-900">
                        ${(proj.balance / 1000000).toFixed(2)}M
                      </td>
                      <td className="px-3 sm:px-4 py-3 text-sm text-right text-indigo-600">
                        ${(proj.totalFINumber / 1000000).toFixed(2)}M
                      </td>
                      <td className="px-3 sm:px-4 py-3 text-sm text-right text-orange-600">
                        {proj.collegeExpense > 0 ? `-$${(proj.collegeExpense / 1000).toFixed(0)}k` : '-'}
                      </td>
                      <td className="px-3 sm:px-4 py-3 text-center">
                        {proj.balance >= proj.totalFINumber ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            FI ✓
                          </span>
                        ) : (
                          <span className="text-gray-300">-</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center">
      <IntroSection />

      <div className="w-full max-w-2xl">
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white shadow-sm border border-gray-100 mb-3 sm:mb-4">
            <TrendingUp className="text-indigo-600" size={18} />
            <span className="text-xs sm:text-sm font-medium text-gray-700">Financial Independence Calculator</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">
            Plan Your Path to <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Financial Freedom</span>
          </h1>
          <p className="text-gray-600 text-sm sm:text-lg">Answer a few questions to see when you can achieve FI</p>
        </div>

        <div className="flex justify-center mb-6 sm:mb-8 overflow-x-auto">
          <div className="flex items-center gap-1.5 sm:gap-2">
            {steps.map((s, idx) => (
              <React.Fragment key={idx}>
                <div className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all shrink-0 ${
                  idx === step ? 'bg-indigo-600 text-white shadow-lg scale-105' :
                  idx < step ? 'bg-white text-indigo-600 border border-indigo-200' :
                  'bg-white text-gray-400 border border-gray-200'
                }`}>
                  {idx < step ? <Check size={14} /> : <s.icon size={14} />}
                  <span className="text-sm font-medium hidden sm:inline">{s.title}</span>
                </div>
                {idx < steps.length - 1 && (
                  <div className={`w-4 sm:w-8 h-0.5 shrink-0 ${idx < step ? 'bg-indigo-600' : 'bg-gray-200'}`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <ReferralPromo slot={4} pool="investing" />

        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 p-5 sm:p-8 md:p-10">
          {step === 0 && (
            <div className="space-y-5 sm:space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Tell us about your finances</h2>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Annual Expenses <span className="text-gray-500 font-normal text-xs">(in today's dollars)</span>
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    value={annualExpenses}
                    onChange={(e) => setAnnualExpenses(parseFloat(e.target.value) || 0)}
                    className="w-full pl-8 pr-4 py-3 sm:py-4 text-base sm:text-lg border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
                  />
                </div>
                <p className="text-sm text-gray-500 mt-2">FI Target: ${(annualExpenses * 25).toLocaleString()}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Your Age</label>
                  <input
                    type="number"
                    value={currentAge}
                    onChange={(e) => setCurrentAge(parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-3 sm:py-4 text-base sm:text-lg border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Current Savings</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      value={currentSavings}
                      onChange={(e) => setCurrentSavings(parseFloat(e.target.value) || 0)}
                      className="w-full pl-8 pr-4 py-3 sm:py-4 text-base sm:text-lg border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Annual Savings</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    value={annualSavings}
                    onChange={(e) => setAnnualSavings(parseFloat(e.target.value) || 0)}
                    className="w-full pl-8 pr-4 py-3 sm:py-4 text-base sm:text-lg border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2">Increases with inflation automatically</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Expected Rate of Return <span className="text-gray-500 font-normal text-xs">(before inflation)</span>
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      step="0.1"
                      value={rateOfReturn}
                      onChange={(e) => setRateOfReturn(parseFloat(e.target.value) || 0)}
                      className="w-full px-4 py-3 sm:py-4 text-base sm:text-lg border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">%</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Market avg: 10%</p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Inflation Rate</label>
                  <div className="relative">
                    <input
                      type="number"
                      step="0.1"
                      value={inflationRate}
                      onChange={(e) => setInflationRate(parseFloat(e.target.value) || 0)}
                      className="w-full px-4 py-3 sm:py-4 text-base sm:text-lg border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">%</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Historical: 3%</p>
                </div>
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-5 sm:space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Mortgage Information</h2>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasMortgage}
                  onChange={(e) => setHasMortgage(e.target.checked)}
                  className="w-5 h-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="text-base sm:text-lg font-medium text-gray-700">I have a mortgage</span>
              </label>

              {hasMortgage && (
                <>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Current Balance</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                      <input
                        type="number"
                        value={mortgageBalance}
                        onChange={(e) => setMortgageBalance(parseFloat(e.target.value) || 0)}
                        className="w-full pl-8 pr-4 py-3 sm:py-4 text-base sm:text-lg border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Interest Rate</label>
                      <div className="relative">
                        <input
                          type="number"
                          step="0.01"
                          value={mortgageRate}
                          onChange={(e) => setMortgageRate(parseFloat(e.target.value) || 0)}
                          className="w-full px-4 py-3 sm:py-4 text-base sm:text-lg border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">%</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Monthly Payment</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                        <input
                          type="number"
                          value={monthlyPayment}
                          onChange={(e) => setMonthlyPayment(parseFloat(e.target.value) || 0)}
                          className="w-full pl-8 pr-4 py-3 sm:py-4 text-base sm:text-lg border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5 sm:space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Children &amp; College</h2>

              <label className="flex items-start sm:items-center gap-3 cursor-pointer p-3 sm:p-4 border-2 border-gray-200 rounded-xl hover:border-indigo-300 transition-colors">
                <input
                  type="checkbox"
                  checked={payingForCollege}
                  onChange={(e) => setPayingForCollege(e.target.checked)}
                  className="w-5 h-5 mt-0.5 sm:mt-0 shrink-0 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="text-base sm:text-lg font-medium text-gray-700">I'm paying for my children's college</span>
              </label>

              {payingForCollege && (
                <>
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-sm text-gray-600">How many children?</span>
                    <button
                      onClick={addKid}
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-700 whitespace-nowrap"
                    >
                      + Add Child
                    </button>
                  </div>

                  {kids.map((kid, idx) => (
                    <div key={kid.id} className="p-3 sm:p-4 border-2 border-gray-100 rounded-xl space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold text-gray-700">Child {idx + 1}</span>
                        {kids.length > 1 && (
                          <button
                            onClick={() => removeKid(idx)}
                            className="text-sm text-red-600 hover:text-red-700"
                          >
                            Remove
                          </button>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1">Age</label>
                          <input
                            type="number"
                            value={kid.age}
                            onChange={(e) => updateKid(idx, 'age', parseInt(e.target.value) || 0)}
                            className="w-full px-3 py-2.5 sm:py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1">Annual Tuition (today's $)</label>
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">$</span>
                            <input
                              type="number"
                              value={kid.annualTuition}
                              onChange={(e) => updateKid(idx, 'annualTuition', parseFloat(e.target.value) || 0)}
                              className="w-full pl-7 pr-3 py-2.5 sm:py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none"
                            />
                          </div>
                        </div>
                      </div>

                      <p className="text-xs text-gray-500">
                        College in {Math.max(0, 18 - kid.age)} years • 4-year total: ${(kid.annualTuition * 4).toLocaleString()}
                      </p>
                    </div>
                  ))}
                </>
              )}
            </div>
          )}

          {step === 3 && (
            <div className="space-y-5 sm:space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Large Planned Expenses</h2>

              <label className="flex items-center gap-3 cursor-pointer p-3 sm:p-4 border-2 border-gray-200 rounded-xl hover:border-indigo-300 transition-colors">
                <input
                  type="checkbox"
                  checked={buyingVehicle}
                  onChange={(e) => setBuyingVehicle(e.target.checked)}
                  className="w-5 h-5 shrink-0 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="text-base sm:text-lg font-medium text-gray-700">Vehicle purchase(s)</span>
              </label>

              {buyingVehicle && (
                <>
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-sm text-gray-600">Plan to buy vehicle(s)?</span>
                    <button
                      onClick={addVehicle}
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-700 whitespace-nowrap"
                    >
                      + Add Vehicle
                    </button>
                  </div>

                  {vehicles.map((vehicle, idx) => (
                    <div key={vehicle.id} className="p-3 sm:p-4 border-2 border-gray-100 rounded-xl space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold text-gray-700">Vehicle {idx + 1}</span>
                        {vehicles.length > 1 && (
                          <button
                            onClick={() => removeVehicle(idx)}
                            className="text-sm text-red-600 hover:text-red-700"
                          >
                            Remove
                          </button>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1">Amount</label>
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                            <input
                              type="number"
                              value={vehicle.amount}
                              onChange={(e) => updateVehicle(idx, 'amount', parseFloat(e.target.value) || 0)}
                              className="w-full pl-7 pr-3 py-2.5 sm:py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1">Year</label>
                          <input
                            type="number"
                            value={vehicle.year}
                            onChange={(e) => updateVehicle(idx, 'year', parseInt(e.target.value) || 0)}
                            className="w-full px-3 py-2.5 sm:py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}

              <label className="flex items-center gap-3 cursor-pointer p-3 sm:p-4 border-2 border-gray-200 rounded-xl hover:border-indigo-300 transition-colors">
                <input
                  type="checkbox"
                  checked={hasOtherExpenses}
                  onChange={(e) => setHasOtherExpenses(e.target.checked)}
                  className="w-5 h-5 shrink-0 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="text-base sm:text-lg font-medium text-gray-700">Other large expenses</span>
              </label>

              {hasOtherExpenses && (
                <>
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-sm text-gray-600">Add your planned expenses</span>
                    <button
                      onClick={addOtherExpense}
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-700 whitespace-nowrap"
                    >
                      + Add Expense
                    </button>
                  </div>

                  {otherExpenses.map((expense, idx) => (
                    <div key={expense.id} className="p-3 sm:p-4 border-2 border-gray-100 rounded-xl space-y-3">
                      <div className="flex justify-between items-center gap-2">
                        <input
                          type="text"
                          value={expense.name}
                          onChange={(e) => updateOtherExpense(idx, 'name', e.target.value)}
                          placeholder="Expense name (e.g., Home renovation)"
                          className="flex-1 min-w-0 px-2 sm:px-3 py-2 text-sm font-semibold border-0 focus:outline-none"
                        />
                        <button
                          onClick={() => removeOtherExpense(idx)}
                          className="text-sm text-red-600 hover:text-red-700 shrink-0"
                        >
                          Remove
                        </button>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1">Amount</label>
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                            <input
                              type="number"
                              value={expense.amount}
                              onChange={(e) => updateOtherExpense(idx, 'amount', parseFloat(e.target.value) || 0)}
                              className="w-full pl-7 pr-3 py-2.5 sm:py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1">Year</label>
                          <input
                            type="number"
                            value={expense.year}
                            onChange={(e) => updateOtherExpense(idx, 'year', parseInt(e.target.value) || 0)}
                            className="w-full px-3 py-2.5 sm:py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          )}

          <div className="flex flex-col-reverse sm:flex-row gap-3 mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-gray-100">
            {step > 0 && (
              <button
                onClick={prevStep}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors w-full sm:w-auto"
              >
                <ArrowLeft size={20} />
                Back
              </button>
            )}

            {step === steps.length - 1 ? (
              <div className="flex-1 space-y-3 w-full">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email address to see your results
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
                  />
                </div>
                <button
                  onClick={nextStep}
                  disabled={!email.includes('@')}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold hover:from-indigo-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  See Your Results
                  <ArrowRight size={20} />
                </button>
                <p className="text-xs text-gray-500 text-center">
                  We'll never spam you. Results will be shown instantly.
                </p>
              </div>
            ) : (
              <button
                onClick={nextStep}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold hover:from-indigo-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl w-full"
              >
                Continue
                <ArrowRight size={20} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
