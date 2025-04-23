import { motion } from "framer-motion";
import AnimatedHighlightedText from "./AnimatedHighlightedText";

interface item {
  title: string;
  icon: JSX.Element;
  content: string;
  videoId: string;
}

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

export default PlanItem;

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
    <motion.iframe
      title={title}
      src={`https://www.youtube.com/embed/${videoId}`}
      className="w-full h-64 md:h-72 rounded-xl border-4 border-[#C1D4DD]"
      allowFullScreen
      animate={{
        borderColor: isHovered ? "#7EA0B5" : "#C1D4DD",
      }}
      transition={{ duration: 0.3 }}
    />
  </div>
);

const Card = ({ item, isHovered }: { item: item; isHovered: boolean }) => (
  <div className="flex-1 relative">
    <motion.div
      animate={{
        scale: isHovered ? 1.05 : 1,
        boxShadow: isHovered
          ? "0 25px 50px -12px rgba(102, 137, 161, 0.3)"
          : "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
      }}
      transition={{ duration: 0.3 }}
      className="p-1 bg-gradient-to-br from-[#7EA0B5] to-[#A3B9C7] rounded-2xl"
    >
      <div className="bg-white rounded-xl p-6 h-full shadow-md">
        <motion.div
          animate={{ color: isHovered ? "#4A6E84" : "#334B59" }}
          transition={{ duration: 0.3 }}
          className="mb-6"
        >
          {item.icon}
        </motion.div>
        <h3 className="text-xl md:text-1xl font-bold text-[#334B59] mb-6">
          <AnimatedHighlightedText text={item.title} />
        </h3>
        <p className="text-[#4A6E84] text-xs leading-relaxed">
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
