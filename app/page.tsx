import { ReactElement } from "react";
import HeroHeader from "./ui/home/HeroHeader";
import AboutSection from "./ui/home/AboutSection";
import CTASection from "./ui/home/CTASection";

const Home: React.FC = (): ReactElement => {
  return (
    <>
      <HeroHeader />
      <AboutSection />
      <CTASection />
    </>
  );
};

export default Home;
