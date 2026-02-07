// src/components/Experience.jsx
import { motion } from "framer-motion";
import { useState } from "react";

const Experience = () => {

  const [selectedIdx, setSelectedIdx] = useState(null);

  const experiences = [
    {
      role: "Software Engineer Analyst",
      company: "Allstate India",
      duration: "July 2025 – Present",
      description: [
        "Working on application development and enhancements using Java, Spring Boot, and React.",
        "Assisting in building and testing REST APIs, using Postman for validation and debugging.",
        "Using Git/GitHub for version control, code reviews, and collaborative development.",
        "Supporting feature implementation, bug fixes, and code refactoring under guidance of senior engineers.",
        "Developing and experimenting with proof-of-concepts (POCs), including AI-based explorations, to understand feasibility and application impact.",
        "Following Agile practices, contributing to sprint tasks, discussions, and incremental delivery."
      ],
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
      role: "Research Intern",
      company: "KLETech-Center of Excellence in Visual Intelligence",
      duration: "July 2024 – March 2025",
      description: [
        "Worked on multimodal representation learning, integrating text and image data into unified embeddings",
        "Analyzed and redesigned existing autoencoder-based architectures (AE, VAE, and hybrid models) to improve multimodal fusion and generalization.",
        "Performed extensive preprocessing of textual and visual data, including embeddings and CNN-based feature extraction.",
        "Validated models on classification, regression, and retrieval tasks, demonstrating improved cross-modal alignment.",
        "Contributed to experimental analysis and research documentation, leading to a conference-accepted paper.",
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
    <div className="relative min-h-screen bg-[#0a192f] text-white px-6 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>

      <div className="relative max-w-6xl mx-auto">
        {/* Timeline line */}
        <div
          className="
            absolute hidden sm:block
            left-1/2 transform -translate-x-1/2
            h-full border-l-4
          "
          style={{ borderColor: "#005A9C" }}
        ></div>

        <div className="space-y-16">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className={`
                flex flex-col sm:flex-row items-start sm:items-center
                w-full
                ${idx % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}
              `}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div
                onClick={() => setSelectedIdx(selectedIdx === idx ? null : idx)}
                className={`
                  w-full sm:w-5/12
                  bg-[#1A2B42] p-6 rounded-2xl shadow-xl
                  cursor-pointer transition-all duration-300
                  ${
                    selectedIdx === idx
                      ? "shadow-2xl shadow-blue-500/50 ring-2 ring-blue-400"
                      : "hover:shadow-lg hover:shadow-blue-400/30"
                  }
                `}
              >
                <h3 className="text-2xl font-semibold">{exp.role}</h3>
                <h4 className="text-lg text-blue-300">{exp.company}</h4>
                <p className="text-sm text-gray-300 mb-4">{exp.duration}</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-200">
                  {exp.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>

              {/* Timeline dot */}
              <div
                className="
                  hidden sm:block
                  absolute left-1/2 transform -translate-x-1/2
                  w-4 h-4 rounded-full z-10 shadow-lg
                "
                style={{ backgroundColor: "#005A9C" }}
              ></div>

              <div className="hidden sm:block w-5/12"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;