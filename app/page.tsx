import { ReactElement } from "react";
import HeroHeader from "./ui/home/HeroHeader";
import AboutSection from "./ui/home/AboutSection";
import CTASection from "./ui/home/CTASection";

const Home: React.FC = (): ReactElement => {
  return (
    <>
      <HeroHeader />
      <main className="px-4 min-h-screen">
        <div>
          <AboutSection />
          <CTASection />
        </div>
      </main>
    </>
  );
};

export default Home;
