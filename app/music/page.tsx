"use client";

import { ReactElement, useRef } from "react";
import FeatureSection from "../ui/music/FeatureSection";
import FeaturesListSection from "../ui/music/FeaturesListSection";
import GallerySection from "../ui/music/GallerySection";
import MusicHeader from "../ui/music/MusicHeader";

const Music = (): ReactElement => {
  const featureSectionRef = useRef<HTMLDivElement>(null);
  const gallerySectionRef = useRef<HTMLDivElement>(null);
  const featuresListSectionRef = useRef<HTMLDivElement>(null);

  const scrollToFeatureSection = (): void => {
    if (featureSectionRef.current) {
      featureSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToGallerySection = (): void => {
    if (gallerySectionRef.current) {
      gallerySectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToFeaturesListSection = (): void => {
    if (featuresListSectionRef.current) {
      featuresListSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <MusicHeader scrollToNextSection={scrollToFeatureSection} />
      <div ref={featureSectionRef} className="section">
        <FeatureSection scrollToNextSection={scrollToGallerySection} />
      </div>
      <div ref={gallerySectionRef} className="section">
        <GallerySection scrollToNextSection={scrollToFeaturesListSection} />
      </div>
      <div ref={featuresListSectionRef} className="section">
        <FeaturesListSection />
      </div>
    </>
  );
};

export default Music;
