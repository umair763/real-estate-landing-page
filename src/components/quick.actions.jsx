import { useState, createContext, useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, Key, TrendingUp, DollarSign } from "lucide-react";
import { MeshOverlay } from "./mesh.overlay";
import { cn } from "../lib/utils";

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

export const QuickActions = () => {
  const quickActions = [
    {
      title: "Buy",
      description: "Find your dream property with our extensive listings and expert guidance",
      icon: <Home className="w-6 h-6" />,
      gradient: "from-[#E8D59E]/20 via-[#F7E6CA]/20 to-[#D4D4D4]/20",
      glowColor: "rgba(232, 213, 158, 0.4)",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
      route: "/properties/buy"
    },
    {
      title: "Rent",
      description: "Discover flexible rental options tailored to your lifestyle and budget",
      icon: <Key className="w-6 h-6" />,
      gradient: "from-[#E8D59E]/20 via-[#F7E6CA]/20 to-[#D4D4D4]/20",
      glowColor: "rgba(232, 213, 158, 0.4)",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop",
      route: "/properties/rent"
    },
    {
      title: "Sell",
      description: "Maximize your property value with our proven marketing strategies",
      icon: <TrendingUp className="w-6 h-6" />,
      gradient: "from-[#E8D59E]/20 via-[#F7E6CA]/20 to-[#D4D4D4]/20",
      glowColor: "rgba(232, 213, 158, 0.4)",
      image: "https://images.unsplash.com/photo-1560184897-ae75f418493e?q=80&w=800&auto=format&fit=crop",
      route: "/properties/sell"
    },
    {
      title: "Invest",
      description: "Build wealth through strategic real estate investment opportunities",
      icon: <DollarSign className="w-6 h-6" />,
      gradient: "from-[#E8D59E]/20 via-[#F7E6CA]/20 to-[#D4D4D4]/20",
      glowColor: "rgba(232, 213, 158, 0.4)",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
      route: "/invest/plans"
    }
  ];

  return (
    <section className="relative min-h-screen w-full bg-[#464646] py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[#2B2B2B]" />
      <MeshOverlay opacity={0.15} />
      
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E8D59E]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#F7E6CA]/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Quick Actions
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Your gateway to premium real estate experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action, index) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <CardHoverReveal className="h-[450px] rounded-2xl group">
                <CardHoverRevealMain hoverScale={1.03}>
                  <div className="relative h-full w-full bg-gradient-to-br from-[#2B2B2B] to-[#000000] rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 opacity-40">
                      <img
                        src={action.image}
                        alt={action.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className={cn(
                      "absolute inset-0 bg-gradient-to-br opacity-60",
                      action.gradient
                    )} />
                    
                    <div 
                      className="absolute bottom-0 left-0 right-0 h-1/2 blur-3xl transition-opacity duration-500 group-hover:opacity-80"
                      style={{
                        background: `radial-gradient(ellipse at bottom, ${action.glowColor}, transparent 70%)`
                      }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/80 via-[#2B2B2B]/20 to-transparent" />

                    <div className="relative h-full flex flex-col p-8">
                      <motion.div
                        className="w-14 h-14 rounded-xl flex items-center justify-center mb-auto"
                        style={{
                          background: "linear-gradient(135deg, rgba(247, 230, 202, 0.1) 0%, rgba(247, 230, 202, 0.05) 100%)",
                          backdropFilter: "blur(10px)",
                          border: "1px solid rgba(212, 212, 212, 0.2)"
                        }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="text-[#F7E6CA]">
                          {action.icon}
                        </div>
                      </motion.div>

                      <div className="mt-auto">
                        <h3 className="text-3xl font-bold text-[#F7E6CA] mb-2 tracking-tight">
                          {action.title}
                        </h3>
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-[2px]">
                      <div 
                        className="h-full w-full opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: `linear-gradient(90deg, transparent, ${action.glowColor}, transparent)`,
                          boxShadow: `0 0 20px ${action.glowColor}`
                        }}
                      />
                    </div>
                  </div>
                </CardHoverRevealMain>

                <CardHoverRevealContent className="rounded-2xl bg-[#2B2B2B]/90 backdrop-blur-xl border border-[#D4D4D4]/10">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="text-[#F7E6CA]">
                        {action.icon}
                      </div>
                      <h4 className="text-xl font-semibold text-[#F7E6CA]">
                        {action.title}
                      </h4>
                    </div>
                    
                    <p className="text-[#B3B3B3] text-sm leading-relaxed">
                      {action.description}
                    </p>

                    <Link to={action.route}>
                      <motion.button
                        className="w-full mt-4 px-6 py-3 rounded-lg font-medium text-[#F7E6CA] relative overflow-hidden group/btn cursor-pointer"
                        style={{
                          background: "linear-gradient(135deg, rgba(247, 230, 202, 0.1) 0%, rgba(247, 230, 202, 0.05) 100%)",
                          border: "1px solid rgba(212, 212, 212, 0.2)"
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="relative z-10">Get Started</span>
                        <div 
                          className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                          style={{
                            background: `linear-gradient(135deg, ${action.glowColor}, transparent)`
                          }}
                        />
                      </motion.button>
                    </Link>
                  </div>
                </CardHoverRevealContent>
              </CardHoverReveal>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
