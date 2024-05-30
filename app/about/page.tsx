import { ReactElement } from "react";
import AboutCTA from "../ui/about/about-cta";
import AboutHeader from "../ui/about/about-header";
import GallerySection from "../ui/about/gallery-section";
import RecognitionSection from "../ui/about/recognition-section";
import StatisticsSection from "../ui/about/statistics-section";
import TestimonialSection from "../ui/about/testimonial-section";
import Biography from "../ui/about/biography";

const About: React.FC = (): ReactElement => {
  return (
    <div className="bg-background min-h-screen flex flex-col items-center justify-around p-20">
      <AboutHeader />
      <div>
        <Biography />
        <StatisticsSection />
        <RecognitionSection />
        <GallerySection />
        <TestimonialSection />
        <AboutCTA />
      </div>
    </div>
  );
};

export default About;
