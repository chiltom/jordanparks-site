import { ReactElement } from "react";
import Image from "next/image";
import image6 from "@/public/images/image6.jpeg";

const Biography: React.FC = (): ReactElement => {
  return (
    <section className="section w-full h-full flex flex-col justify-center items-center">
      <h2 className="text-black text-2xl font-bold">Jordan&apos;s History</h2>
      <div className="text-xs md:text-sm md:gap-10 md:px-80">
        <p className="mt-3 md:mt-3 text-gray-800">
          Jordan Parks is a 25-year-old guitar virtuoso from Denver, Colorado.
          Born in the summer of &apos;98 to a 17-year-old single mother,
          Jordan&apos;s unique upbringing would define his artistic identity.
        </p>
        <p className="md:mt-3 text-gray-800">
          His musical prowess emerged early in life, showing a mastery of the
          car radio and a preference for VH1 over morning cartoons. Gifted his
          first guitar on his eighth birthday, he attended lessons twice a week
          and practiced daily for the next five years.
        </p>
        <p className="md:mt-3 text-gray-800">
          During high school, Jordan was enrolled in twice-daily choir classes,
          eventually earning three solos, an invitation to All-State, and a
          place in the prestigious vocal jazz group. His guitars also resonated
          through the halls, accompanying the women&apos;s choir and setting the
          atmosphere for art shows.
        </p>
        <p className="md:mt-3 text-gray-800">
          In 2021, Jordan quit his job as an emergency room technician to pursue
          music full-time. Already an accomplished musician, he dedicated 8 to
          12 hours a day to a rigorous practice routine. Within a year, Jordan
          had booked his first residency, performing for three full hours every
          Friday night. He has since illuminated various other locales,
          including Deepspace, Tailfeathers, and End Of The Trail. In 2022, he
          played at Denver&apos;s Oktoberfest, an event attracting over 350,000
          people.
        </p>
        <p className="md:mt-3 text-gray-800">
          Jordan&apos;s talent as a session player is also notable. Playing for
          the likes of McKnight & Ardelle&apos;s Little Secret, Jordan has
          filled everything from acoustic duos to seven-piece bands, both in the
          studio and on the stage.
        </p>
        <p className="md:mt-3 text-gray-800">
          Currently, Jordan is in the studio working on his first album.
        </p>
      </div>
      <Image
        src={image6}
        alt="Jordan Parks"
        width={150}
        height={150}
        className="rounded-lg mt-6"
      />
    </section>
  );
};

export default Biography;
