import { ReactElement } from "react";

const Biography: React.FC = (): ReactElement => {
  return (
    <section className="bg-cardBackground border border-accentLight rounded-lg p-6 my-4 shadow-neon">
      <h2 className="text-accent text-2xl font-bold">Jordan&apos;s History</h2>
      <p className="mt-4 text-textSecondary">Jordan&apos;s Biography</p>
    </section>
  );
};

export default Biography;
