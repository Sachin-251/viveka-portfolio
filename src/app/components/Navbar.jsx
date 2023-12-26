"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';

const navLinks = [
    {
        title: "About",
        path: "about",
    },
    {
        title: "Experience",
        path: "experience",
    },
    {
        title: "Contact",
        path: "contact",
    }
]

const Navbar = () => {

    const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className='w-full bg-stone-900 p-3 fixed top-0 left-0 right-0 z-10 bg-opacity-90'>
        <div className='flex flex-wrap items-center justify-between mx-auto px-4 md:px-8'>
            <Link href={'/'} className='text-2xl md:text-2xl text-white font-bold font-serif'><div className='px-1 py-2 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:opacity-80 transition duration-500 rounded-md '>VM</div></Link>

            <div className='mobile-menu block md:hidden'>
                {
                    navbarOpen ? (
                    <button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white transition duration-500'>
                        <XMarkIcon className='w-5 h-5' />
                    </button> ) : (
                    <button onClick={() => setNavbarOpen(true)} className='flex items-center px-2 py-1 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white transition duration-500'>
                        <Bars3Icon className='w-7 h-7' />
                    </button>
                    )
                }
            </div>

            <div className='menu hidden md:block md:w-auto' id="navbar">
                <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                    {
                        navLinks.map((link, index) => (
                            <li className='font-semibold' key={index}><NavLink href={link.path} title={link.title} /></li>
                        ))
                    }
                </ul>
            </div>
        </div>
        { navbarOpen ? <MenuOverlay links={navLinks} /> : null }
    </nav>
  )
}

export default Navbar