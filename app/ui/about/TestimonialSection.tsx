import { ReactElement } from "react";

const TestimonialSection: React.FC = (): ReactElement => {
  return (
    <section className="bg-navbarBackground border border-secondary rounded-lg p-6 my-4">
      <h2 className="text-primary text-2xl font-bold">Testimonials</h2>
      <p className="mt-4">Testimonials about Jordan from good sources</p>
    </section>
  );
};

export default TestimonialSection;
