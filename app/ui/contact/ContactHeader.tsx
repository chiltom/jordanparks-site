import { ReactElement } from "react";
import Image from "next/image";
import contact_image from "@/public/images/contact_page.jpg";

const ContactHeader: React.FC = (): ReactElement => {
  return (
    <header className="relative w-full h-full">
      <Image
        src={contact_image}
        alt="Jordan Parks"
        layout="fill"
        objectFit="cover"
        className="opacity-90"
      />
    </header>
  );
};

export default ContactHeader;
