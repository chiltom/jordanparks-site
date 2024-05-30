import { ReactElement } from "react";
import HeroHeader from "./ui/home/hero-header";
import AboutSection from "./ui/home/about-section";
import CTASection from "./ui/home/cta-section";

const Home: React.FC = (): ReactElement => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around bg-background p-10">
      <HeroHeader />
      <div className="px-4">
        <AboutSection />
        <CTASection />
      </div>
    </main>
  );
};

export default Home;
