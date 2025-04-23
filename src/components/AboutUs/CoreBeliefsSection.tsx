import { motion } from "framer-motion";
import { beliefs } from "../../mock-data/mock";

const CoreBeliefsSection = () => (
  <div className="py-12 px-4 from-[#A3C2D3] via-[#D9E4EA] to-[#C5D6DF]">
    <div className="max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-bold text-center text-[#2D3748] mb-12"
      >
        Our <span className="text-[#6689A1]">Core Beliefs</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {beliefs.map((belief, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-lg border border-[#E2E8F0] shadow-sm"
          >
            <div className="flex flex-col items-center text-center text-[#4A5568]">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mb-4 text-[#6689A1]"
              >
                {belief.icon}
              </motion.div>
              <h3 className="text-lg font-bold text-[#2D3748] mb-3">
                {belief.title}
              </h3>
              <p className="text-[#4A5568] text-sm">{belief.content}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default CoreBeliefsSection;
