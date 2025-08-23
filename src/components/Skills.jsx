// src/components/Skills.jsx
import {
  FaPython, FaJava, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaDatabase, FaBrain, FaLanguage, FaCogs, FaNetworkWired, FaServer,
  FaChartBar, FaLayerGroup, FaChess, FaUsers, FaComments, FaLightbulb,
  FaPuzzlePiece
} from "react-icons/fa";
import {
  SiC, SiCplusplus, SiMongodb, SiSpringboot, SiTensorflow,
  SiPytorch, SiOpencv, SiScikitlearn, SiNumpy, SiPandas, SiOpenai
} from "react-icons/si";

const technical = [
  { label: "C", icon: <SiC /> },
  { label: "C++", icon: <SiCplusplus /> },
  { label: "Java", icon: <FaJava /> },
  { label: "Python", icon: <FaPython /> },
  { label: "HTML", icon: <FaHtml5 /> },
  { label: "CSS", icon: <FaCss3Alt /> },
  { label: "JavaScript", icon: <FaJs /> },
  { label: "React", icon: <FaReact /> },
  { label: "Node.js", icon: <FaNodeJs /> },
  { label: "SQL", icon: <FaDatabase /> },
  { label: "MongoDB (NoSQL)", icon: <SiMongodb /> },
  { label: "Spring Boot", icon: <SiSpringboot /> },
  { label: "Object-Oriented Programming (OOP)", icon: <FaCogs /> },
  { label: "APIs", icon: <FaNetworkWired /> },
  { label: "Database Management", icon: <FaServer /> },
  { label: "Data Analytics & Visualization", icon: <FaChartBar /> },
  { label: "Machine Learning", icon: <FaBrain /> },
  { label: "Deep Learning (TensorFlow)", icon: <SiTensorflow /> },
  { label: "Deep Learning (PyTorch)", icon: <SiPytorch /> },
  { label: "Computer Vision (OpenCV)", icon: <SiOpencv /> },
  { label: "NLP", icon: <FaLanguage /> },
  { label: "Generative AI", icon: <SiOpenai /> },
  { label: "Multimodal Learning", icon: <FaLayerGroup /> },
  { label: "scikit-learn", icon: <SiScikitlearn /> },
  { label: "NumPy", icon: <SiNumpy /> },
  { label: "Pandas", icon: <SiPandas /> },
];

const nonTechnical = [
  { label: "Design Thinking", icon: <FaLightbulb /> },
  { label: "Teamwork", icon: <FaUsers /> },
  { label: "Communication", icon: <FaComments /> },
  { label: "Problem Solving", icon: <FaPuzzlePiece /> },
  { label: "Leadership", icon: <FaUsers /> },
  { label: "Chess", icon: <FaChess /> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        scroll-mt-24 pt-28 pb-20 px-6
        bg-gradient-to-b from-[#0E1F33] via-[#152A45] to-[#0B1627]
        text-white
      "
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Skills
        </h1>

        {/* Technical */}
        <h2 className="text-2xl font-semibold mb-6 text-blue-200 text-center">
          Technical Skills
        </h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technical.map((s) => (
            <li
              key={s.label}
              className="
                p-3 sm:p-4 rounded-2xl
                bg-white/5 backdrop-blur
                ring-1 ring-white/10 hover:ring-white/25
                hover:bg-white/10 transition
                shadow-sm hover:shadow-md
                flex flex-col items-center
              "
            >
              <div className="text-2xl md:text-3xl">{s.icon}</div>
              <span className="mt-2 text-xs md:text-sm text-center">{s.label}</span>
            </li>
          ))}
        </ul>

        {/* Non-Technical */}
        <h2 className="text-2xl font-semibold mt-12 mb-6 text-blue-200 text-center">
          Non-Technical Strengths
        </h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {nonTechnical.map((s) => (
            <li
              key={s.label}
              className="
                p-3 sm:p-4 rounded-2xl
                bg-white/5 backdrop-blur
                ring-1 ring-white/10 hover:ring-white/25
                hover:bg-white/10 transition
                shadow-sm hover:shadow-md
                flex flex-col items-center
              "
            >
              <div className="text-2xl md:text-3xl">{s.icon}</div>
              <span className="mt-2 text-xs md:text-sm text-center">{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
