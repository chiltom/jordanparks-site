import { ReactElement } from "react";
import Image from "next/image";
import main_image from "@/public/images/main_page.jpg";

/**
 * This component will change, the image will turn into a banner image
 * that spans the entirety of the section and have an opacity value over
 * it making it more transparent for header text to lay over.
 */
const HeroHeader: React.FC = (): ReactElement => {
  return (
    <header className="relative w-full h-full">
      <Image
        src={main_image}
        alt="Jordan Parks"
        layout="fill"
        objectFit="cover"
        className="opacity-90"
      />
    </header>
  );
};

export default HeroHeader;
