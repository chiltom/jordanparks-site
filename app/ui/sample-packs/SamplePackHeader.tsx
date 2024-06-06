import { ReactElement } from "react";

const SamplePackHeader: React.FC = (): ReactElement => {
  return (
    <header className="text-center py-20 px-4 shadow-lg">
      <h1 className="text-5xl font-bold text-white">Discover My Sample Packs</h1>
      <p className="mt-4 text-lg text-gray-300">
        High-quality samples for your music production needs
      </p>
    </header>
  );
};

export default SamplePackHeader;
