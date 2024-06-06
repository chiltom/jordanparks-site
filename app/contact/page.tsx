import { ReactElement } from "react";
import ContactHeader from "../ui/contact/ContactHeader";
import ContactForm from "../ui/contact/ContactForm";
import ContactSection from "../ui/contact/ContactSection";
import LocationsSection from "../ui/contact/LocationsSection";
import FAQSection from "../ui/contact/FAQSection";
import BookingSection from "../ui/contact/BookingSection";

const Contact = (): ReactElement => {
  return (
    <div className="min-h-screen">
      <ContactHeader />
      <main className="px-4">
        <ContactForm />
        <BookingSection />
        <ContactSection />
        <LocationsSection />
        <FAQSection />
      </main>
    </div>
  );
};

export default Contact;
