// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// interface Props {
//   onScrollClick: () => void;
// }

// const HeroSection = ({ onScrollClick }: Props) => {
//   const [currentWordIndex, setCurrentWordIndex] = useState(0);
//   const words = ["Hope", "Healing", "Purpose", "Redemption", "Faith", "Love"];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentWordIndex((prev) => (prev + 1) % words.length);
//     }, 2000);
//     return () => clearInterval(interval);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <div
//       className="relative w-full min-h-screen flex items-center justify-center"
//       style={{
//         backgroundImage:
//           "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2070&auto=format&fit=crop')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-50"></div>

//       <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
//         >
//           Life Stories: <span className="text-yellow-300">Real People</span>
//         </motion.h1>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//           className="mb-12"
//         >
//           <h2 className="text-1xl md:text-2xl font-bold text-white mb-4">
//             Discover{" "}
//             <span className="text-yellow-300">{words[currentWordIndex]}</span>{" "}
//             in Christ
//           </h2>
//           <p className="text-md md:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
//             We're glad you're here. Meet people who've experienced how Jesus
//             brings healing and purpose even in life's toughest challenges.
//           </p>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6, duration: 0.8 }}
//           className="flex flex-wrap justify-center gap-4"
//         >
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={onScrollClick}
//             className="px-6 py-2 tet-sm bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg transition-all"
//           >
//             Watch Stories
//           </motion.button>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="px-6 py-2 tet-sm bg-transparent hover:bg-white hover:bg-opacity-10 text-white border-2 border-white font-bold rounded-lg transition-all"
//           >
//             Learn More
//           </motion.button>
//         </motion.div>
//       </div>

//       {/* Floating cross animation */}
//       <motion.div
//         className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white opacity-30"
//         animate={{
//           y: [0, -20, 0],
//           opacity: [0.3, 0.5, 0.3],
//         }}
//         transition={{
//           duration: 6,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="60"
//           height="60"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//         >
//           <path d="M12 2v20M2 12h20" />
//         </svg>
//       </motion.div>
//     </div>
//   );
// };

// export default HeroSection;

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Props {
  onScrollClick: () => void;
}

const HeroSection = ({ onScrollClick }: Props) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ["Hope", "Healing", "Purpose", "Redemption", "Faith", "Love"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-300 via-amber-200 to-amber-50 text-red-900">
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-transparent backdrop-blur-sm"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-4xl lg:text-5xl font-bold text-rose-700 mb-6"
        >
          Life Stories: <span className="text-amber-600">Real People</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-1xl md:text-2xl font-bold text-rose-600 mb-4">
            Discover{" "}
            <span className="text-amber-700">{words[currentWordIndex]}</span> in
            Christ
          </h2>
          <p className="text-md md:text-lg text-rose-500 max-w-3xl mx-auto leading-relaxed">
            We're glad you're here. Meet people who've experienced how Jesus
            brings healing and purpose even in life's toughest challenges.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <HeroButton
            onClick={onScrollClick}
            bgColor="bg-rose-600"
            hoverColor="hover:bg-rose-700"
            textColor="text-white"
            label="Watch Stories"
          />
          <HeroButton
            bgColor="bg-white border border-amber-400"
            hoverColor="hover:bg-amber-100"
            textColor="text-rose-700"
            label="Learn More"
          />
        </motion.div>
      </div>

      {/* Floating cross animation (light tone) */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-amber-400 opacity-60"
        animate={{
          y: [0, -20, 0],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 2v20M2 12h20" />
        </svg>
      </motion.div>
    </div>
  );
};

interface ButtonProps {
  onClick?: () => void;
  bgColor: string;
  hoverColor: string;
  textColor: string;
  label: string;
}

const HeroButton = ({
  onClick,
  bgColor,
  hoverColor,
  textColor,
  label,
}: ButtonProps) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`${bgColor} ${hoverColor} ${textColor} px-6 py-2 text-sm font-bold rounded-lg transition-all shadow-md`}
  >
    {label}
  </motion.button>
);

export default HeroSection;
