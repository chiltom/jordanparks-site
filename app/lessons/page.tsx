import { ReactElement } from "react";
import ApplicationFormSection from "../ui/lessons/ApplicationFormSection";
import BenefitsSection from "../ui/lessons/BenefitsSection";
import CTASection from "../ui/lessons/CTASection";
import FAQSection from "../ui/lessons/FAQSection";
import FeatureSection from "../ui/lessons/FeatureSection";
import HeaderSection from "../ui/lessons/HeaderSection";
import HowItWorksSection from "../ui/lessons/HowItWorksSection";
import PricingSection from "../ui/lessons/PricingSection";

const Lessons = (): ReactElement => {
  return (
    <div className="bg-background min-h-screen">
      <HeaderSection />
      <main className="px-4">
        <FeatureSection />
        <BenefitsSection />
        <HowItWorksSection />
        <PricingSection />
        <ApplicationFormSection />
        <FAQSection />
        <CTASection />
      </main>
    </div>
  );
};

export default Lessons;
