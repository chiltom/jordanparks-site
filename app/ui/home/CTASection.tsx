import { ReactElement } from "react";

const CTASection: React.FC = (): ReactElement => {
  return (
    <section className="bg-navbarBackground border border-secondary rounded-lg p-6 my-4 text-center">
      <h2 className="text-primary text-2xl font-bold">Explore More</h2>
      <p className="mt-4">Encourage visitors to explore the rest of the site</p>
      <button className="bg-buttonBackground text-buttonText mt-4 px-6 py-2 rounded hover:bg-linkHover">
        Youtube
      </button>
    </section>
  );
};

export default CTASection;
