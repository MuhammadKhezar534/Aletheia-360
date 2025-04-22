// import { motion, useAnimation } from "framer-motion";
// import useModalContext from "../hooks/useModalContext";

// const WelcomeSection = () => {
//   const controls = useAnimation();
//   const { setIsModalOpen } = useModalContext();

//   return (
//     <motion.section
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       viewport={{ once: true }}
//       className="py-20 px-4 bg-gradient-to-b from-indigo-900/20 via-purple-900/30 to-blue-900/20"
//     >
//       <div className="max-w-5xl mx-auto text-center">
//         <motion.div animate={controls} className="inline-block mb-12">
//           <h2 className="text-1xl md:text-3xl font-bold text-white mb-6">
//             <span className="relative inline-block">
//               <motion.span
//                 animate={{
//                   color: ["#fbbf24", "#f59e0b", "#fbbf24"],
//                 }}
//                 transition={{
//                   duration: 4,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 className="block"
//               >
//                 Welcome to Aletheia 360
//               </motion.span>
//               <motion.div
//                 className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-amber-500"
//                 initial={{ scaleX: 0 }}
//                 whileInView={{ scaleX: 1 }}
//                 transition={{ duration: 1.5, delay: 0.3 }}
//                 viewport={{ once: true }}
//               />
//             </span>
//           </h2>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 1, staggerChildren: 0.1 }}
//           viewport={{ once: true }}
//           className="text-lg md:text-xl text-gray-200 mb-12 leading-relaxed max-w-4xl mx-auto"
//         >
//           <motion.p className="mb-6">
//             We're <AnimatedWord word="glad" colors={["#fbbf24", "#f59e0b"]} />{" "}
//             you're here! This is a space to discover what makes the Gospel truly
//             <AnimatedWord word="Good News" colors={["#a78bfa", "#8b5cf6"]} />.
//           </motion.p>
//           <motion.p className="mb-6">
//             No matter your background or where you are on your{" "}
//             <AnimatedWord
//               word="spiritual journey"
//               colors={["#fbbf24", "#f59e0b"]}
//             />
//             , we invite you to explore the{" "}
//             <AnimatedWord word="hope" colors={["#86efac", "#4ade80"]} />,
//             <AnimatedWord word="forgiveness" colors={["#fca5a5", "#f87171"]} />,
//             and
//             <AnimatedWord word="purpose" colors={["#93c5fd", "#60a5fa"]} />{" "}
//             Jesus offers.
//           </motion.p>
//           <motion.p>
//             Take a look around—watch a short video, read a story of
//             transformation, or reach out if you have questions.
//           </motion.p>
//         </motion.div>

//         <motion.div
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="inline-block"
//         >
//           <motion.button
//             animate={{
//               boxShadow: [
//                 "0 0 0 0 rgba(251, 191, 36, 0.7)",
//                 "0 0 0 10px rgba(251, 191, 36, 0)",
//                 "0 0 0 0 rgba(251, 191, 36, 0)",
//               ],
//             }}
//             transition={{
//               duration: 2,
//               repeat: Infinity,
//               ease: "easeOut",
//             }}
//             className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold rounded-full text-md relative overflow-hidden"
//           >
//             <span
//               className="relative z-10"
//               onClick={() => setIsModalOpen(true)}
//             >
//               Contact Us
//             </span>
//             <motion.div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-400 opacity-0 hover:opacity-100 transition-opacity duration-300" />
//           </motion.button>
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// };

// const AnimatedWord = ({ word, colors }: { word: string; colors: string[] }) => {
//   return (
//     <motion.span
//       animate={{
//         color: colors,
//         textShadow: `0 0 10px ${colors[0]}`,
//       }}
//       transition={{
//         duration: 4,
//         repeat: Infinity,
//         repeatType: "reverse",
//         ease: "easeInOut",
//       }}
//       className="font-semibold inline-block px-1"
//     >
//       {word}
//     </motion.span>
//   );
// };

// export default WelcomeSection;

// import { motion, useAnimation } from "framer-motion";
// import useModalContext from "../hooks/useModalContext";

// const WelcomeSection = () => {
//   const controls = useAnimation();
//   const { setIsModalOpen } = useModalContext();

//   return (
//     <motion.section
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       viewport={{ once: true }}
//       className="py-20 px-4 bg-gradient-to-b from-blue-50 via-purple-50 to-indigo-50"
//     >
//       <div className="max-w-5xl mx-auto text-center">
//         <motion.div animate={controls} className="inline-block mb-12">
//           <h2 className="text-1xl md:text-3xl font-bold text-indigo-900 mb-6">
//             <span className="relative inline-block">
//               <motion.span
//                 animate={{
//                   color: ["#4f46e5", "#6366f1", "#4f46e5"],
//                 }}
//                 transition={{
//                   duration: 4,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 className="block"
//               >
//                 Welcome to Aletheia 360
//               </motion.span>
//               <motion.div
//                 className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500"
//                 initial={{ scaleX: 0 }}
//                 whileInView={{ scaleX: 1 }}
//                 transition={{ duration: 1.5, delay: 0.3 }}
//                 viewport={{ once: true }}
//               />
//             </span>
//           </h2>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 1, staggerChildren: 0.1 }}
//           viewport={{ once: true }}
//           className="text-lg md:text-xl text-gray-800 mb-12 leading-relaxed max-w-4xl mx-auto"
//         >
//           <motion.p className="mb-6">
//             We're <AnimatedWord word="glad" colors={["#f59e0b", "#fbbf24"]} />{" "}
//             you're here! This is a space to discover what makes the Gospel truly
//             <AnimatedWord word="Good News" colors={["#8b5cf6", "#a78bfa"]} />.
//           </motion.p>
//           <motion.p className="mb-6">
//             No matter your background or where you are on your{" "}
//             <AnimatedWord
//               word="spiritual journey"
//               colors={["#10b981", "#34d399"]}
//             />
//             , we invite you to explore the{" "}
//             <AnimatedWord word="hope" colors={["#3b82f6", "#60a5fa"]} />,
//             <AnimatedWord word="forgiveness" colors={["#ec4899", "#f472b6"]} />,
//             and
//             <AnimatedWord word="purpose" colors={["#6366f1", "#818cf8"]} />{" "}
//             Jesus offers.
//           </motion.p>
//           <motion.p>
//             Take a look around—watch a short video, read a story of
//             transformation, or reach out if you have questions.
//           </motion.p>
//         </motion.div>

//         <motion.div
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="inline-block"
//         >
//           <motion.button
//             animate={{
//               boxShadow: [
//                 "0 0 0 0 rgba(99, 102, 241, 0.7)",
//                 "0 0 0 10px rgba(99, 102, 241, 0)",
//                 "0 0 0 0 rgba(99, 102, 241, 0)",
//               ],
//             }}
//             transition={{
//               duration: 2,
//               repeat: Infinity,
//               ease: "easeOut",
//             }}
//             className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold rounded-full text-md relative overflow-hidden"
//           >
//             <span
//               className="relative z-10"
//               onClick={() => setIsModalOpen(true)}
//             >
//               Contact Us
//             </span>
//             <motion.div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 hover:opacity-100 transition-opacity duration-300" />
//           </motion.button>
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// };

// const AnimatedWord = ({ word, colors }: { word: string; colors: string[] }) => {
//   return (
//     <motion.span
//       animate={{
//         color: colors,
//         textShadow: `0 0 8px ${colors[0]}40`,
//       }}
//       transition={{
//         duration: 4,
//         repeat: Infinity,
//         repeatType: "reverse",
//         ease: "easeInOut",
//       }}
//       className="font-semibold inline-block px-1"
//     >
//       {word}
//     </motion.span>
//   );
// };

// export default WelcomeSection;

import { motion, useAnimation } from "framer-motion";
import useModalContext from "../hooks/useModalContext";

const WelcomeSection = () => {
  const controls = useAnimation();
  const { setIsModalOpen } = useModalContext();

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-4 bg-gray-50"
    >
      <div className="max-w-5xl mx-auto text-center">
        <AnimatedHeading controls={controls} />
        <AnimatedParagraph />
        <ContactButton onClick={() => setIsModalOpen(true)} />
      </div>
    </motion.section>
  );
};

const AnimatedHeading = ({ controls }: { controls: any }) => (
  <motion.div animate={controls} className="inline-block mb-12">
    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
      <span className="relative inline-block">
        <motion.span
          animate={{
            color: ["#4b5563", "#6b7280", "#4b5563"],
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
          className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-500 to-white-500"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          viewport={{ once: true }}
        />
      </span>
    </h2>
  </motion.div>
);

const AnimatedParagraph = () => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1, staggerChildren: 0.1 }}
    viewport={{ once: true }}
    className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed max-w-4xl mx-auto"
  >
    <motion.p className="mb-6">
      We're <AnimatedWord word="glad" colors={["#d1d5db ", "#4b5563"]} /> you're
      here! This is a space to discover what makes the Gospel truly{" "}
      <AnimatedWord word="Good News" colors={["#d1d5db ", "#4b5563"]} />.
    </motion.p>
    <motion.p className="mb-6">
      No matter your background or where you are on your{" "}
      <AnimatedWord word="spiritual journey" colors={["#d1d5db ", "#4b5563"]} />
      , we invite you to explore the{" "}
      <AnimatedWord word="hope" colors={["#d1d5db ", "#4b5563"]} />,
      <AnimatedWord word="forgiveness" colors={["#d1d5db ", "#4b5563"]} />, and{" "}
      <AnimatedWord word="purpose" colors={["#d1d5db ", "#4b5563"]} /> Jesus
      offers.
    </motion.p>
    <motion.p>
      Take a look around—watch a short video, read a story of transformation, or
      reach out if you have questions.
    </motion.p>
  </motion.div>
);

const ContactButton = ({ onClick }: { onClick: () => void }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="inline-block"
  >
    <motion.button
      animate={{
        boxShadow: [
          "0 0 0 0 rgba(99, 102, 241, 0.7)",
          "0 0 0 10px rgba(99, 102, 241, 0)",
          "0 0 0 0 rgba(99, 102, 241, 0)",
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeOut",
      }}
      className="px-6 py-2 bg-gradient-to-r from-gray-500 to-gray-500 text-white font-bold rounded-full text-md relative overflow-hidden"
      onClick={onClick}
    >
      <span className="relative z-10">Contact Us</span>
      <motion.div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 hover:opacity-100 transition-opacity duration-300" />
    </motion.button>
  </motion.div>
);

const AnimatedWord = ({ word, colors }: { word: string; colors: string[] }) => {
  return (
    <motion.span
      animate={{
        color: colors,
        textShadow: `0 0 8px ${colors[0]}40`,
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
      className="font-semibold inline-block px-1"
    >
      {word}
    </motion.span>
  );
};

export default WelcomeSection;
