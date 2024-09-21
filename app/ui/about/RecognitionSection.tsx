import { ReactElement } from "react";
import Image from "next/image";
import image3 from "@/public/images/image3.jpeg";
import { FaChevronDown } from "react-icons/fa";

interface RecognitionSectionProps {
  scrollToNextSection: () => void;
}

const RecognitionSection: React.FC<RecognitionSectionProps> = ({
  scrollToNextSection,
}): ReactElement => {
  return (
    <section className="text-center w-full h-screen flex flex-col items-center gap-10">
      <Image
        src={image3}
        alt="Jordan Parks"
        layout="fill"
        objectFit="contain"
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
    </section>
  );
};

export default RecognitionSection;
