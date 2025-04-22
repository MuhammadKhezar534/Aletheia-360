import { motion, useAnimation } from "framer-motion";
import useModalContext from "../../hooks/useModalContext";
import AnimatedHeading from "./AnimatedHeading";
import AnimatedParagraph from "./AnimatedParagraph";
import ContactButton from "./ContactButton";

const WelcomeSection = () => {
  const controls = useAnimation();
  const { setIsModalOpen } = useModalContext();

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-4 bg-amber-50"
    >
      <div className="max-w-5xl mx-auto text-center">
        <AnimatedHeading controls={controls} />
        <AnimatedParagraph />
        <ContactButton onClick={() => setIsModalOpen(true)} />
      </div>
    </motion.section>
  );
};

export default WelcomeSection;
