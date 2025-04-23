import { motion } from "framer-motion";

const HeaderSection = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="text-center mb-20"
  >
    <h2 className="text-1xl md:text-3xl font-bold text-[#37505f] mb-6">
      <AnimatedGlowText text="Life with God & Next Steps" />
    </h2>
    <motion.p
      animate={{ scale: [1, 1.02, 1] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="text-md text-[#4f6d81] max-w-3xl mx-auto"
    >
      This journey isn't meant to be walked alone. God is with you, and He often
      works through other people to help you grow in faith and love.
    </motion.p>
  </motion.div>
);

export default HeaderSection;

const AnimatedGlowText = ({ text }: { text: string }) => (
  <motion.span
    animate={{
      textShadow: [
        "0 0 5px rgba(102, 137, 161, 0.3)",
        "0 0 20px rgba(102, 137, 161, 0.4)",
        "0 0 5px rgba(102, 137, 161, 0.3)",
      ],
    }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    className="inline-block"
  >
    {text}
  </motion.span>
);
