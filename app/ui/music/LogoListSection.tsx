import { ReactElement } from "react";

const LogoListSection: React.FC = (): ReactElement => {
  return (
    <section className="bg-navbarBackground border border-secondary rounded-lg p-6 my-4">
      <h2 className="text-primary text-2xl font-bold">
        Where to Find My Music
      </h2>
      <p className="mt-4">
        Display logos of music platforms where the music can be found
      </p>
    </section>
  );
};

export default LogoListSection;
