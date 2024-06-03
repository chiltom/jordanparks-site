import { ReactElement } from "react";

const FeatureSection: React.FC = (): ReactElement => {
  return (
    <section className="bg-navbarBackground border border-secondary rounded-lg p-6 my-4">
      <h2 className="text-primary text-2xl font-bold">Latest Album</h2>
      <p className="mt-4">
        Spotlight on the latest album or single with cover art, release
        information, and a brief description
      </p>
      {/* Button link to YT */}
    </section>
  );
};

export default FeatureSection;
