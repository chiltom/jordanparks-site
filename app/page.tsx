"use client";

import { ReactElement, useRef } from "react";
import HeroHeader from "./ui/home/HeroHeader";
import CTASection from "./ui/home/CTASection";

const Home: React.FC = (): ReactElement => {
  const ctaSectionRef = useRef<HTMLDivElement>(null);

  const scrollToCTASection = (): void => {
    if (ctaSectionRef.current) {
      ctaSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <HeroHeader scrollToNextSection={scrollToCTASection} />
      <div ref={ctaSectionRef} className="section">
        <CTASection />
      </div>
    </>
  );
};

export default Home;
