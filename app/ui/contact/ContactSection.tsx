import { ReactElement } from "react";

const ContactSection: React.FC = (): ReactElement => {
  return (
    <header className="section text-center w-full h-full flex flex-col justify-center">
      <h1 className="text-black text-2xl font-bold">My Information</h1>
      <p className="mt-4 text-gray-800">
        Reach out to me for booking or inquiries!
      </p>
    </header>
  );
};

export default ContactSection;
