import { ReactElement } from "react";

const LocationsSection: React.FC = (): ReactElement => {
  return (
    <header className="bg-navbarBackground text-buttonText text-center py-14 my-4 px-4">
      <h1 className="text-4xl font-bold">Locations</h1>
      <p className="mt-4 text-primary">
        Relevant and important locations to Jordan
      </p>
    </header>
  );
};

export default LocationsSection;
