import { ReactElement } from "react";

const AboutHeader: React.FC = (): ReactElement => {
  return (
    <header className="bg-accent text-buttonText text-center rounded-b-lg py-20 px-4 shadow-neonPink mx-2">
      <h1 className="text-5xl font-bold">About Jordan</h1>
      <p className="mt-4 text-lg">Another picture of Jordan</p>
      <p className="mt-4 text-lg">Brief background description</p>
    </header>
  );
};

export default AboutHeader;
