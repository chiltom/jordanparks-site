import { ReactElement } from "react";

const AboutHeader: React.FC = (): ReactElement => {
  return (
    <header className="bg-navbarBackground text-buttonText text-center py-14 my-4 px-4">
      <h1 className="text-4xl font-bold text-primary">About Jordan</h1>
      <p className="mt-4 text-primary">Another picture of Jordan</p>
      <p className="mt-4 text-primary">Brief background description</p>
    </header>
  );
};

export default AboutHeader;
