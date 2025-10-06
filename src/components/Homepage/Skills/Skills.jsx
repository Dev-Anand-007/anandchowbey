import React from 'react';
import { motion } from 'framer-motion';
import { SkillsInfo } from '@/constants';
import Tilt from 'react-parallax-tilt';



export const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const categoryVariants = {
    hidden: { 
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.03,
        duration: 0.4,
        ease: "easeOut"
      }
    })
  };

 return (
    <section id="skills" className="py-4 px-[7vw] md:px-[2vw] lg:px-[4vw] font-sans mt-16 md:mt-24 lg:mt-32">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-white mb-2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            SKILLS
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '6rem' }}
            transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
            viewport={{ once: false, amount: 0.5 }}
            className="h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mx-auto mb-4"
          />
          <motion.p 
            className="text-gray-400 mt-4 text-md md:text-lg font-semibold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            A collection of my technical skills and expertise honed through various projects
          </motion.p>
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {SkillsInfo.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={categoryVariants}
              className="group"
            >
              <motion.div
                className="mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                viewport={{ once: false, amount: 0.5 }}
              >
                <h3 className="text-lg sm:text-xl font-semibold text-white inline-block relative">
                  {category.title}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: false, amount: 0.5 }}
                  />
                </h3>
              </motion.div>

              <Tilt
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                perspective={1000}
                scale={1.01}
                transitionSpeed={1000}
                gyroscope={true}
              >
                <motion.div
                  whileHover={{
                    boxShadow: "0 0 25px 1px rgba(139,92,246,0.25)",
                    borderColor: "rgba(139,92,246,0.5)"
                  }}
                  transition={{ duration: 0.3 }}
                  className="border border-purple-500/20 rounded-xl p-5 backdrop-blur-sm"
                >
                  <div className="grid grid-cols-3 md:flex md:flex-wrap gap-2 md:gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        custom={skillIndex}
                        variants={skillVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                        whileHover={{
                          scale: 1.08,
                          y: -3,
                          transition: { duration: 0.2 }
                        }}
                        className="flex flex-col md:flex-row items-center md:space-x-2 space-y-1 md:space-y-0 bg-purple-600/10 border border-purple-500/30 rounded-lg py-2 px-2 md:px-3 cursor-pointer hover:bg-purple-600/20 transition-colors duration-300"
                      >
                        <motion.img
                          src={skill.logo}
                          alt={skill.name}
                          className="w-7 h-7 md:w-6 md:h-6 lg:w-7 lg:h-7 object-contain flex-shrink-0"
                          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                          transition={{ duration: 0.5 }}
                        />
                        <span className="text-[10px] md:text-xs lg:text-sm text-gray-300 font-medium text-center md:whitespace-nowrap">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};