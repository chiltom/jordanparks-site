import { ReactElement } from "react";

const AboutHeader: React.FC = (): ReactElement => {
  return (
    <header className="text-center flex flex-col pt-72 w-full h-full">
      <h1 className="text-5xl font-bold text-white">Jordan</h1>
      <p className="mt-4 text-lg text-gray-300">Another picture of Jordan</p>
    </header>
  );
};

export default AboutHeader;
