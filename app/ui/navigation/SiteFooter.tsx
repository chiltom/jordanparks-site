import Image from "next/image";
import instagramBrand from "@/public/instagram-brands-solid.svg";
import Link from "next/link";
import { ReactElement } from "react";
import spotifyBrand from "@/public/spotify-brands-solid.svg";
import tiktokBrand from "@/public/tiktok-brands-solid.svg";
import youtubeBrand from "@/public/youtube-brands-solid.svg";

const Footer: React.FC = (): ReactElement => {
  return (
    <footer className="text-center bg-gradient-to-b from-purple-300 to-purple-100 p-4">
      <p className="text-black">
        &copy; 2024 Jordan Parks. All rights reserved.
      </p>
      <div className="container mx-auto mt-1 flex justify-center">
        <ul className="flex space-x-6">
          <li>
            <Link
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={instagramBrand} alt="Instagram" className="h-8 w-8" />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={tiktokBrand} alt="Tik Tok" className="h-8 w-8" />
            </Link>
          </li>
          <li>
            <Link
              href="https://open.spotify.com"
              target="_blank"
              rel="nooopener noreferrer"
            >
              <Image src={spotifyBrand} alt="Spotify" className="h-8 w-8" />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={youtubeBrand} alt="YouTube" className="h-8 w-8" />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
