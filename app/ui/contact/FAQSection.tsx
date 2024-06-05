import { ReactElement } from "react";

const FAQSection: React.FC = (): ReactElement => {
  return (
    <header className="bg-cardBackground border border-accentLight rounded-lg p-6 my-4 shadow-neon">
      <h1 className="text-accent text-2xl font-bold">FAQs</h1>
      <p className="mt-4 text-textSecondary">
        Common questions that Jordan has already answered
      </p>
    </header>
  );
};

export default FAQSection;
