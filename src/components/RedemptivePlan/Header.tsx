import { motion } from "framer-motion";
import AnimatedHighlightedText from "./AnimatedHighlightedText";

const Header = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="text-center mb-20"
  >
    <h2 className="text-xl md:text-3xl font-bold text-[#334B59] mb-6">
      <AnimatedHighlightedText text="God's Redemptive Plan" />
    </h2>
    <motion.p
      animate={{
        textShadow: [
          "0 0 10px rgba(102, 137, 161, 0)",
          "0 0 10px rgba(102, 137, 161, 0.4)",
          "0 0 10px rgba(102, 137, 161, 0)",
        ],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="text-md text-[#4A6E84] max-w-3xl mx-auto font-medium"
    >
      The beautiful story of God's love and salvation
    </motion.p>
  </motion.div>
);

export default Header;
