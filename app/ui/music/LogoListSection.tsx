import { ReactElement } from "react";

const LogoListSection: React.FC = (): ReactElement => {
  return (
    <section className="section text-center w-full h-full flex flex-col justify-center">
      <h2 className="text-black text-2xl font-bold">Where to Find My Music</h2>
      <p className="mt-4 text-gray-800">
        Display logos of music platforms where the music can be found
      </p>
    </section>
  );
};

export default LogoListSection;
