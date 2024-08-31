import { ReactElement } from "react";
import FeatureSection from "../ui/music/FeatureSection";
import FeaturesListSection from "../ui/music/FeaturesListSection";
import GallerySection from "../ui/music/GallerySection";
import MusicHeader from "../ui/music/MusicHeader";

const Music = (): ReactElement => {
  return (
    <>
      <MusicHeader />
      <FeatureSection />
      <GallerySection />
      <FeaturesListSection />
    </>
  );
};

export default Music;
