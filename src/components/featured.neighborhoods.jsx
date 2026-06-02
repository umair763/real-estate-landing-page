import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";

export const FeaturedNeighborhoods = () => {
  const neighborhoods = [
    {
      id: 1,
      name: "Downtown District",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
      description: "Urban living at its finest",
      propertyCount: 124
    },
    {
      id: 2,
      name: "Waterfront",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800",
      description: "Stunning ocean views",
      propertyCount: 89
    },
    {
      id: 3,
      name: "Tech Hub",
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800",
      description: "Modern innovation center",
      propertyCount: 156
    },
    {
      id: 4,
      name: "Historic Quarter",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
      description: "Charming architecture",
      propertyCount: 78
    },
    {
      id: 5,
      name: "Suburban Heights",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
      description: "Family-friendly communities",
      propertyCount: 203
    },
    {
      id: 6,
      name: "Lakeside",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
      description: "Serene waterfront living",
      propertyCount: 67
    }
  ];

  return (
    <section className="relative py-20 px-6" style={{ backgroundColor: '#B3B3B3' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ 
              color: '#000000',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontWeight: 360,
              letterSpacing: '0.02em',
              lineHeight: 1.1
            }}
          >
            Explore Neighborhoods
          </h2>
          <p 
            className="text-lg max-w-2xl mx-auto"
            style={{ 
              color: '#000000',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontWeight: 400,
              letterSpacing: '0.01em',
              lineHeight: 1.5
            }}
          >
            Discover the perfect neighborhood that matches your lifestyle
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {neighborhoods.map((neighborhood, index) => (
            <motion.div
              key={neighborhood.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden cursor-pointer"
              style={{ borderRadius: '0px', border: '1px solid #B3B3B3' }}
            >
              <div className="aspect-[4/3] relative">
                <img
                  src={neighborhood.image}
                  alt={neighborhood.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/80 via-[#2B2B2B]/40 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-2" style={{ color: '#B3B3B3' }}>
                    <MapPin className="w-4 h-4" style={{ color: '#E8D59E' }} />
                    <span className="text-sm">{neighborhood.propertyCount} Properties</span>
                  </div>
                  <h3 
                    className="text-2xl font-bold mb-2 transition-colors"
                    style={{ 
                      color: '#F7E6CA',
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      fontWeight: 480,
                      letterSpacing: '0.01em'
                    }}
                  >
                    {neighborhood.name}
                  </h3>
                  <p className="text-sm mb-4" style={{ color: '#B3B3B3' }}>
                    {neighborhood.description}
                  </p>
                  <div className="flex items-center gap-2 group-hover:gap-4 transition-all" style={{ color: '#F7E6CA' }}>
                    <span className="text-sm font-medium">Explore</span>
                    <ArrowRight className="w-4 h-4" style={{ color: '#E8D59E' }} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button 
            className="px-8 py-4 font-semibold inline-flex items-center gap-2 transition-all"
            style={{ 
              backgroundColor: '#E8D59E',
              color: '#000000',
              borderRadius: '32px',
              border: '1px solid #FFFF'
            }}
          >
            View All Neighborhoods
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
