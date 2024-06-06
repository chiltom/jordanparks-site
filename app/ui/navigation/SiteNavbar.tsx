"use client";

import { ReactElement, useState } from "react";
import Link from "next/link";
import NavLinks from "./NavLinks";
import Image from "next/image";
import Brand from "@/public/brand.webp";
import ToggleIcon from "@/public/flower-icon.png"; // Update with the correct path to your image

const Navbar = (): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-textPrimary text-xl font-bold md:text-2xl">
          <Link href="/">
            <Image src={Brand} alt="Jordan Parks" width={100} height={50} />
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <NavLinks isMobile={false} />
        </div>
        <div className="md:hidden">
          <button onClick={handleToggle} className="focus:outline-none">
            <Image src={ToggleIcon} alt="Menu Toggle" width={30} height={30} />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <NavLinks isMobile={true} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
