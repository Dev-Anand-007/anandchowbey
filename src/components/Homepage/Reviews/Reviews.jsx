import React from 'react'
import { SkillsInfo } from '../../../constants';
import { FaQuoteLeft } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

export const Reviews = () => {
  const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    image: "https://i.pravatar.cc/150?img=1",
    rating: 5,
    text: "Working with Anand was an absolute pleasure. His attention to detail and technical expertise helped bring our vision to life. Highly recommended!"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager, InnovateCo",
    image: "https://i.pravatar.cc/150?img=2",
    rating: 5,
    text: "Exceptional developer with great communication skills. Anand delivered our mobile app ahead of schedule with outstanding quality."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Founder, StartupHub",
    image: "https://i.pravatar.cc/150?img=3",
    rating: 5,
    text: "Anand's problem-solving abilities are remarkable. He transformed our complex requirements into a sleek, user-friendly application."
  },

];
  return (
    <section id="reviews" className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-blue-950/20 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale:0.9 }}
          whileInView={{ opacity: 1, scale:1 }}
          viewport={{ once:false,amount:0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">WHAT THEY'RE SAYING</h2>
         <motion.div 
        initial={{width:0}}
        whileInView={{width:'20rem'}}
        transition={{duration:0.6,ease:'easeInOut'}}
        viewport={{once:false, amount:0.5}}
        className="h-1 mt-2 mx-auto bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"/>
          <motion.p
          initial={{opacity:0,scale:0.9}}
          whileInView={{opacity:1,scale:1}}
          viewport={{once:false,amount:0.5}}
          className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mt-4">
            Feedback from clients and colleagues I've had the pleasure to work with
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(96, 165, 250, 0.3)" }}
              className="bg-gray-900/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-blue-400/50 transition-all relative"
            >
              <FaQuoteLeft className="text-blue-400 text-3xl mb-4 opacity-50" />
              <div className="flex mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <FiStar key={i} className="text-yellow-400 fill-yellow-400" size={18} />
                ))}
              </div>
              <p className="text-gray-300 text-sm sm:text-base mb-6 italic leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full border-2 border-blue-400"
                />
                <div>
                  <h4 className="text-white font-semibold">{review.name}</h4>
                  <p className="text-gray-400 text-sm">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
