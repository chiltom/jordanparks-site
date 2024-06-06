import { ReactElement } from "react";

const BenefitsSection: React.FC = (): ReactElement => {
  return (
    <section className="section">
      <h2 className="text-2xl font-bold text-black">
        Benefits of Music Lessons
      </h2>
      <p className="mt-4 text-gray-800">
        List the benefits of taking music lessons, such as skill improvement and
        personalized coaching.
      </p>
    </section>
  );
};

export default BenefitsSection;
