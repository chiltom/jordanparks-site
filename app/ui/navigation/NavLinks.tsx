"use client";

import type React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import type { ReactElement } from "react";
import { motion } from "framer-motion";

const links = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "Lessons",
    href: "/lessons",
  },
  {
    name: "Store",
    href: "/sample-packs",
  },
  {
    name: "Music",
    href: "/music",
  },
];

interface NavLinkProps {
  isMobile: boolean;
  handleClose: () => void;
}

const NavLinks: React.FC<NavLinkProps> = ({
  isMobile,
  handleClose,
}): ReactElement => {
  const pathname: string = usePathname();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className={
        isMobile
          ? "flex flex-col items-center space-y-4 py-4"
          : "flex flex-row space-x-4"
      }
      variants={container}
      initial="hidden"
      animate="show"
    >
      {links.map((link, index) => {
        return (
          <motion.div key={link.name} variants={item}>
            <Link
              href={link.href}
              className={clsx(
                "flex items-center justify-center gap-2 rounded-md text-neon px-3 py-2 text-lg font-medium transition-all duration-300",
                {
                  "ring-rose-300 ring-2 bg-black/30": pathname === link.href,
                  "hover:bg-black/20 hover:scale-105": pathname !== link.href,
                },
              )}
              onClick={handleClose}
            >
              <p>{link.name}</p>
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default NavLinks;
