import { ReactElement } from "react";
import Image from "next/image";
import main_image from "@/public/images/main_page.jpg";
import { FaChevronDown } from "react-icons/fa";

interface HeroHeaderProps {
  scrollToNextSection: () => void;
}

const HeroHeader: React.FC<HeroHeaderProps> = ({
  scrollToNextSection,
}): ReactElement => {
  return (
    <header className="relative w-full h-full">
      <Image
        src={main_image}
        alt="Jordan Parks"
        layout="fill"
        objectFit="cover"
        className="opacity-90"
        priority
        sizes="100vw"
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

export default HeroHeader;
