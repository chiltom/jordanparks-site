import { ReactElement } from "react";

const AboutHeader: React.FC = (): ReactElement => {
  return (
    <header className="bg-primary text-buttonText text-center rounded-b-lg py-20 px-4">
      <h1 className="text-4xl font-bold">About Jordan</h1>
      <p className="mt-4">Another picture of Jordan</p>
      <p className="mt-4">Brief background description</p>
    </header>
  );
};

export default AboutHeader;
