import { ReactElement } from "react";

const AboutCTA: React.FC = (): ReactElement => {
  return (
    <section className="bg-navbarBackground border border-secondary rounded-lg p-6 my-4 text-center">
      <h2 className="text-primary text-2xl font-bold">Take the Next Step</h2>
      <p className="mt-4">Explore Jordan&apos;s music and support the artist</p>
      <button className="bg-buttonBackground text-buttonText mt-4 px-6 py-2 rounded hover:bg-linkHover">
        Discover the Music
      </button>
    </section>
  );
};

export default AboutCTA;
