import { useState } from "react";
import { MapPin, Search, SlidersHorizontal, Home, Building2, Maximize2, Check, Heart } from "lucide-react";

export const BuyPage = () => {
  const [searchFilters, setSearchFilters] = useState({
    location: "",
    propertyType: "",
    budget: "",
    bedrooms: "",
  });

  const properties = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
      price: "$1,250,000",
      location: "DHA Phase 5",
      bedrooms: 4,
      bathrooms: 3,
      area: "2,800 sqft",
      verified: true,
      type: "House"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
      price: "$850,000",
      location: "Bahria Town",
      bedrooms: 3,
      bathrooms: 2,
      area: "1,800 sqft",
      verified: true,
      type: "Apartment"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
      price: "$2,100,000",
      location: "Gulberg III",
      bedrooms: 5,
      bathrooms: 4,
      area: "3,500 sqft",
      verified: true,
      type: "Villa"
    },
  ];

  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Search Section */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 mb-8 text-white">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Discover verified properties in 0% commission listings</h1>
          <p className="text-blue-100 mb-6">Search from thousands of verified properties</p>
          
          <div className="bg-white rounded-xl p-6 grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Location"
                value={searchFilters.location}
                onChange={(e) => setSearchFilters({...searchFilters, location: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <MapPin className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
            </div>
            <select className="px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Property Type</option>
              <option>House</option>
              <option>Apartment</option>
              <option>Villa</option>
            </select>
            <select className="px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Budget</option>
              <option>Under $500K</option>
              <option>$500K - $1M</option>
              <option>$1M - $2M</option>
              <option>$2M+</option>
            </select>
            <select className="px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Bedrooms</option>
              <option>1+</option>
              <option>2+</option>
              <option>3+</option>
              <option>4+</option>
            </select>
          </div>
          
          <button className="mt-4 w-full md:w-auto px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            <Search className="inline w-5 h-5 mr-2" />
            Search Properties
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                  <input type="range" className="w-full" />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>$100K</span>
                    <span>$5M+</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Area (sqft)</label>
                  <input type="range" className="w-full" />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>500</span>
                    <span>10000+</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">House</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Apartment</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Villa</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Property Listings */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Featured Properties</h2>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Sort by:</span>
                <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                  <option>Latest</option>
                  <option>Price Low → High</option>
                  <option>Price High → Low</option>
                  <option>Most Viewed</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {properties.map((property) => (
                <div key={property.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <img src={property.image} alt={property.location} className="w-full h-full object-cover" />
                    {property.verified && (
                      <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                        <Check className="w-3 h-3" />
                        Verified
                      </div>
                    )}
                    <button className="absolute top-3 right-3 bg-white/90 p-2 rounded-full hover:bg-white">
                      <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
                    </button>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-blue-600">{property.price}</h3>
                      <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">{property.type}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-3 flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {property.location}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 border-t pt-3">
                      <div className="flex items-center gap-1">
                        <Home className="w-4 h-4" />
                        {property.bedrooms} Beds
                      </div>
                      <div className="flex items-center gap-1">
                        <Building2 className="w-4 h-4" />
                        {property.bathrooms} Baths
                      </div>
                      <div className="flex items-center gap-1">
                        <Maximize2 className="w-4 h-4" />
                        {property.area}
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
