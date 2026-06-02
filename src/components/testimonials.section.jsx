import { motion } from "framer-motion";
import { TestimonialsColumn } from "./testimonials.column";

const testimonials = [
  {
    text: "EstatePro made finding my dream home incredibly easy. The 0% commission model saved me thousands!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
    name: "Sarah Johnson",
    role: "Homeowner"
  },
  {
    text: "The investment opportunities on this platform are unmatched. I've seen excellent returns on my portfolio.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
    name: "Michael Chen",
    role: "Real Estate Investor"
  },
  {
    text: "As a first-time buyer, I was nervous, but EstatePro's team guided me through every step of the process.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
    name: "Emily Rodriguez",
    role: "First-time Buyer"
  },
  {
    text: "The new projects section helped me find an off-plan property that has already appreciated by 20%!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
    name: "David Thompson",
    role: "Property Developer"
  },
  {
    text: "Rental listings are verified and accurate. No surprises when I visited the properties.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
    name: "Lisa Anderson",
    role: "Tenant"
  },
  {
    text: "The ROI calculator helped me make informed decisions about my real estate investments.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100",
    name: "James Wilson",
    role: "Financial Advisor"
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="relative py-20 overflow-hidden" style={{ backgroundColor: '#2B2B2B' }}>
      <div className="max-w-7xl max-h-[700px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{ 
              color: '#FFF',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontWeight: 360,
              letterSpacing: '0.02em',
              lineHeight: 1.1
            }}
          >
            What Our Clients Say
          </h2>
          <p 
            className="text-lg max-w-2xl mx-auto"
            style={{ 
              color: '#FFFFFF',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontWeight: 400,
              letterSpacing: '0.01em',
              lineHeight: 1.5
            }}
          >
            Hear from thousands of satisfied customers who found their perfect property with EstatePro
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 overflow-hidden">
          <TestimonialsColumn testimonials={testimonials} duration={15} className="w-full md:w-1/3" />
          <TestimonialsColumn testimonials={testimonials} duration={18} className="w-full md:w-1/3" />
          <TestimonialsColumn testimonials={testimonials} duration={20} className="w-full md:w-1/3" />
        </div>
      </div>
    </section>
  );
};
