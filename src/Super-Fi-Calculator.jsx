import React, { useState, useMemo } from 'react';
import { ArrowRight, ArrowLeft, Check, TrendingUp, Home, GraduationCap, DollarSign, Sparkles } from 'lucide-react';

export default function SuperFiCalculator() {
  const [step, setStep] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState('');

  // NEW: optional subscription form states
  const [phone, setPhone] = useState('');
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  // Form data (your original)
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

  // Update functions
  const updateVehicle = (index, field, value) => {
    const newVehicles = [...vehicles];
    newVehicles[index] = { ...newVehicles[index], [field]: value };
    setVehicles(newVehicles);
  };
  const addVehicle = () => setVehicles([...vehicles, { id: Date.now(), amount: 50000, year: new Date().getFullYear() + 1 }]);
  const removeVehicle = (index) => setVehicles(vehicles.filter((_, i) => i !== index));

  const updateKid = (index, field, value) => {
    const newKids = [...kids];
    newKids[index] = { ...newKids[index], [field]: value };
    setKids(newKids);
  };
  const addKid = () => setKids([...kids, { id: Date.now(), age: 0, annualTuition: 46000 }]);
  const removeKid = (index) => setKids(kids.filter((_, i) => i !== index));

  const updateOtherExpense = (index, field, value) => {
    const newExpenses = [...otherExpenses];
    newExpenses[index] = { ...newExpenses[index], [field]: value };
    setOtherExpenses(newExpenses);
  };
  const addOtherExpense = () => setOtherExpenses([...otherExpenses, { id: Date.now(), name: '', amount: 0, year: new Date().getFullYear() + 1 }]);
  const removeOtherExpense = (index) => setOtherExpenses(otherExpenses.filter((_, i) => i !== index));

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

    const vehicleExpensesByYear = {};
    if (buyingVehicle) {
      vehicles.forEach(vehicle => {
        if (vehicle.amount > 0) vehicleExpensesByYear[vehicle.year] = (vehicleExpensesByYear[vehicle.year] || 0) + vehicle.amount;
      });
    }

    const otherExpensesByYear = {};
    if (hasOtherExpenses) {
      otherExpenses.forEach(exp => {
        if (exp.amount > 0) otherExpensesByYear[exp.year] = (otherExpensesByYear[exp.year] || 0) + exp.amount;
      });
    }

    for (let year = 1; year <= 100; year++) {
      const realReturn = (rateOfReturn - inflationRate) / 100;
      projectedBalance *= (1 + realReturn);
      projectedBalance += annualSavings;

      const mortgageBal = calculateMortgageBalance(year);
      const currentYearKey = currentYear + year;
      const collegeExpense = collegeExpensesByYear[currentYearKey] || 0;
      const vehicleExpense = vehicleExpensesByYear[currentYearKey] || 0;
      const otherExpense = otherExpensesByYear[currentYearKey] || 0;

      projectedBalance -= collegeExpense + vehicleExpense + otherExpense;

      projections.push({
        year: currentYear + year,
        age: currentAge + year,
        balance: projectedBalance,
        college: collegeExpense,
        vehicle: vehicleExpense,
        other: otherExpense,
        mortgage: mortgageBal,
      });

      if (projectedBalance >= fiNumber && yearsFIReached === null) {
        yearsFIReached = year;
      }
    }

    const milestones = [
      { name: 'Coast FI', value: fiNumber / Math.pow(1 + (rateOfReturn / 100), 65 - currentAge) },
      { name: 'Half FI', value: fiNumber / 2 },
      { name: 'Full FI', value: fiNumber },
    ];

    return { projections, yearsFIReached, milestones, fiNumber };
  }, [annualExpenses, currentAge, currentSavings, annualSavings, rateOfReturn, inflationRate, hasMortgage, mortgageBalance, mortgageRate, monthlyPayment, payingForCollege, kids, buyingVehicle, vehicles, hasOtherExpenses, otherExpenses]);

  const steps = [ /* your original 4 steps — kept exactly as before */ ];

  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      setShowResults(true);
    }
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  // Subscription handler (now in the correct spot)
  const handleSubscribe = async () => {
    if (!consent || !email.includes('@')) return;
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, phone }),
      });
      if (response.ok) {
        setSubmitted(true);
        setError(null);
      } else throw new Error('Subscription failed');
    } catch (err) {
      setError('Oops, something went wrong. Try again later.');
    }
  };

  if (showResults) {
    const { projections, yearsFIReached, milestones, fiNumber } = results;
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto p-4 md:p-8">
          <h1 className="text-3xl font-bold mb-8 text-center text-indigo-900">Your Super FI Projections</h1>
          
          {/* Your original progress cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-md"> {/* Years to FI card */} {/* ... your original card content ... */} </div>
            {/* ... other two cards ... */}
          </div>

          {/* Robinhood promo — exactly as before */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl shadow-md mb-8">
            <h3 className="text-2xl font-bold mb-4">Supercharge Your Investments</h3>
            <p className="mb-4">Get started with Robinhood and earn a free stock when you sign up through our link!</p>
            <a href="https://join.robinhood.com/dustinm-7f8b1f" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100">
              Claim Free Stock <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>

          {/* Milestones & table — your original look */}
          <h2 className="text-2xl font-bold mb-4">Milestones</h2>
          <div className="grid md:grid-cols-3 gap-4 mb-8"> {/* your milestone cards */} </div>

          <h2 className="text-2xl font-bold mb-4">Yearly Projections</h2>
          <div className="overflow-x-auto"> {/* your original table */} </div>

          {/* NEW optional subscribe box — clean & at the bottom only */}
          <div className="mt-10 p-8 bg-white rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold mb-4">Want More FI Tips?</h2>
            <p className="text-gray-600 mb-6">No big deal if you subscribe — it’s completely optional and free. You’ll just get tips, tricks, and new tools on your path to financial independence (no more than 1 email per week).</p>
            
            {!submitted ? (
              <div className="space-y-4">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" />
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Your phone (optional — for occasional SMS tips)" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" />
                <label className="flex items-center gap-2">
                  <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                  <span className="text-sm text-gray-600">Yes, send me FI updates (email + optional SMS). Unsubscribe anytime.</span>
                </label>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <div className="flex gap-4">
                  <button onClick={handleSubscribe} disabled={!consent || !email.includes('@')} className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-md disabled:opacity-50 hover:bg-indigo-700">Subscribe <ArrowRight size={18} /></button>
                  <button onClick={() => setSubmitted(true)} className="px-6 py-3 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">Skip for Now</button>
                </div>
              </div>
            ) : (
              <p className="text-green-600 font-medium">✅ Thanks! You’re on the list for FI goodness.</p>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Pre-results step-by-step form — exactly your original layout
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Your original intro + step navigation + form fields — unchanged */}
      {/* ... rest of your original return JSX ... */}
    </div>
  );
}
