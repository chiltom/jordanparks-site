"use client";

import type React from "react";
import { useState, type ReactElement } from "react";
import { FaEnvelope, FaCommentAlt, FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { sendContactEmail } from "@/app/actions/email";

interface ContactFormProps {
  scrollToNextSection: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({
  scrollToNextSection,
}): ReactElement => {
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    try {
      const result = await sendContactEmail({
        subject,
        message,
        email,
      });

      setIsSuccess(result.success);
      setStatus(result.message);

      if (result.success) {
        // Reset form on success
        setSubject("");
        setMessage("");
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
    <section className="text-center w-full min-h-screen flex flex-col justify-center py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto w-full"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-black">
          Get in Touch
        </h2>
        <p className="text-gray-800 mb-8 text-lg">
          Have a question or want to book Jordan? Send a message below.
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
          <div className="mb-5">
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-800 mb-2"
            >
              Subject
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaCommentAlt className="text-gray-500" />
              </div>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="pl-10 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-lightBlue focus:border-lightBlue text-black"
                required
                placeholder="What's this about?"
              />
            </div>
          </div>

          <div className="mb-5">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-800 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-lightBlue focus:border-lightBlue text-black"
              rows={4}
              required
              placeholder="Your message to Jordan..."
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-800 mb-2"
            >
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="text-gray-500" />
              </div>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-lightBlue focus:border-lightBlue text-black"
                required
                placeholder="Where can Jordan reach you?"
              />
            </div>
          </div>

          <motion.button
            type="submit"
            className="w-full py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-lightBlue hover:bg-lightPurple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lightBlue shadow-lg transition-all duration-300 flex items-center justify-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                <FaPaperPlane className="mr-2" /> Send Message
              </>
            )}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactForm;
