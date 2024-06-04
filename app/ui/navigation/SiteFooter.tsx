import { ReactElement } from "react";

const Footer: React.FC = (): ReactElement => {
  return (
    <footer className="bg-navbarBackground border-t border-secondary text-center p-4">
      <p className="text-textSecondary">
        &copy; 2024 Jordan Parks. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
