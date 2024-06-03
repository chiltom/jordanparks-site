import { ReactElement } from "react";
import ContactHeader from "../ui/contact/ContactHeader";
import ContactForm from "../ui/contact/ContactForm";
import ContactSection from "../ui/contact/ContactSection";
import LocationsSection from "../ui/contact/LocationsSection";
import FAQSection from "../ui/contact/FAQSection";

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
