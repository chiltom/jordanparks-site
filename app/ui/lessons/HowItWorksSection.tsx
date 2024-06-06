import { ReactElement } from "react";

const HowItWorksSection: React.FC = (): ReactElement => {
  return (
    <section className="section">
      <h2 className="text-2xl font-bold text-black">How It Works</h2>
      <p className="mt-4 text-gray-800">
        Explain the process of signing up, scheduling, and what a typical lesson
        entails.
      </p>
    </section>
  );
};

export default HowItWorksSection;
