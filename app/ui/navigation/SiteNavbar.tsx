"use client";

import { ReactElement, useState } from "react";
import Link from "next/link";
import NavLinks from "./NavLinks";
import Image from "next/image";
import Brand from "@/public/logos/new_brand.svg";
import ToggleIcon from "@/public/logos/flower-icon.png";

const Navbar = (): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full px-4 pt-2 z-50 bg-transparent">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-textPrimary text-xl font-bold md:text-2xl">
          <Link href="/">
            <Image
              src={Brand}
              alt="Jordan Parks"
              width={95}
              height={95}
              className="rounded-lg"
            />
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <NavLinks isMobile={false} />
        </div>
        <div className="md:hidden">
          <button onClick={handleToggle} className="focus:outline-none">
            <Image src={ToggleIcon} alt="Menu Toggle" width={40} height={40} />
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
