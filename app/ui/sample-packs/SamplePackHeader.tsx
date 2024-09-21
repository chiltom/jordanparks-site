import { ReactElement } from "react";
import Image from "next/image";
import store_image from "@/public/images/store_page.jpg";

const SamplePackHeader: React.FC = (): ReactElement => {
  return (
    <header className="relative w-full h-full">
      <Image
        src={store_image}
        alt="Jordan Parks"
        layout="fill"
        objectFit="cover"
        className="opacity-90"
      />
    </header>
  );
};

export default SamplePackHeader;
