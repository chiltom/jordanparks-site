"use client";

import { ReactElement, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", { name, email });
  };

  return (
    <section className="text-center w-full h-screen flex flex-col justify-center">
      <h2 className="text-2xl font-bold text-black">Apply for Lessons</h2>
      <form onSubmit={handleSubmit} className="mt-4 md:px-96">
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
            htmlFor="age"
            className="block text-sm font-medium text-gray-800"
          >
            Age
          </label>
          <input
            type="text"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
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
            htmlFor="timePlayed"
            className="block text-sm font-medium text-gray-800"
          >
            How long have you played?
          </label>
          <input
            type="text"
            id="timePlayed"
            value={timePlayed}
            onChange={(e) => setTimePlayed(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-lightBlue focus:border-lightBlue sm:text-sm text-black"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="goal"
            className="block text-sm font-medium text-gray-800"
          >
            What are your music learning goals?
          </label>
          <textarea
            id="goal"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-lightBlue focus:border-lightBlue sm:text-sm text-black"
            rows={2}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="idols"
            className="block text-sm font-medium text-gray-800"
          >
            What musicians do you look up to? Who influences your music?
          </label>
          <textarea
            id="idols"
            value={idols}
            onChange={(e) => setIdols(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-lightBlue focus:border-lightBlue sm:text-sm text-black"
            rows={2}
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
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-40 hover:opacity-90">
        <button
          onClick={scrollToNextSection}
          className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-white"
        >
          <FaChevronDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default ApplicationFormSection;
