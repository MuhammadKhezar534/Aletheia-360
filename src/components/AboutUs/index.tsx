import useModalContext from "../../hooks/useModalContext";
import CoreBeliefsSection from "./CoreBeliefsSection";
import HeroSection from "./HeroSection";
import LearnMoreSection from "./LearnMoreSection";

const AboutUsPage = () => {
  const { setIsModalOpen } = useModalContext();

  return (
    <div className="bg-amber-50 text-amber-900">
      <HeroSection onContactClick={() => setIsModalOpen(true)} />
      <CoreBeliefsSection />
      <LearnMoreSection />
    </div>
  );
};

export default AboutUsPage;
