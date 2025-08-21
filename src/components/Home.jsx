// src/components/Home.jsx
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      
      {/* Left side - Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-shrink-0"
      >
        <img
          src="/img.jpg" // replace with your photo path
          alt="Profile"
          className="w-60 h-60 md:w-72 md:h-72 rounded-full shadow-lg object-cover border-4 border-white"
        />
      </motion.div>

      {/* Right side - Name + Roles */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-8 md:mt-0 md:ml-12 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-6xl font-bold">Neha Dhirendra Sirur</h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-300">
          Full Stack Web Developer | AI-ML Enthusiast | Budding Researcher
        </p>

        <div className="mt-6 flex justify-center md:justify-start gap-4">
          <a
            href="/about"
            className="px-6 py-2 rounded-2xl bg-white text-black font-medium hover:bg-gray-200 transition"
          >
            About Me
          </a>
          <a
            href="/projects"
            className="px-6 py-2 rounded-2xl border border-white font-medium hover:bg-gray-700 transition"
          >
            My Projects
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
 