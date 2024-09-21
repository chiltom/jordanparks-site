import { ReactElement } from "react";

const AboutCTA: React.FC = (): ReactElement => {
  return (
    <section className="text-center w-full h-screen flex flex-col justify-center">
      <h2 className="text-black text-2xl font-bold">Take the Next Step</h2>
      <p className="mt-4 text-gray-800">
        Explore Jordan&apos;s music and support the artist
      </p>
      <div>
        <button className="bg-lightBlue text-white mt-4 px-6 py-2 rounded hover:bg-lightPink focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lightBlue shadow-lg">
          Discover the Music
        </button>
      </div>
    </section>
  );
};

export default AboutCTA;
