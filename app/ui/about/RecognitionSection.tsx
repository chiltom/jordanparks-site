import { ReactElement } from "react";

const RecognitionSection: React.FC = (): ReactElement => {
  return (
    <section className="section">
      <h2 className="text-black text-2xl font-bold">
        Places he&apos;s played
      </h2>
      <p className="mt-4 text-gray-800">
        A list of places that Jordan has played or other statistics
      </p>
    </section>
  );
};

export default RecognitionSection;
