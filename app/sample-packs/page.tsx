import { ReactElement } from "react";
import SamplePackCard from "../ui/sample-packs/SamplePackCard";
import SamplePackHeader from "../ui/sample-packs/SamplePackHeader";
import FAQSection from "../ui/sample-packs/FAQSection";

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
  return (
    <>
      <SamplePackHeader />
      <div className="section grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-4 w-full h-full">
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
    </>
  );
};

export default SamplePacks;
