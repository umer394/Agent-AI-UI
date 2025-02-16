"use client";
import { motion } from "framer-motion";
import { FaRobot } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative h-screen py-20 md:py-20 flex flex-col justify-center items-center text-center px-6 pt-[80px] overflow-hidden">
      {/* Purple Blurred Background (Same as Features & Other Sections) */}
      <div className="absolute inset-0 "></div>

      {/* AI Power Badge - Pushed Down Below Navbar */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="relative px-4 py-2 my-10  lg:mb-10 md:mb-20 md:mt-32 lg:mt-20 bg-white/10 border border-white/20 rounded-full text-sm text-gray-300"
      >
        🤖 AI-Powered Innovation
      </motion.div>

      {/* Responsive Hero Title with Gradient Text */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-red-400 to-gray-300 max-w-3xl"
      >
        Revolutionizing the Future <br />
        With <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-red-400 to-white">
          AI Intelligence
        </span>
      </motion.h1>

      {/* AI Chat Input Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="relative mt-6 flex items-center space-x-3 p-4 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg w-full max-w-lg"
      >
        <FaRobot className="text-purple-400 text-2xl" />
        <input
          type="text"
          placeholder="Ask me anything about AI..."
          className="w-full bg-transparent outline-none text-gray-200 text-lg"
        />
      </motion.div>

      {/* CTA Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.8, duration: 1 }} 
        className="relative mt-6 flex space-x-4"
      >
        <button className=" px-4 md:px-8 py-3 rounded-lg shadow-lg flex items-center space-x-2 border border-white/20 bg-black hover:scale-105 transition-transform duration-300">
          <span className="bg-clip-text text-[12px] md:text-md text-transparent bg-gradient-to-r from-purple-400 via-red-400 to-gray-300 font-semibold">
            🚀 Deploy AI Agent
          </span>
        </button>
        <button className="px-4 md:px-8 py-3 rounded-lg shadow-lg flex items-center space-x-2 border border-white/20 bg-black hover:scale-105 transition-transform duration-300">
          <span className="bg-clip-text text-[12px] md:text-md text-transparent bg-gradient-to-r from-purple-400 via-red-400 to-gray-300 font-semibold">
            Watch AI in Action
          </span>
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
