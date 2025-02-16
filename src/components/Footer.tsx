import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-10 px-6 bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6 text-left">
        {/* Brand Section */}
        <div>
          <h3 className="text-xl font-bold flex items-center">
            <span className="text-purple-400 text-2xl mr-2">🤖</span> Agentia World
          </h3>
          <p className="text-gray-400 mt-2">
            Next-generation AI agents powering the future of enterprise intelligence.
          </p>
          <div className="flex space-x-4 mt-4">
            <FaGithub className="text-2xl text-gray-300 hover:text-purple-400 cursor-pointer" />
            <FaLinkedin className="text-2xl text-gray-300 hover:text-purple-400 cursor-pointer" />
            <FaTwitter className="text-2xl text-gray-300 hover:text-purple-400 cursor-pointer" />
          </div>
        </div>

        {/* Product Links */}
        <div>
          <h4 className="font-bold">Product</h4>
          <ul className="mt-2 space-y-1 text-gray-400">
            <li className="hover:text-purple-400 cursor-pointer">Features</li>
            <li className="hover:text-purple-400 cursor-pointer">Pricing</li>
            <li className="hover:text-purple-400 cursor-pointer">Documentation</li>
            <li className="hover:text-purple-400 cursor-pointer">API</li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-bold">Company</h4>
          <ul className="mt-2 space-y-1 text-gray-400">
            <li className="hover:text-purple-400 cursor-pointer">About</li>
            <li className="hover:text-purple-400 cursor-pointer">Blog</li>
            <li className="hover:text-purple-400 cursor-pointer">Careers</li>
            <li className="hover:text-purple-400 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h4 className="font-bold">Legal</h4>
          <ul className="mt-2 space-y-1 text-gray-400">
            <li className="hover:text-purple-400 cursor-pointer">Privacy</li>
            <li className="hover:text-purple-400 cursor-pointer">Terms</li>
            <li className="hover:text-purple-400 cursor-pointer">Security</li>
            <li className="hover:text-purple-400 cursor-pointer">Compliance</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 text-sm mt-6 border-t border-white/10 pt-4">
        © 2025 Agentia World. Powered by Panaversity. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
