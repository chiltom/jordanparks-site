import { ReactElement } from "react";

const ContactHeader: React.FC = (): ReactElement => {
  return (
    <header className="bg-primary text-buttonText rounded-b-lg text-center py-20 px-4">
      <h1 className="text-4xl font-bold">Contact</h1>
      <p className="mt-4">Get in touch with Jordan</p>
    </header>
  );
};

export default ContactHeader;