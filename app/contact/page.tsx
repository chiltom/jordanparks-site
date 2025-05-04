"use client";

import { type ReactElement, useRef } from "react";
import ContactHeader from "../ui/contact/ContactHeader";
import ContactForm from "../ui/contact/ContactForm";

const Contact = (): ReactElement => {
  const contactFormRef = useRef<HTMLDivElement>(null);

  const scrollToContactForm = (): void => {
    if (contactFormRef.current) {
      contactFormRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <ContactHeader scrollToNextSection={scrollToContactForm} />
      <div ref={contactFormRef} className="section">
        <ContactForm scrollToNextSection={() => {}} />
      </div>
    </>
  );
};

export default Contact;
