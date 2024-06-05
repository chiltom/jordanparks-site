import { ReactElement } from "react";

const StatisticsSection: React.FC = (): ReactElement => {
  return (
    <section className="bg-cardBackground border border-accentLight rounded-lg p-6 my-4 shadow-neon">
      <h2 className="text-accent text-2xl font-bold">
        Some Statistics about Jordan
      </h2>
      <p className="mt-4 text-textSecondary">Some relevant stastics about Jordan</p>
    </section>
  );
};

export default StatisticsSection;
