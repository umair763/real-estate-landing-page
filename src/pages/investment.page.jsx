import { useState } from "react";
import {
  Calculator,
  TrendingUp,
  PieChart,
  Shield,
  AlertTriangle,
  Target,
  Building2,
} from "lucide-react";

export const InvestmentPage = () => {
  const [roiInputs, setRoiInputs] = useState({
    investmentAmount: "",
    expectedAppreciation: "",
    rentalYield: "",
    investmentHorizon: "",
  });

  const [calculatedRoi, setCalculatedRoi] = useState(null);

  const calculateROI = () => {
    const investment = parseFloat(roiInputs.investmentAmount);
    const appreciation = parseFloat(roiInputs.expectedAppreciation) / 100;
    const rental = parseFloat(roiInputs.rentalYield) / 100;
    const years = parseInt(roiInputs.investmentHorizon);

    if (investment && appreciation && rental && years) {
      const futureValue = investment * Math.pow(1 + appreciation, years);
      const totalRentalIncome = investment * rental * years;
      const totalReturn = futureValue + totalRentalIncome - investment;
      const roiPercent = (totalReturn / investment) * 100;

      setCalculatedRoi({
        futureValue: futureValue.toFixed(2),
        totalRentalIncome: totalRentalIncome.toFixed(2),
        totalReturn: totalReturn.toFixed(2),
        roiPercent: roiPercent.toFixed(2),
      });
    }
  };

  const opportunities = [
    {
      id: 1,
      name: "Downtown Commercial Tower",
      type: "Commercial",
      roi: "12%",
      rentalYield: "8%",
      capitalAppreciation: "15%",
      risk: "Medium",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
    },
    {
      id: 2,
      name: "Suburban Residential Complex",
      type: "Residential",
      roi: "10%",
      rentalYield: "6%",
      capitalAppreciation: "12%",
      risk: "Low",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
    },
    {
      id: 3,
      name: "Coastal Land Development",
      type: "Land",
      roi: "18%",
      rentalYield: "3%",
      capitalAppreciation: "25%",
      risk: "High",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800",
    },
  ];

  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-8 mb-8 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Investment Opportunities
          </h1>
          <p className="text-amber-100 mb-6">
            Maximize your returns with data-driven real estate investments
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* ROI Calculator */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-lg sticky top-20">
              <div className="flex items-center gap-2 mb-4">
                <Calculator className="w-6 h-6 text-amber-600" />
                <h3 className="font-semibold text-gray-900">ROI Calculator</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Investment Amount ($)
                  </label>
                  <input
                    type="number"
                    value={roiInputs.investmentAmount}
                    onChange={(e) =>
                      setRoiInputs({ ...roiInputs, investmentAmount: e.target.value })
                    }
                    placeholder="100000"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Expected Appreciation (%)
                  </label>
                  <input
                    type="number"
                    value={roiInputs.expectedAppreciation}
                    onChange={(e) =>
                      setRoiInputs({ ...roiInputs, expectedAppreciation: e.target.value })
                    }
                    placeholder="10"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Rental Yield (%)
                  </label>
                  <input
                    type="number"
                    value={roiInputs.rentalYield}
                    onChange={(e) =>
                      setRoiInputs({ ...roiInputs, rentalYield: e.target.value })
                    }
                    placeholder="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Investment Horizon (Years)
                  </label>
                  <input
                    type="number"
                    value={roiInputs.investmentHorizon}
                    onChange={(e) =>
                      setRoiInputs({ ...roiInputs, investmentHorizon: e.target.value })
                    }
                    placeholder="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <button
                  onClick={calculateROI}
                  className="w-full py-3 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-colors"
                >
                  Calculate Returns
                </button>

                {calculatedRoi && (
                  <div className="mt-4 p-4 bg-amber-50 rounded-lg border border-amber-200">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Projected Returns
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Future Value:</span>
                        <span className="font-semibold">
                          ${calculatedRoi.futureValue}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Total Rental Income:</span>
                        <span className="font-semibold">
                          ${calculatedRoi.totalRentalIncome}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Total Return:</span>
                        <span className="font-semibold text-green-600">
                          ${calculatedRoi.totalReturn}
                        </span>
                      </div>
                      <div className="flex justify-between border-t pt-2 mt-2">
                        <span className="text-gray-900 font-medium">ROI:</span>
                        <span className="font-bold text-amber-600">
                          {calculatedRoi.roiPercent}%
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Investment Opportunities */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Featured Opportunities</h2>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Category:</span>
                <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                  <option>All</option>
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Land</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {opportunities.map((opportunity) => (
                <div
                  key={opportunity.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-40">
                    <img
                      src={opportunity.image}
                      alt={opportunity.name}
                      className="w-full h-full object-cover"
                    />
                    <div
                      className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${
                        opportunity.risk === "Low"
                          ? "bg-green-500 text-white"
                          : opportunity.risk === "Medium"
                            ? "bg-yellow-500 text-white"
                            : "bg-red-500 text-white"
                      }`}
                    >
                      {opportunity.risk} Risk
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {opportunity.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 flex items-center gap-1">
                      <Building2 className="w-4 h-4" />
                      {opportunity.type}
                    </p>

                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div className="text-center p-2 bg-amber-50 rounded-lg">
                        <div className="text-xs text-gray-600">ROI</div>
                        <div className="font-bold text-amber-600">{opportunity.roi}</div>
                      </div>
                      <div className="text-center p-2 bg-blue-50 rounded-lg">
                        <div className="text-xs text-gray-600">Rental</div>
                        <div className="font-bold text-blue-600">
                          {opportunity.rentalYield}
                        </div>
                      </div>
                      <div className="text-center p-2 bg-green-50 rounded-lg">
                        <div className="text-xs text-gray-600">Growth</div>
                        <div className="font-bold text-green-600">
                          {opportunity.capitalAppreciation}
                        </div>
                      </div>
                    </div>

                    <button className="w-full py-2 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Investment Categories */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Investment Categories
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
                  <Building2 className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Residential</h4>
                  <p className="text-sm text-gray-600">
                    Steady rental income with moderate appreciation
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
                  <PieChart className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Commercial</h4>
                  <p className="text-sm text-gray-600">
                    Higher yields with longer lease terms
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
                  <Target className="w-12 h-12 text-green-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Land</h4>
                  <p className="text-sm text-gray-600">
                    High growth potential for development
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Risk Analysis */}
        <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="w-6 h-6 text-amber-600" />
            <h3 className="font-semibold text-gray-900">Investment Risk Analysis</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <div className="bg-green-100 p-2 rounded-lg">
                <Shield className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Low Risk</h4>
                <p className="text-sm text-gray-600">
                  Established areas with stable demand
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-yellow-100 p-2 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Medium Risk</h4>
                <p className="text-sm text-gray-600">
                  Developing areas with growth potential
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-red-100 p-2 rounded-lg">
                <TrendingUp className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">High Growth</h4>
                <p className="text-sm text-gray-600">
                  Emerging markets with higher returns
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
