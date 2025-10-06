import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Users, Send, ArrowRight } from "lucide-react";
import 'react-toastify/dist/ReactToastify.css';


import { toast, ToastContainer } from "react-toastify";
import emailjs from "@emailjs/browser";
import { emailConfig } from "../../../config";


export const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    budget: "",
    company: "",
    message: ""
  });

  const [isSent, SetIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      emailConfig.serviceId,
      emailConfig.templateId,
      formData,
      emailConfig.publicKey,
    ).then(() => {
      SetIsSent(true);
      setFormData({
        name: "",
        email: "",
        location: "",
        budget: "",
        company: "",
        message: ""
      });
      toast.success("Message Sent Successfully!");

    },(error)=>{
      toast.error("Error Sending Message!")
      toast.error("Try Again !")
    })

  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const linkVariants = {
    rest: { x: 0 },
    hover: { x: 5, transition: { duration: 0.3 } }
  };

  return (
    <section
      id="contact"
      className="py-4 px-[7vw] md:px-[2vw] lg:px-[4vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      {/* 👇 Required for toasts to appear */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        theme="dark"
      />
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
          initial="hidden"
          animate="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Left Section - Form */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-4">
              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                variants={itemVariants}
              >
                Let's Transform Your{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Idea Into Project
                </span>
              </motion.h2>
            </div>

            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              variants={containerVariants}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={itemVariants}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 focus:bg-white/10 transition-all shadow-lg shadow-black/20"
                    required
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 focus:bg-white/10 transition-all shadow-lg shadow-black/20"
                    required
                  />
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={itemVariants}>
                  <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 focus:bg-white/10 transition-all shadow-lg shadow-black/20"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <input
                    type="text"
                    name="budget"
                    placeholder="Budget (You have in you mind)"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 focus:bg-white/10 transition-all shadow-lg shadow-black/20"
                  />
                </motion.div>
              </div>

              <motion.div variants={itemVariants}>
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 focus:bg-white/10 transition-all shadow-lg shadow-black/20"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 focus:bg-white/10 transition-all resize-none shadow-lg shadow-black/20"
                  required
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-xl shadow-blue-500/30 flex items-center justify-center gap-2 group hover:shadow-2xl hover:shadow-cyan-500/40"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.form>
          </motion.div>

          {/* Right Section - Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8 lg:pl-8">
            <div className="space-y-6">
              <motion.h3
                className="text-3xl font-bold text-white"
                variants={itemVariants}
              >
                Get in Touch
              </motion.h3>

              <motion.div
                className="space-y-4"
                variants={containerVariants}
              >
                <motion.div
                  className="flex items-start gap-4 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-cyan-400/30 transition-all shadow-lg shadow-black/20"
                  variants={itemVariants}
                  whileHover="hover"
                  initial="rest"
                >
                  <Mail className="w-6 h-6 text-cyan-400 mt-1" />
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email Me</p>
                    <a
                      href="mailto:anandchowbey99@gmail.com"
                      className="text-lg font-medium text-white hover:text-cyan-400 transition-colors"
                    >
                      anandchowbey99@gmail.com
                    </a>
                    <br />
                    <p className="text-white">also for HRs and CoFounders</p>
                    {/* <a
                      href="mailto:personal@example.com"
                      className="text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      personal@example.com
                    </a> */}
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                className="h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
                variants={itemVariants}
              />

              <motion.div variants={itemVariants}>
                <motion.a
                  href="https://topmate.io/anand_chowbey/1759089"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-purple-400/30 transition-all group shadow-lg shadow-black/20"
                  whileHover="hover"
                  initial="rest"
                  variants={linkVariants}
                >
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-purple-400" />
                    <div>
                      <p className="text-sm text-gray-400">Book a Call</p>
                      <p className="text-lg font-medium text-white">Schedule Meeting</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-purple-400 transition-colors" />
                </motion.a>
              </motion.div>

              <motion.div
                className="h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent"
                variants={itemVariants}
              />

              <motion.div variants={itemVariants}>
                <motion.a
                  href="https://topmate.io/anand_chowbey/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-green-400/30 transition-all group shadow-lg shadow-black/20"
                  whileHover="hover"
                  initial="rest"
                  variants={linkVariants}
                >
                  <div className="flex items-center gap-4">
                    <Users className="w-6 h-6 text-green-400" />
                    <div>
                      <p className="text-sm text-gray-400">Need Mentorship</p>
                      <p className="text-lg font-medium text-white">1-on-1 Guidance</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-green-400 transition-colors" />
                </motion.a>
              </motion.div>

              <motion.div
                className="h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent"
                variants={itemVariants}
              />

              <motion.div variants={itemVariants}>
                <motion.a
                  href="https://www.instagram.com/developer.jii"
                  target="_blank"
                  rel='noopener noreferrer'
                  className="flex items-center justify-between p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-blue-400/30 transition-all group shadow-lg shadow-black/20"
                  whileHover="hover"
                  initial="rest"
                  variants={linkVariants}
                >
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Connect with Me</p>
                    <p className="text-lg font-medium text-white">Grow Yourself</p>
                    <p className="text-sm text-gray-500 mt-1">Join the community</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-blue-400 transition-colors" />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};