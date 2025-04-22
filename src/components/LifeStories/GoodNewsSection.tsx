import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { Back } from "gsap";
import { points } from "../../mock-data/mock";

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
      className="py-20 px-4 bg-gradient-to-b from-amber-50 via-amber-100 to-amber-100"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="section-title text-1xl md:text-3xl font-bold text-center text-rose-700 mb-16">
          <AnimatedUnderline text="The Good News in a Nutshell" />
        </h2>

        <div className="space-y-12">
          {points.map((point, index) => (
            <motion.div
              key={index}
              className="good-news-point bg-white bg-opacity-70 backdrop-blur-sm p-6 rounded-xl border border-amber-200 shadow-md"
              whileHover={{ y: -5 }}
            >
              <motion.h3
                animate={{
                  color: ["#b91c1c", "#c2410c", "#b91c1c"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-lg font-bold mb-4"
              >
                {point.title}
              </motion.h3>
              <p className="text-rose-600 leading-relaxed text-sm">
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
      <span className="relative z-10 text-rose-700">{text}</span>
      <motion.span
        className="absolute bottom-0 left-0 w-full h-1 bg-amber-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: Back.easeOut }}
      />
    </span>
  );
};

export default GoodNewsSection;
