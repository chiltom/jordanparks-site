import { ReactElement } from "react";
import AboutCTA from "../ui/about/AboutCTA";
import AboutHeader from "../ui/about/AboutHeader";
import GallerySection from "../ui/about/GallerySection";
import RecognitionSection from "../ui/about/RecognitionSection";
import Biography from "../ui/about/AutoBiography";

const About: React.FC = (): ReactElement => {
  return (
    <>
      <AboutHeader />
      <Biography />
      <RecognitionSection />
      <GallerySection />
      <AboutCTA />
    </>
  );
};

export default About;
