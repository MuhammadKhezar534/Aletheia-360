import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { Back } from "gsap";

gsap.registerPlugin(ScrollTrigger);

interface TestimonyProps {
  name: string;
  title: string;
  synopsis: string;
  videoId: string;
  reverse?: boolean;
}

const Testimony = ({
  name,
  title,
  synopsis,
  videoId,
  reverse = false,
}: TestimonyProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleStory = () => {
    window.open(
      "https://www.youtube.com/embed/fpTstq4ZS6U?si=uq1fHubl0dpWbQrW",
      "_blank",
      "noopener,noreferrer"
    );
  };

  useGSAP(
    () => {
      gsap.from(containerRef.current, {
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

      gsap.from(`.testimony-text-${name}`, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          toggleActions: "play none none none",
        },
        x: reverse ? 50 : -50,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: Back.easeOut,
      });

      gsap.from(`.testimony-video-${name}`, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          toggleActions: "play none none none",
        },
        x: reverse ? -50 : 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
        ease: Back.easeOut,
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="py-16 px-4 bg-gradient-to-b from-blue-950/50 to-purple-950/50"
    >
      <div
        className={`max-w-4xl mx-auto flex flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        } items-center gap-12`}
      >
        <motion.div
          className={`testimony-text-${name} flex-1`}
          whileHover={{ y: -5 }}
        >
          <motion.div
            animate={{
              color: ["#fbbf24", "#f59e0b", "#fbbf24"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-lg md:text-2xl font-bold text-yellow-400 mb-4"
          >
            {title}
          </motion.div>
          <p className="text-gray-200 text-sm leading-relaxed mb-6">
            {synopsis}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleStory}
            className="px-4 py-2 text-sm bg-yellow-500 text-black font-semibold rounded-lg"
          >
            Watch {name}'s Video
          </motion.button>
        </motion.div>

        <div
          className={`testimony-video-${name} flex-1 w-full aspect-video bg-black rounded-xl overflow-hidden shadow-2xl`}
        >
          <iframe
            className="w-full h-[270px]"
            src={`https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0`}
            title={`${name}'s Testimony`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
