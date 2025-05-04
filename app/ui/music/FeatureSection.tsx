"use client";

import type React from "react";
import type { ReactElement } from "react";
import { FaChevronDown, FaSpotify, FaYoutube, FaApple } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const FeatureSection: React.FC = (): ReactElement => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-black text-3xl md:text-4xl font-bold mb-12 text-center">
          Coming Soon
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative w-64 h-64 md:w-80 md:h-80"
            >
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Album Cover"
                width={400}
                height={400}
                className="rounded-lg shadow-2xl object-cover"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                Debut Album
              </h3>
              <p className="text-lg text-gray-700 mt-2">
                Expected Release: Fall 2024
              </p>
            </div>

            <p className="text-gray-800">
              Jordan is currently in the studio working on his debut album,
              which promises to showcase his unique blend of melodic guitar work
              and innovative compositions. Each track will tell a story, taking
              listeners on a journey through different musical landscapes.
            </p>

            <p className="text-gray-800">
              Drawing from his extensive experience as both a performer and
              session musician, this upcoming release will feature
              collaborations with several talented artists from the Denver music
              scene. The album will span multiple genres, reflecting Jordan's
              versatile musical background and his passion for creating
              authentic, emotionally resonant music.
            </p>

            <p className="text-gray-800 font-medium">
              Stay tuned for singles dropping throughout the year, leading up to
              the full album release!
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Link
                  href="#"
                  className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full"
                >
                  <FaSpotify /> Follow
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Link
                  href="#"
                  className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full"
                >
                  <FaYoutube /> Subscribe
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Link
                  href="#"
                  className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-full"
                >
                  <FaApple /> Pre-Save
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <button
          onClick={scrollToNextSection}
          className="p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all duration-300 hover:scale-110"
          aria-label="Scroll down"
        >
          <FaChevronDown size={24} className="animate-bounce" />
        </button>
      </motion.div>
    </section>
  );
};

export default FeatureSection;
