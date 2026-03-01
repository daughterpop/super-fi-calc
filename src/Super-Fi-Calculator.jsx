import React, { useState, useMemo } from 'react';
import { ArrowRight, ArrowLeft, Check, TrendingUp, Home, GraduationCap, DollarSign, Sparkles } from 'lucide-react';
// Add any other imports your original code had (e.g., from @radix-ui, recharts, etc.)
// For example:
// import { Slider } from '@radix-ui/react-slider';
// ... etc. Add them here if missing from your file

export default function SuperFiCalculator() {
  const [step, setStep] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState('');

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
      }
    }
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  // Static intro content (moved inside the component)
  const IntroSection = () => (
    <div className="max-w-4xl mx-auto px-4 py-8 prose prose-slate dark:prose-invert">
      <h1 className="text-4xl font-bold text-center mb-4">Financial Independence Calculator</h1>
      <p className="text-xl text-center text-muted-foreground mb-8">
        Free tool to calculate your <strong>FI Number</strong> and see exactly when you can achieve Financial Independence / Retire Early (FIRE).
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-10 text-sm">
        <div>
          <h2 className="text-lg font-semibold mb-2">How it works</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Enter your savings rate, expenses, and investment returns</li>
            <li>Watch real-time updates to your FI number and timeline</li>
            <li>Built with the 4% safe withdrawal rule</li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Popular searches</h2>
          <p className="text-muted-foreground">financial independence calculator • fi calculator • fire calculator • retire early tool • fi number calculator</p>
        </div>
      </div>
    </div>
  );

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto p-4 md:p-8">
          <button
            onClick={() => setShowResults(false)}
            className="mb-6 flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft size={16} />
            Edit Inputs
          </button>

          {/* ... your full results JSX remains unchanged ... */}
          {/* Paste the rest of your results section here from your original code */}
          {/* For brevity, I'm not repeating the entire huge results block - keep it as-is after this comment */}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex flex-col items-center p-4">
      <IntroSection />  {/* Static intro now appears above the calculator */}

      <div className="w-full max-w-2xl">
        {/* ... your full calculator JSX (steps, inputs, buttons, etc.) remains here ... */}
        {/* Paste the rest of your original return JSX from <div className="text-center mb-8"> onward */}
        {/* Keep everything after the IntroSection */}
      </div>
    </div>
  );
}
