import { ReactElement } from "react";

const FAQSection: React.FC = (): ReactElement => {
  return (
    <section className="section">
      <h2 className="text-black text-2xl font-bold mb-4">
        Frequently Asked Questions
      </h2>
      <div>
        <h3 className="text-lg font-semibold text-white">
          What is included in a sample pack?
        </h3>
        <p className="mb-4 text-gray-800">Each sample pack includes...</p>

        <h3 className="text-lg font-semibold text-white">How can I use the samples?</h3>
        <p className="mb-4 text-gray-800">
          You can use them in any of your projects, be sure to follow the
          license agreement
        </p>
      </div>
    </section>
  );
};

export default FAQSection;
