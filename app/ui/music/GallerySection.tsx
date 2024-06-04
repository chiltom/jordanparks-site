import { ReactElement } from "react";

const GallerySection: React.FC = (): ReactElement => {
  return (
    <section className="bg-navbarBackground border border-secondary rounded-lg p-6 my-4">
      <h2 className="text-primary text-2xl font-bold">Gallery</h2>
      <p className="mt-4">
        Visual gallery of album covers or promotional music artwork
      </p>
    </section>
  );
};

export default GallerySection;
