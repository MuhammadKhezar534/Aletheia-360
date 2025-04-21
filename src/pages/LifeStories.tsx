import HeroSection from "../components/HeroSection1";
import Testimony from "../components/Testimony";
import GoodNewsSection from "../components/GoodNewsSection";
import PrayerContactSection from "../components/PrayerContactSection";
import { testimonies } from "../mock-data/mock";
import { useRef } from "react";

const LifeStories = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    targetRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="bg-blue-950 text-white">
      <div>
        <HeroSection onScrollClick={handleScroll} />
      </div>

      <div ref={targetRef}>
        {testimonies.map((testimony, index) => (
          <Testimony
            key={index}
            name={testimony.name}
            title={testimony.title}
            synopsis={testimony.synopsis}
            videoId={testimony.videoId}
            reverse={testimony.reverse}
          />
        ))}
      </div>

      <GoodNewsSection />
      <PrayerContactSection />
    </div>
  );
};

export default LifeStories;
