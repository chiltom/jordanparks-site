import { ReactElement } from "react";
import Image from "next/image";
import lesson_image from "@/public/images/lessons_page.jpg";

const HeaderSection: React.FC = (): ReactElement => {
  return (
    <header className="relative w-full h-full">
      <Image
        src={lesson_image}
        alt="Jordan Parks"
        layout="fill"
        objectFit="cover"
        className="opacity-90"
      />
    </header>
  );
};

export default HeaderSection;
