"use client";
import { motion } from "framer-motion";
import { FaMicrochip, FaCloud, FaRobot, FaDatabase } from "react-icons/fa";

// AI Technologies Data
const technologies = [
  {
    title: "Neural Networks",
    description: "Advanced deep learning models that power intelligent decision-making.",
    icon: <FaMicrochip />,
  },
  {
    title: "Cloud AI Computing",
    description: "Scalable AI models deployed on cloud infrastructure for real-time processing.",
    icon: <FaCloud />,
  },
  {
    title: "Autonomous AI Agents",
    description: "Self-learning AI systems that can perform tasks with minimal human intervention.",
    icon: <FaRobot />,
  },
  {
    title: "Big Data & AI Analytics",
    description: "Processing large datasets to extract insights and predict future trends.",
    icon: <FaDatabase />,
  },
];

export default function Technology() {
  return (
    <section id="technology" className="relative py-20 px-6 max-w-8xl mx-auto text-center">
      {/* Purple Blurred Background (Same as Features & Hero) */}
      <div className="absolute inset-0 "></div>

      {/* Section Title with Animations */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-red-400 to-gray-300"
      >
        AI-Powered Technologies
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="relative text-gray-200 mt-2"
      >
        Explore the core technologies driving artificial intelligence innovations.
      </motion.p>

      {/* Technology Grid with Animations */}
      <div className="relative mt-10 grid md:grid-cols-4 gap-6">
        {technologies.map((tech, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            className="p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/10 text-center transition-all duration-500 hover:scale-105 hover:bg-white/20 shadow-lg"
          >
            <div className="text-4xl text-purple-400">{tech.icon}</div>
            <h3 className="mt-4 text-xl font-semibold text-gray-100">
              {tech.title}
            </h3>
            <p className="mt-2 text-gray-300">{tech.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
