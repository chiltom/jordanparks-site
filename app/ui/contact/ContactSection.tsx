import { ReactElement } from "react";

const ContactSection: React.FC = (): ReactElement => {
  return (
    <header className="bg-cardBackground border border-accentLight rounded-lg p-6 my-4 shadow-neon">
      <h1 className="text-accent text-2xl font-bold">My Information</h1>
      <p className="mt-4 text-textSecondary">
        Reach out to me for booking or inquiries!
      </p>
    </header>
  );
};

export default ContactSection;
