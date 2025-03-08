import React, { useRef} from 'react'
import Button from './Button'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import gsap from 'gsap';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useGSAP } from '@gsap/react';

function Navbar() {

  const navRef = useRef(null);

  useGSAP(() => {
    gsap.from(navRef.current, {
      opacity: 0,
      duration: 0.8,
      delay: 0.7,
      y: 50
    })
  })

  return (
      <nav className='backdrop-blur-xl sticky top-0 z-50'>
        <div 
          ref={navRef} 
          className='xl:flex hidden justify-between items-center px-10 py-6 text-white'
        >
          <NavLink to="/">
            <div>
              <img className='w-44' src={logo} alt="logo" />
            </div>
          </NavLink>
          <ul className='flex justify-between space-x-24 text-lg font-bold'>
            <li className='hover:text-yellow'>
              <NavLink 
                to={"/home"}
                className={({ isActive }) =>
                  isActive ? "text-yellow" : "text-white hover:text-yellow"
                }
              >
                Home
              </NavLink>
            </li>  
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
          <Button 
            variant={"yellow"}
            text={"Connect Wallet"}
          />
        </div>
        <div className='xl:hidden flex justify-between items-center px-2 sm:px-4 md:px-6 lg:px-10 py-6 text-white'>
          <div>
            <NavLink to="/"><img className='w-44' src={logo} alt="logo" /></NavLink>
          </div>
          <Sheet>
            <SheetTrigger>
              <RxHamburgerMenu className='text-3xl text-yellow'/>
            </SheetTrigger>
            <SheetContent className="bg-gray-900 text-yellow border-gray-800">
              <SheetHeader>
                <SheetTitle className="flex justify-center">
                  <img className='h-16 mb-6' src={logo} alt="logo" />
                </SheetTitle>
                <SheetDescription></SheetDescription>
              </SheetHeader>
              <ul className='flex flex-col items-center space-y-5 text-2xl font-bold'>
                <li className='hover:text-yellow'>
                  <NavLink 
                    to={"/home"}
                    className={({ isActive }) =>
                      isActive ? "text-yellow" : "text-white hover:text-yellow"
                    }
                  >
                    Home
                  </NavLink>
                </li>  
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
            </SheetContent>
          </Sheet>
        </div>
      </nav>
  )
}

export default Navbar