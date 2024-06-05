import { ReactElement } from "react";

const FAQSection: React.FC = (): ReactElement => {
  return (
    <section className="bg-cardBackground border border-accentLight rounded-lg p-6 my-4 shadow-neon">
      <h2 className="text-accent text-2xl font-bold mb-4">
        Frequently Asked Questions
      </h2>
      <div>
        <h3 className="text-lg font-semibold text-neonBlue">
          What is included in a sample pack?
        </h3>
        <p className="mb-4 text-textSecondary">Each sample pack includes...</p>

        <h3 className="text-lg font-semibold text-neonBlue">How can I use the samples?</h3>
        <p className="mb-4 text-textSecondary">
          You can use them in any of your projects, be sure to follow the
          license agreement
        </p>
      </div>
    </section>
  );
};

export default FAQSection;
