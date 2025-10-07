import React from 'react'
import LogoLoop from '../../../elements/LogoLoop';
import solono from '../../../assets/company_logo/solono.jpg'
import gopotu from '../../../assets/company_logo/gopotu.jpeg'
import AlsolTech from '../../../assets/company_logo/alsol.png'
import { motion } from 'framer-motion';

export const LogoSlider = () => {

  // Alternative with image sources
  const imageLogos = [
    { src: solono, alt: "Solono", href: "https://www.solonoapp.com/" },
    { src: gopotu, alt: "Gopotu", href: "https://gopotu.com/" },
    { src: AlsolTech, alt: "Alsol Tech", href: "https://alsoltech.com/" },

  ];
  return (
    <section id='clients' className='py-4 px-[7vw] md:px-[2vw] lg:px-[4vw] font-sans mt-16'>
      {/* Section Title */}
      <div className='text-center mb-8'>
        <motion.h2
         initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.5 }}
         className='text-3xl md:text-4xl font-bold text-white'>WORKED WITH</motion.h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "10rem" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.5 }} // re-animates every time
          className="h-1  mx-auto mt-2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
        />



        <motion.p
        initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5,delay:0.4 }}
          viewport={{ once: false, amount: 0.5 }} className='text-gray-400 mt-4 text-md md:text-lg font-semibold'>Brands and clients I’ve partnered with to bring ideas to life.</motion.p>
      </div>

      <div style={{ position: 'relative', overflow: 'hidden' }}>

        <LogoLoop
          logos={imageLogos}
          speed={40}
          direction="right"
          logoHeight={60}
          gap={60}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Technology partners"
        />
      </div>

    </section>
  )
}
