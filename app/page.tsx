import { ReactElement } from "react";
import HeroHeader from "./ui/home/HeroHeader";
import CTASection from "./ui/home/CTASection";

const Home: React.FC = (): ReactElement => {
  return (
    <>
      <HeroHeader />
      <CTASection />
    </>
  );
};

export default Home;
