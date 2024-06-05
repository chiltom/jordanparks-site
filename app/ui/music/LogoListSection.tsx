import { ReactElement } from "react";

const LogoListSection: React.FC = (): ReactElement => {
  return (
    <section className="bg-cardBackground border border-accentLight rounded-lg p-6 my-4 shadow-neon">
      <h2 className="text-accent text-2xl font-bold">
        Where to Find My Music
      </h2>
      <p className="mt-4 text-textSecondary">
        Display logos of music platforms where the music can be found
      </p>
    </section>
  );
};

export default LogoListSection;
