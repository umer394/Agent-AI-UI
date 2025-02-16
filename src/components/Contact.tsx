"use client";
import { motion } from "framer-motion";


export default function Contact() {
  return (
    <section id="contact" className="relative py-20 px-6 max-w-8xl mx-auto text-center">
      {/* Purple Blurred Background */}
      <div className="absolute inset-0 "></div>

      {/* Section Title with Animation */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-red-400 to-gray-300"
      >
        Contact Us
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="relative text-gray-200 mt-2"
      >
        Get in touch with our AI experts.
      </motion.p>

      {/* Contact Form with Animations */}
      <motion.form
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="relative mt-10 p-6 bg-white/10 backdrop-blur-lg border border-white/10 rounded-xl max-w-3xl mx-auto shadow-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Your Name" className="p-3 bg-black border border-white/20 rounded-md text-white outline-none focus:ring-2 focus:ring-purple-400 transition" />
          <input type="email" placeholder="Your Email" className="p-3 bg-black border border-white/20 rounded-md text-white outline-none focus:ring-2 focus:ring-purple-400 transition" />
        </div>
        <textarea placeholder="Your Message" className="mt-4 p-3 w-full bg-black border border-white/20 rounded-md text-white outline-none focus:ring-2 focus:ring-purple-400 transition h-32"></textarea>

        {/* Submit Button with Hover Animation */}
        <motion.button
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(255, 0, 255, 0.5)" }}
          transition={{ duration: 0.3 }}
          className="mt-6 px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 transition text-white font-semibold"
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
}
