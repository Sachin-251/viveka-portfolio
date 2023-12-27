"use client";
import React from 'react'
import Link from 'next/link';

const Footer = () => {

  const moveToTop = (e) => {
    e.preventDefault();
    const elem = document.getElementById('landing');
    elem.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <footer>
        <div className='w-full flex items-center justify-between gap-6 px-6 md:px-16 pt-4 pb-8 border-t-2 border-[#33353F]'>
            <span><Link href={'/'} onClick={moveToTop} className='text-2xl md:text-2xl text-white font-bold font-serif'><div className='px-1 py-2 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:opacity-80 transition duration-500 rounded-md w-fit '>VM</div></Link></span>
            <p className='text-[#ADB7BE] text-right font-semibold'>ALL RIGHTS RESERVED &copy; VIVEKA MASSEY</p>
        </div>
    </footer>
  )
}

export default Footer