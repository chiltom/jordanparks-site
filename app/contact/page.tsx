import { ReactElement } from "react";
import ContactHeader from "../ui/contact/ContactHeader";
import ContactForm from "../ui/contact/ContactForm";
import LocationsSection from "../ui/contact/LocationsSection";
import FAQSection from "../ui/contact/FAQSection";

const Contact = (): ReactElement => {
  return (
    <>
      <ContactHeader />
      <ContactForm />
      <LocationsSection />
      <FAQSection />
    </>
  );
};

export default Contact;
