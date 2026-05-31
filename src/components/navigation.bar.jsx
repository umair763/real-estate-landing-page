import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, Home } from "lucide-react";

export const NavigationBar = ({ transparent = false }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (dropdown) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  };

  const menuItems = {
    properties: [
      { name: "Buy", path: "/properties/buy" },
      { name: "Rent", path: "/properties/rent" },
      { name: "Sell", path: "/sell" },
    ],
    invest: [
      { name: "Investment Plans", path: "/invest/plans" },
    ],
  };

  if (transparent) {
    return (
      <nav className="absolute top-0 z-20 flex h-20 w-full items-center justify-between px-6 md:px-12">
        <div className="flex items-center gap-2">
          <Home className="h-8 w-8 text-white" />
          <span className="text-xl font-bold text-white">EstatePro</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {/* Properties Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => handleMouseEnter("properties")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center space-x-1 text-white/80 hover:text-white transition-colors">
              <span>Properties</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <AnimatePresence>
              {openDropdown === "properties" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-2 w-48 bg-black/60 backdrop-blur-md border border-white/20 rounded-lg shadow-2xl py-2 z-50"
                >
                  {menuItems.properties.map((item) => (
                    <a
                      key={item.name}
                      href={item.path}
                      className="block px-4 py-2 text-white/90 hover:bg-white/20 hover:text-white transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Invest Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => handleMouseEnter("invest")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center space-x-1 text-white/80 hover:text-white transition-colors">
              <span>Invest</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <AnimatePresence>
              {openDropdown === "invest" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-2 w-48 bg-black/60 backdrop-blur-md border border-white/20 rounded-lg shadow-2xl py-2 z-50"
                >
                  {menuItems.invest.map((item) => (
                    <a
                      key={item.name}
                      href={item.path}
                      className="block px-4 py-2 text-white/90 hover:bg-white/20 hover:text-white transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-white/80 hover:text-white transition-colors">
            <Search className="h-5 w-5" />
          </button>
          <button className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 rounded-lg transition-colors text-sm font-medium">
            Login
          </button>
        </div>
      </nav>
    );
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-blue-600">🏠 EstatePro</span>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Properties Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter("properties")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
                <span>Properties</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {openDropdown === "properties" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
                  >
                    {menuItems.properties.map((item) => (
                      <a
                        key={item.name}
                        href={item.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                      >
                        {item.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Invest Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter("invest")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
                <span>Invest</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {openDropdown === "invest" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
                  >
                    {menuItems.invest.map((item) => (
                      <a
                        key={item.name}
                        href={item.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                      >
                        {item.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Search className="w-6 h-6" />
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
              Login
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden border-t border-gray-200">
        <div className="px-4 py-2 space-y-2">
          <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg flex justify-between items-center">
            <span>Properties</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg flex justify-between items-center">
            <span>Invest</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>
    </nav>
  );
};
