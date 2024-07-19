import { ReactElement } from "react";

const LocationsSection: React.FC = (): ReactElement => {
  return (
    <header className="section text-center w-full h-full flex flex-col justify-center">
      <h1 className="text-black text-2xl font-bold">Locations</h1>
      <p className="mt-4 text-gray-800">
        Relevant and important locations to Jordan
      </p>
    </header>
  );
};

export default LocationsSection;
