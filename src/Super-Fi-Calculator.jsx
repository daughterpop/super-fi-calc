import React, { useState, useMemo } from 'react';
import { ArrowRight, ArrowLeft, Check, TrendingUp, Home, GraduationCap, DollarSign, Sparkles } from 'lucide-react';

export default function SuperFiCalculator() {
  const [step, setStep] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState('');

  // NEW STATES FOR OPTIONAL SUBSCRIPTION
  const [phone, setPhone] = useState('');
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  // Form data (your original code untouched)
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

  // Your update functions (untouched)
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

    const vehicleExpensesByYear = {};
    if (buyingVehicle) {
      vehicles.forEach(vehicle => {
        if (vehicle.amount > 0) {
          vehicleExpensesByYear[vehicle.year] = (vehicleExpensesByYear[vehicle.year] || 0) + vehicle.amount;
        }
      });
    }

    const otherExpensesByYear = {};
    if (hasOtherExpenses) {
      otherExpenses.forEach(exp => {
        if (exp.amount > 0) {
          otherExpensesByYear[exp.year] = (otherExpensesByYear[exp.year] || 0) + exp.amount;
        }
      });
    }

    for (let year = 1; year <= 100; year++) {
      const realReturn = (rateOfReturn - inflationRate) / 100;
      projectedBalance *= (1 + realReturn);
      projectedBalance += annualSavings;

      const mortgageBal = calculateMortgageBalance(year);
      projectedBalance -= mortgageBal > 0 ? 0 : 0; // Adjust if needed

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

  const steps = [
    {
      title: 'Basic Info',
      content: (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Current Age</label>
            <input
              type="number"
              value={currentAge}
              onChange={(e) => setCurrentAge(Number(e.target.value))}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Current Savings/Investments</label>
            <input
              type="number"
              value={currentSavings}
              onChange={(e) => setCurrentSavings(Number(e.target.value))}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Annual Savings Amount</label>
            <input
              type="number"
              value={annualSavings}
              onChange={(e) => setAnnualSavings(Number(e.target.value))}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Expected Rate of Return (%)</label>
            <input
              type="number"
              value={rateOfReturn}
              onChange={(e) => setRateOfReturn(Number(e.target.value))}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Inflation Rate (%)</label>
            <input
              type="number"
              value={inflationRate}
              onChange={(e) => setInflationRate(Number(e.target.value))}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
      )
    },
    {
      title: 'Expenses',
      content: (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Annual Living Expenses in Retirement</label>
            <input
              type="number"
              value={annualExpenses}
              onChange={(e) => setAnnualExpenses(Number(e.target.value))}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={hasMortgage}
                onChange={(e) => setHasMortgage(e.target.checked)}
                className="mr-2"
              />
              <label>Do you have a mortgage?</label>
            </div>
            {hasMortgage && (
              <div className="space-y-4 pl-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Current Mortgage Balance</label>
                  <input
                    type="number"
                    value={mortgageBalance}
                    onChange={(e) => setMortgageBalance(Number(e.target.value))}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mortgage Interest Rate (%)</label>
                  <input
                    type="number"
                    step="0.01"
                    value={mortgageRate}
                    onChange={(e) => setMortgageRate(Number(e.target.value))}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Mortgage Payment</label>
                  <input
                    type="number"
                    value={monthlyPayment}
                    onChange={(e) => setMonthlyPayment(Number(e.target.value))}
                    className="w-full p-2 border rounded"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )
    },
    {
      title: 'Future Expenses',
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={payingForCollege}
                onChange={(e) => setPayingForCollege(e.target.checked)}
                className="mr-2"
              />
              <label>Planning to pay for kids' college?</label>
            </div>
            {payingForCollege && (
              <div className="space-y-4 pl-6">
                {kids.map((kid, index) => (
                  <div key={kid.id} className="border p-4 rounded space-y-2">
                    <div>
                      <label className="block text-sm">Age</label>
                      <input
                        type="number"
                        value={kid.age}
                        onChange={(e) => updateKid(index, 'age', Number(e.target.value))}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-sm">Annual Tuition Cost (current $)</label>
                      <input
                        type="number"
                        value={kid.annualTuition}
                        onChange={(e) => updateKid(index, 'annualTuition', Number(e.target.value))}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    <button 
                      onClick={() => removeKid(index)}
                      className="text-red-500 text-sm"
                    >
                      Remove Kid
                    </button>
                  </div>
                ))}
                <button 
                  onClick={addKid}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Add Kid
                </button>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={buyingVehicle}
                onChange={(e) => setBuyingVehicle(e.target.checked)}
                className="mr-2"
              />
              <label>Planning to buy vehicles?</label>
            </div>
            {buyingVehicle && (
              <div className="space-y-4 pl-6">
                {vehicles.map((vehicle, index) => (
                  <div key={vehicle.id} className="border p-4 rounded space-y-2">
                    <div>
                      <label className="block text-sm">Purchase Amount</label>
                      <input
                        type="number"
                        value={vehicle.amount}
                        onChange={(e) => updateVehicle(index, 'amount', Number(e.target.value))}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-sm">Year of Purchase</label>
                      <input
                        type="number"
                        value={vehicle.year}
                        onChange={(e) => updateVehicle(index, 'year', Number(e.target.value))}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    <button 
                      onClick={() => removeVehicle(index)}
                      className="text-red-500 text-sm"
                    >
                      Remove Vehicle
                    </button>
                  </div>
                ))}
                <button 
                  onClick={addVehicle}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Add Vehicle
                </button>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={hasOtherExpenses}
                onChange={(e) => setHasOtherExpenses(e.target.checked)}
                className="mr-2"
              />
              <label>Other large expenses?</label>
            </div>
            {hasOtherExpenses && (
              <div className="space-y-4 pl-6">
                {otherExpenses.map((exp, index) => (
                  <div key={exp.id} className="border p-4 rounded space-y-2">
                    <div>
                      <label className="block text-sm">Name</label>
                      <input
                        type="text"
                        value={exp.name}
                        onChange={(e) => updateOtherExpense(index, 'name', e.target.value)}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-sm">Amount</label>
                      <input
                        type="number"
                        value={exp.amount}
                        onChange={(e) => updateOtherExpense(index, 'amount', Number(e.target.value))}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-sm">Year</label>
                      <input
                        type="number"
                        value={exp.year}
                        onChange={(e) => updateOtherExpense(index, 'year', Number(e.target.value))}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    <button 
                      onClick={() => removeOtherExpense(index)}
                      className="text-red-500 text-sm"
                    >
                      Remove Expense
                    </button>
                  </div>
                ))}
                <button 
                  onClick={addOtherExpense}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Add Expense
                </button>
              </div>
            )}
          </div>
        </div>
      )
    },
    {
      title: 'Email',
      content: (
        <div className="space-y-4">
          <p className="text-lg font-medium">Enter your email to see your personalized results</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full p-2 border rounded"
          />
        </div>
      )
    }
  ];

  // UPDATED nextStep — results now show instantly (no email required)
  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      setShowResults(true);   // ← changed here
    }
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  // NEW SUBSCRIPTION HANDLER
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
      } else {
        throw new Error('Subscription failed');
      }
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
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-2">
                <TrendingUp className="h-6 w-6 text-green-500 mr-2" />
                <h2 className="text-xl font-semibold">Years to FI</h2>
              </div>
              <p className="text-3xl font-bold text-green-600">{yearsFIReached || 'Already there!'}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-2">
                <DollarSign className="h-6 w-6 text-blue-500 mr-2" />
                <h2 className="text-xl font-semibold">FI Number</h2>
              </div>
              <p className="text-3xl font-bold text-blue-600">${fiNumber.toLocaleString()}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-2">
                <Sparkles className="h-6 w-6 text-purple-500 mr-2" />
                <h2 className="text-xl font-semibold">Projected Age at FI</h2>
              </div>
              <p className="text-3xl font-bold text-purple-600">{yearsFIReached ? currentAge + yearsFIReached : 'Now!'}</p>
            </div>
          </div>

          {/* Robinhood Promo */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl shadow-md mb-8">
            <h3 className="text-2xl font-bold mb-4">Supercharge Your Investments</h3>
            <p className="mb-4">Get started with Robinhood and earn a free stock when you sign up through our link!</p>
            <a 
              href="https://join.robinhood.com/dustinm-7f8b1f"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100"
            >
              Claim Free Stock <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>

          <h2 className="text-2xl font-bold mb-4">Milestones</h2>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {milestones.map((milestone) => (
              <div key={milestone.name} className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center mb-2">
                  <Check className="h-5 w-5 text-indigo-500 mr-2" />
                  <h3 className="font-semibold">{milestone.name}</h3>
                </div>
                <p className="text-xl font-bold">${Math.round(milestone.value).toLocaleString()}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-4">Yearly Projections</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow">
              <thead>
                <tr className="bg-indigo-100">
                  <th className="p-3 text-left">Year</th>
                  <th className="p-3 text-left">Age</th>
                  <th className="p-3 text-left">Balance</th>
                  <th className="p-3 text-left">College</th>
                  <th className="p-3 text-left">Vehicle</th>
                  <th className="p-3 text-left">Other</th>
                  <th className="p-3 text-left">Mortgage</th>
                </tr>
              </thead>
              <tbody>
                {projections.slice(0, 20).map((proj) => (  // Showing first 20 years, adjust as needed
                  <tr key={proj.year} className="border-t">
                    <td className="p-3">{proj.year}</td>
                    <td className="p-3">{proj.age}</td>
                    <td className="p-3">${Math.round(proj.balance).toLocaleString()}</td>
                    <td className="p-3">${Math.round(proj.college).toLocaleString()}</td>
                    <td className="p-3">${Math.round(proj.vehicle).toLocaleString()}</td>
                    <td className="p-3">${Math.round(proj.other).toLocaleString()}</td>
                    <td className="p-3">${Math.round(proj.mortgage).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* NEW OPTIONAL SUBSCRIPTION FORM — appears right at the bottom of results */}
          <div className="mt-10 p-8 bg-white rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold mb-4">Want More FI Tips?</h2>
            <p className="text-gray-600 mb-6">
              No big deal if you subscribe — it's completely optional and free. 
              You'll just get tips, tricks, and new tools on your path to financial independence 
              (no more than 1 email per week).
            </p>

            {!submitted ? (
              <div className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Your phone (optional — for occasional SMS tips)"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                />
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-600">
                    Yes, send me FI updates (email + optional SMS). Unsubscribe anytime.
                  </span>
                </label>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <div className="flex gap-4">
                  <button
                    onClick={handleSubscribe}
                    disabled={!consent || !email.includes('@')}
                    className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-md disabled:opacity-50 hover:bg-indigo-700"
                  >
                    Subscribe <ArrowRight size={18} />
                  </button>
                  <button
                    onClick={() => setSubmitted(true)}
                    className="px-6 py-3 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                  >
                    Skip for Now
                  </button>
                </div>
              </div>
            ) : (
              <p className="text-green-600 font-medium">✅ Thanks! You're on the list for FI goodness.</p>
            )}
          </div>
        </div>
      </div>
    );
  }

  // The rest of your step-by-step form (steps 1-4) is exactly as before
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-4xl mx-auto p-4 md:p-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-indigo-900">Super FI Calculator</h1>
        
        <div className="bg-white p-8 rounded-xl shadow-md">
          <div className="flex justify-between mb-8">
            <button
              onClick={prevStep}
              disabled={step === 0}
              className="flex items-center text-indigo-600 disabled:opacity-50"
            >
              <ArrowLeft className="mr-2" /> Back
            </button>
            <div className="text-sm text-gray-500">
              Step {step + 1} of {steps.length}
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6">{steps[step].title}</h2>
          {steps[step].content}

          <button
            onClick={nextStep}
            className="mt-8 flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            {step < steps.length - 1 ? 'Next' : 'Calculate My FI'} <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
