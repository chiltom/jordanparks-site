import { ReactElement } from "react";
import FeatureSection from "../ui/music/FeatureSection";
import FeaturesListSection from "../ui/music/FeaturesListSection";
import GallerySection from "../ui/music/GallerySection";
import LogoListSection from "../ui/music/LogoListSection";
import MusicHeader from "../ui/music/MusicHeader";
import PortfolioItemBodySection from "../ui/music/PortfolioItemBodySection";
import ReviewsSection from "../ui/music/ReviewsSection";

const Music = (): ReactElement => {
  return (
    <>
      <MusicHeader />
      <FeatureSection />
      <GallerySection />
      <PortfolioItemBodySection />
      <FeaturesListSection />
      <ReviewsSection />
      <LogoListSection />
    </>
  );
};

export default Music;
