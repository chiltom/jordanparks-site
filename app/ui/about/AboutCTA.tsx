import { ReactElement } from "react";

const AboutCTA: React.FC = (): ReactElement => {
  return (
    <section className="section">
      <h2 className="text-black text-2xl font-bold">Take the Next Step</h2>
      <p className="mt-4 text-gray-800">Explore Jordan&apos;s music and support the artist</p>
      <button className="bg-lightBlue text-white mt-4 px-6 py-2 rounded hover:bg-lightPink focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lightBlue shadow-lg">
        Discover the Music
      </button>
    </section>
  );
};

export default AboutCTA;
