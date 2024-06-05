import { ReactElement } from "react";

const HeroHeader: React.FC = (): ReactElement => {
  return (
    <header className="bg-accent text-buttonText text-center rounded-b-lg py-20 px-4 shadow-neonPink mx-2">
      <h1 className="text-5xl font-bold">Discover Unique, Amazing Music</h1>
      <p className="mt-4 text-lg">A hero image with a subtle tagline</p>
    </header>
  );
};

export default HeroHeader;
