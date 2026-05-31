import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Search, SlidersHorizontal } from "lucide-react";
import { PropertyCard } from "../components/property.card";
import { MeshOverlay } from "../components/mesh.overlay";
import { Pagination } from "../components/pagination";

export const RentPage = () => {
  const [searchFilters, setSearchFilters] = useState({
    location: "",
    monthlyBudget: "",
    furnished: "",
    bedrooms: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const rentals = [
    {
      id: 1,
      title: "Modern Apartment in Downtown",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
      price: "$2,500/month",
      location: "Downtown District",
      beds: 2,
      baths: 2,
      sqft: "1,200",
      verified: true,
      featured: true
    },
    {
      id: 2,
      title: "Spacious Apartment in Midtown",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
      price: "$3,200/month",
      location: "Midtown Area",
      beds: 3,
      baths: 2,
      sqft: "1,800",
      verified: true,
      featured: true
    },
    {
      id: 3,
      title: "Cozy Studio in Suburban Heights",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
      price: "$1,800/month",
      location: "Suburban Heights",
      beds: 1,
      baths: 1,
      sqft: "800",
      verified: true
    },
    {
      id: 4,
      title: "Luxury Penthouse",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
      price: "$4,500/month",
      location: "City Center",
      beds: 3,
      baths: 3,
      sqft: "2,200",
      verified: true,
      featured: true
    },
    {
      id: 5,
      title: "Family Apartment",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      price: "$2,800/month",
      location: "Arts District",
      beds: 4,
      baths: 3,
      sqft: "2,400",
      verified: true
    },
    {
      id: 6,
      title: "Beachfront Apartment",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
      price: "$3,500/month",
      location: "Coastal Road",
      beds: 3,
      baths: 2,
      sqft: "1,600",
      verified: true,
      featured: true
    },
    {
      id: 7,
      title: "Mountain View Apartment",
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800",
      price: "$2,200/month",
      location: "Highland Valley",
      beds: 2,
      baths: 2,
      sqft: "1,100",
      verified: true,
      featured: true
    },
    {
      id: 8,
      title: "Urban Loft",
      image: "https://images.unsplash.com/photo-1502672023488-70e25813eb30?w=800",
      price: "$1,900/month",
      location: "Tech District",
      beds: 2,
      baths: 2,
      sqft: "1,000",
      verified: true
    },
    {
      id: 9,
      title: "Lakeside Apartment",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
      price: "$3,800/month",
      location: "Lakeside Village",
      beds: 3,
      baths: 2,
      sqft: "1,700",
      verified: true,
      featured: true
    }
  ];

  const totalPages = Math.ceil(rentals.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentRentals = rentals.slice(startIndex, endIndex);

  return (
    <section className="relative min-h-screen bg-[#555555] py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[#555555]" />
      <MeshOverlay opacity={0.15} />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Search Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-zinc-800/80 to-black/80 backdrop-blur-xl rounded-3xl p-8 mb-12 border border-white/10 text-white"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Perfect Rental</h1>
          <p className="text-gray-400 mb-6">Quick and easy rental search</p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 grid grid-cols-1 md:grid-cols-4 gap-4 border border-white/20">
            <div className="relative">
              <input
                type="text"
                placeholder="Location"
                value={searchFilters.location}
                onChange={(e) => setSearchFilters({...searchFilters, location: e.target.value})}
                className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg text-white placeholder-gray-400 "
              />
              <MapPin className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
            </div>
            <select className="px-4 py-3 bg-black/30 border border-white/20 rounded-lg text-white ">
              <option value="">Monthly Budget</option>
              <option>Under $1,000</option>
              <option>$1,000 - $2,000</option>
              <option>$2,000 - $3,000</option>
              <option>$3,000+</option>
            </select>
            <select className="px-4 py-3 bg-black/30 border border-white/20 rounded-lg text-white ">
              <option value="">Furnished</option>
              <option>Furnished</option>
              <option>Unfurnished</option>
              <option>Semi-Furnished</option>
            </select>
            <select className="px-4 py-3 bg-black/30 border border-white/20 rounded-lg text-white ">
              <option value="">Bedrooms</option>
              <option>Studio</option>
              <option>1+</option>
              <option>2+</option>
              <option>3+</option>
            </select>
          </div>
          
          <button className="mt-4 w-full md:w-auto px-8 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-colors">
            <Search className="inline w-5 h-5 mr-2" />
            Search Rentals
          </button>
        </motion.div>

        <div className="flex gap-6">
          {/* Filter Sidebar */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-gradient-to-br from-zinc-800/80 to-black/80 backdrop-blur-xl rounded-2xl p-6 border border-white/10 sticky top-20">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-white">Filters</h3>
                <SlidersHorizontal className="w-5 h-5 text-gray-400" />
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">Monthly Budget</label>
                  <div className="relative">
                    <input 
                      type="range" 
                      min="500" 
                      max="10000" 
                      className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-green-500"
                    />
                    <div className="flex justify-between text-xs text-gray-400 mt-2">
                      <span className="bg-white/5 px-2 py-1 rounded">$500</span>
                      <span className="bg-white/5 px-2 py-1 rounded">$10,000+</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">Amenities</label>
                  <div className="space-y-2">
                    <label className="flex items-center group cursor-pointer">
                      <div className="relative">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-5 h-5 border-2 border-white/20 rounded bg-white/5 peer-checked:bg-green-500 peer-checked:border-green-500 transition-all duration-200 group-hover:border-white/40" />
                        <svg className="w-3 h-3 text-white absolute top-1 left-1 opacity-0 peer-checked:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-300 ml-3 group-hover:text-white transition-colors">Pet Friendly</span>
                    </label>
                    <label className="flex items-center group cursor-pointer">
                      <div className="relative">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-5 h-5 border-2 border-white/20 rounded bg-white/5 peer-checked:bg-green-500 peer-checked:border-green-500 transition-all duration-200 group-hover:border-white/40" />
                        <svg className="w-3 h-3 text-white absolute top-1 left-1 opacity-0 peer-checked:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-300 ml-3 group-hover:text-white transition-colors">Family</span>
                    </label>
                    <label className="flex items-center group cursor-pointer">
                      <div className="relative">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-5 h-5 border-2 border-white/20 rounded bg-white/5 peer-checked:bg-green-500 peer-checked:border-green-500 transition-all duration-200 group-hover:border-white/40" />
                        <svg className="w-3 h-3 text-white absolute top-1 left-1 opacity-0 peer-checked:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-300 ml-3 group-hover:text-white transition-colors">Bachelor</span>
                    </label>
                    <label className="flex items-center group cursor-pointer">
                      <div className="relative">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-5 h-5 border-2 border-white/20 rounded bg-white/5 peer-checked:bg-green-500 peer-checked:border-green-500 transition-all duration-200 group-hover:border-white/40" />
                        <svg className="w-3 h-3 text-white absolute top-1 left-1 opacity-0 peer-checked:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-300 ml-3 group-hover:text-white transition-colors">Parking</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">Availability</label>
                  <div className="space-y-2">
                    <label className="flex items-center group cursor-pointer">
                      <div className="relative">
                        <input type="radio" name="availability" className="sr-only peer" />
                        <div className="w-5 h-5 border-2 border-white/20 rounded-full bg-white/5 peer-checked:bg-green-500 peer-checked:border-green-500 transition-all duration-200 group-hover:border-white/40" />
                        <div className="w-2.5 h-2.5 bg-white rounded-full absolute top-1.25 left-1.25 opacity-0 peer-checked:opacity-100 transition-opacity" />
                      </div>
                      <span className="text-sm text-gray-300 ml-3 group-hover:text-white transition-colors">Available Now</span>
                    </label>
                    <label className="flex items-center group cursor-pointer">
                      <div className="relative">
                        <input type="radio" name="availability" className="sr-only peer" />
                        <div className="w-5 h-5 border-2 border-white/20 rounded-full bg-white/5 peer-checked:bg-green-500 peer-checked:border-green-500 transition-all duration-200 group-hover:border-white/40" />
                        <div className="w-2.5 h-2.5 bg-white rounded-full absolute top-1.25 left-1.25 opacity-0 peer-checked:opacity-100 transition-opacity" />
                      </div>
                      <span className="text-sm text-gray-300 ml-3 group-hover:text-white transition-colors">Next Month</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Rental Listings */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-white">Available Rentals</h2>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400">Sort by:</span>
                <select className="px-3 py-2 bg-black/30 border border-white/20 rounded-lg text-sm text-white ">
                  <option>Latest</option>
                  <option>Price Low → High</option>
                  <option>Price High → Low</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {currentRentals.map((rental, index) => (
                <motion.div
                  key={rental.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <PropertyCard property={rental} />
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
    </section>
  );
};
