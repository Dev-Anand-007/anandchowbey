import React from "react";
import { WobbleCard } from "../../ui/wobble-card";
import spotify from "@/assets/work_logo/spotify_clone.png";
import derch from "@/assets/work_logo/derch.png";
import canva from "@/assets/work_logo/Canva.jpg";
import instagram from "@/assets/work_logo/instagram.png";
import videoEditing from "@/assets/work_logo/videoEditing.jpg";
import CurvedLoop from "../../ui/CurvedLoop";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MovingBorderDemo } from "@/components/ui/moving-border";

export const Services = () => {
    return (
        <section
  id="about"
  className="py-4 px-[7vw] md:px-[2vw] lg:px-[4vw] font-sans mt-16 md:mt-24 lg:mt-32 "
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
      Assisting You with My <span className="text-blue-400">Services</span>
    </motion.h2>
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: "12rem" }}
      transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
      viewport={{ once: false, amount: 0.5 }}
      className="h-1 mt-2 mx-auto bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
    />
    <motion.p
      className="text-gray-400 mt-4 text-base font-semibold max-w-2xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: false, amount: 0.5 }}
    >
      A Collection of my work experience and the roles I have taken in
      various organizations
    </motion.p>
  </motion.div>

  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">

    {/* Card 1 — Video Editing (swapped position) */}
    <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-pink-900">
      <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
       Flutter App Development
      </h2>
      <p className="mt-4 max-w-[15rem] text-left text-base/6 text-neutral-200">
        Build fast, beautiful, and scalable apps with Flutter — one codebase, every platform.
      </p>
      <img
        src={spotify}
        width={100}
        height={500}
        alt="video editing"
        className="absolute -right-[5%] md:-right-[-5%] lg:-right-[-3%] -bottom-10 object-contain rounded-2xl"
      />
    </WobbleCard>

    {/* Card 2 — MERN Full Stack */}
    <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-blue-800">
      <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
        MERN Full Stack Development
      </h2>
      <p className="mt-4 max-w-[30rem] text-left text-base/6 text-neutral-200">
        Responsive and fully functional from frontend to backend.
      </p>
      <img
        src={derch}
        width={300}
        height={200}
        alt="linear demo image"
        className="absolute -right-[5%] md:-right-[-5%] lg:-right-[10%] -bottom-3 object-contain rounded-2xl"
      />
    </WobbleCard>

    {/* Card 3 — Canva */}
    <WobbleCard containerClassName="col-span-1 min-h-[300px]">
      <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
        Canva Poster Design
      </h2>
      <p className="mt-4 max-w-[15rem] text-left text-base/6 text-neutral-200">
        Eye-catching posters and visuals designed to make your brand stand out.
      </p>
      <img
        src={canva}
        width={100}
        height={50}
        alt="linear demo image"
        className="absolute -right-[1%] md:-right-[-5%] lg:-right-[2%] -bottom-3 object-contain rounded-2xl"
      />
    </WobbleCard>

    {/* Card 4 — Software Development (was Flutter, now green large) */}
    <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-green-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
      <div className="max-w-sm">
        <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Software Development
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
          Both Web and App — Build fast, beautiful, and scalable digital products with modern tech stacks.
        </p>
        <div className="mt-10">
          <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <MovingBorderDemo className={"cursor-pointer"}>Get a Quote</MovingBorderDemo>
          </Link>
        </div>
      </div>
      <img
        src={spotify}
        width={250}
        height={200}
        alt="software development"
        className="absolute -right-[20%]  -bottom-80 md:-right-[5%] lg:-right-[5%] md:-bottom-10 object-contain rounded-2xl"
      />
    </WobbleCard>

    {/* Card 5 — Tech Creator */}
    <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-purple-700">
      <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
        Tech Creator
      </h2>
      <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
        Sharing tech insights, tutorials, and design tips — inspiring the next wave of developers.
      </p>
      <CurvedLoop
        marqueeText="Tech ✦ Tutorials ✦ Tips ✦ & ✦ Tricks ✦ by ✦ developer.jii ✦"
        speed={3}
        curveAmount={500}
        direction="left"
        interactive={true}
        className="custom-text-style"
      />
      <img
        src={instagram}
        width={150}
        height={100}
        alt="Tech Creator"
        className="absolute -right-[5%] md:-right-[5%] lg:-right-[5%] -top-15 object-contain rounded-2xl"
      />
    </WobbleCard>

  </div>
</section>

    );
};
