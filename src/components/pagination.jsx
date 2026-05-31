import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const handlePageChange = (page) => {
    onPageChange(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="flex justify-center items-center gap-3 mt-12"
    >
      <motion.button
        whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.4)" }}
        whileTap={{ scale: 0.95 }}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 h-12 bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl text-white hover:bg-black/60 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
      >
        <ChevronLeft className="w-5 h-5" />
      </motion.button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <motion.button
          key={page}
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handlePageChange(page)}
          className={`w-12 h-12 rounded-xl font-semibold transition-all duration-300 cursor-pointer ${
            currentPage === page
              ? "bg-white text-black shadow-xl shadow-white/20 border-2 border-white"
              : "bg-black/40 backdrop-blur-sm border border-white/10 text-white hover:bg-black/60 hover:border-white/30"
          }`}
        >
          {page}
        </motion.button>
      ))}

      <motion.button
        whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.4)" }}
        whileTap={{ scale: 0.95 }}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 h-12 bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl text-white hover:bg-black/60 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
      >
        <ChevronRight className="w-5 h-5" />
      </motion.button>
    </motion.div>
  );
};
