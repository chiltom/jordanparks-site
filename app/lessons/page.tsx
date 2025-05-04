"use client";

import { type ReactElement, useRef } from "react";
import ApplicationFormSection from "../ui/lessons/ApplicationFormSection";
import FAQSection from "../ui/lessons/FAQSection";
import HeaderSection from "../ui/lessons/HeaderSection";
import HowItWorksSection from "../ui/lessons/HowItWorksSection";

const Lessons = (): ReactElement => {
  const howItWorksSectionRef = useRef<HTMLDivElement>(null);
  const applicationFormSectionRef = useRef<HTMLDivElement>(null);
  const faqSectionRef = useRef<HTMLDivElement>(null);

  const scrollToHowSection = (): void => {
    if (howItWorksSectionRef.current) {
      howItWorksSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToApplicationFormSection = (): void => {
    if (applicationFormSectionRef.current) {
      applicationFormSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToFAQSection = (): void => {
    if (faqSectionRef.current) {
      faqSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <HeaderSection scrollToNextSection={scrollToHowSection} />
      <div ref={howItWorksSectionRef} className="section">
        <HowItWorksSection
          scrollToNextSection={scrollToApplicationFormSection}
        />
      </div>
      <div ref={applicationFormSectionRef} className="section">
        <ApplicationFormSection scrollToNextSection={scrollToFAQSection} />
      </div>
      <div ref={faqSectionRef} className="section">
        <FAQSection />
      </div>
    </>
  );
};

export default Lessons;
