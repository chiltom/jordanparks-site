import { ReactElement } from "react";
import Image from "next/image";
import music_image from "@/public/images/music_page.jpg";

const MusicHeader: React.FC = (): ReactElement => {
  return (
    <header className="relative w-full h-full">
      <Image
        src={music_image}
        alt="Jordan Parks"
        layout="fill"
        objectFit="cover"
        className="opacity-90"
      />
    </header>
  );
};

export default MusicHeader;
