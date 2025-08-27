// src/components/Projects.jsx
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "An Improved Explainable AI Model for Plant Disease Detection",
    description:
      "This project explores the integration of Explainable Artificial Intelligence (XAI) and Federated Learning to enhance the transparency, privacy, and accuracy of plant disease detection models.",
    tech: ["Python", "Pytorch", "Federated Learning framework (FedAvg)", "XAI Libraries: LIME", "Matplotlib for visualization"],
    github: "https://github.com/NehaDhirendraSirur/XAI_with_Federated_Learning",
  },
  {
    title: "Multimodal Learning Research",
    description:
      "Implemented joint image-text representation learning for classification and retrieval tasks.",
    tech: ["Python", "TensorFlow", "PyTorch"],
    github: "https://github.com/yourusername/multimodal-research",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio showcasing projects, certificates, and experiences with smooth UI/UX.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/NehaDhirendraSirur/Multilingual_Text_Classification",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio showcasing projects, certificates, and experiences with smooth UI/UX.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/NehaDhirendraSirur/NFLBowl_BigData",
  },
];

export default function Projects() {
  return (
    <div className="bg-[#0a192f] text-white min-h-screen px-6 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-[#1A2B42] rounded-2xl shadow-lg p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-gray-300 mb-4">{proj.description}</p>
              <p className="text-sm text-gray-400 mb-4">
                <span className="font-semibold">Tech Stack: </span>
                {proj.tech.join(", ")}
              </p>
            </div>
            <div className="mt-4 flex justify-end">
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
