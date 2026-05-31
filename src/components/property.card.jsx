import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";
import { MapPin, Bed, Bath, Square, CheckCircle2, Heart, Crown } from "lucide-react";
import { createContext, useContext } from "react";

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

export const PropertyCard = ({ property }) => {
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
          className="w-full bg-white text-black py-3 rounded-lg font-semibold shadow-lg hover:bg-white/90 transition-colors cursor-pointer"
        >
          View Details
        </motion.button>
      </CardHoverRevealContent>
    </CardHoverReveal>
  );
};
