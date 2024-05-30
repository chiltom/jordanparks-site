import { ReactElement } from "react";

const AboutSection: React.FC = (): ReactElement => {
  return (
    <section className="bg-navbarBackground border border-secondary rounded-lg p-6 my-4">
      <h2 className="text-primary text-2xl font-bold">About Jordan</h2>
      <p className="mt-4">
        A brief intro of Jordan focusing on his uniqueness and selling points
      </p>
    </section>
  );
};

export default AboutSection;
