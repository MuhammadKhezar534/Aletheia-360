import { motion } from "framer-motion";

const AnimatedHighlightedText = ({ text }: { text: string }) => (
  <motion.span
    animate={{
      color: ["#92400e", "#b45309", "#92400e"],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="relative inline-block"
  >
    {text}
    <motion.div
      className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-amber-200"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 1.5, delay: 0.3 }}
      viewport={{ once: true }}
    />
  </motion.span>
);

export default AnimatedHighlightedText;
