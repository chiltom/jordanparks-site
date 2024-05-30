import { ReactElement } from "react";

const StatisticsSection: React.FC = (): ReactElement => {
  return (
    <section className="bg-navbarBackground border border-secondary rounded-lg p-6 my-4">
      <h2 className="text-primary text-2xl font-bold">
        Some Statistics about Jordan
      </h2>
      <p className="mt-4">Some relevant stastics about Jordan</p>
    </section>
  );
};

export default StatisticsSection;
