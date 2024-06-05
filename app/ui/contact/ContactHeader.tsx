import { ReactElement } from "react";

const ContactHeader: React.FC = (): ReactElement => {
  return (
    <header className="bg-accent text-buttonText rounded-b-lg text-center py-20 px-4 shadow-neonPink mx-2">
      <h1 className="text-5xl font-bold">Contact</h1>
      <p className="mt-4 text-lg">Get in touch with Jordan</p>
    </header>
  );
};

export default ContactHeader;
