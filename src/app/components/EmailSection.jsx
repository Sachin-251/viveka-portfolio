"use client";
import React, { useState } from 'react';
import LinkedInIcon from '../../../public/linkedin-icon.svg';
import XIcon from '../../../public/x-icon.svg';
import Image from "next/image";
import Link from 'next/link';
import { motion } from 'framer-motion';

const EmailSection = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value,
        }
        // console.log(data);
        const JSONdata = JSON.stringify(data);

        await fetch('./api/', {
            method: 'POST',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSONdata,
          }).then((res) => {
            console.log('Response received')
            console.log(res.message);
            if (res.status === 200) {
              console.log('Response succeeded!')
              e.target.reset();
            }
          })

    };

  return (
    <section id='contact'>
        <div className='grid md:grid-cols-2 mb-12 md:my-12 py-24 gap-8'>
            <motion.div initial="hidden" whileInView="visible" viewport={{once:true, amount:0.5}} transition={{delay:0.2,duration:0.5}} variants={{hidden:{opacity: 0, x: -50}, visible:{opacity: 1, x: 0}}}>
                <h5 className='text-xl font-bold my-2'>Let&#39;s Connect</h5>
                <p className='text-[#ADB7BE] mb-4 max-w-md text-justify'>Looking for opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&#39;ll try my best to get back to you!</p>
                <div className='socials flex flex-row items-center gap-2'>
                    <Link href={'https://www.linkedin.com/in/viveka-massey-136520202/'} target='_blank' >
                        <Image src={LinkedInIcon} alt="linkedin-icon" />
                    </Link>
                    <Link href={'https://www.linkedin.com/in/viveka-massey-136520202/'} target='_blank' >
                        <Image src={XIcon} alt="x-icon" />
                    </Link>
                </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{once:true, amount:0.5}} transition={{delay:0.2,duration:0.5}} variants={{hidden:{opacity: 0, x: 50}, visible:{opacity: 1, x: 0}}}>
                <form className='flex flex-col gap-6' id="contact-form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className='block mb-2 text-sm font-medium'>Name</label>
                        <input type="text" name="name" id='name' onChange={(e) => {setName(e.target.value)}} className='bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' required placeholder='Name' />
                    </div>

                    <div>
                        <label htmlFor="email" className='block mb-2 text-sm font-medium'>Your email</label>
                        <input type="email" name="email" id='email' onChange={(e) => {setEmail(e.target.value)}} className='bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' required placeholder='Enter your email...' />
                    </div>

                    <div>
                        <label htmlFor="message" className='block mb-2 text-sm font-medium'>Message</label>
                        <textarea name="message" id="message" cols="30" rows="5" onChange={(e) => {setMessage(e.target.value)}} className='bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' placeholder='Leave your message...' />
                    </div>

                    <button type='submit' className='bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2.5 px-5 rounded-lg with-full text-center'>Send Message</button>
                    
                </form>
            </motion.div>
        </div>
    </section>
  )
}

export default EmailSection