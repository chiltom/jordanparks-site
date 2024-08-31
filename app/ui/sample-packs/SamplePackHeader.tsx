import { ReactElement } from "react";

const SamplePackHeader: React.FC = (): ReactElement => {
  return (
    <header className="text-center flex flex-col pt-72 w-full h-full">
      <h1 className="text-5xl font-bold text-white">Merchandise</h1>
      <p className="mt-4 text-lg text-gray-300">High quality merchandise</p>
    </header>
  );
};

export default SamplePackHeader;
