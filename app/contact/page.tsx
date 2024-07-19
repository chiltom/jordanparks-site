import { ReactElement } from "react";
import ContactHeader from "../ui/contact/ContactHeader";
import ContactForm from "../ui/contact/ContactForm";
import ContactSection from "../ui/contact/ContactSection";
import LocationsSection from "../ui/contact/LocationsSection";
import FAQSection from "../ui/contact/FAQSection";
import BookingSection from "../ui/contact/BookingSection";

const Contact = (): ReactElement => {
  return (
    <>
      <ContactHeader />
      <ContactForm />
      <BookingSection />
      <ContactSection />
      <LocationsSection />
      <FAQSection />
    </>
  );
};

export default Contact;
