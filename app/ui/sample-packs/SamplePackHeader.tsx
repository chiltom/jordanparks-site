import { ReactElement } from "react";

const SamplePackHeader: React.FC = (): ReactElement => {
  return (
    <header className="bg-primary text-buttonText rounded-b-lg text-center py-20 px-4">
      <h1 className="text-4xl font-bold">Discover My Sample Packs</h1>
      <p className="mt-4">
        High-quality samples for your music production needs
      </p>
    </header>
  );
};

export default SamplePackHeader;
