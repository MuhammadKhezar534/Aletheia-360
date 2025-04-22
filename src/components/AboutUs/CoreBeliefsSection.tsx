import { motion } from "framer-motion";
import { beliefs } from "../../mock-data/mock";

const CoreBeliefsSection = () => (
  <div className="py-20 px-4 bg-amber-50">
    <div className="max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-bold text-center text-amber-900 mb-16"
      >
        Our <span className="text-amber-500">Core Beliefs</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {beliefs.map((belief, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bg-white p-6 rounded-xl border border-amber-100 shadow-md"
          >
            <div className="flex flex-col items-center text-center text-amber-800">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mb-4"
              >
                {belief.icon}
              </motion.div>
              <h3 className="text-lg font-bold text-amber-900 mb-4">
                {belief.title}
              </h3>
              <p className="text-amber-700 text-xs">{belief.content}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default CoreBeliefsSection;
