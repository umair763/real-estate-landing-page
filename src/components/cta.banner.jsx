import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Home, Building2, Sparkles } from "lucide-react";

export const CtaBanner = () => {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className="relative py-33 overflow-hidden"
      style={{ backgroundColor: '#2B2B2B' }}
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="relative">
          <div className="relative rounded-3xl p-12 md:p-20 overflow-hidden" style={{ backgroundColor: '#000000', border: '1px solid #B3B3B3' }}>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-3xl md:text-5xl leading-tight"
                  style={{ 
                    color: '#F7E6CA',
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    fontWeight: 360,
                    letterSpacing: '0.02em',
                    lineHeight: 1.1
                  }}
                >
                  Ready to Find Your
                  <span style={{ color: '#E8D59E' }}>
                    {" "}Perfect Property?
                  </span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg leading-relaxed"
                  style={{ 
                    color: '#B3B3B3',
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    fontWeight: 400,
                    lineHeight: 1.5
                  }}
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
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative px-8 py-4 font-semibold text-lg overflow-hidden"
                    style={{ 
                      backgroundColor: '#E8D59E',
                      color: '#000000',
                      borderRadius: '32px'
                    }}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      List Your Property
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 font-semibold text-lg transition-colors"
                    style={{ 
                      backgroundColor: 'transparent',
                      color: '#F7E6CA',
                      borderRadius: '32px',
                      border: '1px solid #B3B3B3'
                    }}
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
                  <div className="relative rounded-3xl p-8" style={{ backgroundColor: '#464646', border: '1px solid #B3B3B3' }}>
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                          <Home className="w-8 h-8" style={{ color: '#E8D59E' }} />
                        <div>
                          <div className="text-3xl font-bold" style={{ 
                            color: '#F7E6CA',
                            fontFamily: 'system-ui, -apple-system, sans-serif',
                            fontWeight: 360,
                            letterSpacing: '0.02em'
                          }}>10K+</div>
                          <div style={{ color: '#B3B3B3' }}>Properties Listed</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                          <Building2 className="w-8 h-8" style={{ color: '#E8D59E' }} />
                        <div>
                          <div className="text-3xl font-bold" style={{ 
                            color: '#F7E6CA',
                            fontFamily: 'system-ui, -apple-system, sans-serif',
                            fontWeight: 360,
                            letterSpacing: '0.02em'
                          }}>5K+</div>
                          <div style={{ color: '#B3B3B3' }}>Happy Clients</div>
                        </div>
                      </div>
                      <div className="pt-6" style={{ borderTop: '1px solid #B3B3B3' }}>
                        <div className="flex items-center gap-2" style={{ color: '#B3B3B3' }}>
                          <Sparkles className="w-5 h-5" style={{ color: '#E8D59E' }} />
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
      </div>
    </section>
  );
};
