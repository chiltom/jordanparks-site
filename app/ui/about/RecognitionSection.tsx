import { ReactElement } from "react";
import Image from "next/image";
import image3 from "@/public/image3.jpeg";

const RecognitionSection: React.FC = (): ReactElement => {
  return (
    <section className="section text-center w-full h-full flex flex-col items-center gap-10">
      <h2 className="text-black text-2xl font-bold">Locations Played</h2>
      <Image
        src={image3}
        alt="Jordan Parks"
        width={500}
        height={500}
        className="rounded-lg"
      />
    </section>
  );
};

export default RecognitionSection;
