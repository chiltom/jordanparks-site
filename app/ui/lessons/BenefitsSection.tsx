import { ReactElement } from "react";

const BenefitsSection: React.FC = (): ReactElement => {
  return (
    <section className="bg-cardBackground border border-accentLight rounded-lg p-6 my-4 shadow-neon">
      <h2 className="text-accent text-2xl font-bold">
        Benefits of Music Lessons
      </h2>
      <p className="mt-4 text-textSecondary">
        List the benefits of taking music lessons, such as skill improvement and
        personalized coaching.
      </p>
    </section>
  );
};

export default BenefitsSection;
