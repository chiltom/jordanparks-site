import { ReactElement } from "react";

const RecognitionSection: React.FC = (): ReactElement => {
  return (
    <section className="bg-navbarBackground border border-secondary rounded-lg p-6 my-4">
      <h2 className="text-primary text-2xl font-bold">
        Places he&apos;s played
      </h2>
      <p className="mt-4">
        A list of places that Jordan has played or other statistics
      </p>
    </section>
  );
};

export default RecognitionSection;
