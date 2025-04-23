import { motion } from "framer-motion";

const LearnMoreSection = () => (
  <div className="py-16 px-4 bg-white">
    <div className="max-w-4xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-bold text-[#2D3748] mb-6"
      >
        Want to <span className="text-[#6689A1]">Learn More</span>?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
        className="text-lg text-[#4A5568] mb-8 max-w-3xl mx-auto"
      >
        If you have questions about our beliefs or want to know more about
        Jesus, we'd love to talk with you.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-3 bg-[#6689A1] hover:bg-[#5A7A90] text-white font-bold rounded-lg transition-all"
      >
        Get In Touch
      </motion.button>
    </div>
  </div>
);

export default LearnMoreSection;
