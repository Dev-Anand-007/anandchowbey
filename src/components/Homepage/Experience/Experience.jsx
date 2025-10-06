import React from "react";
import { motion } from 'framer-motion';
import { experiences } from "@/constants";

export const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.3
      }
    })
  };

  return (
    <section
      id="experience"
      className="py-4 px-[7vw] md:px-[2vw] lg:px-[4vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <motion.h2 
          className="text-4xl text-white font-bold"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          EXPERIENCE
        </motion.h2>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: '12rem' }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
          viewport={{ once: false, amount: 0.5 }}
          className="h-1 mt-2 mx-auto bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
        />
        <motion.p 
          className="text-gray-400 mt-4 text-md md:text-lg font-semibold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          A Collection of my work experience and the roles I have taken in various organizations
        </motion.p>
      </motion.div>

      <motion.div 
        className="max-w-4xl mx-auto space-y-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 0 30px 1px rgba(139,92,246,0.3)",
              transition: { duration: 0.3 }
            }}
            className="border border-purple-500/30 rounded-xl p-6 backdrop-blur-sm"
          >
            {/* Header with Company Info */}
            <div className="flex items-start gap-4 mb-4">
              <motion.div 
                className="w-14 h-14 flex-shrink-0 rounded-lg overflow-hidden border border-purple-500/30"
                whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={experience.img}
                  alt={experience.company}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <motion.h3 
                    className="text-xl font-semibold text-white"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    viewport={{ once: false, amount: 0.5 }}
                  >
                    {experience.role}
                  </motion.h3>
                  <motion.span 
                    className="text-sm text-purple-400 font-medium"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    viewport={{ once: false, amount: 0.5 }}
                  >
                    {experience.date}
                  </motion.span>
                </div>
                <motion.h4 
                  className="text-sm text-gray-400"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.25, duration: 0.4 }}
                  viewport={{ once: false, amount: 0.5 }}
                >
                  {experience.company}
                </motion.h4>
              </div>
            </div>

            {/* Description */}
            <motion.p 
              className="text-gray-400 text-sm leading-relaxed mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              {experience.desc}
            </motion.p>

            {/* Skills */}
            <motion.div 
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              {experience.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skillIndex}
                  custom={skillIndex}
                  variants={skillVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.5 }}
                  whileHover={{ 
                    scale: 1.1,
                    y: -3,
                    transition: { duration: 0.2 }
                  }}
                  className="bg-purple-600/20 text-purple-300 px-3 py-1 text-xs rounded-full border border-purple-500/30 cursor-pointer"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};