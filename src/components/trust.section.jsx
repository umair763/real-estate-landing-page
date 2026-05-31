import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check, Users, Shield, Award, TrendingUp } from "lucide-react";

export const TrustSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

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
      description: "Every property is personally verified by our team for authenticity",
      gradient: "from-emerald-500/20 to-teal-500/20",
      glowColor: "rgba(16, 185, 129, 0.4)"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Verified Agents",
      description: "Licensed and background-checked professionals you can trust",
      gradient: "from-blue-500/20 to-cyan-500/20",
      glowColor: "rgba(59, 130, 246, 0.4)"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Transactions",
      description: "Protected payments and escrow services for peace of mind",
      gradient: "from-purple-500/20 to-pink-500/20",
      glowColor: "rgba(168, 85, 247, 0.4)"
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-[#555555] py-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-300 via-black to-zinc-300" />
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      <motion.div
        style={{ opacity }}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
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
              className="text-center group"
            >
              <div className="relative inline-block mb-4">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative bg-gradient-to-br from-zinc-800 to-black p-6 rounded-2xl border border-white/10">
                  <div className="text-white mb-2">{stat.icon}</div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                </div>
              </div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
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
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Why Trust Us?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We verify every listing to ensure you get accurate information and genuine properties
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-br opacity-60 rounded-2xl blur-xl transition-opacity group-hover:opacity-80"
                  style={{
                    background: `radial-gradient(ellipse at bottom, ${feature.glowColor}, transparent 70%)`
                  }}
                />
                <div className="relative bg-gradient-to-br from-zinc-900 to-black rounded-2xl p-8 border border-white/10 h-full">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl`}
                  />
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                      <div className="text-white">{feature.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
