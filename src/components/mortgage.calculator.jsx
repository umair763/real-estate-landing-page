import { useState } from "react";

export const MortgageCalculator = () => {
  const [formData, setFormData] = useState({
    homePrice: "",
    downPayment: "",
    downPaymentPercent: 20,
    loanTerm: 30,
    interestRate: 6.5,
    propertyTax: "",
    insurance: "",
  });

  const [results, setResults] = useState(null);

  const fmt = (n) =>
    "$" +
    Number(n).toLocaleString("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

  const calculateMortgage = () => {
    const homePrice = parseFloat(formData.homePrice);
    const downPayment = parseFloat(formData.downPayment);
    const loanTerm = parseInt(formData.loanTerm);
    const r = parseFloat(formData.interestRate) / 100 / 12;
    const propertyTax = parseFloat(formData.propertyTax) || 0;
    const insurance = parseFloat(formData.insurance) || 0;

    if (!homePrice || !downPayment || isNaN(r)) return;

    const principal = homePrice - downPayment;
    const n = loanTerm * 12;
    const pi =
      r === 0
        ? principal / n
        : (principal * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);

    const monthlyTax = propertyTax / 12;
    const monthlyIns = insurance / 12;
    const total = pi + monthlyTax + monthlyIns;
    const totalInterest = pi * n - principal;
    const totalCost =
      principal +
      totalInterest +
      propertyTax * loanTerm +
      insurance * loanTerm;

    setResults({
      monthlyPayment: Math.round(pi),
      monthlyTax: Math.round(monthlyTax),
      monthlyInsurance: Math.round(monthlyIns),
      totalMonthlyPayment: Math.round(total),
      totalInterest: Math.round(totalInterest),
      totalCost: Math.round(totalCost),
      principal: Math.round(principal),
      downPayment: Math.round(downPayment),
    });
  };

  const handleRangeChange = (pct) => {
    const hp = parseFloat(formData.homePrice) || 0;
    const dp = hp > 0 ? ((hp * pct) / 100).toFixed(0) : formData.downPayment;
    setFormData({ ...formData, downPaymentPercent: pct, downPayment: dp });
  };

  const handleDownPaymentInput = (val) => {
    const hp = parseFloat(formData.homePrice) || 0;
    const dp = parseFloat(val) || 0;
    const pct = hp > 0 ? Math.min(100, Math.round((dp / hp) * 100)) : formData.downPaymentPercent;
    setFormData({ ...formData, downPayment: val, downPaymentPercent: pct });
  };

  const inputBase =
    "w-full px-3 py-2 text-sm border border-[#D4D4D4] rounded-lg bg-white text-[#1A1A1A] placeholder-[#B3B3B3] focus:border-[#B8A060] focus:outline-none transition-colors";

  const inputWithIcon =
    "w-full pl-7 pr-3 py-2 text-sm border border-[#D4D4D4] rounded-lg bg-white text-[#1A1A1A] placeholder-[#B3B3B3] focus:border-[#B8A060] focus:outline-none transition-colors";

  return (
    <section className="bg-[#F7E6CA] rounded-xl max-w-7/10 m-auto py-10 px-4 mt-20">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-1">
            Know Your Buying Power
          </h2>
          <p className="text-sm text-[#6B6B6B]">
            Get preapproved and find out what you can afford in minutes
          </p>
        </div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

          {/* ── Left: Form ── */}
          <div className="bg-white rounded-2xl p-5 border border-[#D4D4D4] shadow-sm">
            <h3 className="text-base font-bold text-[#1A1A1A] mb-4">
              Calculate Your Payment
            </h3>

            <div className="grid grid-cols-2 gap-3">

              {/* Home Price */}
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-semibold text-[#6B6B6B] uppercase tracking-wider">
                  Home Price
                </label>
                <div className="relative">
                  <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[#B3B3B3] text-xs">$</span>
                  <input
                    type="number"
                    value={formData.homePrice}
                    onChange={(e) =>
                      setFormData({ ...formData, homePrice: e.target.value })
                    }
                    placeholder="500000"
                    className={inputWithIcon}
                  />
                </div>
              </div>

              {/* Down Payment */}
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-semibold text-[#6B6B6B] uppercase tracking-wider">
                  Down Payment
                </label>
                <div className="relative">
                  <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[#B3B3B3] text-xs">$</span>
                  <input
                    type="number"
                    value={formData.downPayment}
                    onChange={(e) => handleDownPaymentInput(e.target.value)}
                    placeholder="100000"
                    className={inputWithIcon}
                  />
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  value={formData.downPaymentPercent}
                  onChange={(e) => handleRangeChange(Number(e.target.value))}
                  className="w-full accent-[#B8A060] mt-1"
                />
                <div className="flex justify-between text-[10px] text-[#B3B3B3]">
                  <span>0%</span>
                  <span className="text-[#3A2E0A] bg-[#E8D59E] px-2 py-0.5 rounded-full font-semibold text-[10px]">
                    {formData.downPaymentPercent}%
                  </span>
                  <span>100%</span>
                </div>
              </div>

              {/* Loan Term */}
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-semibold text-[#6B6B6B] uppercase tracking-wider">
                  Loan Term
                </label>
                <select
                  value={formData.loanTerm}
                  onChange={(e) =>
                    setFormData({ ...formData, loanTerm: e.target.value })
                  }
                  className={inputBase}
                >
                  <option value="15">15 Years</option>
                  <option value="20">20 Years</option>
                  <option value="30">30 Years</option>
                </select>
              </div>

              {/* Interest Rate */}
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-semibold text-[#6B6B6B] uppercase tracking-wider">
                  Interest Rate (%)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={formData.interestRate}
                  onChange={(e) =>
                    setFormData({ ...formData, interestRate: e.target.value })
                  }
                  placeholder="6.5"
                  className={inputBase}
                />
              </div>

              {/* Property Tax */}
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-semibold text-[#6B6B6B] uppercase tracking-wider">
                  Property Tax /yr
                </label>
                <div className="relative">
                  <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[#B3B3B3] text-xs">$</span>
                  <input
                    type="number"
                    value={formData.propertyTax}
                    onChange={(e) =>
                      setFormData({ ...formData, propertyTax: e.target.value })
                    }
                    placeholder="6000"
                    className={inputWithIcon}
                  />
                </div>
              </div>

              {/* Insurance */}
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-semibold text-[#6B6B6B] uppercase tracking-wider">
                  Insurance /yr
                </label>
                <div className="relative">
                  <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[#B3B3B3] text-xs">$</span>
                  <input
                    type="number"
                    value={formData.insurance}
                    onChange={(e) =>
                      setFormData({ ...formData, insurance: e.target.value })
                    }
                    placeholder="2400"
                    className={inputWithIcon}
                  />
                </div>
              </div>
            </div>

            {/* Calculate Button */}
            <button
              onClick={calculateMortgage}
              className="w-full mt-4 py-2.5 bg-[#E8D59E] hover:bg-[#dcc98a] text-[#1A1200] text-sm font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <rect x="2" y="2" width="20" height="20" rx="3" />
                <line x1="8" y1="8" x2="16" y2="8" />
                <line x1="8" y1="12" x2="16" y2="12" />
                <line x1="8" y1="16" x2="12" y2="16" />
              </svg>
              Calculate Payment
            </button>
          </div>

          {/* ── Right: Results ── */}
          <div className="bg-[#2B2B2B] rounded-2xl p-5 border border-[#3A3A3A] flex flex-col">
            {!results ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center gap-3">
                <div className="w-11 h-11 bg-[#3A3A3A] rounded-full flex items-center justify-center text-xl">⌂</div>
                <h4 className="text-sm font-bold text-[#F7E6CA]">Enter Your Details</h4>
                <p className="text-xs text-[#888] max-w-[160px] leading-relaxed">
                  Fill in the form to see your estimated monthly payment
                </p>
              </div>
            ) : (
              <div className="flex flex-col flex-1 gap-3">

                {/* Total */}
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-[#888] mb-1">
                    Total Monthly Payment
                  </p>
                  <p className="text-4xl font-bold text-[#E8D59E] leading-none">
                    {fmt(results.totalMonthlyPayment)}
                  </p>
                  <p className="text-[10px] text-[#666] mt-1">
                    Principal + Interest + Tax + Insurance
                  </p>
                </div>

                <div className="h-px bg-[#3A3A3A]" />

                {/* Breakdown rows */}
                <div className="flex flex-col gap-2">
                  {[
                    { label: "Principal & Interest", val: results.monthlyPayment, dot: "#E8D59E" },
                    { label: "Property Tax", val: results.monthlyTax, dot: "#9E8B5A" },
                    { label: "Insurance", val: results.monthlyInsurance, dot: "#6B6B6B" },
                  ].map(({ label, val, dot }) => (
                    <div
                      key={label}
                      className="flex justify-between items-center bg-[#333] rounded-lg px-3 py-2"
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: dot }}
                        />
                        <span className="text-xs text-[#AAA]">{label}</span>
                      </div>
                      <span className="text-xs font-semibold text-[#F7E6CA]">
                        {fmt(val)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Summary grid */}
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: "Total Interest", val: results.totalInterest },
                    { label: "Total Cost", val: results.totalCost },
                    { label: "Loan Amount", val: results.principal },
                    { label: "Down Payment", val: results.downPayment },
                  ].map(({ label, val }) => (
                    <div
                      key={label}
                      className="bg-[#333] rounded-lg px-3 py-2 border border-[#3A3A3A]"
                    >
                      <p className="text-[10px] text-[#777] uppercase tracking-wider mb-1">
                        {label}
                      </p>
                      <p className="text-sm font-semibold text-[#F7E6CA]">
                        {fmt(val)}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button className="w-full mt-auto py-2.5 bg-[#E8D59E] hover:bg-[#dcc98a] text-[#1A1200] text-sm font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  Get Preapproved Now
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};