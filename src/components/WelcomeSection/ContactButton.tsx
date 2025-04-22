import { motion } from "framer-motion";

const ContactButton = ({ onClick }: { onClick: () => void }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="inline-block"
  >
    <motion.button
      animate={{
        boxShadow: [
          "0 0 0 0 rgba(180, 83, 9, 0.7)",
          "0 0 0 10px rgba(180, 83, 9, 0)",
          "0 0 0 0 rgba(180, 83, 9, 0)",
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeOut",
      }}
      className="px-6 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-full text-md relative overflow-hidden"
      onClick={onClick}
    >
      <span className="relative z-10">Contact Us</span>
      <motion.div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 hover:opacity-100 transition-opacity duration-300" />
    </motion.button>
  </motion.div>
);

export default ContactButton;
