import { ReactElement } from "react";

const PricingSection: React.FC = (): ReactElement => {
  return (
    <section className="section">
      <h2 className="text-2xl font-bold text-black">Pricing</h2>
      <p className="mt-4 text-gray-800">
        Present the pricing structure for different lesson packages or
        durations.
      </p>
    </section>
  );
};

export default PricingSection;
