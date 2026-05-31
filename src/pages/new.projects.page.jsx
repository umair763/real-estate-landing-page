import { useState } from "react";
import { MapPin, Search, SlidersHorizontal, Building2, Calendar, Check, Heart } from "lucide-react";

export const NewProjectsPage = () => {
  const [searchFilters, setSearchFilters] = useState({
    city: "",
    completionStatus: "",
    budget: "",
    developer: "",
  });

  const projects = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
      name: "Skyline Residences",
      developer: "Elite Developers",
      completion: 75,
      deliveryDate: "Q4 2025",
      startingPrice: "$450,000",
      location: "Downtown District",
      verified: true
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1574362828402-fc9a8ba8dfb4?w=800",
      name: "Green Valley Heights",
      developer: "Prime Construction",
      completion: 45,
      deliveryDate: "Q2 2026",
      startingPrice: "$320,000",
      location: "Suburban Area",
      verified: true
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
      name: "Marina Bay Towers",
      developer: "Oceanfront Properties",
      completion: 90,
      deliveryDate: "Q1 2025",
      startingPrice: "$680,000",
      location: "Coastal Road",
      verified: true
    },
  ];

  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-8 mb-8 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">New Projects & Developments</h1>
          <p className="text-purple-100 mb-6">Discover upcoming residential and commercial projects</p>
          
          <div className="bg-white rounded-xl p-6 grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="City"
                value={searchFilters.city}
                onChange={(e) => setSearchFilters({...searchFilters, city: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <MapPin className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
            </div>
            <select className="px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option value="">Completion Status</option>
              <option>Under Construction</option>
              <option>Near Completion</option>
              <option>Ready to Move</option>
            </select>
            <select className="px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option value="">Budget</option>
              <option>Under $300K</option>
              <option>$300K - $500K</option>
              <option>$500K - $1M</option>
              <option>$1M+</option>
            </select>
            <select className="px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option value="">Developer</option>
              <option>Elite Developers</option>
              <option>Prime Construction</option>
              <option>Oceanfront Properties</option>
            </select>
          </div>
          
          <button className="mt-4 w-full md:w-auto px-8 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            <Search className="inline w-5 h-5 mr-2" />
            Search Projects
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">Completion Status</label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Under Construction</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Near Completion</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Ready to Move</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Unit Type</label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Studio</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">2 Bedroom</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">3 Bedroom</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Commercial</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Listings */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Featured Projects</h2>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Sort by:</span>
                <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                  <option>Latest</option>
                  <option>Completion Date</option>
                  <option>Price Low → High</option>
                  <option>Price High → Low</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
                    {project.verified && (
                      <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                        <Check className="w-3 h-3" />
                        Verified
                      </div>
                    )}
                    <div className="absolute bottom-3 right-3 bg-purple-600 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                      {project.completion}% Complete
                    </div>
                    <button className="absolute top-3 right-3 bg-white/90 p-2 rounded-full hover:bg-white">
                      <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
                    </button>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{project.name}</h3>
                    <p className="text-gray-600 text-sm mb-2 flex items-center gap-1">
                      <Building2 className="w-4 h-4" />
                      {project.developer}
                    </p>
                    <p className="text-gray-600 text-sm mb-3 flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </p>
                    
                    <div className="space-y-2 mb-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Delivery:</span>
                        <span className="font-medium text-gray-900 flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {project.deliveryDate}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Starting Price:</span>
                        <span className="font-bold text-purple-600">{project.startingPrice}</span>
                      </div>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                      <div 
                        className="bg-purple-600 h-2 rounded-full transition-all" 
                        style={{ width: `${project.completion}%` }}
                      ></div>
                    </div>

                    <button className="w-full py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                      View Details
                    </button>
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
