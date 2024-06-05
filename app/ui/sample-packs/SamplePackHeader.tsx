import { ReactElement } from "react";

const SamplePackHeader: React.FC = (): ReactElement => {
  return (
    <header className="bg-accent text-buttonText rounded-b-lg text-center py-20 px-4 shadow-neonPink mx-2">
      <h1 className="text-5xl font-bold">Discover My Sample Packs</h1>
      <p className="mt-4 text-lg">
        High-quality samples for your music production needs
      </p>
    </header>
  );
};

export default SamplePackHeader;
