"use client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../../ui/text-reveal-card";
import { MovingBorderDemo } from "../../ui/moving-border";
import { Link } from "react-router-dom";
import { socialMedia } from "../../../constants";
import MagicButton from "../../ui/magic-button";
import { IoCopyOutline, IoCheckmarkOutline } from "react-icons/io5";
import animationData from "../../../elements/confetti.json";
import Lottie from "react-lottie";
import { motion } from "framer-motion";

export const Connect = () => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,

    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "anandchowbey99@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
    hover: {
      x: 5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <section className="flex flex-col  py-4 px-[7vw] md:px-[2vw] lg:px-[4vw] gap-4 items-center mt-16 md:mt-24 lg:mt-32 justify-center w-full text-white">
      <h2 className="font-bold md:text-5xl text-3xl ">
        Need a <span className={`text-blue-400`}>Developer ?</span>{" "}
        {/* or a{" "}
        <span className={`text-blue-400`}>
          Designer?
        </span> */}
      </h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
        viewport={{ once: false, amount: 0.5 }}
        className="h-1 max-w-xs mx-auto bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 rounded-full"
      />
        {/* Animated divider */}
      

      {/* Contact Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-6xl mt-8"
      >
        {/* Email Card */}
        <motion.div
          variants={cardVariants}
          className="relative overflow-hidden border-2 border-gray-700 rounded-2xl p-8 bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl hover:shadow-blue-500/20 transition-shadow duration-300"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Shoot me an email
            </h3>
            <p className="text-gray-400 mb-6 text-sm break-all">anandchowbey99@gmail.com</p>
          </motion.div>

          <motion.button
            onClick={handleCopy}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative w-full px-6 py-3 bg-[#161A31] hover:bg-[#1a1f3a] text-white rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-3 shadow-lg overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative z-10 flex items-center gap-3">
              {copied ? (
                <>
                  <IoCheckmarkOutline className="text-xl text-green-400" />
                  Email is Copied!
                </>
              ) : (
                <>
                  <IoCopyOutline className="text-xl" />
                  Copy my email address
                </>
              )}
            </span>
          </motion.button>

          {/* Confetti effect */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={copied ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'backOut' }}
            className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full p-3 shadow-lg"
          >
            <IoCheckmarkOutline className="text-2xl" />
          </motion.div>

          {/* Decorative elements */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
        </motion.div>

        {/* Socials Card */}
        <motion.div
          variants={cardVariants}
          className="border-2 border-gray-700 rounded-2xl p-8 bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl hover:shadow-purple-500/20 transition-shadow duration-300 relative overflow-hidden"
        >
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-2xl font-semibold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
          >
            Connect With Me On Socials
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {socialMedia.map((item, index) => (
              <motion.a
                key={index}
                custom={index}
                variants={linkVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: false, amount: 0.5 }}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-4 py-3 rounded-lg bg-gray-800/50 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300 overflow-hidden border border-gray-700 hover:border-transparent"
              >
                <span className="relative z-10 text-gray-300 group-hover:text-white transition-colors duration-300 font-medium text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-500 group-hover:bg-white transition-colors" />
                  {item.name}
                </span>
              </motion.a>
            ))}
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
        </motion.div>
      </motion.div>

      <div className="flex justify-center px-4">
        <TextRevealCard
          text="You know the business"
          revealText="I know the chemistry."
          className="w-full max-w-md sm:max-w-lg lg:max-w-2xl"
        >
          <TextRevealCardTitle>
            Sometimes, you just need to see it.
          </TextRevealCardTitle>
          <TextRevealCardDescription>
            Hover to see it; maybe you&apos;d like to connect with me for your
            next project!
          </TextRevealCardDescription>
        </TextRevealCard>
      </div>

      <Link
        to="/contact"
        // onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <MovingBorderDemo>Get a Quote</MovingBorderDemo>
      </Link>
    </section>
  );
};
