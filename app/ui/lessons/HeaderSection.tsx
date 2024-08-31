import { ReactElement } from "react";

const HeaderSection: React.FC = (): ReactElement => {
  return (
    <header className="text-center flex flex-col pt-72 w-full h-full">
      <h1 className="text-5xl font-bold text-white">Music Lessons</h1>
    </header>
  );
};

export default HeaderSection;
