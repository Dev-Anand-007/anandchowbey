import React from 'react'
import MagicBento from "../ui/MagicBento";
import { GlareCard } from "../ui/glare-card";

export const Skills = () => {
    return (
        <section
            id="about"
            className="py-4 px-[7vw] md:px-[2vw] lg:px-[4vw] font-sans mt-16 md:mt-24 lg:mt-32 "
        >
            <div className='w-full relative flex '>
                <MagicBento
                    textAutoHide={true}
                    enableStars={true}
                    enableSpotlight={true}
                    enableBorderGlow={true}
                    enableTilt={true}
                    enableMagnetism={true}
                    clickEffect={true}
                    spotlightRadius={300}
                    particleCount={12}
                    glowColor="132, 0, 255"
                />
                <GlareCard className="flex flex-col items-center justify-center">
                    <svg
                        width="66"
                        height="65"
                        viewBox="0 0 66 65"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7 text-white"
                    >
                        <path
                            d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
                            stroke="currentColor"
                            strokeWidth="15"
                            strokeMiterlimit="3.86874"
                            strokeLinecap="round"
                        />
                    </svg>
                    <p className="text-white font-bold text-xl mt-4">Book Now</p>
                </GlareCard>
            </div>



        </section>
    )
}
