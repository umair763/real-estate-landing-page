import { useState } from "react";
import { MapPin, Search, SlidersHorizontal, Home, Building2, Maximize2, Check, Heart, DollarSign } from "lucide-react";

export const RentPage = () => {
  const [searchFilters, setSearchFilters] = useState({
    location: "",
    monthlyBudget: "",
    furnished: "",
    bedrooms: "",
  });

  const rentals = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
      rent: "$2,500/month",
      deposit: "$5,000",
      location: "Downtown District",
      bedrooms: 2,
      bathrooms: 2,
      area: "1,200 sqft",
      verified: true,
      furnished: true,
      availability: "Available Now"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
      rent: "$3,200/month",
      deposit: "$6,400",
      location: "Midtown Area",
      bedrooms: 3,
      bathrooms: 2,
      area: "1,800 sqft",
      verified: true,
      furnished: false,
      availability: "Available Next Month"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
      rent: "$1,800/month",
      deposit: "$3,600",
      location: "Suburban Heights",
      bedrooms: 1,
      bathrooms: 1,
      area: "800 sqft",
      verified: true,
      furnished: true,
      availability: "Available Now"
    },
  ];

  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Search Section */}
        <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-2xl p-8 mb-8 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Find Your Perfect Rental</h1>
          <p className="text-green-100 mb-6">Quick and easy rental search</p>
          
          <div className="bg-white rounded-xl p-6 grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Location"
                value={searchFilters.location}
                onChange={(e) => setSearchFilters({...searchFilters, location: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <MapPin className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
            </div>
            <select className="px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500">
              <option value="">Monthly Budget</option>
              <option>Under $1,000</option>
              <option>$1,000 - $2,000</option>
              <option>$2,000 - $3,000</option>
              <option>$3,000+</option>
            </select>
            <select className="px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500">
              <option value="">Furnished</option>
              <option>Furnished</option>
              <option>Unfurnished</option>
              <option>Semi-Furnished</option>
            </select>
            <select className="px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500">
              <option value="">Bedrooms</option>
              <option>Studio</option>
              <option>1+</option>
              <option>2+</option>
              <option>3+</option>
            </select>
          </div>
          
          <button className="mt-4 w-full md:w-auto px-8 py-3 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            <Search className="inline w-5 h-5 mr-2" />
            Search Rentals
          </button>
        </div>

        <div className="flex gap-6">
          {/* Filter Sidebar */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white rounded-xl p-6 shadow-lg sticky top-20">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Filters</h3>
                <SlidersHorizontal className="w-5 h-5 text-gray-600" />
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Budget</label>
                  <input type="range" className="w-full" />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>$500</span>
                    <span>$10,000+</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Amenities</label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Pet Friendly</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Family</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Bachelor</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Parking</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="radio" name="availability" className="mr-2" />
                      <span className="text-sm">Available Now</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="availability" className="mr-2" />
                      <span className="text-sm">Next Month</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Rental Listings */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Available Rentals</h2>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Sort by:</span>
                <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                  <option>Latest</option>
                  <option>Price Low → High</option>
                  <option>Price High → Low</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {rentals.map((rental) => (
                <div key={rental.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <img src={rental.image} alt={rental.location} className="w-full h-full object-cover" />
                    {rental.verified && (
                      <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                        <Check className="w-3 h-3" />
                        Verified
                      </div>
                    )}
                    <div className={`absolute bottom-3 left-3 px-2 py-1 rounded-full text-xs ${
                      rental.availability === "Available Now" ? "bg-green-500 text-white" : "bg-yellow-500 text-white"
                    }`}>
                      {rental.availability}
                    </div>
                    <button className="absolute top-3 right-3 bg-white/90 p-2 rounded-full hover:bg-white">
                      <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
                    </button>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-green-600">{rental.rent}</h3>
                      <span className={`text-xs px-2 py-1 rounded ${rental.furnished ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-600"}`}>
                        {rental.furnished ? "Furnished" : "Unfurnished"}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2 flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {rental.location}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        Deposit: {rental.deposit}
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-500 border-t pt-3">
                      <div className="flex items-center gap-1">
                        <Home className="w-4 h-4" />
                        {rental.bedrooms} Beds
                      </div>
                      <div className="flex items-center gap-1">
                        <Building2 className="w-4 h-4" />
                        {rental.bathrooms} Baths
                      </div>
                      <div className="flex items-center gap-1">
                        <Maximize2 className="w-4 h-4" />
                        {rental.area}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
