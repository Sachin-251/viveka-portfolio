"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import FileSaver from 'file-saver';

const HeroSection = ({reference}) => {

    const downloadCV = (e) => {
        e.preventDefault();
        FileSaver.saveAs("./files/Resume-Viveka.pdf", "Resume-Viveka.pdf");
    }

    const moveToContact = () => {
        const elem = document.getElementById('contact');
        elem.scrollIntoView({behavior: 'smooth'});
    }

  return (
    <section id="landing">
        <div className='grid grid-cols-1 sm:grid-cols-12 gap-6'>
            {/* LEFT SIDE */}
            <motion.div initial="hidden" whileInView="visible" viewport={{once:true, amount:0.5}} transition={{delay:0.2,duration:0.5}} variants={{hidden:{opacity: 0, x: -50}, visible:{opacity: 1, x: 0}}} className='col-span-7 place-self-center text-center sm:text-left'>
                <h1 className='mb-4 lg:text-6xl sm:text-4xl text-3xl font-bold'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Hello, I&#39;m{" "}</span> 
                    <br />
                    <TypeAnimation
                        sequence={[
                            "Viveka",
                            2000,
                            "a Content Writer",
                            2000,
                            "a Creative Writer",
                            2000,
                            "a Blogger",
                            2000,
                        ]}
                        wrapper='span'
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6'>
                    From Concept to Content: Illuminating the Path of my Writing Endeavors.
                </p>
                <div>
                    <button onClick={moveToContact} className='w-full sm:w-fit px-6 py-3 rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:opacity-80 text-white font-bold transition duration-500'>Hire Me</button>
                    <button onClick={downloadCV} className='w-full sm:w-fit px-1 py-1 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white font-bold mt-3'>
                        <span className='block bg-[#121212] hover:bg-slate-800 transition duration-500 rounded-full px-5 py-2'>Download CV</span>
                    </button>
                </div>
            </motion.div>

            {/* RIGHT SIDE */}
            <motion.div initial="hidden" whileInView="visible" viewport={{once:true, amount:0.5}} transition={{delay:0.2,duration:0.5}} variants={{hidden:{opacity: 0, x: 50}, visible:{opacity: 1, x: 0}}} className='col-span-5 place-self-center mt-4 mx-auto lg:mt-0'>
                <div className='rounded-full bg-[#181818] lg:w-[400px] lg:h-[400px] w-[300px] h-[300px] relative hover:bg-slate-900 transition duration-500'>
                    <Image
                        src="/images/hero-image.png"
                        alt="hero-image"
                        className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                        priority
                        width={300}
                        height={300}
                    />
                </div>
            </motion.div>

        </div>
    </section>
  )
}

export default HeroSection