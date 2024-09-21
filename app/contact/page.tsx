"use client";

import { ReactElement, useRef } from "react";
import ContactHeader from "../ui/contact/ContactHeader";
import ContactForm from "../ui/contact/ContactForm";
import LocationsSection from "../ui/contact/LocationsSection";
import FAQSection from "../ui/contact/FAQSection";

const Contact = (): ReactElement => {
  const contactFormRef = useRef<HTMLDivElement>(null);
  const locationsSectionRef = useRef<HTMLDivElement>(null);
  const faqSectionRef = useRef<HTMLDivElement>(null);

  const scrollToContactForm = (): void => {
    if (contactFormRef.current) {
      contactFormRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToLocationsSection = (): void => {
    if (locationsSectionRef.current) {
      locationsSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToFAQSection = (): void => {
    if (faqSectionRef.current) {
      faqSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <ContactHeader scrollToNextSection={scrollToContactForm} />
      <div ref={contactFormRef} className="section">
        <ContactForm scrollToNextSection={scrollToLocationsSection} />
      </div>
      <div ref={locationsSectionRef} className="section">
        <LocationsSection scrollToNextSection={scrollToFAQSection} />
      </div>
      <div ref={faqSectionRef} className="section">
        <FAQSection />
      </div>
    </>
  );
};

export default Contact;
