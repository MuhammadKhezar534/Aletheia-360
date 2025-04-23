import { motion } from "framer-motion";
import AnimatedWord from "./AnimatedWord";

const AnimatedParagraph = () => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1, staggerChildren: 0.1 }}
    viewport={{ once: true }}
    className="text-lg md:text-xl text-[#4A5568] mb-12 leading-relaxed max-w-4xl mx-auto"
  >
    <motion.p className="mb-6">
      We're <AnimatedWord word="glad" colors={["#A3B8C8", "#6689A1"]} /> you're
      here! This is a space to discover what makes the Gospel truly{" "}
      <AnimatedWord word="Good News" colors={["#A3B8C8", "#6689A1"]} />.
    </motion.p>
    <motion.p className="mb-6">
      No matter your background or where you are on your{" "}
      <AnimatedWord word="spiritual journey" colors={["#A3B8C8", "#6689A1"]} />,
      we invite you to explore the{" "}
      <AnimatedWord word="hope" colors={["#A3B8C8", "#6689A1"]} />,
      <AnimatedWord word="forgiveness" colors={["#A3B8C8", "#6689A1"]} />, and{" "}
      <AnimatedWord word="purpose" colors={["#A3B8C8", "#6689A1"]} /> Jesus
      offers.
    </motion.p>
    <motion.p>
      Take a look around—watch a short video, read a story of transformation, or
      reach out if you have questions.
    </motion.p>
  </motion.div>
);

export default AnimatedParagraph;
