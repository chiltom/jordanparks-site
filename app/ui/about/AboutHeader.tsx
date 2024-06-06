import { ReactElement } from "react";

const AboutHeader: React.FC = (): ReactElement => {
  return (
    <header className="text-center py-20 px-4 shadow-lg">
      <h1 className="text-5xl font-bold text-white">About Jordan</h1>
      <p className="mt-4 text-lg text-gray-300">Another picture of Jordan</p>
      <p className="mt-4 text-lg text-gray-300">Brief background description</p>
    </header>
  );
};

export default AboutHeader;
