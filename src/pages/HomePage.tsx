import Banner from "../components/Banner/Banner";
import WelcomeSection from "../components/WelcomeSection";
import RedemptivePlan from "../components/RedemptivePlan";
import LifeWithGod from "../components/LifeWithGod";

const HomePage = () => {
  return (
    <div className="bg-blue-950 text-white">
      <Banner />
      <WelcomeSection />
      <RedemptivePlan />
      <LifeWithGod />
    </div>
  );
};

export default HomePage;
