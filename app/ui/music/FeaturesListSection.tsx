import { ReactElement } from "react";

const FeaturesListSection: React.FC = (): ReactElement => {
  return (
    <section className="text-center w-full h-screen flex flex-col justify-center">
      <h2 className="text-black text-2xl font-bold">Achievements & Awards</h2>
      <p className="mt-4 text-gray-800">
        List of key achievements, awards, or notable performances related to the
        music.
      </p>
      <p className="mt-4 text-gray-800">
        Reviews from different stakeholders and critics.
      </p>
    </section>
  );
};

export default FeaturesListSection;
