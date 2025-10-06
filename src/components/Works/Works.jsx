import React from "react";
import { projects } from "../../constants";
import { useState } from "react";
import {  easeInOut, motion } from "framer-motion";


export const Works = () => {
      const [selectedProject, setSelectedProject] = useState(null);
    
      const handleOpenModal = (project) => {
        setSelectedProject(project);
      };
    
      const handleClsoeModal = () => {
        setSelectedProject(null);
      };
  return (
    <section
      id="contact"
      className="py-4 px-[7vw] md:px-[2vw] lg:px-[4vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >

        {/* Section title  */}
              <motion.div
              initial={{opacity:0,y:-20}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:false, amount:0.5}}
              transition={{duration:0.6,ease:easeInOut}}
              className="text-center mb-16">
                <motion.h2
                initial={{opacity:0,scale:0.9}}
                whileInView={{opacity:1,scale:1}}
                viewport={{once:false, amount:0.5}}
                transition={{duration:0.6,ease:easeInOut}}
                
                className="text-4xl font-bold text-white">PROJECTS</motion.h2>
                <motion.div
                initial={{width:0}}
                whileInView={{width:'10rem'}}
                viewport={{once:false,amount:0.5}}
                transition={{duration:0.5,ease:easeInOut}}
                 className="w-32 h-1 bg-gradient-to-r from-blue-400 via-purpel-500 to-pink-500 mx-auto mt-4"></motion.div>
                <motion.p
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:0.5,delay:0.5}}
                viewport={{once:false,amount:0.5}}
                className="text-gray-400 mt-4  text-lg font-semibold">
                  A showcase of the proejcts I have worked on, highlighting my skills
                  and experience in various technologies
                </motion.p>
              </motion.div>
        
              {/* Project Grid  */}
        
              <motion.div
              initial={{opacity:0,y:-20}}
              animate={{opacity:1,y:0}}
              transition={{duration:0.5}}
              viewport={{once:true,amount:0.5}}
              className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => handleOpenModal(project)}
                    className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50
                    hover:-translate-y-2 transition-transform duration-300"
                  >
                    <div className="p-4">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover rounded-xl"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-500 mb-4 pt-4 line-clamp-3">
                        {project.description}
                      </p>
                      <div className="mb-4">
                        {project.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="mb-4 flex justify-between">
                        
                          <motion.span
                          whileHover={{scale:1.2}}
                          className=" border px-4 md:px-10 rounded-md py-2 bg-blue-200">
                              {project.category}
                          </motion.span>
                          <motion.span
                           whileHover={{scale:1.2}}
                           
                            className=" border px-4 md:px-10 rounded-md py-2 bg-blue-200">
                              {project.techStack}
                          </motion.span>
                        
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
        
              {/* Modal Container  */}
        
              {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4 overflow-y-auto"
                onClick={handleClsoeModal}>
                  <div className="bg-gray-900 rounded-xl shadow-2xl lg:w-[50%] w-[70%] max-w-3xl max-h-[90vh] overflow-y-auto relative no-scrollbar"
                    onClick={(e) => e.stopPropagation()}>
                    <div className="flex justify-end p-4">
                      <button
                        onClick={handleClsoeModal}
                        className="text-white text-3xl font-bold hover:text-purple-500"
                      >
                        &times;
                      </button>
                    </div>
                    <div className="flex flex-col">
                      <div className="w-full flex justify-center bg-gray-900 px-2">
                        <img
                          src={selectedProject.image}
                          alt={selectedProject.title}
                          className="lg:w-full w-[95%] object-contain rounded-xl shadow-2xl"
                        />
                      </div><div className="lg:p-5 p-6">
                        <h3 className="lg:text-2xl font-bold text-white mb-4 text-md">
                          {selectedProject.title}
                        </h3>
                        <p className="text-gray-400 mb-6 lg:text- lg:text-xs text-xs">
                          {selectedProject.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {selectedProject.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex justify-between expanded gap-4">
                          <a
                            href={selectedProject.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-400 lg:px-4 lg:py-2 px-2 py-1 rounded-xl lg:text-lg text-sm font-semibold text-center "
                          >
                            View Code
                          </a>
                          <a
                            href={selectedProject.webapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-1/2 bg-purple-600 hover:bg-purple-800 text-white lg:px-4 lg:py-2 px-2 py-1 rounded-xl lg:text-lg text-sm font-semibold text-center "
                          >
                            View Live
                          </a>
                        </div>
                      </div>
                      
        
                    </div>
                  </div>
                </div>
              )}
    </section>
  );
};
