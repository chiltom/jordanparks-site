"use client";

import type React from "react";

import type { ReactElement } from "react";
import { motion } from "framer-motion";

const GallerySection: React.FC = (): ReactElement => {
  return (
    <section className="text-center w-full h-screen flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-black text-2xl font-bold">Making the Music</h2>
        <p className="mt-4 text-gray-800">Action shots section</p>
      </motion.div>
    </section>
  );
};

export default GallerySection;
