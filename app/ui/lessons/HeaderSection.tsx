import { ReactElement } from "react";

const HeaderSection: React.FC = (): ReactElement => {
  return (
    <header className="bg-primary text-buttonText text-center py-20 px-4">
      <h1 className="text-4xl font-bold">Music Lessons</h1>
      <p className="mt-4">Introduce the &apos;Music Lessons&apos; offering</p>
    </header>
  );
};

export default HeaderSection;
