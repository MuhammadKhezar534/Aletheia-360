// import { motion } from "framer-motion";
// import { beliefs } from "../mock-data/mock";
// import useModalContext from "../hooks/useModalContext";

// const AboutUsPage = () => {
//   const { setIsModalOpen } = useModalContext();

//   return (
//     <div className="bg-blue-950 text-white">
//       <div
//         className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-50"></div>

//         <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-4xl md:text-6xl font-bold text-white mb-6"
//           >
//             About <span className="text-yellow-300">Aletheia 360</span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//             className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed"
//           >
//             A ministry of Life International Christian Fellowship
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.6, duration: 0.8 }}
//           >
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => setIsModalOpen(true)}
//               className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg transition-all"
//             >
//               Contact Us
//             </motion.button>
//           </motion.div>
//         </div>
//       </div>

//       <div className="py-20 px-4 bg-gradient-to-b from-blue-900/30 to-purple-900/30">
//         <div className="max-w-6xl mx-auto">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-2xl md:text-3xl font-bold text-center text-white mb-16"
//           >
//             Our <span className="text-yellow-300">Core Beliefs</span>
//           </motion.h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {beliefs.map((belief, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -10 }}
//                 className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl border border-white border-opacity-20"
//               >
//                 <div className="flex flex-col items-center text-center">
//                   <motion.div
//                     animate={{
//                       rotate: [0, 10, -10, 0],
//                     }}
//                     transition={{
//                       duration: 8,
//                       repeat: Infinity,
//                       ease: "easeInOut",
//                     }}
//                     className="mb-4"
//                   >
//                     {belief.icon}
//                   </motion.div>
//                   <h3 className="text-lg font-bold text-yellow-300 mb-4">
//                     {belief.title}
//                   </h3>
//                   <p className="text-gray-200 text-xs">{belief.content}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="py-20 px-4 bg-gradient-to-b from-purple-900/50 to-blue-900/50">
//         <div className="max-w-4xl mx-auto text-center">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-2xl md:text-3xl font-bold text-white mb-8"
//           >
//             Want to <span className="text-yellow-300 text-md">Learn More</span>?
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-lg text-gray-200 mb-8 max-w-3xl mx-auto"
//           >
//             If you have questions about our beliefs or want to know more about
//             Jesus, we'd love to talk with you.
//           </motion.p>

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg transition-all"
//           >
//             Get In Touch
//           </motion.button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUsPage;

import { motion } from "framer-motion";
import { beliefs } from "../mock-data/mock";
import useModalContext from "../hooks/useModalContext";

const HeroSection = ({ onContactClick }: { onContactClick: () => void }) => (
  <div className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white">
    <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold mb-6"
      >
        About <span className="text-gray-400">Aletheia 360</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed"
      >
        A ministry of Life International Christian Fellowship
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onContactClick}
          className="px-8 py-3 bg-gray-600 hover:bg-gray-700 text-white font-bold rounded-lg transition-all"
        >
          Contact Us
        </motion.button>
      </motion.div>
    </div>
  </div>
);

const CoreBeliefsSection = () => (
  <div className="py-20 px-4 bg-gradient-to-b from-gray-800 to-gray-700">
    <div className="max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-bold text-center text-white mb-16"
      >
        Our <span className="text-gray-400">Core Beliefs</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {beliefs.map((belief, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl border border-white border-opacity-10"
          >
            <div className="flex flex-col items-center text-center">
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mb-4"
              >
                {belief.icon}
              </motion.div>
              <h3 className="text-lg font-bold text-gray-400 mb-4">
                {belief.title}
              </h3>
              <p className="text-gray-300 text-xs">{belief.content}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const LearnMoreSection = () => (
  <div className="py-20 px-4 bg-gradient-to-b from-gray-700 to-gray-800">
    <div className="max-w-4xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-bold text-white mb-8"
      >
        Want to <span className="text-gray-400">Learn More</span>?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
        className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto"
      >
        If you have questions about our beliefs or want to know more about
        Jesus, we'd love to talk with you.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-3 bg-gray-600 hover:bg-gray-700 text-white font-bold rounded-lg transition-all"
      >
        Get In Touch
      </motion.button>
    </div>
  </div>
);

const AboutUsPage = () => {
  const { setIsModalOpen } = useModalContext();

  return (
    <div className="bg-gray-900 text-white">
      <HeroSection onContactClick={() => setIsModalOpen(true)} />
      <CoreBeliefsSection />
      <LearnMoreSection />
    </div>
  );
};

export default AboutUsPage;
