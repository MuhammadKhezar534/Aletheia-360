import useModalContext from "../../hooks/useModalContext";
import { motion } from "framer-motion";

const CallToAction = () => {
  const { setIsModalOpen } = useModalContext();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          boxShadow: [
            "0 4px 6px -1px rgba(251, 191, 36, 0.2), 0 2px 4px -1px rgba(251, 191, 36, 0.1)",
            "0 20px 25px -5px rgba(251, 191, 36, 0.3), 0 10px 10px -5px rgba(251, 191, 36, 0.1)",
            "0 4px 6px -1px rgba(251, 191, 36, 0.2), 0 2px 4px -1px rgba(251, 191, 36, 0.1)",
          ],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="px-8 py-3 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 bg-size-200 text-white font-bold rounded-full text-xl relative cursor-pointer overflow-hidden"
        style={{ backgroundSize: "200% 100%" }}
        onClick={() => setIsModalOpen(true)}
      >
        <span className="relative z-10 text-md">
          Ready to talk or have questions?
        </span>
        <motion.div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 hover:opacity-100 transition-opacity duration-300" />
      </motion.button>
    </motion.div>
  );
};

export default CallToAction;
