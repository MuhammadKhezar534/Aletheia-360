import { motion } from "framer-motion";

const HeroSection = ({ onContactClick }: { onContactClick: () => void }) => (
  <div className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-200 to-amber-100 text-amber-900">
    <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold mb-6"
      >
        About <span className="text-amber-500">Aletheia 360</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-xl md:text-2xl text-amber-800 max-w-3xl mx-auto mb-8 leading-relaxed"
      >
        Aletheia 360 is a ministry of Life International Christian Fellowship.
        Here is our 8-point statement of our beliefs...
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onContactClick}
          className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg transition-all"
        >
          Contact Us
        </motion.button>
      </motion.div>
    </div>
  </div>
);

export default HeroSection;
