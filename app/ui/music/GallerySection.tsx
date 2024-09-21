import { ReactElement } from "react";
import { FaChevronDown } from "react-icons/fa";

interface GallerySectionProps {
  scrollToNextSection: () => void;
}

const GallerySection: React.FC<GallerySectionProps> = ({
  scrollToNextSection,
}): ReactElement => {
  return (
    <section className="text-center w-full h-screen flex flex-col justify-center">
      <h2 className="text-black text-2xl font-bold">Gallery</h2>
      <p className="mt-4 text-gray-800">
        Visual gallery of album covers or promotional music artwork
      </p>
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

export default GallerySection;
