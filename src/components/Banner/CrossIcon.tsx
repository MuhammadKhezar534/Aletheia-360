import { motion } from "framer-motion";

const CrossIcon = () => (
  <motion.div
    className="absolute right-10 top-1/2 text-amber-300 opacity-60"
    animate={{
      rotate: [0, 5, -5, 0],
      y: ["-50%", "-48%", "-52%", "-50%"],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="120"
      height="120"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2v20M2 12h20" />
    </svg>
  </motion.div>
);

export default CrossIcon;
