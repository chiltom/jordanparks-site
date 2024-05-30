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
    name: "Sample Packs",
    href: "/sample-packs",
  },
  {
    name: "Music",
    href: "/music",
  },
];

const NavLinks = (): ReactElement => {
  const pathname: string = usePathname();

  return (
    <div className="flex flex-row">
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex grow items-center justify-center gap-2 rounded-md p-1 text-sm font-medium text-white md:p-3 hover:text-blue-600",
              {
                "bg-gray-400 text-blue-600": pathname === link.href,
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
