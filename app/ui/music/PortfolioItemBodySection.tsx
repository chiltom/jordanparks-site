import { ReactElement } from "react";

const PortfolioItemBodySection: React.FC = (): ReactElement => {
  return (
    <section className="section">
      <h2 className="text-black text-2xl font-bold">Album Details</h2>
      <p className="mt-4 text-gray-800">
        Detailed section on an album with track listings, album credits, and
        embedded music player to listen to tracks.
      </p>
    </section>
  );
};

export default PortfolioItemBodySection;
