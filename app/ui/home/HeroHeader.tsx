import { ReactElement } from "react";

const HeroHeader: React.FC = (): ReactElement => {
  return (
    <header className="text-center py-20 px-4 shadow-lg">
      <h1 className="text-5xl font-bold text-white">Discover Unique, Amazing Music</h1>
      <p className="mt-4 text-lg text-gray-300">A hero image with a subtle tagline</p>
    </header>
  );
};

export default HeroHeader;
