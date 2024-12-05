import React from 'react'
import logoTextDown from '../assets/logo-text-down.png'
import { NavLink } from 'react-router-dom'
import { SiMinutemailer } from "react-icons/si";
import { FiTwitter } from "react-icons/fi";
import { FaDiscord } from "react-icons/fa";

function Footer() {
  return (
    <div className='flex flex-col pb-10 xl:pb-0 xl:flex-row justify-between items-center xl:h-80 px-16 bg-dark-blue text-white relative z-10'>
        <div>
            <img className='w-40 h-40' src={logoTextDown} alt="logo" />
        </div>
        <ul className='flex flex-col space-y-4 font-bold tracking-wider pb-10 text-center text-xl md:tracking-normal md:flex-row md:text-lg justify-between md:space-x-24 md:space-y-0 font-raleway md:font-extrabold'>
            <li className='hover:text-yellow'>
              <NavLink 
                to={"/about-us"}
                className={({ isActive }) =>
                  isActive ? "text-yellow" : "text-white hover:text-yellow"
                }
              >
                About Us
              </NavLink>
            </li>
            <li className='hover:text-yellow'>
              <NavLink 
                to={"/roadmap"}
                className={({ isActive }) =>
                  isActive ? "text-yellow" : "text-white hover:text-yellow"
                }
              >
                Roadmap
              </NavLink>
            </li>
            <li className='hover:text-yellow'>
              <NavLink 
                to={"/faq"}
                className={({ isActive }) =>
                  isActive ? "text-yellow" : "text-white hover:text-yellow"
                }
              >
                FAQs
              </NavLink> 
            </li> 
            <li className='hover:text-yellow'>
              <NavLink 
                to={"/contact-us"}
                className={({ isActive }) =>
                  isActive ? "text-yellow" : "text-white hover:text-yellow"
                }
              >
                Contact Us
              </NavLink> 
            </li> 
        </ul>
        <div className='flex flex-col text-white space-y-0 md:space-y-10'>
            <div className='text-3xl md:text-2xl text-center font-raleway font-bold hidden md:block'>Contact <span className='text-yellow'>Us</span></div>
            <div className='flex justify-between text-3xl space-x-8'>
                <SiMinutemailer className='text-dark-blue text-4xl bg-white md:text-3xl rounded-full px-1 py-1'/>
                <FaDiscord className='text-4xl md:text-3xl' />
                <FiTwitter className='text-4xl md:text-3xl'/>
            </div>
        </div>
    </div>
  )
}

export default Footer