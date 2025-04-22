// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
// import { WORDS } from "../mock-data/mock";
// import gsap from "gsap";
// import useModalContext from "../hooks/useModalContext";

// const Banner = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const bannerRef = useRef<HTMLDivElement>(null);
//   const verseRef = useRef<HTMLDivElement>(null);
//   const { setIsModalOpen } = useModalContext();

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % WORDS.length);
//     }, 4000);

//     if (bannerRef.current) {
//       gsap.to(bannerRef.current, {
//         backgroundPosition: "50% 40%",
//         duration: 20,
//         ease: "none",
//         repeat: -1,
//         yoyo: true,
//       });
//     }

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     if (verseRef.current) {
//       gsap.from(verseRef.current, {
//         opacity: 0,
//         y: 20,
//         duration: 1,
//         delay: 0.5,
//         ease: "elastic.out(1, 0.5)",
//       });
//     }
//   }, [currentIndex]);

//   return (
//     <div
//       ref={bannerRef}
//       className="w-full min-h-screen flex items-center justify-center relative overflow-hidden bg-cover bg-center bg-no-repeat py-20 px-4 text-center"
//       style={{
//         backgroundImage:
//           "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop')",
//       }}
//     >
//       <div className="relative z-10 max-w-6xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="mb-8"
//         >
//           <h2 className="text-xl md:text-1xl font-light text-yellow-300 mb-2">
//             Welcome to Aletheia 360
//           </h2>
//           <h1 className="text-1xl md:text-3xl font-bold text-white">
//             Experience God's <span className="text-yellow-300">Love</span> and{" "}
//             <span className="text-yellow-300">Mercy</span>
//           </h1>
//         </motion.div>

//         <div className="mb-12 h-20">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={currentIndex}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -30 }}
//               transition={{ duration: 0.8, ease: "easeInOut" }}
//               className="text-2xl md:text-4xl font-bold text-yellow-300 mb-4"
//             >
//               {WORDS[currentIndex].text}
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         <div className="max-w-2xl mx-auto mb-12 bg-black bg-opacity-40 p-6 rounded-lg">
//           <motion.p
//             key={`desc-${currentIndex}`}
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.5 }}
//             className="text-md md:text-lg italic text-white mb-4 leading-relaxed"
//           >
//             "{WORDS[currentIndex].description}"
//           </motion.p>
//           <motion.p
//             key={`verse-${currentIndex}`}
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//             className="text-lg text-yellow-300 font-semibold"
//           >
//             — {WORDS[currentIndex].verse}
//           </motion.p>
//         </div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.8 }}
//           className="flex flex-wrap justify-center gap-4 mt-8"
//         >
//           {WORDS.map((word, index) => (
//             <motion.button
//               key={word.text}
//               whileHover={{
//                 scale: 1.1,
//                 backgroundColor: "rgba(255, 214, 0, 0.2)",
//                 transition: { duration: 0.2 },
//               }}
//               whileTap={{ scale: 0.95 }}
//               animate={{
//                 backgroundColor:
//                   currentIndex === index
//                     ? "rgba(255, 214, 0, 0.3)"
//                     : "rgba(255, 255, 255, 0.1)",
//                 transition: { duration: 0.3 },
//               }}
//               onClick={() => setCurrentIndex(index)}
//               className="px-4 py-2 rounded-full text-sm bg-white bg-opacity-10 text-white cursor-pointer border border-yellow-300 border-opacity-30 hover:border-opacity-100 transition-all"
//             >
//               {word.text}
//             </motion.button>
//           ))}
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1 }}
//           className="mt-16"
//         >
//           <button
//             onClick={() => setIsModalOpen(true)}
//             className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-lg text-md transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
//           >
//             Contact Us
//           </button>
//         </motion.div>
//       </div>

//       <motion.div
//         className="absolute right-10 top-1/2 text-white opacity-20"
//         animate={{
//           rotate: [0, 5, -5, 0],
//           y: ["-50%", "-48%", "-52%", "-50%"],
//         }}
//         transition={{
//           duration: 8,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="120"
//           height="120"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         >
//           <path d="M12 2v20M2 12h20" />
//         </svg>
//       </motion.div>
//     </div>
//   );
// };

// export default Banner;

// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
// import { WORDS } from "../mock-data/mock";
// import gsap from "gsap";
// import useModalContext from "../hooks/useModalContext";

// const Banner = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const bannerRef = useRef<HTMLDivElement>(null);
//   const verseRef = useRef<HTMLDivElement>(null);
//   const { setIsModalOpen } = useModalContext();

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % WORDS.length);
//     }, 4000);

//     if (bannerRef.current) {
//       gsap.to(bannerRef.current, {
//         backgroundPosition: "50% 40%",
//         duration: 20,
//         ease: "none",
//         repeat: -1,
//         yoyo: true,
//       });
//     }

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     if (verseRef.current) {
//       gsap.from(verseRef.current, {
//         opacity: 0,
//         y: 20,
//         duration: 1,
//         delay: 0.5,
//         ease: "elastic.out(1, 0.5)",
//       });
//     }
//   }, [currentIndex]);

//   return (
//     <div
//       ref={bannerRef}
//       className="w-full min-h-screen flex items-center justify-center relative overflow-hidden bg-cover bg-center bg-no-repeat py-20 px-4 text-center"
//       style={{
//         backgroundImage:
//           "linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.9)), url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop')",
//       }}
//     >
//       <div className="relative z-10 max-w-6xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="mb-8"
//         >
//           <h2 className="text-xl md:text-1xl font-light text-indigo-600 mb-2">
//             Welcome to Aletheia 360
//           </h2>
//           <h1 className="text-1xl md:text-3xl font-bold text-gray-800">
//             Experience God's <span className="text-indigo-600">Love</span> and{" "}
//             <span className="text-indigo-600">Mercy</span>
//           </h1>
//         </motion.div>

//         <div className="mb-12 h-20">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={currentIndex}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -30 }}
//               transition={{ duration: 0.8, ease: "easeInOut" }}
//               className="text-2xl md:text-4xl font-bold text-indigo-500 mb-4"
//             >
//               {WORDS[currentIndex].text}
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         <div className="max-w-2xl mx-auto mb-12 bg-white bg-opacity-70 p-6 rounded-lg shadow-lg backdrop-blur-sm">
//           <motion.p
//             key={`desc-${currentIndex}`}
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.5 }}
//             className="text-md md:text-lg italic text-gray-700 mb-4 leading-relaxed"
//           >
//             "{WORDS[currentIndex].description}"
//           </motion.p>
//           <motion.p
//             key={`verse-${currentIndex}`}
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//             className="text-lg text-indigo-600 font-semibold"
//           >
//             — {WORDS[currentIndex].verse}
//           </motion.p>
//         </div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.8 }}
//           className="flex flex-wrap justify-center gap-4 mt-8"
//         >
//           {WORDS.map((word, index) => (
//             <motion.button
//               key={word.text}
//               whileHover={{
//                 scale: 1.1,
//                 backgroundColor: "rgba(99, 102, 241, 0.2)",
//                 transition: { duration: 0.2 },
//               }}
//               whileTap={{ scale: 0.95 }}
//               animate={{
//                 backgroundColor:
//                   currentIndex === index
//                     ? "rgba(99, 102, 241, 0.3)"
//                     : "rgba(255, 255, 255, 0.7)",
//                 transition: { duration: 0.3 },
//               }}
//               onClick={() => setCurrentIndex(index)}
//               className="px-4 py-2 rounded-full text-sm bg-white bg-opacity-70 text-indigo-600 cursor-pointer border border-indigo-300 border-opacity-50 hover:border-opacity-100 transition-all shadow-sm"
//             >
//               {word.text}
//             </motion.button>
//           ))}
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1 }}
//           className="mt-16"
//         >
//           <button
//             onClick={() => setIsModalOpen(true)}
//             className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold rounded-lg text-md transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
//           >
//             Contact Us
//           </button>
//         </motion.div>
//       </div>

//       <motion.div
//         className="absolute right-10 top-1/2 text-indigo-400 opacity-60"
//         animate={{
//           rotate: [0, 5, -5, 0],
//           y: ["-50%", "-48%", "-52%", "-50%"],
//         }}
//         transition={{
//           duration: 8,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="120"
//           height="120"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         >
//           <path d="M12 2v20M2 12h20" />
//         </svg>
//       </motion.div>
//     </div>
//   );
// };

// export default Banner;

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { WORDS } from "../mock-data/mock";
import gsap from "gsap";
import useModalContext from "../hooks/useModalContext";

const NEUTRAL_BG = "#FFF4CA"; // Light amber-50 color

const AnimatedHeader = () => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="mb-8"
  >
    <h2 className="text-xl md:text-1xl font-light text-amber-700 mb-2">
      Welcome to Aletheia 360
    </h2>
    <h1 className="text-1xl md:text-3xl font-bold text-amber-900">
      Experience God's <span className="text-amber-600">Love</span> and{" "}
      <span className="text-amber-600">Mercy</span>
    </h1>
  </motion.div>
);

const WordDisplay = ({ currentIndex }: { currentIndex: number }) => (
  <div className="mb-12 h-20">
    <AnimatePresence mode="wait">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="text-2xl md:text-4xl font-bold text-amber-900 mb-4"
      >
        {WORDS[currentIndex].text}
      </motion.div>
    </AnimatePresence>
  </div>
);

const WordDetails = ({ currentIndex }: { currentIndex: number }) => (
  <div className="max-w-2xl mx-auto mb-12 bg-amber-50 bg-opacity-80 p-6 rounded-lg shadow-lg backdrop-blur-sm border border-amber-100">
    <motion.p
      key={`desc-${currentIndex}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
      className="text-md md:text-lg italic text-amber-800 mb-4 leading-relaxed"
    >
      "{WORDS[currentIndex].description}"
    </motion.p>
    <motion.p
      key={`verse-${currentIndex}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="text-lg text-amber-600 font-semibold"
    >
      — {WORDS[currentIndex].verse}
    </motion.p>
  </div>
);

const WordButtons = ({
  currentIndex,
  setCurrentIndex,
}: {
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}) => (
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
          backgroundColor: "rgba(180, 83, 9, 0.15)",
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.95 }}
        animate={{
          backgroundColor:
            currentIndex === index
              ? "rgba(180, 83, 9, 0.25)"
              : "rgba(254, 243, 199, 0.7)",
          transition: { duration: 0.3 },
        }}
        onClick={() => setCurrentIndex(index)}
        className="px-4 py-2 rounded-full text-sm text-amber-900 cursor-pointer border border-amber-200 hover:border-amber-300 transition-all shadow-sm"
      >
        {word.text}
      </motion.button>
    ))}
  </motion.div>
);

const ContactButton = ({ onClick }: { onClick: () => void }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1 }}
    className="mt-16"
  >
    <button
      onClick={onClick}
      className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-amber-50 font-bold rounded-lg text-md transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
    >
      Contact Us
    </button>
  </motion.div>
);

const CrossIcon = () => (
  <motion.div
    className="absolute right-10 top-1/2 text-amber-300 opacity-60"
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
);

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const bannerRef = useRef<HTMLDivElement>(null);
  const verseRef = useRef<HTMLDivElement>(null);
  const { setIsModalOpen } = useModalContext();

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
      className="w-full min-h-screen flex items-center justify-center relative overflow-hidden py-20 px-4 text-center"
      style={{
        backgroundColor: NEUTRAL_BG,
      }}
    >
      <div className="relative z-10 max-w-6xl mx-auto">
        <AnimatedHeader />
        <WordDisplay currentIndex={currentIndex} />
        <WordDetails currentIndex={currentIndex} />
        <WordButtons
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
        <ContactButton onClick={() => setIsModalOpen(true)} />
      </div>
      <CrossIcon />
    </div>
  );
};

export default Banner;
