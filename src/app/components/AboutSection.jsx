"use client";
import React, { useState, useTransition } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';
import { motion } from 'framer-motion';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2 pb-2'>
                <li>Content Writing</li>
                <li>Creative Writing</li>
                <li>Search Engine Optimization</li>
                <li>Research & fact-checking</li>
                <li>Proofreading / Grammar check</li>
                <li>Editing</li>
                <li>Blog Writing</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2 pb-2'>
                <li>BA in English from Indira Ganndhi National Open University</li>
                <li>10+2 from St. Josheph&#39;s Girls Inter College</li>
                <li>10 from St. Francis&#39; Convent School</li>
            </ul>
        )
    },
    {
        title: "Certificates",
        id: "certificates",
        content: (
            <ul className='list-disc pl-2 pb-2'>
                <li>Google Authorized Certification in Foundations of Digital Marketing and E-commerce.</li>
                <li>Google Authorized Certification in Attract and Engage Customers with Digital Marketing.</li>
            </ul>
        )
    }
]

const AboutSection = () => {

    const [tab, setTab] = useState("skills");
    const [isPending, startTransistion] = useTransition();

    const handleTabChange = (id) => {
        startTransistion(() => {
            setTab(id);
        })
    }

  return (
    <section id='about'>
        <motion.div initial="hidden" whileInView="visible" viewport={{once:true, amount:0.5}} transition={{delay:0.2,duration:0.5}} variants={{hidden:{opacity: 0, y: 50}, visible:{opacity: 1, y: 0}}} className='md:grid md:grid-cols-2 gap-8 md:items-start lg:items-center xl:gap-16 h-full py-10'>
            <div className='md:mb-0 mb-8'>
                <Image src={'/images/about-image.png'} className='rounded-md h-full' alt='about-image' width={550} height={550} />
            </div>
            <div className='flex flex-col h-full'>
                <div>
                    <h2 className='text-4xl font-bold mb-4 text-center'>About Me</h2>
                    <p className='text-base xl:text-lg text-justify'>A highly motivated and skilled content writer with a proven track record of creating engaging and SEO-optimized content across various industries. Adept at crafting compelling narratives that captivate audiences and drive brand awareness. Proficient in conducting thorough research to deliver accurate and insightful articles, blog posts, and marketing collateral.</p>

                    <div className='flex mt-8 gap-6'>
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"} >Skills</TabButton>
                        <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"} >Education</TabButton>
                        <TabButton selectTab={() => handleTabChange("certificates")} active={tab === "certificates"} >Certificates</TabButton>
                    </div>
                    <div className='mt-8 lg:h-full h-[160px]'>{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default AboutSection
