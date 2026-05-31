import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calculator,
  TrendingUp,
  PieChart,
  Shield,
  AlertTriangle,
  Target,
  Building2,
} from "lucide-react";
import { PropertyCard } from "../components/property.card";
import { MeshOverlay } from "../components/mesh.overlay";
import { Pagination } from "../components/pagination";

export const InvestmentPage = () => {
  const [roiInputs, setRoiInputs] = useState({
    investmentAmount: "",
    expectedAppreciation: "",
    rentalYield: "",
    investmentHorizon: "",
  });

  const [calculatedRoi, setCalculatedRoi] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

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
      title: "Downtown Commercial Tower",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
      price: "12% ROI",
      location: "Downtown District",
      beds: 0,
      baths: 0,
      sqft: "50,000",
      verified: true,
      featured: true
    },
    {
      id: 2,
      title: "Suburban Residential Complex",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
      price: "10% ROI",
      location: "Suburban Area",
      beds: 0,
      baths: 0,
      sqft: "25,000",
      verified: true,
      featured: true
    },
    {
      id: 3,
      title: "Coastal Land Development",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800",
      price: "18% ROI",
      location: "Coastal Road",
      beds: 0,
      baths: 0,
      sqft: "100,000",
      verified: true,
      featured: true
    },
    {
      id: 4,
      title: "Mixed-Use Development",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
      price: "15% ROI",
      location: "City Center",
      beds: 0,
      baths: 0,
      sqft: "75,000",
      verified: true
    },
    {
      id: 5,
      title: "Industrial Park",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
      price: "11% ROI",
      location: "Industrial Zone",
      beds: 0,
      baths: 0,
      sqft: "200,000",
      verified: true
    },
    {
      id: 6,
      title: "Luxury Resort",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800",
      price: "20% ROI",
      location: "Beachfront",
      beds: 0,
      baths: 0,
      sqft: "150,000",
      verified: true,
      featured: true
    },
    {
      id: 7,
      title: "Tech Hub Campus",
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800",
      price: "14% ROI",
      location: "Tech District",
      beds: 0,
      baths: 0,
      sqft: "80,000",
      verified: true,
      featured: true
    },
    {
      id: 8,
      title: "Retail Complex",
      image: "https://images.unsplash.com/photo-1502672023488-70e25813eb30?w=800",
      price: "13% ROI",
      location: "Shopping District",
      beds: 0,
      baths: 0,
      sqft: "60,000",
      verified: true
    },
    {
      id: 9,
      title: "Warehouse Distribution",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
      price: "16% ROI",
      location: "Logistics Zone",
      beds: 0,
      baths: 0,
      sqft: "120,000",
      verified: true,
      featured: true
    }
  ];

  const totalPages = Math.ceil(opportunities.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentOpportunities = opportunities.slice(startIndex, endIndex);

  return (
    <section className="relative min-h-screen bg-[#555555] py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[#555555]" />
      <MeshOverlay opacity={0.15} />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-zinc-800/80 to-black/80 backdrop-blur-xl rounded-3xl p-8 mb-12 border border-white/10 text-white"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Investment Opportunities
          </h1>
          <p className="text-gray-400 mb-6">
            Maximize your returns with data-driven real estate investments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* ROI Calculator */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-zinc-800/80 to-black/80 backdrop-blur-xl rounded-2xl p-6 border border-white/10 sticky top-20">
              <div className="flex items-center gap-2 mb-4">
                <Calculator className="w-6 h-6 text-amber-400" />
                <h3 className="font-semibold text-white">ROI Calculator</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Investment Amount ($)
                  </label>
                  <input
                    type="number"
                    value={roiInputs.investmentAmount}
                    onChange={(e) =>
                      setRoiInputs({ ...roiInputs, investmentAmount: e.target.value })
                    }
                    placeholder="100000"
                    className="w-full px-4 py-2 bg-black/30 border border-white/20 rounded-lg text-white placeholder-gray-400 "
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Expected Appreciation (%)
                  </label>
                  <input
                    type="number"
                    value={roiInputs.expectedAppreciation}
                    onChange={(e) =>
                      setRoiInputs({ ...roiInputs, expectedAppreciation: e.target.value })
                    }
                    placeholder="10"
                    className="w-full px-4 py-2 bg-black/30 border border-white/20 rounded-lg text-white placeholder-gray-400 "
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Rental Yield (%)
                  </label>
                  <input
                    type="number"
                    value={roiInputs.rentalYield}
                    onChange={(e) =>
                      setRoiInputs({ ...roiInputs, rentalYield: e.target.value })
                    }
                    placeholder="5"
                    className="w-full px-4 py-2 bg-black/30 border border-white/20 rounded-lg text-white placeholder-gray-400 "
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Investment Horizon (Years)
                  </label>
                  <input
                    type="number"
                    value={roiInputs.investmentHorizon}
                    onChange={(e) =>
                      setRoiInputs({ ...roiInputs, investmentHorizon: e.target.value })
                    }
                    placeholder="5"
                    className="w-full px-4 py-2 bg-black/30 border border-white/20 rounded-lg text-white placeholder-gray-400 "
                  />
                </div>

                <button
                  onClick={calculateROI}
                  className="w-full py-3 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-colors"
                >
                  Calculate Returns
                </button>

                {calculatedRoi && (
                  <div className="mt-4 p-4 bg-amber-900/20 rounded-lg border border-amber-500/30">
                    <h4 className="font-semibold text-white mb-3">
                      Projected Returns
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Future Value:</span>
                        <span className="font-semibold text-white">
                          ${calculatedRoi.futureValue}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Total Rental Income:</span>
                        <span className="font-semibold text-white">
                          ${calculatedRoi.totalRentalIncome}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Total Return:</span>
                        <span className="font-semibold text-green-400">
                          ${calculatedRoi.totalReturn}
                        </span>
                      </div>
                      <div className="flex justify-between border-t border-white/10 pt-2 mt-2">
                        <span className="text-white font-medium">ROI:</span>
                        <span className="font-bold text-amber-400">
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
              <h2 className="text-3xl font-bold text-white">Featured Opportunities</h2>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400">Category:</span>
                <select className="px-3 py-2 bg-black/30 border border-white/20 rounded-lg text-sm text-white">
                  <option>All</option>
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Land</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {currentOpportunities.map((opportunity, index) => (
                <motion.div
                  key={opportunity.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <PropertyCard property={opportunity} />
                </motion.div>
              ))}
            </div>

            <Pagination 
              currentPage={currentPage} 
              totalPages={totalPages} 
              onPageChange={setCurrentPage} 
            />

            {/* Investment Categories */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-white mb-6">
                Investment Categories
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-gradient-to-br from-zinc-800/80 to-black/80 backdrop-blur-xl rounded-2xl p-6 border border-white/10 text-center hover:border-white/20 transition-colors"
                >
                  <Building2 className="w-12 h-12 text-blue-400 mx-auto mb-3" />
                  <h4 className="font-semibold text-white mb-2">Residential</h4>
                  <p className="text-sm text-gray-400">
                    Steady rental income with moderate appreciation
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-gradient-to-br from-zinc-800/80 to-black/80 backdrop-blur-xl rounded-2xl p-6 border border-white/10 text-center hover:border-white/20 transition-colors"
                >
                  <PieChart className="w-12 h-12 text-purple-400 mx-auto mb-3" />
                  <h4 className="font-semibold text-white mb-2">Commercial</h4>
                  <p className="text-sm text-gray-400">
                    Higher yields with longer lease terms
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-gradient-to-br from-zinc-800/80 to-black/80 backdrop-blur-xl rounded-2xl p-6 border border-white/10 text-center hover:border-white/20 transition-colors"
                >
                  <Target className="w-12 h-12 text-green-400 mx-auto mb-3" />
                  <h4 className="font-semibold text-white mb-2">Land</h4>
                  <p className="text-sm text-gray-400">
                    High growth potential for development
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Risk Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-zinc-800/80 to-black/80 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
        >
          <div className="flex items-center gap-2 mb-4">
            <Shield className="w-6 h-6 text-amber-400" />
            <h3 className="font-semibold text-white">Investment Risk Analysis</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <div className="bg-green-900/30 p-2 rounded-lg border border-green-500/30">
                <Shield className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Low Risk</h4>
                <p className="text-sm text-gray-400">
                  Established areas with stable demand
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-yellow-900/30 p-2 rounded-lg border border-yellow-500/30">
                <AlertTriangle className="w-5 h-5 text-yellow-400" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Medium Risk</h4>
                <p className="text-sm text-gray-400">
                  Developing areas with growth potential
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-red-900/30 p-2 rounded-lg border border-red-500/30">
                <TrendingUp className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <h4 className="font-semibold text-white">High Growth</h4>
                <p className="text-sm text-gray-400">
                  Emerging markets with higher returns
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
