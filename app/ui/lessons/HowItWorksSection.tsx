import { ReactElement } from "react";

const HowItWorksSection: React.FC = (): ReactElement => {
  return (
    <section className="section text-center w-full h-full flex flex-col justify-center">
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
    </section>
  );
};

export default HowItWorksSection;
