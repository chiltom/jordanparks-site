import { ReactElement } from "react";

const MusicHeader: React.FC = (): ReactElement => {
  return (
    <header className="bg-accent text-buttonText text-center rounded-b-lg py-20 px-4 shadow-neonPink mx-2">
      <h1 className="text-5xl font-bold">My Music</h1>
      <p className="mt-4 text-lg">
        A brief statement about the artist&apos;s discography
      </p>
    </header>
  );
};

export default MusicHeader;
