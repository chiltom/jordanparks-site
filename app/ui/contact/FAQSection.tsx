import { ReactElement } from "react";

const FAQSection: React.FC = (): ReactElement => {
  return (
    <header className="section">
      <h1 className="text-black text-2xl font-bold">FAQs</h1>
      <p className="mt-4 text-gray-800">
        Common questions that Jordan has already answered
      </p>
    </header>
  );
};

export default FAQSection;
