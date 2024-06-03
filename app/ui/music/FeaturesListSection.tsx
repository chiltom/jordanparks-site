import { ReactElement } from "react";

const FeaturesListSection: React.FC = (): ReactElement => {
  return (
    <section className="bg-navbarBackground border border-secondary rounded-lg p-6 my-4">
      <h2 className="text-primary text-2xl font-bold">Achievements & Awards</h2>
      <p className="mt-4">
        List of key achievements, awards, or notable performances related to the
        music.
      </p>
    </section>
  );
};

export default FeaturesListSection;
