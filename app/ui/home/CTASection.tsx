"use client";

import type React from "react";
import type { ReactElement } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaYoutube, FaSpotify, FaMusic, FaBookOpen } from "react-icons/fa";

const CTASection: React.FC = (): ReactElement => {
  return (
    <section className="text-center w-full min-h-screen flex flex-col justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-black text-3xl md:text-4xl font-bold mb-6">
          Explore Jordan&apos;s World
        </h2>
        <p className="mt-4 text-gray-800 text-lg mb-12 max-w-2xl mx-auto">
          Discover the music, lessons, and creative journey of Jordan Parks
          through various platforms and offerings.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              href="https://youtube.com/@jordanlloydparks"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-red-600 text-white rounded-lg p-6 shadow-lg flex flex-col items-center h-full">
                <FaYoutube className="text-4xl mb-4" />
                <h3 className="text-xl font-bold mb-2">YouTube Channel</h3>
                <p className="text-sm">
                  Watch performances, tutorials, and behind-the-scenes content
                </p>
              </div>
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              href="https://open.spotify.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-green-600 text-white rounded-lg p-6 shadow-lg flex flex-col items-center h-full">
                <FaSpotify className="text-4xl mb-4" />
                <h3 className="text-xl font-bold mb-2">Spotify</h3>
                <p className="text-sm">
                  Stream Jordan&apos;s music on your favorite platforms
                </p>
              </div>
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link href="/music">
              <div className="bg-purple-600 text-white rounded-lg p-6 shadow-lg flex flex-col items-center h-full">
                <FaMusic className="text-4xl mb-4" />
                <h3 className="text-xl font-bold mb-2">Music</h3>
                <p className="text-sm">
                  Explore Jordan&apos;s latest releases and musical projects
                </p>
              </div>
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link href="/lessons">
              <div className="bg-blue-600 text-white rounded-lg p-6 shadow-lg flex flex-col items-center h-full">
                <FaBookOpen className="text-4xl mb-4" />
                <h3 className="text-xl font-bold mb-2">Lessons</h3>
                <p className="text-sm">
                  Learn music with personalized instruction from Jordan
                </p>
              </div>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;
