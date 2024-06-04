import { ReactElement } from "react";

const HowItWorksSection: React.FC = (): ReactElement => {
  return (
    <section className="bg-navbarBackground border border-secondary rounded-lg p-6 my-4">
      <h2 className="text-primary text-2xl font-bold">How It Works</h2>
      <p className="mt-4">
        Explain the process of signing up, scheduling, and what a typical lesson
        looks like.
      </p>
    </section>
  );
};

export default HowItWorksSection;
