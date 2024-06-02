import { ReactElement } from "react";
import SamplePackCard from "../ui/sample-packs/sample-pack-card";
import SamplePackHeader from "../ui/sample-packs/sp-header";
import FAQSection from "../ui/sample-packs/sp-faq-section";

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
    <main className="px-4 min-h-screen bg-navbarBackground">
      <SamplePackHeader />
      <section className="my-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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
      </section>
    </main>
  );
};

export default SamplePacks;
