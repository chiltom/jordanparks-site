import { ReactElement } from "react";

const MusicHeader: React.FC = (): ReactElement => {
  return (
    <header className="text-center flex flex-col pt-72 w-full h-full">
      <h1 className="text-5xl font-bold text-white">My Music</h1>
    </header>
  );
};

export default MusicHeader;
