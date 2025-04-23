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
      `https://www.youtube.com/embed/${videoId}?si=uq1fHubl0dpWbQrW`,
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
      className="py-16 px-4 bg-gradient-to-b from-[#C5D6DF] via-[#D9E4EA] to-[#A3C2D3]"
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
              color: ["#6689A1", "#4E6B7D", "#6689A1"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-lg md:text-2xl font-bold mb-4"
          >
            {title}
          </motion.div>
          <p className="text-[#4E6B7D] text-sm leading-relaxed mb-6">
            {synopsis}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleStory}
            className="px-4 py-2 text-sm bg-[#6689A1] hover:bg-[#4E6B7D] text-white font-semibold rounded-lg shadow-md transition"
          >
            Watch {name}'s Video
          </motion.button>
        </motion.div>

        <div
          className={`testimony-video-${name} flex-1 w-full aspect-video bg-white rounded-xl overflow-hidden shadow-lg border border-[#B3C9D7]`}
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
