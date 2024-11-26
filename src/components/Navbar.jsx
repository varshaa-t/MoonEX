import React from 'react'
import Button from './Button'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='flex justify-between items-center px-10 py-6 text-white'>
        <div>
          <img className='w-44' src={logo} alt="logo" />
        </div>
        <ul className='flex justify-between space-x-24 text-lg font-bold'>
          <NavLink to={"/home"}><li className='text-yellow'>Home</li></NavLink>
          <NavLink to={"/about-us"}><li className='hover:text-yellow'>About Us</li></NavLink>
          <NavLink to={"/roadmap"}><li className='hover:text-yellow'>Roadmap</li></NavLink>
          <NavLink to={"/faq"}><li className='hover:text-yellow'>FAQs</li></NavLink>  
          <NavLink to={"/contact-us"}><li className='hover:text-yellow'>Contact Us</li></NavLink>  
        </ul>
        <div> 
          <Button 
            variant={"yellow"}
            text={"Connect Wallet"}
          />
        </div>
    </nav>
  )
}

export default Navbar