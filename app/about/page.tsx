"use client";

import { ReactElement, useRef } from "react";
import AboutCTA from "../ui/about/AboutCTA";
import AboutHeader from "../ui/about/AboutHeader";
import GallerySection from "../ui/about/GallerySection";
import RecognitionSection from "../ui/about/RecognitionSection";
import Biography from "../ui/about/AutoBiography";

const About: React.FC = (): ReactElement => {
  const bioSectionRef = useRef<HTMLDivElement>(null);
  const recSectionRef = useRef<HTMLDivElement>(null);
  const galSectionRef = useRef<HTMLDivElement>(null);
  const ctaSectionRef = useRef<HTMLDivElement>(null);

  const scrollToBioSection = (): void => {
    if (bioSectionRef.current) {
      bioSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToRecSection = (): void => {
    if (recSectionRef.current) {
      recSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToGalSection = (): void => {
    if (galSectionRef.current) {
      galSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToCTASection = (): void => {
    if (ctaSectionRef.current) {
      ctaSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <AboutHeader scrollToNextSection={scrollToBioSection} />
      <div ref={bioSectionRef} className="section">
        <Biography scrollToNextSection={scrollToRecSection} />
      </div>
      <div ref={recSectionRef} className="section">
        <RecognitionSection scrollToNextSection={scrollToGalSection} />
      </div>
      <div ref={galSectionRef} className="section">
        <GallerySection scrollToNextSection={scrollToCTASection} />
      </div>
      <div ref={ctaSectionRef} className="section">
        <AboutCTA />
      </div>
    </>
  );
};

export default About;
