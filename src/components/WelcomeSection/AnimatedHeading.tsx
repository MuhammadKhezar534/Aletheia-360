import { motion } from "framer-motion";

const AnimatedHeading = ({ controls }: { controls: any }) => (
  <motion.div animate={controls} className="inline-block mb-12">
    <h2 className="text-2xl md:text-4xl font-bold text-[#2D3748] mb-6">
      <span className="relative inline-block">
        <motion.span
          animate={{
            color: ["#4A6B8A", "#6689A1", "#4A6B8A"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="block"
        >
          Welcome to Aletheia 360
        </motion.span>
        <motion.div
          className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#6689A1] to-[#A3B8C8]"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          viewport={{ once: true }}
        />
      </span>
    </h2>
  </motion.div>
);

export default AnimatedHeading;
