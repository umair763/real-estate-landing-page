import { motion } from "framer-motion";
// import { Button } from "./ui/button";

export const HeroSection = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&auto=format&fit=crop&q=80")` }}
      >
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
      </div>

      {/* Noise Texture */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-12 max-w-5xl w-full"
      >
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl mb-6"
        >
          Discover verified properties in 0% commission listings
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-6 max-w-3xl text-lg leading-8 text-white/90 md:text-xl"
        >
          Discover verified properties in 0% commission listings. Your trusted real estate partner for buying, renting, and investing.
        </motion.p>

        {/* <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <Button
            size="lg"
            className="bg-white text-black hover:bg-white/90 font-semibold px-8 py-6 text-base rounded-full shadow-2xl transition-all hover:scale-105"
          >
            Explore Properties
          </Button>
          <Button
            size="lg"
            className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 font-semibold px-8 py-6 text-base rounded-full shadow-2xl transition-all hover:scale-105"
          >
            Schedule Viewing
          </Button>
        </motion.div> */}

        {/* Stats Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          className="mt-20 grid grid-cols-3 gap-8 md:gap-16"
        >
          <div className="flex flex-col items-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">10K+</div>
            <div className="text-sm md:text-base text-white/70">Verified Listings</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">5K+</div>
            <div className="text-sm md:text-base text-white/70">Happy Clients</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
            <div className="text-sm md:text-base text-white/70">Locations</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-white/60 uppercase tracking-wider">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-white/60 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
