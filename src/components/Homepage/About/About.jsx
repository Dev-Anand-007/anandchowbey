import React from 'react'
import { Link } from 'react-router-dom';
import TypewriterComponent from 'typewriter-effect';
import profileImage from '../../../assets/profile2.png';
import Tilt from 'react-parallax-tilt';
import DotGrid from '../../../elements/DotGrid';
import { motion } from 'framer-motion';


export const About = () => {
    return (<>

        <section id='about'
            className='py-4 px-[7vw] md:px-[2vw] lg:px-[4vw] font-sans mt-16 md:mt-24 lg:mt-32'>


            <div className='flex flex-col-reverse md:flex-row justify-between items-center'>

                <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
                    <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight'>
                        Hi, I am
                    </h1>
                    <h2 className='text-xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight whitespace-nowrap '>
                        Anand Chowbey
                    </h2>
                    <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight '>
                        <span className='text-white '>
                            I am a{' '}
                        </span>



                        <TypewriterComponent
                            options={{
                                strings: [
                                    'Flutter Developer',
                                    'Full Stack Enthusiast',
                                    'Freelance App & Web Developer',
                                    'Tech Creator',
                                    
                                ],
                                autoStart: true,
                                loop: true,
                                typeSpeed: 100,
                                deleteSpeed: 50,
                                delaySpeed: 2000,
                                cursor: '|',
                                wrapperClassName: 'text-blue-400',
                                cursorClassName: 'text-blue-400',
                            }}
                        />


                    </h3>
                    {/* About Me Paragraph */}
                    <p className="text-base sm:text-lg md:text-lg text-justify text-gray-400 mb-4 px-4 md:px-0 lg:-0 mt-8 leading-relaxed">
                        Flutter Developer with 2 years of experience building scalable and high-performance mobile and web apps. Proficient in the complete full-stack development cycle using Flutter, MERN, and Firebase. Skilled in crafting smooth UI experiences, integrating RESTful APIs, and maintaining clean, efficient code. Available for freelance projects — let’s connect and bring your ideas to life!
                    </p>

                    {/* <a
            href="https://drive.google.com/file/d/1zs1Na8XuF3kof0j_DHrARU_T8Zf6BpNE/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-md font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>*/}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-row gap-4 justify-center lg:justify-start"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(96, 165, 250, 0.5)" }}
                            whileTap={{ scale: 0.95 }}
                            className="text-sm md:text-md bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-8 rounded-full font-bold"
                        >
                            View Resume
                        </motion.button>
                        <Link to={'/contact'}>
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(96, 165, 250, 0.5)" }}
                                whileTap={{ scale: 0.95 }}
                                className="text-sm md:text-md bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-8 rounded-full font-bold"
                            >
                                Get in Touch
                            </motion.button>
                        </Link>
                    </motion.div>




                </div>
                {/* Right Side  */}

                <div className='md:w-1/2 flex  justify-center md:justify-center '>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        className="w-full lg:w-1/2 flex justify-center"
                    >
                        <div className="w-64 h-80 md:w-80 md:h-96 border-4 border-blue-500 rounded-lg overflow-hidden shadow-lg shadow-blue-500/50">
                            <img
                                src={profileImage}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                </div>

            </div>

        </section>
    </>
    )
}
