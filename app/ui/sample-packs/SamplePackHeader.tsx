"use client";

import type React from "react";
import type { ReactElement } from "react";
import Image from "next/image";
import store_image from "@/public/images/store_page.jpg";
import { motion } from "framer-motion";
import ClientOnly from "@/app/components/ClientOnly";

const SamplePackHeader: React.FC = (): ReactElement => {
  return (
    <header className="relative w-full h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src={store_image || "/placeholder.svg"}
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
            <div className="bg-gradient-to-r from-lightPink to-lightBlue text-white text-sm font-bold py-2 px-6 rounded-full inline-block mb-6">
              Coming Soon
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-neon">
              Sample Store
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white">
              Premium sounds crafted by Jordan Parks
            </p>
          </div>
        }
      >
        <motion.div
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-gradient-to-r from-lightPink to-lightBlue text-white text-sm font-bold py-2 px-6 rounded-full inline-block mb-6"
          >
            Coming Soon
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 text-neon"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Sample Store
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Premium sounds crafted by Jordan Parks
          </motion.p>
        </motion.div>
      </ClientOnly>
    </header>
  );
};

export default SamplePackHeader;
