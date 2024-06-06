import { ReactElement } from "react";
import SamplePackCard from "../ui/sample-packs/SamplePackCard";
import SamplePackHeader from "../ui/sample-packs/SamplePackHeader";
import FAQSection from "../ui/sample-packs/FAQSection";

const samplePacks = [
  {
    image: "",
    title: "Sample Pack 1",
    price: "$19.99",
    link: "",
  },
  {
    image: "",
    title: "Sample Pack 2",
    price: "$24.99",
    link: "",
  },
];

const SamplePacks: React.FC = (): ReactElement => {
  return (
    <div className="min-h-screen">
      <SamplePackHeader />
      <main>
        <div className="section grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-4">
          {samplePacks.map((pack, index) => (
            <SamplePackCard
              key={index}
              image={pack.image}
              title={pack.title}
              price={pack.price}
              link={pack.link}
            />
          ))}
        </div>
        <FAQSection />
      </main>
    </div>
  );
};

export default SamplePacks;
