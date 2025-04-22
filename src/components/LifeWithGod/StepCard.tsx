import { motion } from "framer-motion";

const StepCard = ({ step, index }: { step: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ y: -10 }}
    className="relative group"
  >
    <motion.div
      animate={{
        boxShadow: [
          "0 4px 6px -1px rgba(251, 191, 36, 0.1), 0 2px 4px -1px rgba(251, 191, 36, 0.06)",
          "0 20px 25px -5px rgba(251, 191, 36, 0.2), 0 10px 10px -5px rgba(251, 191, 36, 0.04)",
          "0 4px 6px -1px rgba(251, 191, 36, 0.1), 0 2px 4px -1px rgba(251, 191, 36, 0.06)",
        ],
      }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="h-full bg-white p-6 rounded-xl border border-amber-100 overflow-hidden shadow-md"
    >
      <div className="flex items-start gap-6 relative z-10">
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="p-4 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full"
        >
          <motion.div
            animate={{
              color: ["#92400e", "#b45309", "#92400e"],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            {step.icon}
          </motion.div>
        </motion.div>
        <div>
          <h3 className="text-xl font-bold text-amber-900 mb-4">
            <AnimatedUnderlineText text={step.title} />
          </h3>
          <p className="text-amber-800 text-sm">{step.description}</p>
        </div>
      </div>
      <motion.div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-amber-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  </motion.div>
);

export default StepCard;

const AnimatedUnderlineText = ({ text }: { text: string }) => (
  <span className="relative inline-block">
    <span className="relative z-10">{text}</span>
    <motion.span
      className="absolute bottom-0 left-0 w-full h-1 bg-amber-400"
      animate={{ scaleX: [0, 1, 0], left: [0, 0, "100%"] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    />
  </span>
);
