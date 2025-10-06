import React from 'react'
import { easeInOut, motion } from 'framer-motion';
import profileImage from '../../../assets/profile2.png';
import { FaInstagram, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { MovingBorderDemo } from '@/components/ui/moving-border';
import { Link } from 'react-router-dom';
import { FiTwitter } from 'react-icons/fi';

export const Aboutme = () => {
    const socialLinks = [
        { name: 'Instagram', icon: FaInstagram, url: '#', color: 'hover:text-pink-500' },
        { name: 'LinkedIn', icon: '💼', url: '#', color: 'hover:text-blue-500' },
        { name: 'GitHub', icon: '⚡', url: '#', color: 'hover:text-purple-500' },
        { name: 'Thread', icon: '🧵', url: '#', color: 'hover:text-gray-400' },
        { name: 'YouTube', icon: '▶️', url: '#', color: 'hover:text-red-500' },
    ];

    const education = [
        { level: 'Techno Main Salt lake', institution: 'Masters of Computer Application | PG', year: '2023-2025', grade: '8.8 CGPA' },
        { level: 'St. Xavier College, Burdwan', institution: "Bachelor's of Computer Application | UG", year: '2020-2023', grade: '85%' },
        { level: 'Class 12th | PCM', institution: 'Kendriya Vidyalaya Burdwan', year: '2019-2020', grade: '83%' },
        { level: 'Class 10th', institution: 'Kendriya Vidyalaya Burdwan', year: '2018-2019', grade: '81%' },
    ];

    const habits = [
        'Daily Coding',
        'Working on Freelance & Self Projects',
        'Morning Workouts'
    ];

    const achievements = [
        'Excellent Performer in Education',
        'Video Editing',
        'Social Media Management',
        'Tech Creator'
    ];


    return (
        <section id='about' className='min-h-screen py-8 px-4 md:px-8 lg:px-16 font-sans mt-16 md:mt-20'>
            <div className='max-w-7xl mx-auto'>
                <div className='grid md:grid-cols-5 gap-8 lg:gap-12'>

                    {/* Left Column - Photo & Social */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className='md:col-span-2 flex flex-col items-center md:items-start space-y-6'
                    >
                        {/* Profile Image */}
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            className="relative w-full max-w-sm"
                        >
                            <div className="aspect-[3/4] w-full rounded-2xl overflow-hidden border-2 border-blue-500/30 shadow-2xl shadow-blue-500/20">
                                <img
                                    src={profileImage}
                                    alt="Anand Chowbey"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-4 shadow-lg">
                                <span className="text-2xl">👨‍💻</span>
                            </div>
                        </motion.div>

                        {/* Meet Anand */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-center md:text-left w-full"
                        >
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                                Meet <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Anand</span>
                            </h3>

                            {/* Social Icons */}
                            <div className="flex gap-4 justify-center md:justify-start flex-wrap">
                                <motion.a
                                    href="https://github.com/Dev-Anand-007"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="text-3xl text-gray-300 hover:text-blue-400 transition-colors"
                                    title="GitHub"
                                >
                                    <FaGithub size={40} />
                                </motion.a>

                                <motion.a
                                    href="https://www.linkedin.com/in/anand-chowbey/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 }}
                                    whileHover={{ scale: 1.2, rotate: -5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="text-3xl text-gray-300 hover:text-blue-400 transition-colors"
                                    title="LinkedIn"
                                >
                                    <FaLinkedin size={40} />
                                </motion.a>

                                <motion.a
                                    href="https://www.instagram.com/developer.jii"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 }}
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="text-3xl text-gray-300 hover:text-pink-500 transition-colors"
                                    title="Instagram"
                                >
                                    <FaInstagram size={40} />
                                </motion.a>

                                <motion.a
                                    href="https://www.youtube.com/@Anandchowbey07"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.6 }}
                                    whileHover={{ scale: 1.2, rotate: -5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="text-3xl text-gray-300 hover:text-sky-400 transition-colors"
                                    title="Twitter"
                                >
                                    <FaYoutube size={40} />
                                </motion.a>
                            </div>

                        </motion.div>
                    </motion.div>

                    {/* Right Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className='md:col-span-3 space-y-8'
                    >
                        {/* Hero Tagline */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                                A big fan of building{' '}
                                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                    products
                                </span>
                                , design, coffee and life.
                            </h1>
                        </motion.div>

                        {/* About Me */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 backdrop-blur-sm border border-gray-700/50"
                        >
                            <h2 className="text-2xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                                <span>📖</span> About Me
                            </h2>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                Flutter Developer with 2 years of experience delivering scalable and high-quality mobile and web applications. Skilled in full-stack development using Flutter, MERN, and Firebase, with strong expertise in RESTful API integration and modern UI design. Passionate about crafting seamless user experiences and clean, maintainable code. Available for freelance projects — let’s collaborate to bring your ideas to life!
                            </p>
                        </motion.div>

                        {/* Education */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, ease: easeInOut }}
                            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 backdrop-blur-sm border border-gray-700/50"
                        >
                            <h2 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-2">
                                <span>🎓</span> Education
                            </h2>
                            <div className="space-y-4">
                                {education.map((edu, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: false }}
                                        transition={{ duration: 0.25, ease: easeInOut }}
                                        whileHover={{ x: 10 }}
                                        className="border-l-4 border-blue-500 pl-4 py-2 hover:bg-gray-800/30 rounded-r-lg transition-all"
                                    >
                                        <h3 className="text-white font-semibold text-lg">{edu.institution}</h3>
                                        <p className="text-gray-400">{edu.level}</p>
                                        <div className="flex justify-between items-center mt-1">
                                            <span className="text-gray-500 text-sm">{edu.year}</span>
                                            <span className="text-blue-400 font-semibold">{edu.grade}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Horizontal Divider */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.25, ease: easeInOut }}
                            className="h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                        />

                        {/* Habits & Achievements Grid */}
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Habits */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                                className="bg-gradient-to-br from-green-900/20 to-green-800/10 rounded-2xl p-6 backdrop-blur-sm border border-green-700/30"
                            >
                                <h2 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                                    <span>🌱</span> Daily Habits
                                </h2>
                                <ul className="space-y-3">
                                    {habits.map((habit, index) => (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.7 + index * 0.1 }}
                                            whileHover={{ x: 5 }}
                                            className="text-gray-300 flex items-center gap-2 cursor-default"
                                        >
                                            <span className="text-green-400">✓</span> {habit}
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Achievements */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                                className="bg-gradient-to-br from-yellow-900/20 to-yellow-800/10 rounded-2xl p-6 backdrop-blur-sm border border-yellow-700/30"
                            >
                                <h2 className="text-xl font-bold text-yellow-400 mb-4 flex items-center gap-2">
                                    <span>🏆</span> Achievements
                                </h2>
                                <ul className="space-y-3">
                                    {achievements.map((achievement, index) => (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.7 + index * 0.1 }}
                                            whileHover={{ x: 5 }}
                                            className="text-gray-300 flex items-center gap-2 cursor-default"
                                        >
                                            <span className="text-yellow-400">★</span> {achievement}
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 }}
                            className="flex flex-col sm:flex-row gap-4 pt-4"
                        >
                            <Link
                                to="/contact"
                            // onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            >
                                <MovingBorderDemo>View Resume </MovingBorderDemo>
                            </Link>
                             <Link
                                to="/contact"
                            // onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            >
                                <MovingBorderDemo>Get in Touch</MovingBorderDemo>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}