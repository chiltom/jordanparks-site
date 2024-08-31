import { ReactElement } from "react";
import ApplicationFormSection from "../ui/lessons/ApplicationFormSection";
import FAQSection from "../ui/lessons/FAQSection";
import HeaderSection from "../ui/lessons/HeaderSection";
import HowItWorksSection from "../ui/lessons/HowItWorksSection";

const Lessons = (): ReactElement => {
  return (
    <>
      <HeaderSection />
      <HowItWorksSection />
      <ApplicationFormSection />
      <FAQSection />
    </>
  );
};

export default Lessons;
