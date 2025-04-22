import { motion } from "framer-motion";

const AnimatedWord = ({ word, colors }: { word: string; colors: string[] }) => {
  return (
    <motion.span
      animate={{
        color: colors,
        textShadow: `0 0 8px ${colors[0]}40`,
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
      className="font-semibold inline-block px-1"
    >
      {word}
    </motion.span>
  );
};

export default AnimatedWord;
