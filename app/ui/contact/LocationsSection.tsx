import { ReactElement } from "react";
import { FaChevronDown } from "react-icons/fa";

interface LocationsSectionProps {
  scrollToNextSection: () => void;
}

const LocationsSection: React.FC<LocationsSectionProps> = ({
  scrollToNextSection,
}): ReactElement => {
  return (
    <section className="text-center w-full h-screen flex flex-col justify-center">
      <h1 className="text-black text-2xl font-bold">Locations</h1>
      <p className="mt-4 text-gray-800">
        Relevant and important locations to Jordan
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

export default LocationsSection;
