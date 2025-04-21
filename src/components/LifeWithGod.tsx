// import { motion } from "framer-motion";
// import { steps } from "../mock-data/mock";

// const LifeWithGod = () => {
//   return (
//     <motion.section
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//       viewport={{ once: true }}
//       className="py-24 px-4 bg-gradient-to-b from-purple-900/20 via-indigo-900/30 to-blue-900/20"
//     >
//       <div className="max-w-4xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-20"
//         >
//           <h2 className="text-1xl md:text-3xl font-bold text-white mb-6">
//             <AnimatedGlowText text="Life with God & Next Steps" />
//           </h2>
//           <motion.p
//             animate={{
//               scale: [1, 1.02, 1],
//             }}
//             transition={{
//               duration: 4,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//             className="text-md text-gray-300 max-w-3xl mx-auto"
//           >
//             This journey isn't meant to be walked alone. God is with you, and He
//             often works through other people to help you grow in faith and love.
//           </motion.p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
//           {steps.map((step, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -10 }}
//               className="relative group"
//             >
//               <motion.div
//                 animate={{
//                   boxShadow: [
//                     "0 4px 6px -1px rgba(139, 92, 246, 0.1), 0 2px 4px -1px rgba(139, 92, 246, 0.06)",
//                     "0 20px 25px -5px rgba(139, 92, 246, 0.2), 0 10px 10px -5px rgba(139, 92, 246, 0.04)",
//                     "0 4px 6px -1px rgba(139, 92, 246, 0.1), 0 2px 4px -1px rgba(139, 92, 246, 0.06)",
//                   ],
//                 }}
//                 transition={{
//                   duration: 4,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 className="h-full bg-gray-900 bg-opacity-70 backdrop-blur-sm p-6 rounded-xl border border-white border-opacity-10 overflow-hidden"
//               >
//                 <div className="flex items-start gap-6 relative z-10">
//                   <motion.div
//                     animate={{
//                       rotate: [0, 5, -5, 0],
//                     }}
//                     transition={{
//                       duration: 8,
//                       repeat: Infinity,
//                       ease: "easeInOut",
//                     }}
//                     className="p-4 bg-gradient-to-br from-yellow-400/20 to-amber-500/20 rounded-full"
//                   >
//                     <motion.div
//                       animate={{
//                         color: ["#fbbf24", "#f59e0b", "#fbbf24"],
//                       }}
//                       transition={{
//                         duration: 4,
//                         repeat: Infinity,
//                         ease: "easeInOut",
//                       }}
//                     >
//                       {step.icon}
//                     </motion.div>
//                   </motion.div>
//                   <div>
//                     <h3 className="text-xl font-bold text-white mb-4">
//                       <AnimatedUnderlineText text={step.title} />
//                     </h3>
//                     <p className="text-gray-300 text-sm">{step.description}</p>
//                   </div>
//                 </div>
//                 <motion.div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center"
//         >
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             animate={{
//               backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
//               boxShadow: [
//                 "0 4px 6px -1px rgba(251, 191, 36, 0.2), 0 2px 4px -1px rgba(251, 191, 36, 0.1)",
//                 "0 20px 25px -5px rgba(251, 191, 36, 0.3), 0 10px 10px -5px rgba(251, 191, 36, 0.1)",
//                 "0 4px 6px -1px rgba(251, 191, 36, 0.2), 0 2px 4px -1px rgba(251, 191, 36, 0.1)",
//               ],
//             }}
//             transition={{
//               duration: 4,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//             className="px-8 py-3 bg-gradient-to-r text-md from-yellow-400 via-amber-500 to-yellow-400 bg-size-200 text-black font-bold rounded-full text-xl relative cursor-pointer overflow-hidden"
//             style={{
//               backgroundSize: "200% 100%",
//             }}
//           >
//             <span className="relative z-10">
//               Ready to talk or have questions?
//             </span>
//             <motion.div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-400 opacity-0 hover:opacity-100 transition-opacity duration-300" />
//           </motion.button>
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// };

// const AnimatedGlowText = ({ text }: { text: string }) => {
//   return (
//     <motion.span
//       animate={{
//         textShadow: [
//           "0 0 5px rgba(251, 191, 36, 0.3)",
//           "0 0 20px rgba(251, 191, 36, 0.6)",
//           "0 0 5px rgba(251, 191, 36, 0.3)",
//         ],
//       }}
//       transition={{
//         duration: 4,
//         repeat: Infinity,
//         ease: "easeInOut",
//       }}
//       className="inline-block"
//     >
//       {text}
//     </motion.span>
//   );
// };

// const AnimatedUnderlineText = ({ text }: { text: string }) => {
//   return (
//     <span className="relative inline-block">
//       <span className="relative z-10">{text}</span>
//       <motion.span
//         className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400"
//         animate={{
//           scaleX: [0, 1, 0],
//           left: [0, 0, "100%"],
//         }}
//         transition={{
//           duration: 6,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />
//     </span>
//   );
// };

// export default LifeWithGod;

import { motion } from "framer-motion";
import { steps } from "../mock-data/mock";

const LifeWithGod = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-24 px-4 bg-gradient-to-b from-indigo-50 via-purple-50 to-blue-50"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-1xl md:text-3xl font-bold text-indigo-900 mb-6">
            <AnimatedGlowText text="Life with God & Next Steps" />
          </h2>
          <motion.p
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-md text-indigo-700 max-w-3xl mx-auto"
          >
            This journey isn't meant to be walked alone. God is with you, and He
            often works through other people to help you grow in faith and love.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
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
                    "0 4px 6px -1px rgba(99, 102, 241, 0.1), 0 2px 4px -1px rgba(99, 102, 241, 0.06)",
                    "0 20px 25px -5px rgba(99, 102, 241, 0.2), 0 10px 10px -5px rgba(99, 102, 241, 0.04)",
                    "0 4px 6px -1px rgba(99, 102, 241, 0.1), 0 2px 4px -1px rgba(99, 102, 241, 0.06)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-full bg-white p-6 rounded-xl border border-indigo-100 overflow-hidden shadow-md"
              >
                <div className="flex items-start gap-6 relative z-10">
                  <motion.div
                    animate={{
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="p-4 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full"
                  >
                    <motion.div
                      animate={{
                        color: ["#6366f1", "#8b5cf6", "#6366f1"],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {step.icon}
                    </motion.div>
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-indigo-900 mb-4">
                      <AnimatedUnderlineText text={step.title} />
                    </h3>
                    <p className="text-indigo-700 text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
                <motion.div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </motion.div>
          ))}
        </div>

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
                "0 4px 6px -1px rgba(99, 102, 241, 0.2), 0 2px 4px -1px rgba(99, 102, 241, 0.1)",
                "0 20px 25px -5px rgba(99, 102, 241, 0.3), 0 10px 10px -5px rgba(99, 102, 241, 0.1)",
                "0 4px 6px -1px rgba(99, 102, 241, 0.2), 0 2px 4px -1px rgba(99, 102, 241, 0.1)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="px-8 py-3 bg-gradient-to-r text-md from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 text-white font-bold rounded-full text-xl relative cursor-pointer overflow-hidden"
            style={{
              backgroundSize: "200% 100%",
            }}
          >
            <span className="relative z-10 text-md">
              Ready to talk or have questions?
            </span>
            <motion.div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

const AnimatedGlowText = ({ text }: { text: string }) => {
  return (
    <motion.span
      animate={{
        textShadow: [
          "0 0 5px rgba(99, 102, 241, 0.3)",
          "0 0 20px rgba(99, 102, 241, 0.4)",
          "0 0 5px rgba(99, 102, 241, 0.3)",
        ],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="inline-block"
    >
      {text}
    </motion.span>
  );
};

const AnimatedUnderlineText = ({ text }: { text: string }) => {
  return (
    <span className="relative inline-block">
      <span className="relative z-10">{text}</span>
      <motion.span
        className="absolute bottom-0 left-0 w-full h-1 bg-indigo-400"
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

export default LifeWithGod;
