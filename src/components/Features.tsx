"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaBrain, FaCommentDots, FaCode, FaShieldAlt } from "react-icons/fa";
import { Bar } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register Chart.js components
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const features = [
  {
    title: "Autonomous Learning",
    description: "Self-evolving neural networks that continuously adapt to your business needs through reinforcement learning.",
    icon: <FaBrain />,
  },
  {
    title: "Multi-Modal Intelligence",
    description: "AI agents capable of processing text, voice, and visual data for deeper understanding.",
    icon: <FaCommentDots />,
  },
  {
    title: "Cognitive Integration",
    description: "Seamless AI integration with existing systems using advanced APIs.",
    icon: <FaCode />,
  },
  {
    title: "Ethical AI Framework",
    description: "Built-in guidelines ensuring secure and responsible AI deployment.",
    icon: <FaShieldAlt />,
  },
];

const Features = () => {
  const [animate, setAnimate] = useState(false);
  const [selectedFeatures, setSelectedFeatures] = useState<number[]>([]);

  useEffect(() => {
    setAnimate(true);
  }, []);

  // Graph Data
  const data = {
    labels: ["Autonomous AI", "Multi-Modal AI", "Integration", "Security"],
    datasets: [
      {
        label: "Efficiency Score",
        data: [85, 75, 90, 80],
        backgroundColor: ["#8B5CF6", "#E11D48", "#6D28D9", "#9333EA"],
        borderRadius: 8,
      },
    ],
  };

  // Handle Checkbox Selection
  const handleCheckboxChange = (index: number) => {
    setSelectedFeatures((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="features" className="relative py-20 px-6 max-w-8xl mx-auto text-center overflow-hidden">
      {/* Purple Blurred Background (No Changes) */}
      <div className="absolute inset-0 "></div>

      {/* Section Title with Improved Readability */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-red-400 to-gray-200 relative z-10"
      >
        AI-Driven Capabilities
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-gray-200 mt-2 relative z-10"
      >
        Unlock the future with cutting-edge artificial intelligence
      </motion.p>

      {/* Features Grid */}
      <div className="mt-10 grid md:grid-cols-4 gap-6 relative z-10">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            className="p-6 rounded-xl bg-gradient-to-br from-purple-800/20 via-red-500/10 to-black/30 backdrop-blur-lg border border-white/10 text-center transition-all duration-500 hover:scale-105 hover:bg-white/10 shadow-lg"
          >
            <div className="text-4xl text-purple-400">{feature.icon}</div>
            <h3 className="mt-4 text-xl font-semibold text-gray-100">
              {feature.title}
            </h3>
            <p className="mt-2 text-gray-300">{feature.description}</p>

            {/* Feature Selection Checkbox */}
            <label className="absolute top-4 right-4">
              <input
                type="checkbox"
                className="w-5 h-5 accent-purple-500"
                checked={selectedFeatures.includes(i)}
                onChange={() => handleCheckboxChange(i)}
              />
            </label>
          </motion.div>
        ))}
      </div>

      {/* Graph Section with Updated Text Colors */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-12 p-6 bg-gradient-to-br from-purple-700/20 via-red-500/10 to-black/30 backdrop-blur-lg border border-white/10 rounded-lg shadow-lg relative z-10"
      >
        <h3 className="text-2xl font-semibold text-gray-100">
          AI Performance Metrics
        </h3>
        <p className="text-gray-300 mt-2">Analyzing different AI capabilities</p>
        <div className="mt-6">
          <Bar data={data} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      </motion.div>
    </section>
  );
};

export default Features;
