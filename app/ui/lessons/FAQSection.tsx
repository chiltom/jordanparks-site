import { ReactElement } from "react";

const FAQSection: React.FC = (): ReactElement => {
  return (
    <section className="bg-navbarBackground border border-secondary rounded-lg p-6 my-4">
      <h2 className="text-primary text-2xl font-bold mb-4">
        Frequently Asked Questions
      </h2>
      <div>
        <h3 className="text-lg font-semibold">
          What are the lesson plans available?
        </h3>
        <p className="mb-4">
          We offer various lesson plans suitable for beginners to advanced
          students.
        </p>

        <h3 className="text-lg font-semibold">
          What are the available slots for lessons?
        </h3>
        <p className="mb-4">
          Our lessons are available throughout the week. Contact us for the
          detailed schedule.
        </p>

        <h3 className="text-lg font-semibold">
          Do I need to have my own instrument?
        </h3>
        <p className="mb-4">
          Yes, students are required to have their own instruments for practice
          and lessons.
        </p>
      </div>
    </section>
  );
};

export default FAQSection;
