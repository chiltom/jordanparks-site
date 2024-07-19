import { ReactElement } from "react";

const Biography: React.FC = (): ReactElement => {
  return (
    <section className="section text-center w-full h-full flex flex-col justify-center">
      <h2 className="text-black text-2xl font-bold">Jordan&apos;s History</h2>
      <p className="mt-4 text-gray-800">Jordan&apos;s Biography</p>
    </section>
  );
};

export default Biography;
