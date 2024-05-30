import { ReactElement } from "react";

const GallerySection: React.FC = (): ReactElement => {
  return (
    <section className="bg-navbarBackground border border-secondary rounded-lg p-6 my-4">
      <h2 className="text-primary text-2xl font-bold">Making the Music</h2>
      <p className="mt-4">Action shots section</p>
    </section>
  );
};

export default GallerySection;
