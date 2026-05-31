import { useState, useRef, createContext, useContext } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "../lib/utils";
import { MapPin, Bed, Bath, Square, CheckCircle2, Heart, Crown } from "lucide-react";

const CardHoverRevealContext = createContext();

const CardHoverRevealProvider = ({ children, isHovered, setIsHovered }) => {
  return (
    <CardHoverRevealContext.Provider value={{ isHovered, setIsHovered }}>
      {children}
    </CardHoverRevealContext.Provider>
  );
};

const useCardHoverRevealContext = () => {
  const context = useContext(CardHoverRevealContext);
  if (!context) {
    throw new Error("useCardHoverRevealContext must be used within CardHoverRevealProvider");
  }
  return context;
};

const CardHoverReveal = ({ className, children, ...props }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <CardHoverRevealProvider isHovered={isHovered} setIsHovered={setIsHovered}>
      <div
        className={cn("relative overflow-hidden", className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {children}
      </div>
    </CardHoverRevealProvider>
  );
};

const CardHoverRevealMain = ({ className, initialScale = 1, hoverScale = 1.05, ...props }) => {
  const { isHovered } = useCardHoverRevealContext();
  return (
    <div
      className={cn("size-full transition-transform duration-300", className)}
      style={
        isHovered
          ? { transform: `scale(${hoverScale})`, ...props.style }
          : { transform: `scale(${initialScale})`, ...props.style }
      }
      {...props}
    />
  );
};

const CardHoverRevealContent = ({ className, ...props }) => {
  const { isHovered } = useCardHoverRevealContext();
  return (
    <div
      className={cn(
        "absolute inset-[auto_1.5rem_1.5rem] p-6 backdrop-blur-lg transition-all duration-500 ease-in-out",
        className
      )}
      style={
        isHovered
          ? { translate: "0%", opacity: 1, ...props.style }
          : { translate: "0% 120%", opacity: 0, ...props.style }
      }
      {...props}
    />
  );
};

const Badge = ({ label, variant = "primary", size = "medium", icon, className }) => {
  const variantStyles = {
    primary: "bg-black/60 text-white",
    success: "bg-green-600 text-white",
    warning: "bg-yellow-500 text-white",
  };

  const sizeStyles = {
    small: "text-xs px-2 py-1",
    medium: "text-sm px-3 py-2",
    large: "text-base px-4 py-3",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={cn(
        "rounded-xl font-medium shadow-lg inline-flex items-center gap-2 backdrop-blur-sm",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{label}</span>
    </motion.div>
  );
};

const PropertyCard = ({ property }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <CardHoverReveal className="h-[500px] rounded-2xl group">
      <CardHoverRevealMain hoverScale={1.03}>
        <div className="relative h-full w-full bg-gradient-to-br from-zinc-900 to-black rounded-2xl overflow-hidden">
          <div className="absolute inset-0 opacity-60">
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

          {/* Top badges */}
          <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
            <div className="flex gap-2 items-center">
              {property.verified && (
                <CheckCircle2 className="w-5 h-5 text-green-500" />
              )}

              {property.featured && (
                <Crown
                  className="w-5 h-5 text-yellow-500"
                  fill="currentColor"
                />
              )}
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsFavorite(!isFavorite)}
              className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg"
            >
              <Heart
                className={cn(
                  "w-5 h-5 transition-colors",
                  isFavorite ? "fill-red-500 text-red-500" : "text-gray-700"
                )}
              />
            </motion.button>
          </div>

          {/* Price badge */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2">
            <Badge
              label={property.price}
              variant="primary"
              size="large"
              className="text-lg font-bold"
            />
          </div>
        </div>
      </CardHoverRevealMain>

      <CardHoverRevealContent className="space-y-4 rounded-2xl bg-black/90 backdrop-blur-xl border border-white/10">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-white">{property.title}</h3>
          <div className="flex items-center gap-2 text-gray-300">
            <MapPin className="w-4 h-4" />
            <p className="text-sm">{property.location}</p>
          </div>
        </div>

        <div className="flex gap-4 pt-2 border-t border-white/10">
          <div className="flex items-center gap-2 text-gray-300">
            <Bed className="w-5 h-5" />
            <span className="text-sm font-medium">{property.beds} Beds</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Bath className="w-5 h-5" />
            <span className="text-sm font-medium">{property.baths} Baths</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Square className="w-5 h-5" />
            <span className="text-sm font-medium">{property.sqft} sqft</span>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-white text-black py-3 rounded-lg font-semibold shadow-lg hover:bg-white/90 transition-colors"
        >
          View Details
        </motion.button>
      </CardHoverRevealContent>
    </CardHoverReveal>
  );
};

export const FeaturedProperties = () => { 
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  const properties = [
    {
      id: 1,
      title: "Luxury Villa in Downtown",
      location: "Downtown District",
      price: "$1,250,000",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
      beds: 4,
      baths: 3,
      sqft: "2,800",
      verified: true,
      featured: true,
    },
    {
      id: 2,
      title: "Modern Apartment with City View",
      location: "Midtown Area",
      price: "$850,000",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
      beds: 2,
      baths: 2,
      sqft: "1,400",
      verified: true,
      featured: true,
    },
    {
      id: 3,
      title: "Spacious Family Home",
      location: "Suburban Heights",
      price: "$675,000",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
      beds: 5,
      baths: 4,
      sqft: "3,200",
      verified: true,
    },
    {
      id: 4,
      title: "Penthouse Suite",
      location: "City Center",
      price: "$2,100,000",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
      beds: 3,
      baths: 3,
      sqft: "2,200",
      verified: true,
      featured: true,
    },
    {
      id: 5,
      title: "Cozy Studio Apartment",
      location: "Arts District",
      price: "$320,000",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      beds: 1,
      baths: 1,
      sqft: "650",
      verified: true,
    },
    {
      id: 6,
      title: "Beachfront Property",
      location: "Coastal Road",
      price: "$1,850,000",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
      beds: 4,
      baths: 3,
      sqft: "2,600",
      verified: true,
      featured: true,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-black py-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#B3B3B3]" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <motion.div
        style={{ opacity, scale }}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-black"
          >
            Featured Properties
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-black max-w-2xl mx-auto"
          >
            Discover our handpicked selection of luxury properties in the most prestigious locations
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <PropertyCard property={property} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:bg-white/90 transition-colors"
          >
            View All Properties
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};
