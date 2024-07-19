import { ReactElement } from "react";

const GallerySection: React.FC = (): ReactElement => {
  return (
    <section className="section text-center w-full h-full flex flex-col justify-center">
      <h2 className="text-black text-2xl font-bold">Gallery</h2>
      <p className="mt-4 text-gray-800">
        Visual gallery of album covers or promotional music artwork
      </p>
    </section>
  );
};

export default GallerySection;
