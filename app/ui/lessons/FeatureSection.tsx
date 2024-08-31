import { ReactElement } from "react";

const FeatureSection: React.FC = (): ReactElement => {
  return (
    <section className="section text-center w-full h-full flex flex-col justify-center">
      <h2 className="text-2xl font-bold text-black">My Teaching Approach</h2>
      <p className="mt-4 text-gray-800">
        Detail the unique teaching approach and what makes these lessons stand
        out.
      </p>
    </section>
  );
};

export default FeatureSection;
