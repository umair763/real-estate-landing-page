import { useState, useEffect } from "react";
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
import { Pagination } from "../components/pagination";
import { propertyService } from "../services/property.service";

export const InvestmentPage = () => {
  const [roiInputs, setRoiInputs] = useState({
    investmentAmount: "",
    expectedAppreciation: "",
    rentalYield: "",
    investmentHorizon: "",
  });

  const [calculatedRoi, setCalculatedRoi] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const data = await propertyService.getPropertiesByCategory('invest');
        const formattedProperties = data.map(propertyService.formatPropertyForCard);
        setProperties(formattedProperties);
      } catch (err) {
        console.error('Error fetching properties:', err);
        setProperties([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const totalPages = Math.ceil(properties.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentOpportunities = properties.slice(startIndex, endIndex);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#B3B3B3' }}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 mx-auto" style={{ borderColor: '#2B2B2B' }}></div>
          <p className="mt-4" style={{ color: '#B3B3B3' }}>Loading properties...</p>
        </div>
      </div>
    );
  }

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

  return (
    <section className="relative min-h-screen py-24 px-6" style={{ backgroundColor: '#D4D4D4' }}>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl p-8 mb-12"
          style={{ backgroundColor: '#F7E6CA', border: '1px solid #D4D4D4' }}
        >
          <h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ 
              color: '#1a1a1a',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontWeight: 500,
              letterSpacing: '-0.03em'
            }}
          >
            Investment Opportunities
          </h1>
          <p className="mb-6" style={{ color: '#a3a3a3' }}>
            Maximize your returns with data-driven real estate investments
          </p>
        </motion.div> */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* ROI Calculator */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl p-6 sticky top-20" style={{ backgroundColor: '#F7E6CA', border: '1px solid #D4D4D4' }}>
              <div className="flex items-center gap-2 mb-4">
                <Calculator className="w-6 h-6" style={{ color: '#E8D59E' }} />
                <h3 
                  className="font-semibold"
                  style={{ 
                    color: '#000000',
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    fontWeight: 500
                  }}
                >
                  ROI Calculator
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#000000' }}>
                    Investment Amount ($)
                  </label>
                  <input
                    type="number"
                    value={roiInputs.investmentAmount}
                    onChange={(e) =>
                      setRoiInputs({ ...roiInputs, investmentAmount: e.target.value })
                    }
                    placeholder="100000"
                    className="w-full px-4 py-2 rounded-lg"
                    style={{ 
                      backgroundColor: 'rgba(43, 43, 43, 0.05)',
                      border: '1px solid #D4D4D4',
                      color: '#000000'
                    }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#000000' }}>
                    Expected Appreciation (%)
                  </label>
                  <input
                    type="number"
                    value={roiInputs.expectedAppreciation}
                    onChange={(e) =>
                      setRoiInputs({ ...roiInputs, expectedAppreciation: e.target.value })
                    }
                    placeholder="10"
                    className="w-full px-4 py-2 rounded-lg"
                    style={{ 
                      backgroundColor: 'rgba(43, 43, 43, 0.05)',
                      border: '1px solid #D4D4D4',
                      color: '#000000'
                    }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#000000' }}>
                    Rental Yield (%)
                  </label>
                  <input
                    type="number"
                    value={roiInputs.rentalYield}
                    onChange={(e) =>
                      setRoiInputs({ ...roiInputs, rentalYield: e.target.value })
                    }
                    placeholder="5"
                    className="w-full px-4 py-2 rounded-lg"
                    style={{ 
                      backgroundColor: 'rgba(43, 43, 43, 0.05)',
                      border: '1px solid #D4D4D4',
                      color: '#000000'
                    }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#000000' }}>
                    Investment Horizon (Years)
                  </label>
                  <input
                    type="number"
                    value={roiInputs.investmentHorizon}
                    onChange={(e) =>
                      setRoiInputs({ ...roiInputs, investmentHorizon: e.target.value })
                    }
                    placeholder="5"
                    className="w-full px-4 py-2 rounded-lg"
                    style={{ 
                      backgroundColor: 'rgba(43, 43, 43, 0.05)',
                      border: '1px solid #D4D4D4',
                      color: '#000000'
                    }}
                  />
                </div>

                <button
                  onClick={calculateROI}
                  className="w-full py-3 font-semibold transition-colors rounded-lg"
                  style={{ 
                    backgroundColor: '#E8D59E',
                    color: '#000000',
                    borderRadius: '10px'
                  }}
                >
                  Calculate Returns
                </button>

                {calculatedRoi && (
                  <div className="mt-4 p-4 rounded-lg" style={{ backgroundColor: '#FFFFFF', border: '1px solid #D4D4D4' }}>
                    <h4 
                      className="font-semibold mb-3"
                      style={{ 
                        color: '#000000',
                        fontFamily: 'system-ui, -apple-system, sans-serif',
                        fontWeight: 500
                      }}
                    >
                      Projected Returns
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span style={{ color: '#B3B3B3' }}>Future Value:</span>
                        <span className="font-semibold" style={{ color: '#000000' }}>
                          ${calculatedRoi.futureValue}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span style={{ color: '#B3B3B3' }}>Total Rental Income:</span>
                        <span className="font-semibold" style={{ color: '#000000' }}>
                          ${calculatedRoi.totalRentalIncome}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span style={{ color: '#B3B3B3' }}>Total Return:</span>
                        <span className="font-semibold" style={{ color: '#000000' }}>
                          ${calculatedRoi.totalReturn}
                        </span>
                      </div>
                      <div className="flex justify-between pt-2 mt-2" style={{ borderTop: '1px solid #D4D4D4' }}>
                        <span className="font-medium" style={{ color: '#000000' }}>ROI:</span>
                        <span className="font-bold" style={{ color: '#E8D59E' }}>
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
              <h2 
                className="text-3xl font-bold"
                style={{ 
                  color: '#000000',
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  fontWeight: 500,
                  letterSpacing: '-0.03em'
                }}
              >
                Featured Opportunities
              </h2>
              <div className="flex items-center gap-2">
                <span className="text-sm" style={{ color: '#B3B3B3' }}>Category:</span>
                <select className="px-3 py-2 rounded-lg text-sm" style={{ 
                  backgroundColor: 'rgba(43, 43, 43, 0.05)',
                  border: '1px solid #D4D4D4',
                  color: '#000000'
                }}>
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
              <h3 
                className="text-2xl font-bold mb-6"
                style={{ 
                  color: '#000000',
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  fontWeight: 500,
                  letterSpacing: '-0.03em'
                }}
              >
                Investment Categories
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="rounded-2xl p-6 text-center transition-colors"
                  style={{ backgroundColor: '#F7E6CA', border: '1px solid #D4D4D4' }}
                >
                  <Building2 className="w-12 h-12 mx-auto mb-3" style={{ color: '#E8D59E' }} />
                  <h4 
                    className="font-semibold mb-2"
                    style={{ 
                      color: '#000000',
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      fontWeight: 500
                    }}
                  >
                    Residential
                  </h4>
                  <p className="text-sm" style={{ color: '#a3a3a3' }}>
                    Steady rental income with moderate appreciation
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="rounded-2xl p-6 text-center transition-colors"
                  style={{ backgroundColor: '#F7E6CA', border: '1px solid #D4D4D4' }}
                >
                  <PieChart className="w-12 h-12 mx-auto mb-3" style={{ color: '#E8D59E' }} />
                  <h4 
                    className="font-semibold mb-2"
                    style={{ 
                      color: '#000000',
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      fontWeight: 500
                    }}
                  >
                    Commercial
                  </h4>
                  <p className="text-sm" style={{ color: '#a3a3a3' }}>
                    Higher yields with longer lease terms
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="rounded-2xl p-6 text-center transition-colors"
                  style={{ backgroundColor: '#F7E6CA', border: '1px solid #D4D4D4' }}
                >
                  <Target className="w-12 h-12 mx-auto mb-3" style={{ color: '#E8D59E' }} />
                  <h4 
                    className="font-semibold mb-2"
                    style={{ 
                      color: '#000000',
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      fontWeight: 500
                    }}
                  >
                    Land
                  </h4>
                  <p className="text-sm" style={{ color: '#a3a3a3' }}>
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
          className="rounded-2xl p-6"
          style={{ backgroundColor: '#F7E6CA', border: '1px solid #D4D4D4' }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Shield className="w-6 h-6" style={{ color: '#E8D59E' }} />
            <h3 
              className="font-semibold"
              style={{ 
                color: '#000000',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                fontWeight: 500
              }}
            >
              Investment Risk Analysis
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg" style={{ backgroundColor: '#FFFFFF', border: '1px solid #D4D4D4' }}>
                <Shield className="w-5 h-5" style={{ color: '#000000' }} />
              </div>
              <div>
                <h4 
                  className="font-semibold"
                  style={{ 
                    color: '#000000',
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    fontWeight: 500
                  }}
                >
                  Low Risk
                </h4>
                <p className="text-sm" style={{ color: '#a3a3a3' }}>
                  Established areas with stable demand
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg" style={{ backgroundColor: '#FFFFFF', border: '1px solid #D4D4D4' }}>
                <AlertTriangle className="w-5 h-5" style={{ color: '#000000' }} />
              </div>
              <div>
                <h4 
                  className="font-semibold"
                  style={{ 
                    color: '#000000',
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    fontWeight: 500
                  }}
                >
                  Medium Risk
                </h4>
                <p className="text-sm" style={{ color: '#a3a3a3' }}>
                  Developing areas with growth potential
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg" style={{ backgroundColor: '#FFFFFF', border: '1px solid #D4D4D4' }}>
                <TrendingUp className="w-5 h-5" style={{ color: '#000000' }} />
              </div>
              <div>
                <h4 
                  className="font-semibold"
                  style={{ 
                    color: '#000000',
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    fontWeight: 500
                  }}
                >
                  High Growth
                </h4>
                <p className="text-sm" style={{ color: '#a3a3a3' }}>
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
