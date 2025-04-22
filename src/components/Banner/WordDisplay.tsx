import { motion, AnimatePresence } from "framer-motion";
import { WORDS } from "../../mock-data/mock";

const WordDisplay = ({ currentIndex }: { currentIndex: number }) => (
  <div className="mb-12 h-20">
    <AnimatePresence mode="wait">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="text-2xl md:text-4xl font-bold text-amber-900 mb-4"
      >
        {WORDS[currentIndex].text}
      </motion.div>
    </AnimatePresence>
  </div>
);

export default WordDisplay;
