import { ReactElement } from "react";
import { FaChevronDown } from "react-icons/fa";

interface HowItWorksSectionProps {
  scrollToNextSection: () => void;
}

const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({
  scrollToNextSection,
}): ReactElement => {
  return (
    <section className="text-center w-full h-screen flex flex-col justify-center">
      <h2 className="text-2xl font-bold text-black">Apply for Lessons Now!</h2>
      <p className="mt-4 text-gray-800">
        First explain how music lessons will benefit not only the client&apos;s
        musical skills but also their confidence in playing publicly and improve
        their personal branding
      </p>
      <p className="mt-4 text-gray-800">
        Then, explain the process of signing up by using the application form
        below, scheduling requirements, and what a typical lesson entails.
      </p>
      <p className="mt-4 text-gray-800">
        Finally, either present the pricing structure for different lesson
        packages or durations, or explain that they will receive these details
        after application.
      </p>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-40 hover:opacity-90">
        <button
          onClick={scrollToNextSection}
          className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-white"
        >
          <FaChevronDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default HowItWorksSection;
