"use client";

import type React from "react";
import type { ReactElement } from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = (): ReactElement => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What lesson plans are available?",
      answer:
        "Jordan offers several lesson plans including 30-minute weekly sessions for beginners, 45-minute sessions for intermediate students, and 60-minute sessions for advanced students. All plans can be customized based on your specific needs and goals.",
    },
    {
      question: "What are the available slots for lessons?",
      answer:
        "Lessons are available Monday through Friday from 10 AM to 7 PM, and Saturdays from 10 AM to 2 PM. Jordan works with each student to find a consistent time that works for their schedule.",
    },
    {
      question: "Do I need to have my own instrument?",
      answer:
        "Yes, students are required to have their own instruments for practice and lessons. Jordan can provide recommendations for quality instruments at various price points if needed.",
    },
    {
      question: "What styles of music do you teach?",
      answer:
        "Jordan specializes in rock, blues, jazz, and classical guitar, but is versatile in teaching various styles. The curriculum is tailored to each student's musical interests and goals.",
    },
    {
      question: "How much do lessons cost?",
      answer:
        "Lesson rates vary depending on duration and frequency. After your application is received, Jordan will provide detailed pricing information based on your specific needs.",
    },
    {
      question: "How often should I practice between lessons?",
      answer:
        "For optimal progress, Jordan recommends practicing at least 30 minutes daily. Consistent practice is more effective than occasional longer sessions.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full min-h-screen flex flex-col justify-center py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-black text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-black/10 backdrop-blur-sm rounded-lg overflow-hidden shadow-md"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-lg text-gray-900">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <FaChevronUp className="text-gray-700" />
                ) : (
                  <FaChevronDown className="text-gray-700" />
                )}
              </button>

              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-4"
                >
                  <p className="text-gray-800">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FAQSection;
