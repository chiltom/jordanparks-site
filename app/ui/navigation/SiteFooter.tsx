import type React from "react";
import type { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import instagramBrand from "@/public/logos/instagram-brands-solid.svg";
import spotifyBrand from "@/public/logos/spotify-brands-solid.svg";
import tiktokBrand from "@/public/logos/tiktok-brands-solid.svg";
import youtubeBrand from "@/public/logos/youtube-brands-solid.svg";

const Footer: React.FC = (): ReactElement => {
  return (
    <footer className="text-center bg-gradient-to-b from-purple-300 to-purple-100 p-6">
      <p className="text-black font-medium">
        &copy; {new Date().getFullYear()} Jordan Parks. All rights reserved.
      </p>
      <div className="container mx-auto mt-3 flex justify-center">
        <ul className="flex space-x-8">
          <li>
            <Link
              href="https://www.instagram.com/jordanlloydparks"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110 inline-block"
            >
              <Image
                src={instagramBrand || "/placeholder.svg"}
                alt="Instagram"
                width={32}
                height={32}
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.tiktok.com/@jordanlparks"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110 inline-block"
            >
              <Image
                src={tiktokBrand || "/placeholder.svg"}
                alt="Tik Tok"
                width={32}
                height={32}
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://open.spotify.com"
              target="_blank"
              rel="nooopener noreferrer"
              className="transition-transform hover:scale-110 inline-block"
            >
              <Image
                src={spotifyBrand || "/placeholder.svg"}
                alt="Spotify"
                width={32}
                height={32}
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://youtube.com/@jordanlloydparks"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110 inline-block"
            >
              <Image
                src={youtubeBrand || "/placeholder.svg"}
                alt="YouTube"
                width={32}
                height={32}
              />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
