import { ReactElement } from "react";
import Image from "next/image";
import about_image from "@/public/images/about_page.jpg";
import { FaChevronDown } from "react-icons/fa";

interface AboutHeaderProps {
  scrollToNextSection: () => void;
}

const AboutHeader: React.FC<AboutHeaderProps> = ({
  scrollToNextSection,
}): ReactElement => {
  return (
    <header className="relative w-full h-full">
      <Image
        src={about_image}
        alt="Jordan Parks"
        layout="fill"
        objectFit="cover"
        className="opacity-90"
      />
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-40 hover:opacity-90">
        <button
          onClick={scrollToNextSection}
          className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-white"
        >
          <FaChevronDown size={24} />
        </button>
      </div>
    </header>
  );
};

export default AboutHeader;
