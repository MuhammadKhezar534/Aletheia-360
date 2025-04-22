import { motion, AnimatePresence } from "framer-motion";

const AnimatedWord = ({ word }: { word: string }) => (
  <div className="mb-12 h-20">
    <AnimatePresence mode="wait">
      <motion.div
        key={word}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="text-2xl md:text-4xl font-bold text-indigo-500 mb-4"
      >
        {word}
      </motion.div>
    </AnimatePresence>
  </div>
);

export default AnimatedWord;
