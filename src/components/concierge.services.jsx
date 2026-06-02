import { motion } from "framer-motion";
import { Home, Wrench, PaintRoller, Sparkles, CheckCircle, ArrowRight } from "lucide-react";

export const ConciergeServices = () => {
  const services = [
    {
      icon: <PaintRoller className="w-8 h-8" />,
      title: "Interior Painting",
      description: "Professional painting services to refresh your home's appearance",
      included: true
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Home Repairs",
      description: "Fix minor issues before listing to maximize value",
      included: true
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Deep Cleaning",
      description: "Thorough cleaning to make your home shine",
      included: true
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Staging",
      description: "Professional staging to showcase your home's potential",
      included: true
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Inspection Prep",
      description: "Prepare for inspections with confidence",
      included: true
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Landscaping",
      description: "Enhance curb appeal with professional landscaping",
      included: false
    }
  ];

  return (
    <section className="relative py-24 px-6 bg-[#F7E6CA] mt-30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-[#E8D59E] text-[#000000] rounded-full text-sm font-medium mb-4">
              Compass Concierge
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#000000] mb-6">
              Sell Your Home Faster & For More Money
            </h2>
            <p className="text-xl text-[#464646] mb-8">
              Our Concierge service covers the cost of home improvement services to help your home stand out — zero due until closing.*
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#E8D59E] flex-shrink-0 mt-1" />
                <p className="text-[#2B2B2B]">No upfront costs for eligible services</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#E8D59E] flex-shrink-0 mt-1" />
                <p className="text-[#2B2B2B]">Professional vetted contractors</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#E8D59E] flex-shrink-0 mt-1" />
                <p className="text-[#2B2B2B]">Project management included</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#E8D59E] flex-shrink-0 mt-1" />
                <p className="text-[#2B2B2B]">Pay only when your home sells</p>
              </div>
            </div>

            <button className="px-8 py-3 bg-[#2B2B2B] text-[#F7E6CA] rounded-lg font-semibold hover:bg-[#464646] transition-colors inline-flex items-center gap-2">
              Learn More
              <ArrowRight className="w-5 h-5" />
            </button>

            <p className="text-sm text-[#B3B3B3] mt-4">
              *Depending on your state of residence, fees or interest may apply.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#FFFFFF] rounded-3xl p-8 border border-[#D4D4D4] shadow-sm"
          >
            <h3 className="text-2xl font-bold text-[#000000] mb-6">Included Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`p-4 rounded-xl border transition-all ${
                    service.included
                      ? "bg-[#F7E6CA] border-[#D4D4D4] hover:border-[#B3B3B3]"
                      : "bg-[#F7E6CA] border-[#D4D4D4] opacity-60"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg ${
                      service.included ? "bg-[#E8D59E] text-[#000000]" : "bg-[#D4D4D4] text-[#B3B3B3]"
                    }`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-[#000000] mb-1">{service.title}</h4>
                      <p className="text-sm text-[#464646]">{service.description}</p>
                    </div>
                    {service.included && (
                      <CheckCircle className="w-5 h-5 text-[#E8D59E] flex-shrink-0" />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-[#E8D59E]/20 border border-[#E8D59E] rounded-xl">
              <p className="text-sm text-[#2B2B2B] font-medium">
                ✓ All services managed by our team
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
