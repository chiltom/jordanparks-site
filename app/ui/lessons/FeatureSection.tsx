import { ReactElement } from "react";

const FeatureSection: React.FC = (): ReactElement => {
  return (
    <section className="bg-cardBackground border border-accentLight rounded-lg p-6 my-4 shadow-neon">
      <h2 className="text-accent text-2xl font-bold">My Teaching Approach</h2>
      <p className="mt-4 text-textSecondary">
        Details of Jordan&apos;s unique teaching approach and what makes it
        stand out
      </p>
    </section>
  );
};

export default FeatureSection;
