import { ReactElement } from "react";

const CTASection: React.FC = (): ReactElement => {
  return (
    <section className="section text-center">
      <h2 className="text-2xl font-bold text-black">Sign Up for a Lesson</h2>
      <p className="mt-4 text-gray-800">
        End with a call-to-action encouraging site visitors to sign up for a
        lesson or get in touch for more details.
      </p>
      <button className="bg-lightBlue text-black mt-4 px-6 py-2 rounded hover:bg-lightPurple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lightPink">
        Contact Us
      </button>
    </section>
  );
};

export default CTASection;
