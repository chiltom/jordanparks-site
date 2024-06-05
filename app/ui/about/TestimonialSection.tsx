import { ReactElement } from "react";

const TestimonialSection: React.FC = (): ReactElement => {
  return (
    <section className="bg-cardBackground border border-accentLight rounded-lg p-6 my-4 shadow-neon">
      <h2 className="text-accent text-2xl font-bold">Testimonials</h2>
      <p className="mt-4 text-textSecondary">Testimonials about Jordan from good sources</p>
    </section>
  );
};

export default TestimonialSection;
