// // src/components/PrayerContactSection.tsx
// import { motion } from "framer-motion";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useRef } from "react";
// import useModalContext from "../hooks/useModalContext";

// gsap.registerPlugin(ScrollTrigger);

// const PrayerContactSection = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const { setIsModalOpen } = useModalContext();

//   useGSAP(
//     () => {
//       gsap.from(".prayer-card", {
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top bottom-=100",
//           toggleActions: "play none none none",
//         },
//         y: 50,
//         opacity: 0,
//         duration: 1,
//         ease: "power3.out",
//       });

//       gsap.from(".contact-card", {
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top center",
//           toggleActions: "play none none none",
//         },
//         y: 50,
//         opacity: 0,
//         duration: 1,
//         delay: 0.3,
//         ease: "power3.out",
//       });
//     },
//     { scope: containerRef }
//   );

//   return (
//     <div
//       ref={containerRef}
//       className="py-16 px-4 bg-gradient-to-b from-blue-900/50 to-purple-900/50"
//     >
//       <div className="max-w-4xl mx-auto">
//         <motion.div
//           className="prayer-card bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-xl border border-white border-opacity-20 mb-12"
//           whileHover={{ y: -5 }}
//         >
//           <h3 className="text-2xl font-bold text-yellow-400 mb-6 text-center">
//             A Simple Prayer
//           </h3>
//           <p className="text-gray-200 mb-6 italic text-center text-sm">
//             If you sense God stirring your heart and you're ready to begin (or
//             rekindle) a relationship with Him, you can pray something like this
//             in your own words:
//           </p>
//           <div className="bg-black bg-opacity-40 p-6 rounded-lg border-l-4 border-yellow-400">
//             <p className="text-gray-200 leading-relaxed text-sm">
//               "God, I admit that I've sinned and turned away from You. Thank You
//               for sending Jesus to die on the cross for my sins and for offering
//               me forgiveness. Right now, I choose to turn from my old ways and
//               trust in You. Come into my life, guide me by Your Holy Spirit, and
//               help me follow You each day. Thank You for Your love, mercy, and
//               new life. In Jesus Name, Amen."
//             </p>
//           </div>
//         </motion.div>

//         <motion.div
//           className="contact-card bg-gradient-to-br from-yellow-400/10 to-amber-500/10 p-8 rounded-xl border border-yellow-400/30 text-center"
//           whileHover={{ scale: 1.02 }}
//         >
//           <h3 className="text-1xl font-bold text-white mb-4">
//             Want to Talk or Need Prayer?
//           </h3>
//           <p className="text-gray-200 mb-6 text-sm">
//             We'd love to connect with you. Whether you have questions, need
//             prayer, or just want to share what's on your heart, we're here to
//             listen and help.
//           </p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => setIsModalOpen(true)}
//             className="px-6 py-2 text-sm bg-yellow-500 text-black font-semibold rounded-lg"
//           >
//             Contact Us
//           </motion.button>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default PrayerContactSection;

// src/components/PrayerContactSection.tsx

import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import useModalContext from "../hooks/useModalContext";

gsap.registerPlugin(ScrollTrigger);

const PrayerContactSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { setIsModalOpen } = useModalContext();

  useGSAP(
    () => {
      gsap.from(".prayer-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none none",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".contact-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          toggleActions: "play none none none",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="py-16 px-4 bg-gradient-to-b from-[#fde68a] via-[#fbcfe8] to-[#fca5a5]"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="prayer-card bg-white/60 backdrop-blur-sm p-8 rounded-xl border border-white/30 mb-12 shadow-xl"
          whileHover={{ y: -5 }}
        >
          <h3 className="text-2xl font-bold text-[#7c2d12] mb-6 text-center">
            A Simple Prayer
          </h3>
          <p className="text-[#7c2d12] mb-6 italic text-center text-sm">
            If you sense God stirring your heart and you're ready to begin (or
            rekindle) a relationship with Him, you can pray something like this
            in your own words:
          </p>
          <div className="bg-white/70 p-6 rounded-lg border-l-4 border-[#f87171]">
            <p className="text-[#7c2d12] leading-relaxed text-sm">
              "God, I admit that I've sinned and turned away from You. Thank You
              for sending Jesus to die on the cross for my sins and for offering
              me forgiveness. Right now, I choose to turn from my old ways and
              trust in You. Come into my life, guide me by Your Holy Spirit, and
              help me follow You each day. Thank You for Your love, mercy, and
              new life. In Jesus Name, Amen."
            </p>
          </div>
        </motion.div>

        <motion.div
          className="contact-card bg-white/50 backdrop-blur-md p-8 rounded-xl border border-[#fca5a5] text-center shadow-lg"
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-xl font-bold text-[#7c2d12] mb-4">
            Want to Talk or Need Prayer?
          </h3>
          <p className="text-[#7c2d12] mb-6 text-sm">
            We'd love to connect with you. Whether you have questions, need
            prayer, or just want to share what's on your heart, we're here to
            listen and help.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-2 text-sm bg-[#f87171] hover:bg-[#ef4444] text-white font-semibold rounded-lg"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default PrayerContactSection;
