import { motion } from "framer-motion";
import { steps } from "../../mock-data/mock";
import StepCard from "./StepCard";
import HeaderSection from "./HeaderSection";
import CallToAction from "./CallToAction";

const LifeWithGod = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-24 px-4 bg-gradient-to-b from-amber-50 via-amber-100 to-amber-50"
    >
      <div className="max-w-4xl mx-auto">
        <HeaderSection />
        <StepsGrid />
        <CallToAction />
      </div>
    </motion.section>
  );
};

const StepsGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
    {steps.map((step, index) => (
      <StepCard step={step} index={index} key={index} />
    ))}
  </div>
);

export default LifeWithGod;
