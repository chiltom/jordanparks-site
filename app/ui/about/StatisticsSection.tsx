import { ReactElement } from "react";

const StatisticsSection: React.FC = (): ReactElement => {
  return (
    <section className="section text-center w-full h-full flex flex-col justify-center">
      <h2 className="text-black text-2xl font-bold">
        Some Statistics about Jordan
      </h2>
      <p className="mt-4 text-gray-800">Some relevant stastics about Jordan</p>
    </section>
  );
};

export default StatisticsSection;
