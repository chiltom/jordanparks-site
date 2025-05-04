"use client";

import type React from "react";
import type { ReactElement } from "react";
import Image from "next/image";
import about_image from "@/public/images/about_page.jpg";
import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";
import ClientOnly from "@/app/components/ClientOnly";

interface AboutHeaderProps {
  scrollToNextSection: () => void;
}

const AboutHeader: React.FC<AboutHeaderProps> = ({
  scrollToNextSection,
}): ReactElement => {
  return (
    <header className="relative w-full h-full">
      <Image
        src={about_image || "/placeholder.svg"}
        alt="Jordan Parks"
        fill
        className="object-cover opacity-90"
        priority
        sizes="100vw"
      />
      <ClientOnly>
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
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
    </header>
  );
};

export default AboutHeader;
