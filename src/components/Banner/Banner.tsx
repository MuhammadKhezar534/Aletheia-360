import { useEffect, useRef, useState } from "react";
import { WORDS } from "../../mock-data/mock";
import gsap from "gsap";
import useModalContext from "../../hooks/useModalContext";
import CrossIcon from "./CrossIcon";
import AnimatedHeader from "./AnimatedHeader";
import WordDetails from "./WorldDetails";
import WordDisplay from "./WordDisplay";
import WordButtons from "./WordButtons";
import ContactButton from "./ContactButton";

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
      className="w-full min-h-screen flex items-center justify-center relative overflow-hidden py-20 px-4 text-center bg-gradient-to-b from-[#D9E4EA] via-[#C5D6DF] to-[#A3C2D3]"
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
