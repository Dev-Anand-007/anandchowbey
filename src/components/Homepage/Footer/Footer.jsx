import React from "react";
import { FiMail, FiGithub, FiLinkedin, FiInstagram, FiYoutube } from "react-icons/fi";
import { FaThreads } from "react-icons/fa6";
import DotGrid from "@/elements/DotGrid";

export const Footer = () => {
  return (
    <footer className="relative py-12 px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* DotGrid Background */}
      <div className="absolute inset-0 z-0">
        <DotGrid
          dotSize={4}
          gap={15}
          baseColor="transparent"   // fallback color
          activeColor="#ffffff"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-white">
        {/* Left text */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Anand Chowbey. All rights reserved.
        </p>

        {/* Social icons */}
        <div className="flex gap-5 text-gray-400">
          <a href="mailto:anandchowbey99@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FiMail size={22} />
          </a>
          <a href="https://github.com/Dev-Anand-007" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FiGithub size={22} />
          </a>
          <a href="https://www.linkedin.com/in/anand-chowbey/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FiLinkedin size={22} />
          </a>
          <a href="https://www.instagram.com/developer.jii" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FiInstagram size={22} />
          </a>
          <a href="https://www.youtube.com/@Anandchowbey07" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FiYoutube size={22} />
          </a>
          <a href="https://www.threads.com/@developer.jii" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaThreads size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
};
