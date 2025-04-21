import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import useModalContext from "../hooks/useModalContext";

const WelcomeSection = () => {
  const controls = useAnimation();
  const { setIsModalOpen } = useModalContext();

  useEffect(() => {
    const sequence = async () => {
      while (true) {
        await controls.start({
          scale: [1, 1.05, 1],
          transition: { duration: 3, ease: "easeInOut" },
        });
      }
    };
    sequence();
  }, [controls]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-4 bg-gradient-to-b from-indigo-900/20 via-purple-900/30 to-blue-900/20"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.div animate={controls} className="inline-block mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="relative inline-block">
              <motion.span
                animate={{
                  color: ["#fbbf24", "#f59e0b", "#fbbf24"],
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
                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-amber-500"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1.5, delay: 0.3 }}
                viewport={{ once: true }}
              />
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, staggerChildren: 0.1 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed max-w-4xl mx-auto"
        >
          <motion.p className="mb-6">
            We're <AnimatedWord word="glad" colors={["#fbbf24", "#f59e0b"]} />{" "}
            you're here! This is a space to discover what makes the Gospel truly
            <AnimatedWord word="Good News" colors={["#a78bfa", "#8b5cf6"]} />.
          </motion.p>
          <motion.p className="mb-6">
            No matter your background or where you are on your{" "}
            <AnimatedWord
              word="spiritual journey"
              colors={["#fbbf24", "#f59e0b"]}
            />
            , we invite you to explore the{" "}
            <AnimatedWord word="hope" colors={["#86efac", "#4ade80"]} />,
            <AnimatedWord word="forgiveness" colors={["#fca5a5", "#f87171"]} />,
            and
            <AnimatedWord word="purpose" colors={["#93c5fd", "#60a5fa"]} />{" "}
            Jesus offers.
          </motion.p>
          <motion.p>
            Take a look around—watch a short video, read a story of
            transformation, or reach out if you have questions.
          </motion.p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <motion.button
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(251, 191, 36, 0.7)",
                "0 0 0 10px rgba(251, 191, 36, 0)",
                "0 0 0 0 rgba(251, 191, 36, 0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
            className="px-10 py-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold rounded-full text-lg relative overflow-hidden"
          >
            <span
              className="relative z-10"
              onClick={() => setIsModalOpen(true)}
            >
              Contact Us
            </span>
            <motion.div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-400 opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

const AnimatedWord = ({ word, colors }: { word: string; colors: string[] }) => {
  return (
    <motion.span
      animate={{
        color: colors,
        textShadow: `0 0 10px ${colors[0]}`,
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
