// src/components/GoodNewsSection.tsx
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { Back } from "gsap";
import { points } from "../mock-data/mock";

gsap.registerPlugin(ScrollTrigger);

const GoodNewsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".section-title", {
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

      gsap.from(".good-news-point", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          toggleActions: "play none none none",
        },
        y: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: Back.easeOut,
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="py-20 px-4 bg-gradient-to-b from-purple-900/50 to-blue-900/50"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="section-title text-1xl md:text-3xl font-bold text-center text-white mb-16">
          <AnimatedUnderline text="The Good News in a Nutshell" />
        </h2>

        <div className="space-y-12">
          {points.map((point, index) => (
            <motion.div
              key={index}
              className="good-news-point bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl border border-white border-opacity-20"
              whileHover={{ y: -5 }}
            >
              <motion.h3
                animate={{
                  textShadow: [
                    "0 0 5px rgba(251, 191, 36, 0.3)",
                    "0 0 15px rgba(251, 191, 36, 0.6)",
                    "0 0 5px rgba(251, 191, 36, 0.3)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-lg font-bold text-yellow-400 mb-4"
              >
                {point.title}
              </motion.h3>
              <p className="text-gray-200 leading-relaxed text-xs">
                {point.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AnimatedUnderline = ({ text }: { text: string }) => {
  return (
    <span className="relative inline-block">
      <span className="relative z-10">{text}</span>
      <motion.span
        className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: Back.easeOut }}
      />
    </span>
  );
};

export default GoodNewsSection;
