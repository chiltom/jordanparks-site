import { ReactElement } from "react";

const FeatureSection: React.FC = (): ReactElement => {
  return (
    <section className="bg-navbarBackground border border-secondary rounded-lg p-6 my-4">
      <h2 className="text-primary text-2xl font-bold">My Teaching Approach</h2>
      <p className="mt-4">
        Details of Jordan&apos;s unique teaching approach and what makes it
        stand out
      </p>
    </section>
  );
};

export default FeatureSection;
