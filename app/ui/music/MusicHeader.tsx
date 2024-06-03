import { ReactElement } from "react";

const MusicHeader: React.FC = (): ReactElement => {
  return (
    <header className="bg-primary text-buttonText text-center rounded-b-lg py-20 px-4">
      <h1 className="text-4xl font-bold">My Music</h1>
      <p className="mt-4">
        A brief statement about the artist&apos;s discography
      </p>
    </header>
  );
};

export default MusicHeader;
