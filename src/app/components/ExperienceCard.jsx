import React from 'react';
import { EyeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const ExperienceCard = ({ imgUrl, title, duration, description, webUrl }) => {
  return (
    <div className='mt-6'>
        <div style={{background: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center"}} className='h-52 md:h-72 rounded-t-xl relative group'>
            <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] rounded-t-md bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-60 transition duration-500'>
                <Link href={webUrl} target='_blank' className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link' >
                    <EyeIcon className='h-10 w-10 text-[#ADB7BE] cursor-pointer group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
                </Link>
            </div>
        </div>

        <div className='rounded-b-xl bg-[#181818] py-6 px-4 lg:h-1/2'>
            <h3 className='text-lg font-bold mb-2 text-center'>{title}</h3>
            <h5 className='font-semibold text-center text-slate-400 mb-2'>{duration}</h5>
            <p className='text-[#ADB7BE] text-base text-justify'>{description}</p>
        </div>
    </div>
  )
}

export default ExperienceCard