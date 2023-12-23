"use client";
import React, { useState, useTransition } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

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
                <li></li>
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
    <section>
        <div className='md:grid md:grid-cols-2 gap-8 items-center xl:gap-16 mt-16 py-10'>
            <div className='md:mb-0 mb-8'>
                <Image src={'/images/about-image.png'} className='rounded-md' alt='about-image' width={500} height={500} />
            </div>
            <div className='flex flex-col h-full'>
                <div>
                    <h2 className='text-4xl font-bold mb-4 text-center'>About Me</h2>
                    <p className='text-base lg:text-lg text-justify'>A highly motivated and skilled content writer with a proven track record of creating engaging and SEO-optimized content across various industries. Adept at crafting compelling narratives that captivate audiences and drive brand awareness. Proficient in conducting thorough research to deliver accurate and insightful articles, blog posts, and marketing collateral.</p>

                    <div className='flex mt-8 gap-6'>
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"} >Skills</TabButton>
                        <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"} >Education</TabButton>
                        <TabButton selectTab={() => handleTabChange("certificates")} active={tab === "certificates"} >Certificates</TabButton>
                    </div>
                    <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection