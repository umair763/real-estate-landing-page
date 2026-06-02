import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Star, TrendingUp, Home, Coffee, ShoppingBag, GraduationCap, Heart, Share2, ChevronRight } from "lucide-react";
import { MeshOverlay } from "../components/mesh.overlay";

export const NeighborhoodGuidesPage = () => {
  const [selectedCity, setSelectedCity] = useState("all");

  const cities = [
    { id: "all", name: "All Cities" },
    { id: "nyc", name: "New York City" },
    { id: "la", name: "Los Angeles" },
    { id: "miami", name: "Miami" },
    { id: "boston", name: "Boston" },
    { id: "dc", name: "Washington DC" }
  ];

  const neighborhoods = [
    {
      id: 1,
      name: "Downtown District",
      city: "nyc",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
      description: "The heart of the city with luxury high-rises and world-class amenities",
      rating: 4.8,
      avgPrice: "$850,000",
      propertyCount: 124,
      features: [
        { icon: <Home className="w-4 h-4" />, text: "Luxury Apartments" },
        { icon: <Coffee className="w-4 h-4" />, text: "Fine Dining" },
        { icon: <ShoppingBag className="w-4 h-4" />, text: "Shopping" },
        { icon: <GraduationCap className="w-4 h-4" />, text: "Top Schools" }
      ],
      stats: {
        safety: 92,
        walkability: 95,
        transit: 98
      }
    },
    {
      id: 2,
      name: "Waterfront",
      city: "miami",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800",
      description: "Stunning ocean views with beachfront properties and resort-style living",
      rating: 4.9,
      avgPrice: "$1,200,000",
      propertyCount: 89,
      features: [
        { icon: <Home className="w-4 h-4" />, text: "Ocean Views" },
        { icon: <Coffee className="w-4 h-4" />, text: "Beach Access" },
        { icon: <ShoppingBag className="w-4 h-4" />, text: "Marinas" },
        { icon: <GraduationCap className="w-4 h-4" />, text: "Private Schools" }
      ],
      stats: {
        safety: 88,
        walkability: 82,
        transit: 75
      }
    },
    {
      id: 3,
      name: "Tech Hub",
      city: "la",
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800",
      description: "Modern innovation center with tech companies and startup culture",
      rating: 4.7,
      avgPrice: "$680,000",
      propertyCount: 156,
      features: [
        { icon: <Home className="w-4 h-4" />, text: "Modern Lofts" },
        { icon: <Coffee className="w-4 h-4" />, text: "Tech Offices" },
        { icon: <ShoppingBag className="w-4 h-4" />, text: "Co-working" },
        { icon: <GraduationCap className="w-4 h-4" />, text: "Universities" }
      ],
      stats: {
        safety: 85,
        walkability: 88,
        transit: 90
      }
    },
    {
      id: 4,
      name: "Historic Quarter",
      city: "boston",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
      description: "Charming architecture with tree-lined streets and historic homes",
      rating: 4.6,
      avgPrice: "$720,000",
      propertyCount: 78,
      features: [
        { icon: <Home className="w-4 h-4" />, text: "Victorian Homes" },
        { icon: <Coffee className="w-4 h-4" />, text: "Cafes" },
        { icon: <ShoppingBag className="w-4 h-4" />, text: "Boutiques" },
        { icon: <GraduationCap className="w-4 h-4" />, text: "Ivy League" }
      ],
      stats: {
        safety: 94,
        walkability: 92,
        transit: 85
      }
    },
    {
      id: 5,
      name: "Suburban Heights",
      city: "dc",
      image: "https://images.unsplash.com/photo-1574362828402-fc9a8ba8dfb4?w=800",
      description: "Family-friendly communities with excellent schools and parks",
      rating: 4.5,
      avgPrice: "$550,000",
      propertyCount: 203,
      features: [
        { icon: <Home className="w-4 h-4" />, text: "Single Family" },
        { icon: <Coffee className="w-4 h-4" />, text: "Parks" },
        { icon: <ShoppingBag className="w-4 h-4" />, text: "Malls" },
        { icon: <GraduationCap className="w-4 h-4" />, text: "Top Schools" }
      ],
      stats: {
        safety: 96,
        walkability: 78,
        transit: 70
      }
    },
    {
      id: 6,
      name: "Lakeside",
      city: "nyc",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
      description: "Serene waterfront living with lake views and recreational activities",
      rating: 4.8,
      avgPrice: "$620,000",
      propertyCount: 67,
      features: [
        { icon: <Home className="w-4 h-4" />, text: "Lake Views" },
        { icon: <Coffee className="w-4 h-4" />, text: "Water Sports" },
        { icon: <ShoppingBag className="w-4 h-4" />, text: "Dining" },
        { icon: <GraduationCap className="w-4 h-4" />, text: "Community" }
      ],
      stats: {
        safety: 90,
        walkability: 85,
        transit: 80
      }
    }
  ];

  const filteredNeighborhoods = selectedCity === "all" 
    ? neighborhoods 
    : neighborhoods.filter(n => n.city === selectedCity);

  return (
    <section className="relative min-h-screen py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[#2B2B2B]" />
      <MeshOverlay opacity={0.15} />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E8D59E]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D4D4D4]/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#E8D59E]/20 text-[#E8D59E] rounded-full text-sm font-medium mb-4">
            Neighborhood Guides
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-[#FFFFFF] mb-4">
            Discover Your Perfect Neighborhood
          </h1>
          <p className="text-xl text-[#B3B3B3] max-w-2xl mx-auto">
            Explore detailed guides to help you find the community that matches your lifestyle
          </p>
        </motion.div>

        {/* City Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {cities.map((city) => (
            <button
              key={city.id}
              onClick={() => setSelectedCity(city.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCity === city.id
                  ? "bg-[#E8D59E] text-[#000000]"
                  : "bg-[#FFFFFF]/10 text-[#FFFFFF] hover:bg-[#FFFFFF]/20"
              }`}
            >
              {city.name}
            </button>
          ))}
        </motion.div>

        {/* Neighborhood Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredNeighborhoods.map((neighborhood, index) => (
            <motion.div
              key={neighborhood.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-[#2B2B2B]/80 to-[#000000]/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-[#D4D4D4]/10 group hover:border-[#D4D4D4]/20 transition-all"
            >
              <div className="relative h-64">
                <img
                  src={neighborhood.image}
                  alt={neighborhood.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                
                <div className="absolute top-4 right-4 flex gap-2">
                  <button className="p-2 bg-[#FFFFFF]/10 backdrop-blur-md rounded-full text-[#FFFFFF] hover:bg-[#FFFFFF]/20 transition-colors">
                    <Heart className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-[#FFFFFF]/10 backdrop-blur-md rounded-full text-[#FFFFFF] hover:bg-[#FFFFFF]/20 transition-colors">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1 px-2 py-1 bg-[#FFFFFF]/10 backdrop-blur-md rounded-full">
                      <Star className="w-4 h-4 text-[#E8D59E] fill-[#E8D59E]" />
                      <span className="text-[#FFFFFF] text-sm font-medium">{neighborhood.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 bg-[#FFFFFF]/10 backdrop-blur-md rounded-full">
                      <MapPin className="w-4 h-4 text-[#D4D4D4]" />
                      <span className="text-[#FFFFFF] text-sm">{neighborhood.propertyCount} Properties</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-[#FFFFFF]">{neighborhood.name}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-400 mb-4">{neighborhood.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-[#E8D59E]" />
                    <span className="text-[#FFFFFF] font-semibold">{neighborhood.avgPrice}</span>
                    <span className="text-gray-500 text-sm">avg. price</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  {neighborhood.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[#B3B3B3]">
                      <span className="text-[#D4D4D4]">{feature.icon}</span>
                      <span className="text-sm">{feature.text}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 mb-6">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-[#B3B3B3]">Safety</span>
                      <span className="text-[#FFFFFF]">{neighborhood.stats.safety}%</span>
                    </div>
                    <div className="h-2 bg-[#FFFFFF]/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#E8D59E] rounded-full transition-all"
                        style={{ width: `${neighborhood.stats.safety}%` }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Walkability</span>
                      <span className="text-white">{neighborhood.stats.walkability}%</span>
                    </div>
                    <div className="h-2 bg-[#FFFFFF]/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#D4D4D4] rounded-full transition-all"
                        style={{ width: `${neighborhood.stats.walkability}%` }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Transit</span>
                      <span className="text-white">{neighborhood.stats.transit}%</span>
                    </div>
                    <div className="h-2 bg-[#FFFFFF]/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#464646] rounded-full transition-all"
                        style={{ width: `${neighborhood.stats.transit}%` }}
                      />
                    </div>
                  </div>
                </div>

                <button className="w-full px-6 py-3 bg-[#FFFFFF]/10 border border-[#D4D4D4]/20 text-[#FFFFFF] rounded-lg font-medium hover:bg-[#FFFFFF]/20 transition-colors flex items-center justify-center gap-2">
                  Explore Neighborhood
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-gradient-to-br from-[#E8D59E]/20 to-[#D4D4D4]/20 backdrop-blur-xl rounded-3xl p-12 border border-[#D4D4D4]/10 text-center"
        >
          <h2 className="text-3xl font-bold text-[#FFFFFF] mb-4">
            Can't Find Your Neighborhood?
          </h2>
          <p className="text-[#B3B3B3] mb-6 max-w-2xl mx-auto">
            Our local experts can help you discover hidden gems and find the perfect community for your lifestyle.
          </p>
          <button className="px-8 py-3 bg-[#FFFFFF] text-[#000000] rounded-lg font-semibold hover:bg-[#D4D4D4] transition-colors">
            Connect with an Agent
          </button>
        </motion.div>
      </div>
    </section>
  );
};
