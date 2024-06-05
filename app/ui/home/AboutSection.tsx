import { ReactElement } from "react";

const AboutSection: React.FC = (): ReactElement => {
  return (
    <section className="bg-cardBackground border border-accent rounded-lg p-6 my-4 shadow-neon">
      <h2 className="text-accent text-2xl font-bold">Jordan Parks</h2>
      <p className="mt-4 text-textSecondary">
        A brief intro of Jordan focusing on his uniqueness and selling points
      </p>
    </section>
  );
};

export default AboutSection;
