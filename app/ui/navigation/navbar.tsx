import { ReactElement } from "react";
import Link from "next/link";
import NavLinks from "./nav-links";

const Navbar = (): ReactElement => {
  return (
    <nav className="bg-gray-600 p-4">
      <div className="container mx-auto flex justify-around items-center">
        <div className="text-white text-xl font-bold">
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
