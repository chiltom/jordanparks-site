import { ReactElement } from "react";

const FeatureSection: React.FC = (): ReactElement => {
  return (
    <section className="section">
      <h2 className="text-black text-2xl font-bold">Latest Album</h2>
      <p className="mt-4 text-gray-800">
        Spotlight on the latest album or single with cover art, release
        information, and a brief description
      </p>
      {/* Button link to YT */}
    </section>
  );
};

export default FeatureSection;
