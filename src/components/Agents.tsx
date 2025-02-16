"use client";
import { motion } from "framer-motion";
import { FaRobot, FaUserSecret, FaBrain, FaCogs } from "react-icons/fa";

// AI Agents Data
const agents = [
  {
    title: "Autonomous AI Assistants",
    description: "AI-powered agents that can handle complex tasks with minimal human input.",
    icon: <FaRobot />,
  },
  {
    title: "Cybersecurity AI Agents",
    description: "Intelligent systems that detect and prevent cyber threats in real-time.",
    icon: <FaUserSecret />,
  },
  {
    title: "AI Decision Makers",
    description: "Advanced neural models that analyze data and provide real-time insights.",
    icon: <FaBrain />,
  },
  {
    title: "Automation Bots",
    description: "AI bots that automate repetitive processes, improving efficiency and accuracy.",
    icon: <FaCogs />,
  },
];

export default function Agents() {
  return (
    <section id="agents" className="relative py-20 px-6 max-w-8xl mx-auto text-center">
      {/* Purple Blurred Background (Same as Other Sections) */}
      <div className="absolute inset-0"></div>

      {/* Section Title with Animation */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-red-400 to-gray-300"
      >
        AI-Powered Agents
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="relative text-gray-200 mt-2"
      >
        Meet the next generation of intelligent AI agents transforming industries.
      </motion.p>

      {/* Agents Grid with Hover Effects */}
      <div className="relative mt-10 grid md:grid-cols-4 gap-6">
        {agents.map((agent, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.2)" }}
            transition={{ duration: 0.3 }}
            className="p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/10 text-center transition-all duration-500 hover:bg-white/20 shadow-lg"
          >
            {/* Icon with Hover Animation */}
            <motion.div
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ duration: 0.3 }}
              className="text-4xl text-purple-400 mx-auto"
            >
              {agent.icon}
            </motion.div>

            {/* Title with Text Animation */}
            <motion.h3
              whileHover={{ color: "#e11d48" }}
              transition={{ duration: 0.3 }}
              className="mt-4 text-xl font-semibold text-gray-100"
            >
              {agent.title}
            </motion.h3>

            {/* Description with Fade-in Effect */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="mt-2 text-gray-300"
            >
              {agent.description}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
