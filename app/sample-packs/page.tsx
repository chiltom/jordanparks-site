"use client";

import type React from "react";
import type { ReactElement } from "react";
import SamplePackHeader from "../ui/sample-packs/SamplePackHeader";
import { motion } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";
import ClientOnly from "../components/ClientOnly";

const SamplePacks: React.FC = (): ReactElement => {
  return (
    <>
      <SamplePackHeader />
      <div className="section py-16">
        <ClientOnly
          fallback={
            <div className="max-w-4xl mx-auto px-4">
              <div className="bg-black/20 backdrop-blur-md rounded-xl p-8 md:p-12 shadow-2xl text-center">
                <div className="mb-6 inline-block bg-gradient-to-r from-lightPink to-lightBlue p-3 rounded-full">
                  <FaCalendarAlt className="text-white text-4xl" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Store Coming Soon
                </h2>
                <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                  Jordan is currently crafting premium sample packs that will be
                  available for purchase soon. These exclusive collections will
                  feature high-quality sounds, loops, and musical elements to
                  enhance your productions.
                </p>
              </div>
            </div>
          }
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto px-4"
          >
            <div className="bg-black/20 backdrop-blur-md rounded-xl p-8 md:p-12 shadow-2xl text-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-6 inline-block bg-gradient-to-r from-lightPink to-lightBlue p-3 rounded-full"
              >
                <FaCalendarAlt className="text-white text-4xl" />
              </motion.div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Store Coming Soon
              </h2>

              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Jordan is currently crafting premium sample packs that will be
                available for purchase soon. These exclusive collections will
                feature high-quality sounds, loops, and musical elements to
                enhance your productions.
              </p>

              <div className="bg-white/10 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Get Notified When We Launch
                </h3>

                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-grow px-4 py-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-lightBlue"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-lightBlue hover:bg-lightPink text-white font-medium px-6 py-3 rounded-lg flex items-center justify-center transition-colors duration-300"
                  >
                    Notify Me
                  </motion.button>
                </div>
              </div>

              <p className="text-white/70 text-sm">
                Expected launch: Summer 2024
              </p>
            </div>
          </motion.div>
        </ClientOnly>
      </div>
    </>
  );
};

export default SamplePacks;
