import { ReactElement } from "react";

const FAQSection: React.FC = (): ReactElement => {
  return (
    <header className="bg-navbarBackground border border-secondary rounded-lg p-6 my-4">
      <h1 className="text-primary text-2xl font-bold">FAQs</h1>
      <p className="mt-4">
        Common questions that Jordan has already answered
      </p>
    </header>
  );
};

export default FAQSection;
