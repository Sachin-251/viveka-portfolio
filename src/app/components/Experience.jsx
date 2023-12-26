"use client";
import React from 'react'
import ExperienceCard from './ExperienceCard';
import { motion } from 'framer-motion';

const experienceData = [
    {
        id: 1,
        title: "BetterHalf || Content Writing Intern",
        duration: "APRIL, 2023 - PRESENT",
        description: "Handled content writing for matrimonial Website- writing about venues, decoration businesses, blogs, and other matrimonial articles.",
        image: "/images/betterhalf-logo.png",
        Url: "https://www.betterhalf.ai/",
    },
    {
        id: 2,
        title: "Saman Technosys || Content Writing Intern",
        duration: "OCTOBER, 2022 - MARCH, 2023",
        description: "Handled content writing for websites, blogs, articles, brochures etc. Also, created social media marketing content and gained further knowledge of SEO.",
        image: "/images/samantech-logo.png",
        Url: "https://www.samantechnosys.com/",
    },
    {
        id: 3,
        title: "DigiMarketish || Content Writing Intern",
        duration: "AUGUST, 2021 - FEBRUARY, 2022",
        description: "Gained knowledge about SEO and WordPress content management system (CMS). Handled writing content for news articles, blogs, and website content.",
        image: "/images/digimark-logo.png",
        Url: "https://www.digimarketish.com/",
    },
]

const Experience = () => {
  return (
    <section className='mt-16' id='experience'>
        <div>
            <h2 className='text-4xl font-bold mb-8 text-center'>My Experience</h2>
            <div className='md:grid md:grid-cols-3 gap-8'>
                {
                    experienceData.map((exp) => (
                        <ExperienceCard key={exp.id} title={exp.title} duration={exp.duration} description={exp.description} imgUrl={exp.image} webUrl={exp.Url} />
                    ))
                }
            </div>
        </div>
        
    </section>
  )
}

export default Experience