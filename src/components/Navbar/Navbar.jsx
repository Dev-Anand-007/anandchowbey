import React, { useEffect, useState } from "react";
import { FiGift, FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: "", label: "Home" },
    { id: "about", label: "About" },
    { id: "work", label: "Work" },
    { id: "services", label: "Services" },
    { id: "blogs", label: "Blogs" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavigate = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // close mobile menu
  };
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition duration-300 px-4 md:px-8 border-b border-white/10
      ${isScrolled
          ? "bg-[#0a1a40]/70  backdrop-blur-lg shadow-md"
          : "bg-transparent"
        }`}
    >
      <div className="text-white py-5 flex justify-between items-center max-w-7xl mx-auto">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-lg font-semibold cursor-pointer"
        >
          <span className="text-blue-400">&lt;</span>
          <Link to={'/'}>
          <span className="text-white hover:text-blue-400 transition-colors">
            {" "}
            Anand{" "}
          </span>
          </Link>
          <span className="text-blue-400">/</span>
          <Link to={'/'}>
          <span className="text-white hover:text-blue-400 transition-colors">
            {" "}
            Chowbey{" "}
          </span>
          </Link>
          <span className="text-blue-400">&gt;</span>
        </motion.div>

        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8 text-gray-300">
            {menuItems.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, color: "#60a5fa" }}
                onClick={() => navigate("/" + item.id)}
                className="cursor-pointer"
              >
                {item.label}
              </motion.li>
            ))}
          </ul>
          <motion.a
            whileHover={{ scale: 1.2, rotate: 5 }}
            href="https://github.com/Dev-Anand-007"
            className="text-gray-300 hover:text-blue-400"
          >
            <FaGithub size={24} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, rotate: -5 }}
            href="https://www.linkedin.com/in/anand-chowbey/"
            className="text-gray-300 hover:text-blue-400"
          >
            <FaLinkedin size={24} />
          </motion.a>
        </div>

        <div className="md:hidden">
          <motion.div whileTap={{ scale: 0.9 }}>
            {isOpen ? (
              <FiX
                className="text-3xl text-blue-400 cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            ) : (
              <FiMenu
                className="text-3xl text-blue-400 cursor-pointer"
                onClick={() => setIsOpen(true)}
              />
            )}
          </motion.div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={`md:hidden absolute top-16 left-1/2 transform -translate-x-1/2 w-11/12 z-50 rounded-lg shadow-lg
            ${isScrolled?"bg-[#0a1a40]  ":"bg-[#0a1a40]/70 backdrop-blur-lg bg-opacity-100"}
            
            `}
        >
          <ul className="flex flex-col items-center space-y-4 py-6 text-gray-300">
            {menuItems.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => {
                  setIsOpen(false),
                  navigate("/" + item.id)}}
                className="cursor-pointer hover:text-blue-400"
              >
                {item.label}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};
