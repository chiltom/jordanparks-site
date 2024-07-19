import { ReactElement } from "react";

const TestimonialSection: React.FC = (): ReactElement => {
  return (
    <section className="section text-center w-full h-full flex flex-col justify-center">
      <h2 className="text-black text-2xl font-bold">Testimonials</h2>
      <p className="mt-4 text-gray-800">
        Testimonials about Jordan from good sources
      </p>
    </section>
  );
};

export default TestimonialSection;
