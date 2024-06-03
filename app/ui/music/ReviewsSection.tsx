import { ReactElement } from "react";

const ReviewsSection: React.FC = (): ReactElement => {
  return (
    <section className="bg-navbarBackground border border-secondary rounded-lg p-6 my-4">
      <h2 className="text-primary text-2xl font-bold">Reviews</h2>
      <p className="mt-4">
        Showcase reviews from critics, fans, and publications.
      </p>
    </section>
  );
};

export default ReviewsSection;
