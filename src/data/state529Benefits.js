/**
 * Illustrative state 529 contribution tax benefits (≈ tax year 2026).
 * Always verify on your state plan / DOR site before filing.
 * benefitType: 'none' | 'no_income_tax' | 'deduction' | 'credit'
 * scope: 'taxpayer' | 'beneficiary' | 'contribution'
 * parity: true if out-of-state plans may also qualify
 */
export const STATE_529_BENEFITS = [
  { code: 'AL', name: 'Alabama', benefitType: 'deduction', single: 5000, joint: 10000, scope: 'taxpayer', parity: false, note: 'In-state plan typically required.' },
  { code: 'AK', name: 'Alaska', benefitType: 'no_income_tax', single: 0, joint: 0, scope: 'taxpayer', parity: false, note: 'No state income tax — federal 529 benefits still apply.' },
  { code: 'AZ', name: 'Arizona', benefitType: 'deduction', single: 2000, joint: 4000, scope: 'beneficiary', parity: true, note: 'Tax parity — any state’s 529 may qualify.' },
  { code: 'AR', name: 'Arkansas', benefitType: 'deduction', single: 5000, joint: 10000, scope: 'taxpayer', parity: true, note: 'Tax parity — any state’s 529 may qualify.' },
  { code: 'CA', name: 'California', benefitType: 'none', single: 0, joint: 0, scope: 'taxpayer', parity: false, note: 'No state deduction/credit despite state income tax.' },
  { code: 'CO', name: 'Colorado', benefitType: 'deduction', single: 26200, joint: 39200, scope: 'beneficiary', parity: false, note: 'Generous per-beneficiary deduction; confirm current-year caps.' },
  { code: 'CT', name: 'Connecticut', benefitType: 'deduction', single: 5000, joint: 10000, scope: 'taxpayer', parity: false, note: 'Carryforward rules may apply for excess contributions.' },
  { code: 'DE', name: 'Delaware', benefitType: 'deduction', single: 1000, joint: 2000, scope: 'taxpayer', parity: false, note: 'Income limits may apply.' },
  { code: 'DC', name: 'District of Columbia', benefitType: 'deduction', single: 4000, joint: 8000, scope: 'taxpayer', parity: false, note: 'Carryforward may apply.' },
  { code: 'FL', name: 'Florida', benefitType: 'no_income_tax', single: 0, joint: 0, scope: 'taxpayer', parity: false, note: 'No state income tax — federal 529 benefits still apply.' },
  { code: 'GA', name: 'Georgia', benefitType: 'deduction', single: 4000, joint: 8000, scope: 'beneficiary', parity: false, note: 'In-state plan typically required.' },
  { code: 'HI', name: 'Hawaii', benefitType: 'none', single: 0, joint: 0, scope: 'taxpayer', parity: false, note: 'No state deduction/credit despite state income tax.' },
  { code: 'ID', name: 'Idaho', benefitType: 'deduction', single: 6000, joint: 12000, scope: 'taxpayer', parity: false, note: 'In-state plan typically required.' },
  { code: 'IL', name: 'Illinois', benefitType: 'deduction', single: 10000, joint: 20000, scope: 'taxpayer', parity: false, note: 'Bright Start / Bright Directions; in-state plan for deduction.' },
  { code: 'IN', name: 'Indiana', benefitType: 'credit', single: 1500, joint: 1500, scope: 'contribution', parity: false, note: '20% credit on contributions (max credit often $1,500). Confirm current caps.' },
  { code: 'IA', name: 'Iowa', benefitType: 'deduction', single: 6100, joint: 6100, scope: 'beneficiary', parity: false, note: 'Per taxpayer per beneficiary; amount indexed — verify tax year.' },
  { code: 'KS', name: 'Kansas', benefitType: 'deduction', single: 3000, joint: 6000, scope: 'taxpayer', parity: true, note: 'Tax parity — any state’s 529 may qualify.' },
  { code: 'KY', name: 'Kentucky', benefitType: 'none', single: 0, joint: 0, scope: 'taxpayer', parity: false, note: 'No state deduction/credit despite state income tax.' },
  { code: 'LA', name: 'Louisiana', benefitType: 'deduction', single: 2400, joint: 4800, scope: 'beneficiary', parity: false, note: 'In-state plan typically required.' },
  { code: 'ME', name: 'Maine', benefitType: 'deduction', single: 1000, joint: 1000, scope: 'beneficiary', parity: true, note: 'Up to $1,000 per beneficiary; tax parity.' },
  { code: 'MD', name: 'Maryland', benefitType: 'deduction', single: 2500, joint: 5000, scope: 'taxpayer', parity: false, note: 'In-state plan typically required.' },
  { code: 'MA', name: 'Massachusetts', benefitType: 'deduction', single: 1000, joint: 2000, scope: 'taxpayer', parity: false, note: 'In-state plan typically required.' },
  { code: 'MI', name: 'Michigan', benefitType: 'deduction', single: 5000, joint: 10000, scope: 'taxpayer', parity: false, note: 'In-state plan typically required.' },
  { code: 'MN', name: 'Minnesota', benefitType: 'credit', single: 500, joint: 1000, scope: 'contribution', parity: true, note: 'Credit and/or deduction options — income phaseouts common; verify.' },
  { code: 'MS', name: 'Mississippi', benefitType: 'deduction', single: 10000, joint: 20000, scope: 'taxpayer', parity: false, note: 'In-state plan typically required.' },
  { code: 'MO', name: 'Missouri', benefitType: 'deduction', single: 8000, joint: 16000, scope: 'taxpayer', parity: true, note: 'Tax parity — any state’s 529 may qualify.' },
  { code: 'MT', name: 'Montana', benefitType: 'deduction', single: 3000, joint: 6000, scope: 'taxpayer', parity: true, note: 'Tax parity — any state’s 529 may qualify.' },
  { code: 'NE', name: 'Nebraska', benefitType: 'deduction', single: 10000, joint: 10000, scope: 'taxpayer', parity: false, note: 'Confirm married-filing-separately rules.' },
  { code: 'NV', name: 'Nevada', benefitType: 'no_income_tax', single: 0, joint: 0, scope: 'taxpayer', parity: false, note: 'No state income tax — federal 529 benefits still apply.' },
  { code: 'NH', name: 'New Hampshire', benefitType: 'no_income_tax', single: 0, joint: 0, scope: 'taxpayer', parity: false, note: 'No broad wage income tax — limited state 529 tax angle.' },
  { code: 'NJ', name: 'New Jersey', benefitType: 'deduction', single: 10000, joint: 10000, scope: 'taxpayer', parity: false, note: 'Per taxpayer limits — confirm current statute.' },
  { code: 'NM', name: 'New Mexico', benefitType: 'deduction', single: null, joint: null, scope: 'contribution', parity: false, note: 'Full contribution often deductible — confirm plan rules.' },
  { code: 'NY', name: 'New York', benefitType: 'deduction', single: 5000, joint: 10000, scope: 'taxpayer', parity: false, note: 'In-state plan typically required.' },
  { code: 'NC', name: 'North Carolina', benefitType: 'none', single: 0, joint: 0, scope: 'taxpayer', parity: false, note: 'No state deduction/credit despite state income tax.' },
  { code: 'ND', name: 'North Dakota', benefitType: 'deduction', single: 5000, joint: 10000, scope: 'taxpayer', parity: false, note: 'In-state plan typically required.' },
  { code: 'OH', name: 'Ohio', benefitType: 'deduction', single: 4000, joint: 4000, scope: 'beneficiary', parity: true, note: 'Up to $4,000 per beneficiary; tax parity.' },
  { code: 'OK', name: 'Oklahoma', benefitType: 'deduction', single: 10000, joint: 20000, scope: 'taxpayer', parity: false, note: 'In-state plan typically required.' },
  { code: 'OR', name: 'Oregon', benefitType: 'credit', single: 180, joint: 360, scope: 'contribution', parity: false, note: 'Fixed credit amounts — not a large deduction.' },
  { code: 'PA', name: 'Pennsylvania', benefitType: 'deduction', single: 19000, joint: 38000, scope: 'taxpayer', parity: true, note: 'High limits; tax parity for any state plan.' },
  { code: 'RI', name: 'Rhode Island', benefitType: 'deduction', single: 500, joint: 1000, scope: 'taxpayer', parity: false, note: 'In-state plan typically required.' },
  { code: 'SC', name: 'South Carolina', benefitType: 'deduction', single: null, joint: null, scope: 'contribution', parity: false, note: 'Full contribution often deductible — confirm plan rules.' },
  { code: 'SD', name: 'South Dakota', benefitType: 'no_income_tax', single: 0, joint: 0, scope: 'taxpayer', parity: false, note: 'No state income tax — federal 529 benefits still apply.' },
  { code: 'TN', name: 'Tennessee', benefitType: 'no_income_tax', single: 0, joint: 0, scope: 'taxpayer', parity: false, note: 'No state income tax on wages — federal 529 benefits still apply.' },
  { code: 'TX', name: 'Texas', benefitType: 'no_income_tax', single: 0, joint: 0, scope: 'taxpayer', parity: false, note: 'No state income tax — federal 529 benefits still apply.' },
  { code: 'UT', name: 'Utah', benefitType: 'credit', single: null, joint: null, scope: 'contribution', parity: false, note: 'Percentage credit per beneficiary — confirm rate and caps.' },
  { code: 'VT', name: 'Vermont', benefitType: 'credit', single: 250, joint: 500, scope: 'contribution', parity: false, note: '10% credit on limited contributions; plan restrictions apply.' },
  { code: 'VA', name: 'Virginia', benefitType: 'deduction', single: 4000, joint: 4000, scope: 'beneficiary', parity: false, note: 'Often up to $4,000 per account — confirm.' },
  { code: 'WA', name: 'Washington', benefitType: 'no_income_tax', single: 0, joint: 0, scope: 'taxpayer', parity: false, note: 'No state income tax — federal 529 benefits still apply.' },
  { code: 'WV', name: 'West Virginia', benefitType: 'deduction', single: null, joint: null, scope: 'contribution', parity: false, note: 'Full contribution often deductible — confirm plan rules.' },
  { code: 'WI', name: 'Wisconsin', benefitType: 'deduction', single: 5000, joint: 10000, scope: 'beneficiary', parity: false, note: 'Per-beneficiary limits common — verify tax year.' },
  { code: 'WY', name: 'Wyoming', benefitType: 'no_income_tax', single: 0, joint: 0, scope: 'taxpayer', parity: false, note: 'No state income tax; no in-state 529 sponsor in some years.' },
];

export function getState529(code) {
  return STATE_529_BENEFITS.find((s) => s.code === code) || null;
}
