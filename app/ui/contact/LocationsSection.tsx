import { ReactElement } from "react";

const LocationsSection: React.FC = (): ReactElement => {
  return (
    <header className="bg-navbarBackground border border-secondary rounded-lg p-6 my-4">
      <h1 className="text-primary text-2xl font-bold">Locations</h1>
      <p className="mt-4">
        Relevant and important locations to Jordan
      </p>
    </header>
  );
};

export default LocationsSection;
