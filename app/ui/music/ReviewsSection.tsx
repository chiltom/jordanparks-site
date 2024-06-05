import { ReactElement } from "react";

const ReviewsSection: React.FC = (): ReactElement => {
  return (
    <section className="bg-cardBackground border border-accentLight rounded-lg p-6 my-4 shadow-neon">
      <h2 className="text-accent text-2xl font-bold">Reviews</h2>
      <p className="mt-4 text-textSecondary">
        Showcase reviews from critics, fans, and publications.
      </p>
    </section>
  );
};

export default ReviewsSection;
