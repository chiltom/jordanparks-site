import { ReactElement } from "react";

const PricingSection: React.FC = (): ReactElement => {
  return (
    <section className="bg-navbarBackground border border-secondary rounded-lg p-6 my-4">
      <h2 className="text-primary text-2xl font-bold">Pricing</h2>
      <p className="mt-4">
        Present the pricing structure of different lesson packages or durations.
      </p>
    </section>
  );
};

export default PricingSection;
