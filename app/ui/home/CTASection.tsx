import { ReactElement } from "react";

const CTASection: React.FC = (): ReactElement => {
  return (
    <section className="section">
      <h2 className="text-black text-2xl font-bold">Explore More</h2>
      <p className="mt-4 text-gray-800">Encourage visitors to explore the rest of the site</p>
      <button className="bg-red-500 text-white mt-4 px-6 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
        YouTube
      </button>
    </section>
  );
};

export default CTASection;
