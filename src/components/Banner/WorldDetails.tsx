import { motion } from "framer-motion";
import { WORDS } from "../../mock-data/mock";

const WordDetails = ({ currentIndex }: { currentIndex: number }) => (
  <div className="max-w-2xl mx-auto mb-12 bg-white bg-opacity-80 p-6 rounded-lg shadow-lg backdrop-blur-sm border border-[#E2E8F0]">
    <motion.p
      key={`desc-${currentIndex}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
      className="text-md md:text-lg italic text-[#4A5568] mb-4 leading-relaxed"
    >
      "{WORDS[currentIndex].description}"
    </motion.p>
    <motion.p
      key={`verse-${currentIndex}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="text-lg text-[#6689A1] font-semibold"
    >
      — {WORDS[currentIndex].verse}
    </motion.p>
  </div>
);

export default WordDetails;
