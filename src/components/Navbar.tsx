"use client";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50  bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold flex items-center space-x-2">
          <span className="text-purple-400 text-xl ">🤖</span>
          <span className="text-sm md:text-lg">Agentia World</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex md:text-sm space-x-6">
          {["Features", "Technology", "Agents", "Pricing", "Contact"].map((item) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase()}`}
                className="hover:text-purple-400 transition duration-300"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button className="px-3 md:px-8 py-3 hidden rounded-lg shadow-lg md:flex items-center  border border-white/20 bg-black hover:scale-105 transition-transform duration-300">
          <span className="bg-clip-text text-[12px] md:text-md text-transparent bg-gradient-to-r from-purple-400 via-red-400 to-gray-300 font-semibold">
            Launch Console
          </span>
        </button>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md text-white absolute w-full top-full left-0 p-6">
          <ul className="space-y-4 text-center">
            {["Features", "Technology", "Agents", "Pricing", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="block hover:text-purple-400 transition duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-center">
          <button className="px-8 py-3 rounded-lg shadow-lg flex items-center space-x-2 border border-white/20 bg-black hover:scale-105 transition-transform duration-300">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-red-400 to-gray-300 font-semibold">
            Launch Console
          </span>
        </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
