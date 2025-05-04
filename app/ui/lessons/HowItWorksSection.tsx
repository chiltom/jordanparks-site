"use client";

import type React from "react";
import type { ReactElement } from "react";
import {
  FaChevronDown,
  FaGuitar,
  FaCalendarAlt,
  FaUserGraduate,
  FaRocket,
} from "react-icons/fa";
import { motion } from "framer-motion";

interface HowItWorksSectionProps {
  scrollToNextSection: () => void;
}

const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({
  scrollToNextSection,
}): ReactElement => {
  const features = [
    {
      icon: <FaGuitar className="text-4xl text-lightBlue" />,
      title: "Personalized Instruction",
      description:
        "Lessons tailored to your skill level, goals, and musical interests.",
    },
    {
      icon: <FaCalendarAlt className="text-4xl text-lightPink" />,
      title: "Flexible Scheduling",
      description:
        "Choose from in-person or virtual lessons at times that work for you.",
    },
    {
      icon: <FaUserGraduate className="text-4xl text-lightBlue" />,
      title: "Professional Guidance",
      description:
        "Learn from an experienced musician with a proven track record.",
    },
    {
      icon: <FaRocket className="text-4xl text-lightPink" />,
      title: "Accelerated Progress",
      description:
        "Structured curriculum designed to help you advance quickly.",
    },
  ];

  return (
    <section className="w-full min-h-screen flex flex-col justify-center py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-black text-3xl md:text-4xl font-bold mb-6 text-center">
          Why Learn with Jordan?
        </h2>
        <p className="text-gray-800 text-lg mb-12 max-w-3xl mx-auto text-center">
          Taking music lessons with Jordan will not only enhance your musical
          abilities but also boost your confidence and help you develop your
          unique artistic voice.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-black/10 backdrop-blur-sm p-6 rounded-xl shadow-lg"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-800">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-black/20 backdrop-blur-sm p-8 rounded-xl shadow-xl max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">
            How It Works
          </h3>
          <ol className="space-y-6">
            <li className="flex items-start">
              <span className="bg-lightBlue text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                1
              </span>
              <div>
                <h4 className="font-bold text-lg text-gray-900">Apply</h4>
                <p className="text-gray-800">
                  Fill out the application form below with your information and
                  musical goals.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-lightPink text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                2
              </span>
              <div>
                <h4 className="font-bold text-lg text-gray-900">
                  Consultation
                </h4>
                <p className="text-gray-800">
                  Jordan will contact you to discuss your goals and create a
                  personalized plan.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-lightBlue text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                3
              </span>
              <div>
                <h4 className="font-bold text-lg text-gray-900">Schedule</h4>
                <p className="text-gray-800">
                  Set up regular lesson times that work with your schedule.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-lightPink text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                4
              </span>
              <div>
                <h4 className="font-bold text-lg text-gray-900">
                  Learn & Grow
                </h4>
                <p className="text-gray-800">
                  Begin your musical journey with structured, engaging lessons.
                </p>
              </div>
            </li>
          </ol>
        </motion.div>
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

export default HowItWorksSection;
