import { ReactElement } from "react";

const MusicHeader: React.FC = (): ReactElement => {
  return (
    <header className="text-center py-20 px-4 shadow-lg">
      <h1 className="text-5xl font-bold text-white">My Music</h1>
      <p className="mt-4 text-lg text-gray-300">
        A brief statement about the artist&apos;s discography
      </p>
    </header>
  );
};

export default MusicHeader;
