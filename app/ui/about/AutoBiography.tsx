import { ReactElement } from "react";

const Biography: React.FC = (): ReactElement => {
  return (
    <section className="bg-navbarBackground border border-secondary rounded-lg p-6 my-4">
      <h2 className="text-primary text-2xl font-bold">Jordan&apos;s History</h2>
      <p className="mt-4">Jordan&apos;s Biography</p>
    </section>
  );
};

export default Biography;
