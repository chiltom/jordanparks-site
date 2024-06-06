import { ReactElement } from "react";

const AboutSection: React.FC = (): ReactElement => {
  return (
    <section className="section">
      <h2 className="text-black text-2xl font-bold">Jordan Parks</h2>
      <p className="mt-4 text-gray-800">
        A brief intro of Jordan focusing on his uniqueness and selling points
      </p>
    </section>
  );
};

export default AboutSection;
