import { ReactElement } from "react";

const BenefitsSection: React.FC = (): ReactElement => {
  return (
    <section className="bg-navbarBackground border border-secondary rounded-lg p-6 my-4">
      <h2 className="text-primary text-2xl font-bold">
        Benefits of Music Lessons
      </h2>
      <p className="mt-4">
        List the benefits of taking music lessons, such as skill improvement and
        personalized coaching.
      </p>
    </section>
  );
};

export default BenefitsSection;
