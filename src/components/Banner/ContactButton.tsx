import { motion } from "framer-motion";

const ContactButton = ({ onClick }: { onClick: () => void }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1 }}
    className="mt-16"
  >
    <button
      onClick={onClick}
      className="px-6 py-3 bg-[#6689A1] hover:bg-[#5A7A90] text-white font-bold rounded-lg text-md transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
    >
      Contact Us
    </button>
  </motion.div>
);
export default ContactButton;
