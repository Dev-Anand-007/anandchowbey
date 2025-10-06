"use client";
import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

export const Style = () => {
  return (

    <section className="py-4 px-[7vw] md:px-[2vw] lg:px-[4vw] font-sans mt-16 md:mt-24 lg:mt-32">
      {/* Heading */}
      <div className="text-center ">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-2xl md:text-4xl font-bold text-white"
        >
          MY <span className="text-blue-400">STYLE</span> OF WORKING
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "18rem" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.5 }}
          className="h-1 mt-2 mx-auto bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
        />
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-gray-400 mt-4 text-lg font-semibold"
        >
          A collection of my workflow and the way I approach projects.
        </motion.p>
      </div>
      <div className="mt-20 mb-10 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        <Card title="Planning and Strategy" subtitle=" We'll collaborate to map out your project goals, target audiences, and key functionalities." icon={<OverlayButton order="Step 1" />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-pink-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
        <Card title="Design & Mockups" subtitle="We create mockups and UI designs for your project." icon={<OverlayButton order="Step 2" />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-green-600"
            colors={[[125, 211, 252]]}
          />
        </Card>

        <Card title="Development" subtitle="We build the project using best practices." icon={<OverlayButton order="Step 3" />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-violet-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
};

const Card = ({ title, subtitle, icon, children }) => {
  const [active, setActive] = React.useState(false);

  const isMobile = window.innerWidth < 1024;

  const handleClick = () => {
    if (isMobile) setActive((prev) => !prev);
  };

  return (
    <div
      onMouseEnter={() => !isMobile && setActive(true)}
      onMouseLeave={() => !isMobile && setActive(false)}
      onClick={handleClick}
      className="border border-white group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative h-[30rem] cursor-pointer"
    >
      {/* Corner icons */}
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />

      {/* Canvas Reveal */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 w-full h-full"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-20 text-center">
        <div
          className={`transition-all duration-200 flex items-center justify-center mx-auto ${
            active ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"
          }`}
        >
          {icon}
        </div>
        <h2
          className={`text-3xl text-white font-bold transition-all duration-200 flex items-center justify-center mx-auto ${
            active ? "opacity-100 -translate-y-4" : "opacity-0 translate-y-0"
          }`}
        >
          {title}
        </h2>
        <p
          className={`text-base text-white transition-all duration-200 flex items-center justify-center mx-auto ${
            active ? "opacity-100 -translate-y-4" : "opacity-0 translate-y-0"
          }`}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
};



export const Icon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};


const OverlayButton = ({ order }) => {
  return (
    <div>
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px]">
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center 
        justify-center rounded-full bg-slate-950 px-5 py-2 text-purple-100 backdrop-blur-3xl font-bold text-2xl"
        >
          {order}
        </span>
      </button>
    </div>
  );
};
