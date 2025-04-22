import { motion } from "framer-motion";

const WordDescription = ({
  word,
}: {
  word: { text: string; description: string; verse: string };
}) => (
  <div className="max-w-2xl mx-auto mb-12 bg-white bg-opacity-70 p-6 rounded-lg shadow-lg backdrop-blur-sm">
    <motion.p
      key={`desc-${word.text}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-md md:text-lg italic text-gray-700 mb-4 leading-relaxed"
    >
      "{word.description}"
    </motion.p>
    <motion.p
      key={`verse-${word.text}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="text-lg text-indigo-600 font-semibold"
    >
      — {word.verse}
    </motion.p>
  </div>
);

export default WordDescription;
