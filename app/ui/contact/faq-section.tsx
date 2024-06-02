import { ReactElement } from "react";

const FAQSection: React.FC = (): ReactElement => {
  return (
    <header className="bg-navbarBackground text-buttonText text-center py-14 my-4 px-4">
      <h1 className="text-4xl font-bold">FAQs</h1>
      <p className="mt-4 text-primary">
        Common questions that Jordan has already answered
      </p>
    </header>
  );
};

export default FAQSection;
