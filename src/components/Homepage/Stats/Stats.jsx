import React from 'react'
import CountUp from 'react-countup';
import { motion } from 'framer-motion';



export const Stats = () => {

    return (
   
    <section
        id="stats"
        className="flex justify-center  w-full  py-8 mt-16"
    >
        <motion.div
        initial={{opacity:0,scale:2}}
        whileInView={{opacity:1,scale:1}}
        viewport={{once:false,amount:0.5}}
        transition={{duration:0.2}}
        className="flex space-x-5 md:space-x-8 px-4 md:px-10 py-8 rounded-2xl backdrop-blur-md bg-white/3 border border-white/20 shadow-lg ">

            {/* Stat Item 1 */}
            <div className="flex flex-col items-center justify-center text-center">
                <span className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
                    <CountUp end={1}  duration={2.5} enableScrollSpy={true} useEasing />

                </span>
                <span className="text-xl text-white drop-shadow-md">Internships</span>
            </div>

            {/* Divider */}
            <div className="w-px bg-white/40"></div>

            {/* Stat Item 2 */}
            <div className="flex flex-col items-center justify-center text-center">
                <span className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
                    <CountUp end={3}  duration={2.5} enableScrollSpy={true} useEasing />

                </span>
                <span className="text-xl text-white drop-shadow-md">Clients</span>
            </div>

            {/* Divider */}
            <div className="w-px bg-white/40"></div>

            {/* Stat Item 3 */}
            <div className="flex flex-col items-center justify-center text-center">
                <span className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
                    <CountUp end={5}  duration={2.5} enableScrollSpy={true} useEasing />

                </span>
                <span className="text-xl text-white drop-shadow-md">Projects</span>
            </div>

        </motion.div>
    </section>



    );
}
