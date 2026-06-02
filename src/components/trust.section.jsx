import { useRef } from "react";
import { motion } from "framer-motion";
import { Check, Users, Shield, Award, TrendingUp } from "lucide-react";

export const TrustSection = () => {
  const sectionRef = useRef(null);

  const stats = [
    { value: "10K+", label: "Verified Listings", icon: <Award className="w-6 h-6" /> },
    { value: "5K+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
    { value: "500+", label: "Verified Agents", icon: <Shield className="w-6 h-6" /> },
    { value: "98%", label: "Satisfaction Rate", icon: <TrendingUp className="w-6 h-6" /> }
  ];

  const trustFeatures = [
    {
      icon: <Check className="w-8 h-8" />,
      title: "Verified Listings",
      description: "Every property is personally verified by our team for authenticity"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Verified Agents",
      description: "Licensed and background-checked professionals you can trust"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Transactions",
      description: "Protected payments and escrow services for peace of mind"
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, #2B2B2B 0%, #464646 50%, #2B2B2B 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="relative inline-block mb-4">
                <div className="relative p-6 rounded-2xl" style={{ backgroundColor: '#464646', border: '1px solid #B3B3B3' }}>
                  <div className="mb-2" style={{ color: '#E8D59E' }}>{stat.icon}</div>
                  <div className="text-4xl md:text-5xl font-bold mb-2" style={{ 
                    color: '#F7E6CA',
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    fontWeight: 360,
                    letterSpacing: '0.02em'
                  }}>
                    {stat.value}
                  </div>
                </div>
              </div>
              <div className="font-medium" style={{ color: '#B3B3B3' }}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <h2 
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{ 
                color: '#F7E6CA',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                fontWeight: 360,
                letterSpacing: '0.02em',
                lineHeight: 1.1
              }}
            >
              Why Trust Us?
            </h2>
            <p 
              className="text-xl max-w-2xl mx-auto"
              style={{ 
                color: '#B3B3B3',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                fontWeight: 400,
                letterSpacing: '0.01em',
                lineHeight: 1.5
              }}
            >
              We verify every listing to ensure you get accurate information and genuine properties
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trustFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="relative rounded-2xl p-8 h-full" style={{ backgroundColor: '#2B2B2B', border: '1px solid #B3B3B3' }}>
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6" >
                      <div style={{ color: '#E8D59E' }}>{feature.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold mb-3" style={{ 
                      color: '#F7E6CA',
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      fontWeight: 480,
                      letterSpacing: '0.01em'
                    }}>{feature.title}</h3>
                    <p className="leading-relaxed" style={{ 
                      color: '#B3B3B3',
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      fontWeight: 400,
                      lineHeight: 1.5
                    }}>{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
