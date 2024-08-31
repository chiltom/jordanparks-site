"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { ReactElement } from "react";

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

const NavLinks = ({ isMobile }: { isMobile: boolean }): ReactElement => {
  const pathname: string = usePathname();

  return (
    <div
      className={
        isMobile
          ? "flex flex-col items-end space-y-2"
          : "flex flex-row space-x-4"
      }
    >
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex items-center justify-center gap-2 rounded-md text-textPrimary px-2 py-1 md:py-3 text-2xl md:text-lg font-medium md:px-3",
              {
                "ring-accent ring-2": pathname === link.href,
              }
            )}
          >
            <p>{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;
