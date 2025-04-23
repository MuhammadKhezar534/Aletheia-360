import { motion } from "framer-motion";

const HeroSection = ({ onContactClick }: { onContactClick: () => void }) => (
  <div className="relative w-full py-12 px-4 from-[#C5D6DF] via-[#D9E4EA] to-[#A3C2D3]">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex flex-col">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold"
        >
          About <span className="text-[#6689A1]">Aletheia 360</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl md:text-xl text-[#6689A1] max-w-3xl mt-4 mx-auto mb-8 leading-relaxed"
        >
          Aletheia 360 is a ministry of Life International Christian Fellowship.{" "}
          <br />
          Here is our 8-point statement of our beliefs...
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onContactClick}
          className="px-6 py-2 bg-[#6689A1] hover:bg-[#5A7A90] text-white font-bold rounded-lg transition-all"
        >
          Contact Us
        </motion.button>
      </motion.div>
    </div>
  </div>
);

export default HeroSection;
