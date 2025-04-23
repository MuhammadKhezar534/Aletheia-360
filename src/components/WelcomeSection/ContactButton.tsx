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
          "0 0 0 0 rgba(102, 137, 161, 0.7)",
          "0 0 0 10px rgba(102, 137, 161, 0)",
          "0 0 0 0 rgba(102, 137, 161, 0)",
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeOut",
      }}
      className="px-6 py-2 bg-[#6689A1] text-white font-bold rounded-full text-md relative overflow-hidden hover:bg-[#5A7A90] transition-colors"
      onClick={onClick}
    >
      <span className="relative z-10">Contact Us</span>
    </motion.button>
  </motion.div>
);
export default ContactButton;
