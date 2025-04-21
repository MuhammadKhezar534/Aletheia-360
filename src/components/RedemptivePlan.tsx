// src/components/RedemptivePlan.tsx
import { motion } from "framer-motion";
import { useState } from "react";
import { planItems } from "../mock-data/mock";

const RedemptivePlan = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-blue-900/20 via-indigo-900/30 to-purple-900/20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-xl md:text-3xl font-bold text-white mb-6">
            <AnimatedHighlightedText text="God's Redemptive Plan" />
          </h2>
          <motion.p
            animate={{
              textShadow: [
                "0 0 10px rgba(251, 191, 36, 0)",
                "0 0 10px rgba(251, 191, 36, 0.5)",
                "0 0 10px rgba(251, 191, 36, 0)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-md text-yellow-300 max-w-3xl mx-auto"
          >
            The beautiful story of God's love and salvation
          </motion.p>
        </motion.div>

        <div className="space-y-20">
          {planItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-12`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex-1 relative">
                <motion.div
                  animate={{
                    scale: hoveredIndex === index ? 1.05 : 1,
                    boxShadow:
                      hoveredIndex === index
                        ? "0 25px 50px -12px rgba(139, 92, 246, 0.3)"
                        : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="p-1 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl"
                >
                  <div className="bg-gray-900 rounded-xl p-6 h-full">
                    <motion.div
                      animate={{
                        color: hoveredIndex === index ? "#8b5cf6" : "#fbbf24",
                      }}
                      transition={{ duration: 0.3 }}
                      className="mb-6"
                    >
                      {item.icon}
                    </motion.div>
                    <h3 className="text-xl md:text-1xl font-bold text-white mb-6">
                      <AnimatedHighlightedText text={item.title} />
                    </h3>
                    <p className="text-gray-300 text-xs leading-relaxed">
                      {item.content.split(".").map((sentence, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: i * 0.1 }}
                          viewport={{ once: true }}
                          className="block mb-4"
                        >
                          {sentence.trim() +
                            (i < item.content.split(".").length - 1 ? "." : "")}
                        </motion.span>
                      ))}
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="flex-1 w-full">
                <motion.div
                  animate={{
                    scale: hoveredIndex === index ? 1.03 : 1,
                    boxShadow:
                      hoveredIndex === index
                        ? "0 25px 50px -12px rgba(245, 158, 11, 0.3)"
                        : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="aspect-video bg-black rounded-xl overflow-hidden shadow-xl"
                >
                  <iframe
                    className="w-full h-full h-[300px]"
                    src={`https://www.youtube.com/embed/${item.videoId}?modestbranding=1&rel=0`}
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AnimatedHighlightedText = ({ text }: { text: string }) => {
  return (
    <span className="relative inline-block">
      <span className="relative z-10">{text}</span>
      <motion.span
        className="absolute bottom-0 left-0 w-full h-2 bg-yellow-400 opacity-70"
        animate={{
          scaleX: [0, 1, 0],
          left: [0, 0, "100%"],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </span>
  );
};

export default RedemptivePlan;
