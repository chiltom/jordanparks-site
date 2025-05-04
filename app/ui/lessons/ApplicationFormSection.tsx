"use client";

import type React from "react";
import { type ReactElement, useState } from "react";
import {
  FaChevronDown,
  FaUser,
  FaEnvelope,
  FaMusic,
  FaClock,
  FaStar,
  FaPaperPlane,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { sendLessonApplicationEmail } from "@/app/actions/email";

interface ApplicationFormProps {
  scrollToNextSection: () => void;
}

const ApplicationFormSection: React.FC<ApplicationFormProps> = ({
  scrollToNextSection,
}): ReactElement => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [goal, setGoal] = useState<string>("");
  const [timePlayed, setTimePlayed] = useState<string>("");
  const [idols, setIdols] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    try {
      const result = await sendLessonApplicationEmail({
        name,
        age,
        email,
        timePlayed,
        goal,
        idols,
      });

      setIsSuccess(result.success);
      setStatus(result.message);

      if (result.success) {
        // Reset form on success
        setName("");
        setAge("");
        setGoal("");
        setTimePlayed("");
        setIdols("");
        setEmail("");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSuccess(false);
      setStatus("An unexpected error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full min-h-screen flex flex-col justify-center py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto w-full"
      >
        <h2 className="text-3xl font-bold text-black text-center mb-6">
          Apply for Lessons
        </h2>
        <p className="text-gray-800 text-center mb-8">
          Fill out the form below to start your musical journey with Jordan.
        </p>

        {status && (
          <motion.div
            className={`mb-8 p-4 ${
              isSuccess
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            } rounded-lg shadow-md`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {status}
          </motion.div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-black/10 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-xl"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-800 mb-2"
              >
                <FaUser className="inline mr-2" /> Full Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-lightBlue focus:border-lightBlue text-black"
                required
                placeholder="Your name"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="age"
                className="block text-sm font-medium text-gray-800 mb-2"
              >
                Age
              </label>
              <input
                type="text"
                id="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-lightBlue focus:border-lightBlue text-black"
                required
                placeholder="Your age"
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-800 mb-2"
            >
              <FaEnvelope className="inline mr-2" /> Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-lightBlue focus:border-lightBlue text-black"
              required
              placeholder="Your email address"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="timePlayed"
              className="block text-sm font-medium text-gray-800 mb-2"
            >
              <FaClock className="inline mr-2" /> How long have you played?
            </label>
            <input
              type="text"
              id="timePlayed"
              value={timePlayed}
              onChange={(e) => setTimePlayed(e.target.value)}
              className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-lightBlue focus:border-lightBlue text-black"
              required
              placeholder="e.g., 2 years, beginner, etc."
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="goal"
              className="block text-sm font-medium text-gray-800 mb-2"
            >
              <FaMusic className="inline mr-2" /> What are your music learning
              goals?
            </label>
            <textarea
              id="goal"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-lightBlue focus:border-lightBlue text-black"
              rows={3}
              required
              placeholder="Describe what you hope to achieve"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="idols"
              className="block text-sm font-medium text-gray-800 mb-2"
            >
              <FaStar className="inline mr-2" /> What musicians influence you?
            </label>
            <textarea
              id="idols"
              value={idols}
              onChange={(e) => setIdols(e.target.value)}
              className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-lightBlue focus:border-lightBlue text-black"
              rows={3}
              required
              placeholder="List musicians who inspire you"
            />
          </div>

          <motion.button
            type="submit"
            className="w-full py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-lightBlue hover:bg-lightPurple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lightBlue shadow-lg transition-all duration-300 flex items-center justify-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              "Submitting..."
            ) : (
              <>
                <FaPaperPlane className="mr-2" /> Submit Application
              </>
            )}
          </motion.button>
        </form>
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

export default ApplicationFormSection;
