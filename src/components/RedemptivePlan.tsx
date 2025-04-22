// import { motion } from "framer-motion";
// import { useState } from "react";
// import { planItems } from "../mock-data/mock";

// const RedemptivePlan = () => {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

//   return (
//     <section className="py-16 px-4 bg-gradient-to-b from-blue-900/20 via-indigo-900/30 to-purple-900/20">
//       <div className="max-w-5xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-20"
//         >
//           <h2 className="text-xl md:text-3xl font-bold text-white mb-6">
//             <AnimatedHighlightedText text="God's Redemptive Plan" />
//           </h2>
//           <motion.p
//             animate={{
//               textShadow: [
//                 "0 0 10px rgba(251, 191, 36, 0)",
//                 "0 0 10px rgba(251, 191, 36, 0.5)",
//                 "0 0 10px rgba(251, 191, 36, 0)",
//               ],
//             }}
//             transition={{
//               duration: 4,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//             className="text-md text-yellow-300 max-w-3xl mx-auto"
//           >
//             The beautiful story of God's love and salvation
//           </motion.p>
//         </motion.div>

//         <div className="space-y-20">
//           {planItems.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: index * 0.1 }}
//               viewport={{ once: true, margin: "-100px" }}
//               className={`flex flex-col ${
//                 index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
//               } items-center gap-12`}
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//             >
//               <div className="flex-1 relative">
//                 <motion.div
//                   animate={{
//                     scale: hoveredIndex === index ? 1.05 : 1,
//                     boxShadow:
//                       hoveredIndex === index
//                         ? "0 25px 50px -12px rgba(139, 92, 246, 0.3)"
//                         : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
//                   }}
//                   transition={{ duration: 0.3 }}
//                   className="p-1 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl"
//                 >
//                   <div className="bg-gray-900 rounded-xl p-6 h-full">
//                     <motion.div
//                       animate={{
//                         color: hoveredIndex === index ? "#8b5cf6" : "#fbbf24",
//                       }}
//                       transition={{ duration: 0.3 }}
//                       className="mb-6"
//                     >
//                       {item.icon}
//                     </motion.div>
//                     <h3 className="text-xl md:text-1xl font-bold text-white mb-6">
//                       <AnimatedHighlightedText text={item.title} />
//                     </h3>
//                     <p className="text-gray-300 text-xs leading-relaxed">
//                       {item.content.split(".").map((sentence, i) => (
//                         <motion.span
//                           key={i}
//                           initial={{ opacity: 0 }}
//                           whileInView={{ opacity: 1 }}
//                           transition={{ delay: i * 0.1 }}
//                           viewport={{ once: true }}
//                           className="block mb-4"
//                         >
//                           {sentence.trim() +
//                             (i < item.content.split(".").length - 1 ? "." : "")}
//                         </motion.span>
//                       ))}
//                     </p>
//                   </div>
//                 </motion.div>
//               </div>

//               <div className="flex-1 w-full">
//                 <motion.div
//                   animate={{
//                     scale: hoveredIndex === index ? 1.03 : 1,
//                     boxShadow:
//                       hoveredIndex === index
//                         ? "0 25px 50px -12px rgba(245, 158, 11, 0.3)"
//                         : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
//                   }}
//                   transition={{ duration: 0.3 }}
//                   className="aspect-video bg-black rounded-xl overflow-hidden shadow-xl"
//                 >
//                   <iframe
//                     className="w-full h-[300px]"
//                     src={`https://www.youtube.com/embed/${item.videoId}?modestbranding=1&rel=0`}
//                     title={item.title}
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                   ></iframe>
//                 </motion.div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// const AnimatedHighlightedText = ({ text }: { text: string }) => {
//   return (
//     <span className="relative inline-block">
//       <span className="relative z-10">{text}</span>
//       <motion.span
//         className="absolute bottom-0 left-0 w-full h-2 bg-yellow-400 opacity-70"
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

// export default RedemptivePlan;

// import { motion } from "framer-motion";
// import { useState } from "react";
// import { planItems } from "../mock-data/mock";

// const RedemptivePlan = () => {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

//   return (
//     <section className="py-16 px-4 bg-gradient-to-b from-blue-50 via-purple-50 to-indigo-50">
//       <div className="max-w-5xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-20"
//         >
//           <h2 className="text-xl md:text-3xl font-bold text-indigo-900 mb-6">
//             <AnimatedHighlightedText text="God's Redemptive Plan" />
//           </h2>
//           <motion.p
//             animate={{
//               textShadow: [
//                 "0 0 10px rgba(99, 102, 241, 0)",
//                 "0 0 10px rgba(99, 102, 241, 0.3)",
//                 "0 0 10px rgba(99, 102, 241, 0)",
//               ],
//             }}
//             transition={{
//               duration: 4,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//             className="text-md text-indigo-600 max-w-3xl mx-auto font-medium"
//           >
//             The beautiful story of God's love and salvation
//           </motion.p>
//         </motion.div>

//         <div className="space-y-20">
//           {planItems.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: index * 0.1 }}
//               viewport={{ once: true, margin: "-100px" }}
//               className={`flex flex-col ${
//                 index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
//               } items-center gap-12`}
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//             >
//               <div className="flex-1 relative">
//                 <motion.div
//                   animate={{
//                     scale: hoveredIndex === index ? 1.05 : 1,
//                     boxShadow:
//                       hoveredIndex === index
//                         ? "0 25px 50px -12px rgba(139, 92, 246, 0.3)"
//                         : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
//                   }}
//                   transition={{ duration: 0.3 }}
//                   className="p-1 bg-gradient-to-br from-purple-400 to-blue-400 rounded-2xl"
//                 >
//                   <div className="bg-white rounded-xl p-6 h-full shadow-md">
//                     <motion.div
//                       animate={{
//                         color: hoveredIndex === index ? "#8b5cf6" : "#4f46e5",
//                       }}
//                       transition={{ duration: 0.3 }}
//                       className="mb-6"
//                     >
//                       {item.icon}
//                     </motion.div>
//                     <h3 className="text-xl md:text-1xl font-bold text-indigo-900 mb-6">
//                       <AnimatedHighlightedText text={item.title} />
//                     </h3>
//                     <p className="text-gray-700 text-xs leading-relaxed">
//                       {item.content.split(".").map((sentence, i) => (
//                         <motion.span
//                           key={i}
//                           initial={{ opacity: 0 }}
//                           whileInView={{ opacity: 1 }}
//                           transition={{ delay: i * 0.1 }}
//                           viewport={{ once: true }}
//                           className="block mb-4"
//                         >
//                           {sentence.trim() +
//                             (i < item.content.split(".").length - 1 ? "." : "")}
//                         </motion.span>
//                       ))}
//                     </p>
//                   </div>
//                 </motion.div>
//               </div>

//               <div className="flex-1 w-full">
//                 <motion.div
//                   animate={{
//                     scale: hoveredIndex === index ? 1.03 : 1,
//                     boxShadow:
//                       hoveredIndex === index
//                         ? "0 25px 50px -12px rgba(99, 102, 241, 0.3)"
//                         : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
//                   }}
//                   transition={{ duration: 0.3 }}
//                   className="aspect-video bg-white rounded-xl overflow-hidden shadow-xl border-2 border-indigo-100"
//                 >
//                   <iframe
//                     className="w-full h-[300px]"
//                     src={`https://www.youtube.com/embed/${item.videoId}?modestbranding=1&rel=0`}
//                     title={item.title}
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                   ></iframe>
//                 </motion.div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// const AnimatedHighlightedText = ({ text }: { text: string }) => {
//   return (
//     <span className="relative inline-block">
//       <span className="relative z-10">{text}</span>
//       <motion.span
//         className="absolute bottom-0 left-0 w-full h-2 bg-indigo-400 opacity-50"
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

// export default RedemptivePlan;
import { motion } from "framer-motion";
import { useState } from "react";
import { planItems } from "../mock-data/mock";

interface item {
  title: string;
  icon: JSX.Element;
  content: string;
  videoId: string;
}

const RedemptivePlan = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200">
      <div className="max-w-5xl mx-auto">
        <Header />

        <div className="space-y-20">
          {planItems.map((item, index) => (
            <PlanItem
              key={index}
              item={item}
              index={index}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Header = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="text-center mb-20"
  >
    <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6">
      <AnimatedHighlightedText text="God's Redemptive Plan" />
    </h2>
    <motion.p
      animate={{
        textShadow: [
          "0 0 10px rgba(107, 114, 128, 0)",
          "0 0 10px rgba(107, 114, 128, 0.3)",
          "0 0 10px rgba(107, 114, 128, 0)",
        ],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="text-md text-gray-700 max-w-3xl mx-auto font-medium"
    >
      The beautiful story of God's love and salvation
    </motion.p>
  </motion.div>
);

const PlanItem = ({
  item,
  index,
  hoveredIndex,
  setHoveredIndex,
}: {
  item: item;
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
}) => {
  const isHovered = hoveredIndex === index;

  return (
    <motion.div
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
      <Card item={item} isHovered={isHovered} />
      <Video videoId={item.videoId} title={item.title} isHovered={isHovered} />
    </motion.div>
  );
};

const Card = ({ item, isHovered }: { item: item; isHovered: boolean }) => (
  <div className="flex-1 relative">
    <motion.div
      animate={{
        scale: isHovered ? 1.05 : 1,
        boxShadow: isHovered
          ? "0 25px 50px -12px rgba(107, 114, 128, 0.3)"
          : "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
      }}
      transition={{ duration: 0.3 }}
      className="p-1 bg-gradient-to-br from-gray-400 to-gray-300 rounded-2xl"
    >
      <div className="bg-white rounded-xl p-6 h-full shadow-md">
        <motion.div
          animate={{ color: isHovered ? "#6b7280" : "#374151" }}
          transition={{ duration: 0.3 }}
          className="mb-6"
        >
          {item.icon}
        </motion.div>
        <h3 className="text-xl md:text-1xl font-bold text-gray-900 mb-6">
          <AnimatedHighlightedText text={item.title} />
        </h3>
        <p className="text-gray-600 text-xs leading-relaxed">
          {item.content.split(".").map((sentence, i, arr) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="block mb-4"
            >
              {sentence.trim() + (i < arr.length - 1 ? "." : "")}
            </motion.span>
          ))}
        </p>
      </div>
    </motion.div>
  </div>
);

const Video = ({
  videoId,
  title,
  isHovered,
}: {
  videoId: string;
  title: string;
  isHovered: boolean;
}) => (
  <div className="flex-1 w-full">
    <motion.div
      animate={{
        scale: isHovered ? 1.03 : 1,
        boxShadow: isHovered
          ? "0 25px 50px -12px rgba(107, 114, 128, 0.3)"
          : "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
      }}
      transition={{ duration: 0.3 }}
      className="aspect-video bg-white rounded-xl overflow-hidden shadow-xl border-2 border-gray-100"
    >
      <iframe
        className="w-full h-[300px]"
        src={`https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </motion.div>
  </div>
);

const AnimatedHighlightedText = ({ text }: { text: string }) => (
  <span className="relative inline-block">
    <span className="relative z-10">{text}</span>
    <motion.span
      className="absolute bottom-0 left-0 w-full h-2 bg-gray-400 opacity-50"
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

export default RedemptivePlan;
