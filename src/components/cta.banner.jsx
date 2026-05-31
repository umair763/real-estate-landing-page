import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Home, Building2, Sparkles } from "lucide-react";

export const CtaBanner = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-black py-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-bl from-zinc-300 via-black to-zinc-300" />
      
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-600/5 rounded-full blur-[150px]" />
      </div>

      <motion.div
        style={{ opacity, scale }}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-emerald-600/20 rounded-3xl blur-3xl opacity-50" />
          <div className="relative bg-gradient-to-br from-zinc-900/80 to-black/80 backdrop-blur-xl rounded-3xl p-12 md:p-20 border border-white/10 overflow-hidden">
            <div className="absolute inset-0 opacity-30">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`,
                  backgroundSize: "40px 40px",
                }}
              />
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-4xl md:text-6xl font-bold text-white leading-tight"
                >
                  Ready to Find Your
                  <span className="text-white">
                    {" "}Perfect Property?
                  </span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl text-gray-400 leading-relaxed"
                >
                  Join thousands of satisfied clients who found their dream homes with us. Start your journey today and experience the future of real estate.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-8 py-4 bg-white text-black rounded-xl font-semibold text-lg overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      List Your Property
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gray-200 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold text-lg border border-white/20 hover:bg-white/20 transition-colors"
                  >
                    Become an Agent
                  </motion.button>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative hidden lg:block"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-3xl blur-2xl" />
                  <div className="relative bg-gradient-to-br from-zinc-800 to-black rounded-3xl p-8 border border-white/10">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                          <Home className="w-8 h-8 text-white" />
                        <div>
                          <div className="text-3xl font-bold text-white">10K+</div>
                          <div className="text-gray-400">Properties Listed</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                          <Building2 className="w-8 h-8 text-white" />
                        <div>
                          <div className="text-3xl font-bold text-white">5K+</div>
                          <div className="text-gray-400">Happy Clients</div>
                        </div>
                      </div>
                      <div className="pt-6 border-t border-white/10">
                        <div className="flex items-center gap-2 text-gray-400">
                          <Sparkles className="w-5 h-5 text-yellow-400" />
                          <span className="text-sm">0% Commission on Verified Listings</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
