import { ReactElement } from "react";

const HeroHeader: React.FC = (): ReactElement => {
  return (
    <header className="bg-primary text-buttonText text-center py-20 px-4 rounded-lg">
      <h1 className="text-4xl font-bold">Discover Unique, Amazing Music</h1>
      <p className="mt-4">A hero image with a subtle tagline</p>
    </header>
  );
};

export default HeroHeader;
