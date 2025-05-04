"use client";

import { type ReactElement, useRef } from "react";
import FeatureSection from "../ui/music/FeatureSection";
import MusicHeader from "../ui/music/MusicHeader";

const Music = (): ReactElement => {
  const featureSectionRef = useRef<HTMLDivElement>(null);

  const scrollToFeatureSection = (): void => {
    if (featureSectionRef.current) {
      featureSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <MusicHeader scrollToNextSection={scrollToFeatureSection} />
      <div ref={featureSectionRef} className="section">
        <FeatureSection />
      </div>
    </>
  );
};

export default Music;
