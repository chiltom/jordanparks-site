import { ReactElement } from "react";

const HowItWorksSection: React.FC = (): ReactElement => {
  return (
    <section className="bg-cardBackground border border-accentLight rounded-lg p-6 my-4 shadow-neon">
      <h2 className="text-accent text-2xl font-bold">How It Works</h2>
      <p className="mt-4 text-textSecondary">
        Explain the process of signing up, scheduling, and what a typical lesson
        looks like.
      </p>
    </section>
  );
};

export default HowItWorksSection;
