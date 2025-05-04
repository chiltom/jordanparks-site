"use client";

import type React from "react";
import type { ReactElement } from "react";
import Image from "next/image";
import image3 from "@/public/images/image3.jpeg";
import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";
import ClientOnly from "@/app/components/ClientOnly";

interface RecognitionSectionProps {
  scrollToNextSection: () => void;
}

const RecognitionSection: React.FC<RecognitionSectionProps> = ({
  scrollToNextSection,
}): ReactElement => {
  return (
    <section className="text-center w-full h-screen flex flex-col items-center gap-10">
      <div className="relative w-full h-full">
        <Image
          src={image3 || "/placeholder.svg"}
          alt="Jordan Parks"
          fill
          className="object-contain opacity-90"
        />
      </div>
      <ClientOnly>
        <motion.div
          className="absolute bottom-8"
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

export default RecognitionSection;
