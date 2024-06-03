import { ReactElement } from "react";

const FAQSection: React.FC = (): ReactElement => {
  return (
    <section className="bg-navbarBackground border border-secondary rounded-lg p-6 my-4">
      <h2 className="text-primary text-2xl font-bold mb-4">
        Frequently Asked Questions
      </h2>
      <div>
        <h3 className="text-lg font-semibold">
          What is included in a sample pack?
        </h3>
        <p className="mb-4">Each sample pack includes...</p>

        <h3 className="text-lg font-semibold">How can I use the samples?</h3>
        <p className="mb-4">
          You can use them in any of your projects, be sure to follow the
          license agreement
        </p>
      </div>
    </section>
  );
};

export default FAQSection;
