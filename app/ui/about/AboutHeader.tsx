import { ReactElement } from "react";
import Image from "next/image";
import image2 from "@/public/image2.jpg";

/**
 * This component will change, the image will turn into a banner image
 * that spans the entirety of the section and have an opacity value over
 * it making it more transparent for header text to lay over.
 */
const AboutHeader: React.FC = (): ReactElement => {
  return (
    <header className="text-center flex flex-col items-center w-full h-full">
      <h1 className="text-5xl font-bold text-white">Jordan</h1>
      <div className="py-6">
        <Image
          src={image2}
          alt="Jordan Parks"
          width={500}
          height={500}
          className="rounded-lg"
        />
      </div>
    </header>
  );
};

export default AboutHeader;
