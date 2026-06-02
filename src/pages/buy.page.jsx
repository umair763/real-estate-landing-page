import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SlidersHorizontal } from "lucide-react";
// import { MapPin, Search, SlidersHorizontal } from "lucide-react";
import { PropertyCard } from "../components/property.card";
import { Pagination } from "../components/pagination";
import { MortgageCalculator } from "../components/mortgage.calculator";
import { propertyService } from "../services/property.service";

export const BuyPage = () => {
  // const [searchFilters, setSearchFilters] = useState({
  //   location: "",
  //   propertyType: "",
  //   budget: "",
  //   bedrooms: "",
  // });

  const [currentPage, setCurrentPage] = useState(1);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const data = await propertyService.getPropertiesByCategory("buy");
        const formattedProperties = data.map(propertyService.formatPropertyForCard);
        setProperties(formattedProperties);
      } catch (err) {
        console.error("Error fetching properties:", err);
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
  const currentProperties = properties.slice(startIndex, endIndex);

  if (loading) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: "#B3B3B3" }}
      >
        <div className="text-center">
          <div
            className="animate-spin rounded-full h-12 w-12 border-b-2 mx-auto"
            style={{ borderColor: "#2B2B2B" }}
          ></div>
          <p className="mt-4" style={{ color: "#B3B3B3" }}>
            Loading properties...
          </p>
        </div>
      </div>
    );
  }

  return (
    <section
      className="relative min-h-screen py-24 px-6"
      style={{ backgroundColor: '#D4D4D4' }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Search Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl p-8 mb-12"
          style={{ backgroundColor: '#f2f2f2', border: '1px solid #d9d9d9' }}
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
            Discover verified properties in 0% commission listings
          </h1>
          <p className="mb-6" style={{ color: '#a3a3a3' }}>Search from thousands of verified properties</p>
          
          <div className="rounded-xl p-6 grid grid-cols-1 md:grid-cols-4 gap-4" style={{ backgroundColor: '#ffffff', border: '1px solid #d9d9d9' }}>
            <div className="relative">
              <input
                type="text"
                placeholder="Location"
                value={searchFilters.location}
                onChange={(e) => setSearchFilters({...searchFilters, location: e.target.value})}
                className="w-full px-4 py-3 rounded-lg"
                style={{ 
                  backgroundColor: 'rgba(26, 26, 26, 0.05)',
                  border: '1px solid #d9d9d9',
                  color: '#1a1a1a'
                }}
              />
              <MapPin className="absolute right-3 top-3 w-5 h-5" style={{ color: '#a3a3a3' }} />
            </div>
            <select className="px-4 py-3 rounded-lg" style={{ 
              backgroundColor: 'rgba(26, 26, 26, 0.05)',
              border: '1px solid #d9d9d9',
              color: '#1a1a1a'
            }}>
              <option value="">Property Type</option>
              <option>House</option>
              <option>Apartment</option>
              <option>Villa</option>
            </select>
            <select className="px-4 py-3 rounded-lg" style={{ 
              backgroundColor: 'rgba(26, 26, 26, 0.05)',
              border: '1px solid #d9d9d9',
              color: '#1a1a1a'
            }}>
              <option value="">Budget</option>
              <option>Under $500K</option>
              <option>$500K - $1M</option>
              <option>$1M - $2M</option>
              <option>$2M+</option>
            </select>
            <select className="px-4 py-3 rounded-lg" style={{ 
              backgroundColor: 'rgba(26, 26, 26, 0.05)',
              border: '1px solid #d9d9d9',
              color: '#1a1a1a'
            }}>
              <option value="">Bedrooms</option>
              <option>1+</option>
              <option>2+</option>
              <option>3+</option>
              <option>4+</option>
            </select>
          </div>
          
          <button 
            className="mt-4 w-full md:w-auto px-8 py-3 font-semibold transition-colors inline-flex items-center"
            style={{ 
              backgroundColor: '#fbff2b',
              color: '#1a1a1a',
              borderRadius: '10px'
            }}
          >
            <Search className="inline w-5 h-5 mr-2" />
            Search Properties
          </button>
        </motion.div> */}

        <div className="flex gap-6">
          {/* Filter Sidebar */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div
              className="rounded-2xl p-6 sticky top-20"
              style={{ backgroundColor: "#F7E6CA", border: "1px solid #D4D4D4" }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3
                  className="font-semibold"
                  style={{
                    color: "#000000",
                    fontFamily: "system-ui, -apple-system, sans-serif",
                    fontWeight: 500,
                  }}
                >
                  Filters
                </h3>
                <SlidersHorizontal className="w-5 h-5" style={{ color: "#B3B3B3" }} />
              </div>

              <div className="space-y-6">
                <div>
                  <label
                    className="block text-sm font-medium mb-3"
                    style={{ color: "#000000" }}
                  >
                    Price Range
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      min="100"
                      max="5000"
                      className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                      style={{ backgroundColor: "#d9d9d9", accentColor: "#fbff2b" }}
                    />
                    <div className="flex justify-between text-xs mt-2">
                      <span
                        className="px-2 py-1 rounded"
                        style={{ backgroundColor: "#FFFFFF", color: "#000000" }}
                      >
                        $100K
                      </span>
                      <span
                        className="px-2 py-1 rounded"
                        style={{ backgroundColor: "#FFFFFF", color: "#000000" }}
                      >
                        $5M+
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    className="block text-sm font-medium mb-3"
                    style={{ color: "#000000" }}
                  >
                    Area (sqft)
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      min="500"
                      max="10000"
                      className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                      style={{ backgroundColor: "#d9d9d9", accentColor: "#fbff2b" }}
                    />
                    <div className="flex justify-between text-xs mt-2">
                      <span
                        className="px-2 py-1 rounded"
                        style={{ backgroundColor: "#FFFFFF", color: "#000000" }}
                      >
                        500
                      </span>
                      <span
                        className="px-2 py-1 rounded"
                        style={{ backgroundColor: "#FFFFFF", color: "#000000" }}
                      >
                        10000+
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    className="block text-sm font-medium mb-3"
                    style={{ color: "#000000" }}
                  >
                    Property Type
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center group cursor-pointer">
                      <div className="relative">
                        <input type="checkbox" className="sr-only peer" />
                        <div
                          className="w-5 h-5 border-2 rounded bg-[#FFFFFF] peer-checked:bg-[#E8D59E] peer-checked:border-[#E8D59E] transition-all duration-200"
                          style={{ borderColor: "#D4D4D4" }}
                        />
                        <svg
                          className="w-3 h-3 absolute top-1 left-1 opacity-0 peer-checked:opacity-100 transition-opacity"
                          style={{ color: "#000000" }}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span
                        className="text-sm ml-3 transition-colors"
                        style={{ color: "#000000" }}
                      >
                        House
                      </span>
                    </label>
                    <label className="flex items-center group cursor-pointer">
                      <div className="relative">
                        <input type="checkbox" className="sr-only peer" />
                        <div
                          className="w-5 h-5 border-2 rounded bg-[#FFFFFF] peer-checked:bg-[#E8D59E] peer-checked:border-[#E8D59E] transition-all duration-200"
                          style={{ borderColor: "#D4D4D4" }}
                        />
                        <svg
                          className="w-3 h-3 absolute top-1 left-1 opacity-0 peer-checked:opacity-100 transition-opacity"
                          style={{ color: "#000000" }}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span
                        className="text-sm ml-3 transition-colors"
                        style={{ color: "#000000" }}
                      >
                        Apartment
                      </span>
                    </label>
                    <label className="flex items-center group cursor-pointer">
                      <div className="relative">
                        <input type="checkbox" className="sr-only peer" />
                        <div
                          className="w-5 h-5 border-2 rounded bg-[#FFFFFF] peer-checked:bg-[#E8D59E] peer-checked:border-[#E8D59E] transition-all duration-200"
                          style={{ borderColor: "#D4D4D4" }}
                        />
                        <svg
                          className="w-3 h-3 absolute top-1 left-1 opacity-0 peer-checked:opacity-100 transition-opacity"
                          style={{ color: "#000000" }}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span
                        className="text-sm ml-3 transition-colors"
                        style={{ color: "#000000" }}
                      >
                        Villa
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Property Listings */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h2
                className="text-3xl font-bold"
                style={{
                  color: "#000000",
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  fontWeight: 500,
                  letterSpacing: "-0.03em",
                }}
              >
                Featured Properties
              </h2>
              <div className="flex items-center gap-2">
                <span className="text-sm" style={{ color: "#B3B3B3" }}>
                  Sort by:
                </span>
                <select
                  className="px-3 py-2 rounded-lg text-sm"
                  style={{
                    backgroundColor: "rgba(43, 43, 43, 0.05)",
                    border: "1px solid #D4D4D4",
                    color: "#000000",
                  }}
                >
                  <option>Latest</option>
                  <option>Price Low → High</option>
                  <option>Price High → Low</option>
                  <option>Most Viewed</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {currentProperties.map((property, index) => (
                <motion.div
                  key={property.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <PropertyCard property={property} />
                </motion.div>
              ))}
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>

      <MortgageCalculator />
    </section>
  );
};
