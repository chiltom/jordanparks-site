import { ReactElement } from "react";

const ContactHeader: React.FC = (): ReactElement => {
  return (
    <header className="bg-navbarBackground text-buttonText text-center py-14 my-4 px-4">
      <h1 className="text-4xl font-bold">Contact</h1>
      <p className="mt-4 text-primary">Get in touch with Jordan</p>
    </header>
  );
};

export default ContactHeader;
