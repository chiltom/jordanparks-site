import { ReactElement } from "react";

const ContactSection: React.FC = (): ReactElement => {
  return (
    <header className="bg-navbarBackground border border-secondary rounded-lg p-6 my-4">
      <h1 className="text-primary text-2xl font-bold">My Information</h1>
      <p className="mt-4">
        Reach out to me for booking or inquiries!
      </p>
    </header>
  );
};

export default ContactSection;
