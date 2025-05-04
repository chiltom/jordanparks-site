"use client";

import type React from "react";
import type { ReactElement } from "react";
import Image from "next/image";
import music_image from "@/public/images/music_page.jpg";
import { FaChevronDown, FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import ClientOnly from "@/app/components/ClientOnly";

interface MusicHeaderProps {
  scrollToNextSection: () => void;
}

const MusicHeader: React.FC<MusicHeaderProps> = ({
  scrollToNextSection,
}): ReactElement => {
  return (
    <header className="relative w-full h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src={music_image || "/placeholder.svg"}
          alt="Jordan Parks"
          fill
          className="object-cover opacity-90"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70"></div>
      </div>

      <ClientOnly
        fallback={
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-neon">
              Music
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white">
              Explore Jordan&apos;s musical journey and latest releases
            </p>
            <button className="bg-lightBlue text-white font-bold py-3 px-8 rounded-full flex items-center justify-center mx-auto">
              <FaPlay className="mr-2" /> Listen Now
            </button>
          </div>
        }
      >
        <motion.div
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 text-neon"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Music
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Explore Jordan&apos;s musical journey and latest releases
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <button className="bg-lightBlue hover:bg-lightPink text-white font-bold py-3 px-8 rounded-full flex items-center justify-center mx-auto transition-all duration-300 hover:scale-105">
              <FaPlay className="mr-2" /> Listen Now
            </button>
          </motion.div>
        </motion.div>
      </ClientOnly>

      <ClientOnly>
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
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

export default MusicHeader;
