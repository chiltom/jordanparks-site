import { ReactElement } from "react";

const FAQSection: React.FC = (): ReactElement => {
  return (
    <section className="text-center w-full h-screen flex flex-col justify-center">
      <h2 className="text-2xl font-bold text-black mb-4">
        Frequently Asked Questions
      </h2>
      <div>
        <h3 className="text-lg font-semibold text-section1">
          What are the lesson plans available?
        </h3>
        <p className="mb-4 text-gray-800">
          We offer various lesson plans suitable for beginners to advanced
          students.
        </p>

        <h3 className="text-lg font-semibold text-section1">
          What are the available slots for lessons?
        </h3>
        <p className="mb-4 text-gray-800">
          Our lessons are available throughout the week. Contact us for the
          detailed schedule.
        </p>

        <h3 className="text-lg font-semibold text-section1">
          Do I need to have my own instrument?
        </h3>
        <p className="mb-4 text-gray-800">
          Yes, students are required to have their own instruments for practice
          and lessons.
        </p>
      </div>
    </section>
  );
};

export default FAQSection;
