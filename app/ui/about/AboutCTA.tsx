import { ReactElement } from "react";

const AboutCTA: React.FC = (): ReactElement => {
  return (
    <section className="bg-cardBackground border border-accentLight rounded-lg p-6 my-4 text-center shadow-neon">
      <h2 className="text-accent text-2xl font-bold">Take the Next Step</h2>
      <p className="mt-4 text-textSecondary">Explore Jordan&apos;s music and support the artist</p>
      <button className="bg-neonBlue text-buttonText mt-4 px-6 py-2 rounded hover:bg-neonPink focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent">
        Discover the Music
      </button>
    </section>
  );
};

export default AboutCTA;
