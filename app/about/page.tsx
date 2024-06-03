import { ReactElement } from "react";
import AboutCTA from "../ui/about/AboutCTA";
import AboutHeader from "../ui/about/AboutHeader";
import GallerySection from "../ui/about/GallerySection";
import RecognitionSection from "../ui/about/RecognitionSection";
import StatisticsSection from "../ui/about/StatisticsSection";
import TestimonialSection from "../ui/about/TestimonialSection";
import Biography from "../ui/about/AutoBiography";

const About: React.FC = (): ReactElement => {
  return (
    <div className="bg-background min-h-screen">
      <AboutHeader />
      <main className="px-4">
        <Biography />
        <StatisticsSection />
        <RecognitionSection />
        <GallerySection />
        <TestimonialSection />
        <AboutCTA />
      </main>
    </div>
  );
};

export default About;
