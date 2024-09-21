"use client";

import { ReactElement, useRef } from "react";
import SamplePackCard from "../ui/sample-packs/SamplePackCard";
import SamplePackHeader from "../ui/sample-packs/SamplePackHeader";
import FAQSection from "../ui/sample-packs/FAQSection";
import { FaChevronDown } from "react-icons/fa";

type SamplePack = {
  image: string;
  title: string;
  price: number;
  link: string;
};

const samplePacks: SamplePack[] = [
  {
    image: "",
    title: "Sample Pack 1",
    price: 19.99,
    link: "",
  },
  {
    image: "",
    title: "Sample Pack 2",
    price: 24.99,
    link: "",
  },
];

const SamplePacks: React.FC = (): ReactElement => {
  const cardMapSectionRef = useRef<HTMLDivElement>(null);
  const faqSectionRef = useRef<HTMLDivElement>(null);

  const scrollToCardMapSection = (): void => {
    if (cardMapSectionRef.current) {
      cardMapSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToFAQSection = (): void => {
    if (faqSectionRef.current) {
      faqSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <SamplePackHeader scrollToNextSection={scrollToCardMapSection} />
      <div
        className="section grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-6 w-full h-screen"
        ref={cardMapSectionRef}
      >
        {samplePacks.map((pack, index) => (
          <SamplePackCard
            key={index}
            image={pack.image}
            title={pack.title}
            price={pack.price}
            link={pack.link}
          />
        ))}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-40 hover:opacity-90">
          <button
            onClick={scrollToFAQSection}
            className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-white"
          >
            <FaChevronDown size={24} />
          </button>
        </div>
      </div>
      <div ref={faqSectionRef} className="section">
        <FAQSection />
      </div>
    </>
  );
};

export default SamplePacks;
