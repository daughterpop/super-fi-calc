import React, { useState } from 'react';

export default function SuperFiCalculator() {
  const [income, setIncome] = useState(80000);
  const [expenses, setExpenses] = useState(40000);
  const [savingsRate, setSavingsRate] = useState(50);
  const [fiNumber, setFiNumber] = useState(0);

  const calculateFI = () => {
    const annualSavings = income * (savingsRate / 100);
    const fiTarget = expenses * 25; // 4% rule
    const yearsToFI = Math.max(0, Math.ceil((fiTarget - (income * 0.1)) / annualSavings)); // rough estimate
    setFiNumber(Math.round(fiTarget));
  };

  React.useEffect(() => {
    calculateFI();
  }, [income, expenses, savingsRate]);

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-xl">
      <h1 className="text-4xl font-bold text-center mb-8 text-indigo-700">Super FI Calculator</h1>
      <p className="text-center text-gray-600 mb-10">For Catholic families chasing Financial Independence with AI + Faith</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Annual Income</label>
            <input
              type="range" min="30000" max="300000" step="1000"
              value={income}
              onChange={(e) => setIncome(Number(e.target.value))}
              className="w-full accent-indigo-600"
            />
            <div className="text-right font-mono">${income.toLocaleString()}</div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Annual Expenses</label>
            <input
              type="range" min="20000" max="150000" step="1000"
              value={expenses}
              onChange={(e) => setExpenses(Number(e.target.value))}
              className="w-full accent-indigo-600"
            />
            <div className="text-right font-mono">${expenses.toLocaleString()}</div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Savings Rate (%)</label>
            <input
              type="range" min="10" max="80" step="1"
              value={savingsRate}
              onChange={(e) => setSavingsRate(Number(e.target.value))}
              className="w-full accent-indigo-600"
            />
            <div className="text-right font-mono">{savingsRate}%</div>
          </div>
        </div>

        <div className="bg-indigo-50 p-8 rounded-2xl">
          <div className="text-center">
            <div className="text-6xl font-bold text-indigo-700 mb-2">${fiNumber.toLocaleString()}</div>
            <div className="text-sm uppercase tracking-widest text-indigo-600">Your FI Number</div>
            <div className="mt-6 text-sm text-gray-600">
              Years to FI: ~{Math.ceil((fiNumber * 0.8) / (income * (savingsRate/100)))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500">
        Based on the 4% Safe Withdrawal Rule • Built for families who tithe boldly and build wealth wisely
      </div>
    </div>
  );
}
