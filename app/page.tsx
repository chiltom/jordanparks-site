import { ReactElement } from "react";
import HeroHeader from "./ui/home/hero-header";
import AboutSection from "./ui/home/about-section";
import CTASection from "./ui/home/cta-section";

const Home: React.FC = (): ReactElement => {
  return (
    <>
      <HeroHeader />
      <main className="flex min-h-screen flex-col items-center bg-background p-10">
        <div>
          <AboutSection />
          <CTASection />
        </div>
      </main>
    </>
  );
};

export default Home;
