import { ReactElement } from "react";

const PortfolioItemBodySection: React.FC = (): ReactElement => {
  return (
    <section className="bg-navbarBackground border border-secondary rounded-lg p-6 my-4">
      <h2 className="text-primary text-2xl font-bold">Album Details</h2>
      <p className="mt-4">
        Detailed section on an album with track listings, album credits, and
        embedded music player to listen to tracks.
      </p>
    </section>
  );
};

export default PortfolioItemBodySection;