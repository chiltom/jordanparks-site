import { ReactElement } from "react";

const FeatureSection: React.FC = (): ReactElement => {
  return (
    <section className="bg-cardBackground border border-accentLight rounded-lg p-6 my-4 shadow-neon">
      <h2 className="text-accent text-2xl font-bold">Latest Album</h2>
      <p className="mt-4 text-textSecondary">
        Spotlight on the latest album or single with cover art, release
        information, and a brief description
      </p>
      {/* Button link to YT */}
    </section>
  );
};

export default FeatureSection;
