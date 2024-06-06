import { ReactElement } from "react";

const ReviewsSection: React.FC = (): ReactElement => {
  return (
    <section className="section">
      <h2 className="text-black text-2xl font-bold">Reviews</h2>
      <p className="mt-4 text-gray-800">
        Showcase reviews from critics, fans, and publications.
      </p>
    </section>
  );
};

export default ReviewsSection;
