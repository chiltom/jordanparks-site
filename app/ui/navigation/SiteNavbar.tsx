"use client";

import { type ReactElement, useState, useEffect } from "react";
import Link from "next/link";
import NavLinks from "./NavLinks";
import Image from "next/image";
import Brand from "@/public/logos/new_brand.svg";
import ToggleIcon from "@/public/logos/flower-icon.png";
import { AnimatePresence, motion } from "framer-motion";
import ClientOnly from "@/app/components/ClientOnly";

const Navbar = (): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggle = (): void => {
    setIsOpen(!isOpen);
  };

  const handleClose = (): void => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full px-4 py-2 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-textPrimary text-xl font-bold md:text-2xl">
          <Link href="/">
            <Image
              src={Brand || "/placeholder.svg"}
              alt="Jordan Parks"
              width={75}
              height={75}
              className="rounded-lg transition-transform hover:scale-105"
            />
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <NavLinks isMobile={false} handleClose={handleClose} />
        </div>
        <div className="md:hidden">
          <button
            onClick={handleToggle}
            className="focus:outline-none transition-transform hover:scale-110"
            aria-label="Toggle menu"
          >
            <Image
              src={ToggleIcon || "/placeholder.svg"}
              alt="Menu Toggle"
              width={40}
              height={40}
            />
          </button>
        </div>
      </div>

      <ClientOnly>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-md p-4 shadow-lg rounded-b-lg"
            >
              <NavLinks isMobile={true} handleClose={handleClose} />
            </motion.div>
          )}
        </AnimatePresence>
      </ClientOnly>
    </nav>
  );
};

export default Navbar;
