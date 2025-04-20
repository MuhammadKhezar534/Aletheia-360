// src/components/GoodNewsSection.tsx
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { Back } from "gsap";

gsap.registerPlugin(ScrollTrigger);

const GoodNewsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Section title animation
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

      // Point animations
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

  const points = [
    {
      title: "God's Design & Our Need",
      content:
        "From the very beginning, God created us to experience a close relationship with Him and to live with real purpose. Unfortunately, our wrong choices (what the Bible calls sin) break that relationship, leaving us with a sense of emptiness or guilt we can't fix on our own.",
    },
    {
      title: "Jesus' Sacrifice & Our Response",
      content:
        "The incredible news is that God didn't leave us on our own. In Jesus, God stepped into our brokenness, took our failures upon Himself, and conquered sin and death through His resurrection. When we turn from our old ways and put our trust in Jesus, we receive forgiveness, hope, and a new life guided by the Holy Spirit.",
    },
    {
      title: "Living with God & Moving Forward",
      content:
        "Choosing to follow Jesus is the start of a lifelong journey. It means daily discovering His love, aligning our choices with His wisdom, and experiencing the joy of walking through life with the One who created us. You don't have to be perfect to come to Him—He simply wants your heart and a willingness to let Him lead.",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="py-20 px-4 bg-gradient-to-b from-purple-900/50 to-blue-900/50"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title text-3xl md:text-4xl font-bold text-center text-white mb-16">
          <AnimatedUnderline text="The Good News in a Nutshell" />
        </h2>

        <div className="space-y-12">
          {points.map((point, index) => (
            <motion.div
              key={index}
              className="good-news-point bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-xl border border-white border-opacity-20"
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
                className="text-2xl font-bold text-yellow-400 mb-4"
              >
                {point.title}
              </motion.h3>
              <p className="text-gray-200 leading-relaxed">{point.content}</p>
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
