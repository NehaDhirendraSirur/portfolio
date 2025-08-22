// src/components/Contact.jsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";

const messages = [
  "Got a project idea or research problem in mind? I’d love to brainstorm and collaborate.",
  "Always curious to connect with like-minded professionals, researchers, and developers. Let’s share ideas and grow together.",
  "My inbox is always open—whether for opportunities, feedback, or just a tech chat."
];

const Contact = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % messages.length);
    }, 4000); // rotate every 4s
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center text-white px-6 py-20"
      style={{ background: "linear-gradient(to bottom right, #0f172a, #1e293b)" }}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Let’s Connect
      </motion.h2>

      {/* Rotating messages */}
      <div className="h-24 flex items-center justify-center mb-10">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            className="text-lg md:text-xl text-center max-w-3xl px-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.6 }}
          >
            {messages[index]}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Social icons */}
      <motion.div
        className="flex gap-10 mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <motion.a
          href="https://www.linkedin.com/in/your-linkedin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          whileHover={{ scale: 1.12, rotate: 4 }}
          className="text-4xl text-white hover:text-blue-300 transition-colors"
        >
          <FaLinkedin />
        </motion.a>

        <motion.a
          href="https://github.com/your-github"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          whileHover={{ scale: 1.12, rotate: -4 }}
          className="text-4xl text-white hover:text-gray-300 transition-colors"
        >
          <FaGithub />
        </motion.a>

        <motion.a
          href="https://scholar.google.com/citations?user=your-id"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Google Scholar"
          whileHover={{ scale: 1.12 }}
          className="text-4xl text-white hover:text-yellow-300 transition-colors"
        >
          <SiGooglescholar />
        </motion.a>

        <motion.a
          href="mailto:xyz@gmail.com"
          aria-label="Email"
          whileHover={{ scale: 1.12, rotate: 2 }}
          className="text-4xl text-white hover:text-red-300 transition-colors"
        >
          <FaEnvelope />
        </motion.a>
      </motion.div>

      {/* Optional CTA button */}
      <motion.a
        href="mailto:sirurneha@gmail.com"
        className="mt-12 inline-block bg-white text-[#0f172a] px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-2xl transition"
        whileHover={{ scale: 1.03 }}
      >
        Drop me a message
      </motion.a>
    </section>
  );
};

export default Contact;
