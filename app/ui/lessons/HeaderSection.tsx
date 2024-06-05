import { ReactElement } from "react";

const HeaderSection: React.FC = (): ReactElement => {
  return (
    <header className="bg-accent text-buttonText text-center py-20 px-4 shadow-neonPink mx-2">
      <h1 className="text-5xl font-bold">Music Lessons</h1>
      <p className="mt-4 text-lg">Introduce the &apos;Music Lessons&apos; offering</p>
    </header>
  );
};

export default HeaderSection;
