import { ReactElement } from "react";

const CTASection: React.FC = (): ReactElement => {
  return (
    <section className="bg-cardBackground border border-accentLight rounded-lg p-6 my-4 text-center shadow-neon">
      <h2 className="text-accent text-2xl font-bold">Sign Up for a Lesson</h2>
      <p className="mt-4 text-textSecondary">
        End with a call-to-action encouraging site visitors to sign up for a
        lesson or get in touch for more details.
      </p>
      <button className="bg-neonBlue text-buttonText mt-4 px-6 py-2 rounded hover:bg-neonPink focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent">
        Contact Us
      </button>
    </section>
  );
};

export default CTASection;
