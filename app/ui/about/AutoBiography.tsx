"use client";

import type React from "react";
import type { ReactElement } from "react";
import Image from "next/image";
import image6 from "@/public/images/image6.jpeg";
import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";
import ClientOnly from "@/app/components/ClientOnly";

interface BiographyProps {
  scrollToNextSection: () => void;
}

const Biography: React.FC<BiographyProps> = ({
  scrollToNextSection,
}): ReactElement => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-black text-3xl md:text-4xl font-bold mb-8 text-center">
          Jordan&apos;s Story
        </h2>

        <div className="bg-black/10 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-xl">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1 flex justify-center">
              <ClientOnly>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src={image6 || "/placeholder.svg"}
                    alt="Jordan Parks"
                    width={200}
                    height={200}
                    className="rounded-lg shadow-lg object-cover"
                  />
                </motion.div>
              </ClientOnly>
            </div>

            <div className="md:col-span-2 space-y-4 text-gray-800">
              <p className="text-base">
                Jordan Parks is a 25-year-old guitar virtuoso from Denver,
                Colorado. Born in the summer of &apos;98 to a 17-year-old single
                mother, Jordan&apos;s unique upbringing would define his
                artistic identity.
              </p>
              <p className="text-base">
                His musical prowess emerged early in life, showing a mastery of
                the car radio and a preference for VH1 over morning cartoons.
                Gifted his first guitar on his eighth birthday, he attended
                lessons twice a week and practiced daily for the next five
                years.
              </p>
              <p className="text-base">
                During high school, Jordan was enrolled in twice-daily choir
                classes, eventually earning three solos, an invitation to
                All-State, and a place in the prestigious vocal jazz group. His
                guitars also resonated through the halls, accompanying the
                women&apos;s choir and setting the atmosphere for art shows.
              </p>
              <p className="text-base">
                In 2021, Jordan quit his job as an emergency room technician to
                pursue music full-time. Already an accomplished musician, he
                dedicated 8 to 12 hours a day to a rigorous practice routine.
                Within a year, Jordan had booked his first residency, performing
                for three full hours every Friday night.
              </p>
              <p className="text-base">
                Jordan&apos;s talent as a session player is also notable.
                Playing for the likes of McKnight & Ardelle&apos;s Little
                Secret, Jordan has filled everything from acoustic duos to
                seven-piece bands, both in the studio and on the stage.
              </p>
              <p className="text-base font-medium">
                Currently, Jordan is in the studio working on his first album.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <ClientOnly>
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <button
            onClick={scrollToNextSection}
            className="text-white transition-all duration-300 hover:scale-110"
            aria-label="Scroll down"
          >
            <FaChevronDown size={24} className="animate-bounce" />
          </button>
        </motion.div>
      </ClientOnly>
    </section>
  );
};

export default Biography;
