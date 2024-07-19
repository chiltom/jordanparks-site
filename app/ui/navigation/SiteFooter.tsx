import { ReactElement } from "react";

const Footer: React.FC = (): ReactElement => {
  return (
    <footer className="text-center bg-gradient-to-b from-purple-300 to-purple-100 p-4">
      <p className="text-black">
        &copy; 2024 Jordan Parks. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
