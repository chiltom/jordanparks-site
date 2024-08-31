"use client";

import { useState, ReactElement } from "react";

const ContactForm: React.FC = (): ReactElement => {
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [age, setAge] = useState<string>("");
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
    <section className="section text-center w-full h-full flex flex-col justify-center">
      <h2 className="text-2xl font-bold mb-2 text-black">Contact</h2>
      <p className="text-gray-800 mb-4">
        Please reach out to me with any questions, booking requests, or
        inquiries.
      </p>
      {status && <p className="mb-4 text-sm text-green-500">{status}</p>}
      <form onSubmit={handleSubmit} className="md:px-96">
        <div className="mb-4">
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-800"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-lightBlue focus:border-lightBlue sm:text-sm text-black"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-800"
          >
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-lightBlue focus:border-lightBlue sm:text-sm text-black"
            rows={4}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-800"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 text-black block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-lightBlue focus:border-lightBlue sm:text-sm"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-lightBlue hover:bg-lightPurple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lightBlue shadow-lg"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
