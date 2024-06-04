import { ReactElement } from "react";

const CTASection: React.FC = (): ReactElement => {
  return (
    <section className="bg-navbarBackground border border-secondary rounded-lg p-6 my-4 text-center">
      <h2 className="text-primary text-2xl font-bold">Sign Up for a Lesson</h2>
      <p className="mt-4">
        End with a call-to-action encouraging site visitors to sign up for a
        lesson or get in touch for more details.
      </p>
      <button className="bg-buttonBackground text-buttonText mt-4 px-6 py-2 rounded hover:bg-linkHover">
        Contact Us
      </button>
    </section>
  );
};

export default CTASection;
