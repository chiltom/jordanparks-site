import { ReactElement } from "react";

const PricingSection: React.FC = (): ReactElement => {
  return (
    <section className="bg-cardBackground border border-accentLight rounded-lg p-6 my-4 shadow-neon">
      <h2 className="text-accent text-2xl font-bold">Pricing</h2>
      <p className="mt-4 text-textSecondary">
        Present the pricing structure of different lesson packages or durations.
      </p>
    </section>
  );
};

export default PricingSection;
