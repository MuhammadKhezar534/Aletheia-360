import HeroSection from "../components/HeroSection1";
import Testimony from "../components/Testimony";
import GoodNewsSection from "../components/GoodNewsSection";
import PrayerContactSection from "../components/PrayerContactSection";
import { testimonies } from "../mock-data/mock";

const LifeStories = () => {
  return (
    <div className="bg-blue-950 text-white">
      <div>
        <HeroSection />
      </div>
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

      <GoodNewsSection />
      <PrayerContactSection />
    </div>
  );
};

export default LifeStories;
