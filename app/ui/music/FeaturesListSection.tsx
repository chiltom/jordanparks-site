import { ReactElement } from "react";

const FeaturesListSection: React.FC = (): ReactElement => {
  return (
    <section className="bg-cardBackground border border-accent rounded-lg p-6 my-4 shadow-neon">
      <h2 className="text-accent text-2xl font-bold">Achievements & Awards</h2>
      <p className="mt-4 text-textSecondary">
        List of key achievements, awards, or notable performances related to the
        music.
      </p>
    </section>
  );
};

export default FeaturesListSection;
