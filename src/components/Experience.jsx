// src/components/Experience.jsx
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      role: "Software Engineer Analyst",
      company: "Allstate India",
      duration: "July 2025 – Present",
      description: ["(Details to be added)"],
    },
    {
      role: "Apprentice Associate",
      company: "Allstate India",
      duration: "Feb 2025 – July 2025",
      description: [
        "Developed a full-stack e-commerce web application using React, Spring Boot, and Oracle Database with responsive UI styled using Tailwind CSS.",
        "Implemented core features including user authentication, product listing, cart/wishlist management, and order processing with RESTful API integration and Context API for state management.",
        "Followed TDD and OBD principles; tested APIs using Postman, wrote JUnit test cases, and planned Selenium scripts for end-to-end UI testing.",
      ],
    },
    {
      role: "Intern",
      company: "Knit Space Private Limited",
      duration: "July 2023 - Aug 2023",
      description: [
        "Developed Python tools to analyse and process product data from JSON files.",
        "Built interactive search functions for identifying common specifications across devices.",
        "Implemented algorithms to update JSON files with most common device specifications.",
        "Utilized Pandas and Counter for efficient data analysis and manipulation.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a192f] text-white px-6 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>

      <div className="relative max-w-6xl mx-auto">
        {/* vertical timeline line */}
  <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4" style={{ borderColor: '#005A9C' }}></div>

        <div className="space-y-16">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className={`flex items-center justify-between w-full ${
                idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-5/12 bg-[#1A2B42] p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-semibold">{exp.role}</h3>
                <h4 className="text-lg text-blue-300">{exp.company}</h4>
                <p className="text-sm text-gray-300 mb-4">{exp.duration}</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-200">
                  {exp.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>

              {/* Circle indicator */}
              <div className="w-4 h-4 rounded-full z-10 shadow-lg" style={{ backgroundColor: '#005A9C' }}></div>

              <div className="w-5/12"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
