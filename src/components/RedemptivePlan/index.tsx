import { useState } from "react";
import { planItems } from "../../mock-data/mock";
import Header from "./Header";
import PlanItem from "./PlanItem";

const RedemptivePlan = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-16 px-4 bg-[#E1EBF0]">
      <div className="max-w-5xl mx-auto">
        <Header />

        <div className="space-y-20">
          {planItems.map((item, index) => (
            <PlanItem
              key={index}
              item={item}
              index={index}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RedemptivePlan;
