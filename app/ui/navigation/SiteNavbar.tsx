import { ReactElement } from "react";
import Link from "next/link";
import NavLinks from "./NavLinks";

const Navbar = (): ReactElement => {
  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-around items-center">
        <div className="text-textPrimary text-xl font-bold md:text-2xl">
          <Link href="/">Image</Link>
        </div>
        <div className="space-x-4">
          <NavLinks />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
