import { ReactElement } from "react";
import Image from "next/image";
import lesson_image from "@/public/images/lessons_page.jpg";
import { FaChevronDown } from "react-icons/fa";

interface HeaderSectionProps {
  scrollToNextSection: () => void;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({
  scrollToNextSection,
}): ReactElement => {
  return (
    <header className="relative w-full h-full">
      <Image
        src={lesson_image}
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

export default HeaderSection;
