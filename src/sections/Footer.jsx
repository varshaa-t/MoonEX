import React from 'react'
import logoTextDown from '../assets/logo-text-down.png'
import { NavLink } from 'react-router-dom'
import { SiMinutemailer } from "react-icons/si";
import { FiTwitter } from "react-icons/fi";
import { FaDiscord } from "react-icons/fa";

function Footer() {
  return (
    <div className='h-80 px-16 bg-dark-blue flex justify-between items-center text-white'>
        <div>
            <img src={logoTextDown} alt="logo" />
        </div>
        <ul className='flex justify-between space-x-24 font-raleway font-extrabold text-lg'>
            <NavLink to="about-us"><li>About Us</li></NavLink>
            <NavLink to="roadmap"><li>Roadmap</li></NavLink>
            <NavLink to="faq"><li>FAQs</li></NavLink>
            <NavLink to="contact-us"><li>Contact Us</li></NavLink>
        </ul>
        <div className='flex flex-col text-white space-y-10'>
            <div className='text-2xl text-center font-raleway font-bold'>Contact <span className='text-yellow'>Us</span></div>
            <div className='flex justify-between text-3xl space-x-8'>
                <SiMinutemailer className='text-dark-blue bg-white text-3xl rounded-full px-1 py-1'/>
                <FaDiscord className='text-3xl' />
                <FiTwitter className='text-3xl'/>
            </div>
        </div>
    </div>
  )
}

export default Footer