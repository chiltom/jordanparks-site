"use client";

import { useState, ReactElement } from "react";

const ContactForm: React.FC = (): ReactElement => {
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      subject,
      message,
      email,
    };

    // Send the email using a provider
  };

  return (
    <section className="bg-cardBackground border border-accentLight rounded-lg p-6 my-4 shadow-neon">
      <h2 className="text-2xl font-bold mb-4 text-accent">Contact</h2>
      {status && <p className="mb-4 text-sm text-green-500">{status}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-textSecondary"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="mt-1 text-textSecondary bg-secondary block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-textSecondary"
          >
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1 text-textSecondary bg-secondary block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
            rows={4}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-textSecondary"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 text-textSecondary bg-secondary block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <h3 className="text-center font-bold text-textSecondary">Booking and Inquiries</h3>
          <p className="text-center text-textSecondary">Please send a separate email to ___</p>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-buttonText bg-neonBlue hover:bg-neonPink focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
