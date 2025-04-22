import { motion } from "framer-motion";

const BannerHeader = () => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="mb-8"
  >
    <h2 className="text-xl md:text-1xl font-light text-indigo-600 mb-2">
      Welcome to Aletheia 360
    </h2>
    <h1 className="text-1xl md:text-3xl font-bold text-gray-800">
      Experience God's <span className="text-indigo-600">Love</span> and{" "}
      <span className="text-indigo-600">Mercy</span>
    </h1>
  </motion.div>
);

export default BannerHeader;
