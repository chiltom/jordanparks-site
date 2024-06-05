import { ReactElement } from "react";

const CTASection: React.FC = (): ReactElement => {
  return (
    <section className="bg-cardBackground border border-accentLight rounded-lg p-6 my-4 text-center shadow-neon">
      <h2 className="text-accent text-2xl font-bold">Explore More</h2>
      <p className="mt-4 text-textSecondary">Encourage visitors to explore the rest of the site</p>
      <button className="bg-neonBlue text-buttonText mt-4 px-6 py-2 rounded hover:bg-neonPink focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent">
        YouTube
      </button>
    </section>
  );
};

export default CTASection;
