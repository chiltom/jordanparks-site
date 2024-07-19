import { ReactElement } from "react";

const GallerySection: React.FC = (): ReactElement => {
  return (
    <section className="section text-center w-full h-full flex flex-col justify-center">
      <h2 className="text-black text-2xl font-bold">Making the Music</h2>
      <p className="mt-4 text-gray-800">Action shots section</p>
    </section>
  );
};

export default GallerySection;
