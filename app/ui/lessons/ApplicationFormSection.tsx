"use client";

import { ReactElement, useState } from "react";

const ApplicationFormSection: React.FC = (): ReactElement => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", { name, email, message });
  };

  return (
    <section className="section text-center w-full h-full flex flex-col justify-center">
      <h2 className="text-2xl font-bold text-black">Apply for Lessons</h2>
      <form onSubmit={handleSubmit} className="mt-4 px-56">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-800"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 text-black block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-lightBlue focus:border-lightBlue sm:text-sm"
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
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-lightBlue hover:bg-lightPurple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lightBlue shadow-lg"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default ApplicationFormSection;
