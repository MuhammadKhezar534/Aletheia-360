import Testimony from "../components/LifeStories/Testimony";
import GoodNewsSection from "../components/LifeStories/GoodNewsSection";
import PrayerContactSection from "../components/LifeStories/PrayerContactSection";
import { testimonies } from "../mock-data/mock";
import { useRef } from "react";
import HeroSection from "../components/LifeStories/HeroSection";

const LifeStories = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    targetRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="bg-[#C5D6DF] text-white">
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
