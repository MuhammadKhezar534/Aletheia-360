import useModalContext from "../../hooks/useModalContext";
import CoreBeliefsSection from "./CoreBeliefsSection";
import HeroSection from "./HeroSection";
import LearnMoreSection from "./LearnMoreSection";

const AboutUsPage = () => {
  const { setIsModalOpen } = useModalContext();

  return (
    <div className="bg-gradient-to-b from-[#C5D6DF] via-[#D9E4EA] to-[#A3C2D3]">
      <HeroSection onContactClick={() => setIsModalOpen(true)} />
      <CoreBeliefsSection />
      <LearnMoreSection />
    </div>
  );
};

export default AboutUsPage;
