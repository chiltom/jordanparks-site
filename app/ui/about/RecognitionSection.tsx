import { ReactElement } from "react";

const RecognitionSection: React.FC = (): ReactElement => {
  return (
    <section className="bg-cardBackground border border-accentLight rounded-lg p-6 my-4 shadow-neon">
      <h2 className="text-accent text-2xl font-bold">
        Places he&apos;s played
      </h2>
      <p className="mt-4 text-textSecondary">
        A list of places that Jordan has played or other statistics
      </p>
    </section>
  );
};

export default RecognitionSection;
