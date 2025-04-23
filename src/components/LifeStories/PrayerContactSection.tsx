import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import useModalContext from "../../hooks/useModalContext";

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
      className="py-16 px-4 bg-gradient-to-b from-[#A0B8C8] via-[#D2DFE7] to-[#A0B8C8]"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="prayer-card bg-white/60 backdrop-blur-sm p-8 rounded-xl border border-[#B3C9D7] mb-12 shadow-xl"
          whileHover={{ y: -5 }}
        >
          <h3 className="text-2xl font-bold text-[#4E6B7D] mb-6 text-center">
            A Simple Prayer
          </h3>
          <p className="text-[#4E6B7D] mb-6 italic text-center text-sm">
            If you sense God stirring your heart and you're ready to begin (or
            rekindle) a relationship with Him, you can pray something like this
            in your own words:
          </p>
          <div className="bg-white/70 p-6 rounded-lg border-l-4 border-[#6689A1]">
            <p className="text-[#4E6B7D] leading-relaxed text-sm">
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
          className="contact-card bg-white/50 backdrop-blur-md p-8 rounded-xl border border-[#B3C9D7] text-center shadow-lg"
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-xl font-bold text-[#4E6B7D] mb-4">
            Want to Talk or Need Prayer?
          </h3>
          <p className="text-[#4E6B7D] mb-6 text-sm">
            We'd love to connect with you. Whether you have questions, need
            prayer, or just want to share what's on your heart, we're here to
            listen and help.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-2 text-sm bg-[#6689A1] hover:bg-[#4E6B7D] text-white font-semibold rounded-lg"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default PrayerContactSection;
