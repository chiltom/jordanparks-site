import { ReactElement } from "react";

const BookingSection: React.FC = (): ReactElement => {
  return (
    <section className="section">
      <h2 className="text-2xl font-bold text-black">Booking and Inquiries</h2>
      <p className="mt-4 text-gray-800">Please send a separate email to ___</p>
    </section>
  );
};

export default BookingSection;
