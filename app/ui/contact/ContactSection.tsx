import { ReactElement } from "react";

const ContactSection: React.FC = (): ReactElement => {
  return (
    <header className="bg-navbarBackground text-buttonText text-center py-14 my-4 px-4">
      <h1 className="text-4xl font-bold">My Information</h1>
      <p className="mt-4 text-primary">
        Reach out to me for booking or inquiries!
      </p>
    </header>
  );
};

export default ContactSection;
