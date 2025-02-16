"use client";
import { motion } from "framer-motion";
import { FaRocket, FaBolt, FaInfinity } from "react-icons/fa";

// Pricing Plans
const plans = [
  {
    title: "Starter",
    price: "$29/month",
    features: ["Basic AI Features", "Up to 5 AI Agents", "Standard Support"],
    icon: <FaRocket />,
  },
  {
    title: "Pro",
    price: "$99/month",
    features: ["Advanced AI Capabilities", "Up to 20 AI Agents", "Priority Support"],
    icon: <FaBolt />,
  },
  {
    title: "Enterprise",
    price: "Custom Pricing",
    features: ["Unlimited AI Agents", "Full AI Suite", "24/7 Dedicated Support"],
    icon: <FaInfinity />,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 px-6 max-w-8xl mx-auto text-center">
      {/* Purple Blurred Background */}
      <div className="absolute inset-0"></div>

      {/* Section Title with Animation */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-red-400 to-gray-300"
      >
        AI Pricing Plans
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="relative text-gray-200 mt-2"
      >
        Choose a plan that fits your AI-powered needs.
      </motion.p>

      {/* Pricing Cards with Hover Effects */}
      <div className="relative mt-10 grid md:grid-cols-3 gap-6">
        {plans.map((plan, i) => (
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
              {plan.icon}
            </motion.div>

            {/* Plan Title & Price */}
            <h3 className="mt-4 text-2xl font-semibold text-gray-100">{plan.title}</h3>
            <p className="text-lg text-red-400 font-bold mt-2">{plan.price}</p>

            {/* Features List */}
            <ul className="mt-4 text-gray-300 space-y-2">
              {plan.features.map((feature, j) => (
                <li key={j} className="flex justify-center items-center">
                  ✅ {feature}
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <button className="mt-6 px-6 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition text-white font-semibold">
              Get Started
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
