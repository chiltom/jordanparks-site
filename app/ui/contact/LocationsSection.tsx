import { ReactElement } from "react";

const LocationsSection: React.FC = (): ReactElement => {
  return (
    <header className="bg-cardBackground border border-accentLight rounded-lg p-6 my-4 shadow-neon">
      <h1 className="text-accent text-2xl font-bold">Locations</h1>
      <p className="mt-4 text-textSecondary">
        Relevant and important locations to Jordan
      </p>
    </header>
  );
};

export default LocationsSection;
