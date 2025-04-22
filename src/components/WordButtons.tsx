import { motion } from "framer-motion";

const WordButtons = ({
  words,
  currentIndex,
  onSelect,
}: {
  words: { text: string }[];
  currentIndex: number;
  onSelect: (index: number) => void;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.8 }}
    className="flex flex-wrap justify-center gap-4 mt-8"
  >
    {words.map((word, index) => (
      <motion.button
        key={word.text}
        whileHover={{
          scale: 1.1,
          backgroundColor: "rgba(99, 102, 241, 0.2)",
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.95 }}
        animate={{
          backgroundColor:
            currentIndex === index
              ? "rgba(99, 102, 241, 0.3)"
              : "rgba(255, 255, 255, 0.7)",
          transition: { duration: 0.3 },
        }}
        onClick={() => onSelect(index)}
        className="px-4 py-2 rounded-full text-sm bg-white bg-opacity-70 text-indigo-600 cursor-pointer border border-indigo-300 border-opacity-50 hover:border-opacity-100 transition-all shadow-sm"
      >
        {word.text}
      </motion.button>
    ))}
  </motion.div>
);

export default WordButtons;
