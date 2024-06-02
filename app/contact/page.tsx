import { ReactElement } from "react";
import ContactHeader from "../ui/contact/contact-header";
import ContactForm from "../ui/contact/contact-form";
import ContactSection from "../ui/contact/contact-section";
import LocationsSection from "../ui/contact/locations-section";
import FAQSection from "../ui/contact/faq-section";

const Contact = (): ReactElement => {
  return (
    <div className="bg-background min-h-screen flex flex-col items-center justify-around p-20">
      <ContactHeader />
      <div>
        <ContactForm />
        <ContactSection />
        <LocationsSection />
        <FAQSection />
      </div>
    </div>
  );
};

export default Contact;
