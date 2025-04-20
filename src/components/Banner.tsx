import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { WORDS } from "../mock-data/mock";
import gsap from "gsap";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const bannerRef = useRef<HTMLDivElement>(null);
  const verseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % WORDS.length);
    }, 4000);

    if (bannerRef.current) {
      gsap.to(bannerRef.current, {
        backgroundPosition: "50% 40%",
        duration: 20,
        ease: "none",
        repeat: -1,
        yoyo: true,
      });
    }

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (verseRef.current) {
      gsap.from(verseRef.current, {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.5,
        ease: "elastic.out(1, 0.5)",
      });
    }
  }, [currentIndex]);

  return (
    <div
      ref={bannerRef}
      className="w-full min-h-screen flex items-center justify-center relative overflow-hidden bg-cover bg-center bg-no-repeat py-20 px-4 text-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop')",
      }}
    >
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-light text-yellow-300 mb-2">
            Welcome to Our Community
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Experience God's <span className="text-yellow-300">Love</span> and{" "}
            <span className="text-yellow-300">Mercy</span>
          </h1>
        </motion.div>

        <div className="mb-12 h-40">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="text-5xl md:text-7xl font-bold text-yellow-300 mb-4"
            >
              {WORDS[currentIndex].text}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="max-w-2xl mx-auto mb-12 bg-black bg-opacity-40 p-6 rounded-lg">
          <motion.p
            key={`desc-${currentIndex}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-2xl italic text-white mb-4 leading-relaxed"
          >
            "{WORDS[currentIndex].description}"
          </motion.p>
          <motion.p
            key={`verse-${currentIndex}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-yellow-300 font-semibold"
          >
            — {WORDS[currentIndex].verse}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          {WORDS.map((word, index) => (
            <motion.button
              key={word.text}
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(255, 214, 0, 0.2)",
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                backgroundColor:
                  currentIndex === index
                    ? "rgba(255, 214, 0, 0.3)"
                    : "rgba(255, 255, 255, 0.1)",
                transition: { duration: 0.3 },
              }}
              onClick={() => setCurrentIndex(index)}
              className="px-6 py-3 rounded-full bg-white bg-opacity-10 text-white cursor-pointer border border-yellow-300 border-opacity-30 hover:border-opacity-100 transition-all"
            >
              {word.text}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-16"
        >
          <button className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
            Join Our Community Today
          </button>
        </motion.div>
      </div>

      <motion.div
        className="absolute right-10 top-1/2 text-white opacity-20"
        animate={{
          rotate: [0, 5, -5, 0],
          y: ["-50%", "-48%", "-52%", "-50%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="120"
          height="120"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2v20M2 12h20" />
        </svg>
      </motion.div>
    </div>
  );
};

export default Banner;
