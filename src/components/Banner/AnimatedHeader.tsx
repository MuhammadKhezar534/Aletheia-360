import { motion } from "framer-motion";

const AnimatedHeader = () => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="mb-8"
  >
    <h2 className="text-xl md:text-1xl font-light text-[#4A5568] mb-2">
      Welcome to Aletheia 360
    </h2>
    <h1 className="text-1xl md:text-3xl font-bold text-[#2D3748]">
      Experience God's <span className="text-[#6689A1]">Love</span> and{" "}
      <span className="text-[#6689A1]">Mercy</span>
    </h1>
  </motion.div>
);

export default AnimatedHeader;
