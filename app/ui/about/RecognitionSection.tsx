import { ReactElement } from "react";
import Image from "next/image";
import image3 from "@/public/images/image3.jpeg";

const RecognitionSection: React.FC = (): ReactElement => {
  return (
    <section className="section text-center w-full h-full flex flex-col items-center gap-10">
      <Image
        src={image3}
        alt="Jordan Parks"
        width={375}
        height={375}
        className="rounded-lg"
      />
    </section>
  );
};

export default RecognitionSection;
