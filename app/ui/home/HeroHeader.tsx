import { ReactElement } from "react";
import Image from "next/image";
import image1 from "@/public/image1.jpg";

/**
 * This component will change, the image will turn into a banner image
 * that spans the entirety of the section and have an opacity value over
 * it making it more transparent for header text to lay over.
 */
const HeroHeader: React.FC = (): ReactElement => {
  return (
    <header className="text-center flex flex-col items-center gap-10 pt-10 w-full h-full">
      <Image
        src={image1}
        alt="Jordan Parks"
        width={400}
        height={400}
        className="rounded-lg"
      />
    </header>
  );
};

export default HeroHeader;
