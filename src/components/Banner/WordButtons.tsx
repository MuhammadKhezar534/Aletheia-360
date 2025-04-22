import { motion } from "framer-motion";
import { WORDS } from "../../mock-data/mock";

const WordButtons = ({
  currentIndex,
  setCurrentIndex,
}: {
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.8 }}
    className="flex flex-wrap justify-center gap-4 mt-8"
  >
    {WORDS.map((word, index) => (
      <motion.button
        key={word.text}
        whileHover={{
          scale: 1.1,
          backgroundColor: "rgba(180, 83, 9, 0.15)",
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.95 }}
        animate={{
          backgroundColor:
            currentIndex === index
              ? "rgba(180, 83, 9, 0.25)"
              : "rgba(254, 243, 199, 0.7)",
          transition: { duration: 0.3 },
        }}
        onClick={() => setCurrentIndex(index)}
        className="px-4 py-2 rounded-full text-sm text-amber-900 cursor-pointer border border-amber-200 hover:border-amber-300 transition-all shadow-sm"
      >
        {word.text}
      </motion.button>
    ))}
  </motion.div>
);
export default WordButtons;
