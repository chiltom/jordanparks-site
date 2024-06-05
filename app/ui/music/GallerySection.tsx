import { ReactElement } from "react";

const GallerySection: React.FC = (): ReactElement => {
  return (
    <section className="bg-cardBackground border border-accent rounded-lg p-6 my-4 shadow-neon">
      <h2 className="text-accent text-2xl font-bold">Gallery</h2>
      <p className="mt-4 text-textSecondary">
        Visual gallery of album covers or promotional music artwork
      </p>
    </section>
  );
};

export default GallerySection;
