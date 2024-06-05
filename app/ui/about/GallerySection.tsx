import { ReactElement } from "react";

const GallerySection: React.FC = (): ReactElement => {
  return (
    <section className="bg-cardBackground border border-accentLight rounded-lg p-6 my-4 shadow-neon">
      <h2 className="text-accent text-2xl font-bold">Making the Music</h2>
      <p className="mt-4 text-textSecondary">Action shots section</p>
    </section>
  );
};

export default GallerySection;
