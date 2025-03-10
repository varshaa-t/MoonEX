import React, { useRef} from 'react'
import logo from '../assets/logo.png'
import uniswapLogo from '../assets/uniswap-logo.svg'
import { TiTick } from "react-icons/ti";
import { HiX } from "react-icons/hi";
import { FiDollarSign } from "react-icons/fi";
import { SiTicktick } from "react-icons/si";
import { LuPhoneOff } from "react-icons/lu";
import FeatureCard from '../components/FeatureCard';
import BlurCircle from '../components/BlurCircle';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

function About() {

  const textRef = useRef();
  const tableRef = useRef();
  const featuresTitleRef = useRef();
  const featuresRef = useRef();

  useGSAP(() => {
    gsap.from(textRef.current, {
      opacity: 0,
      duration: 0.5,
      x: -50,
      scrollTrigger: {
        trigger: textRef.current,
        scroller: "body",
        markers: false,
        start: "top 90%"
      }
    })
  })

  useGSAP(() => {
    gsap.from(tableRef.current, {
      opacity: 0,
      duration: 1,
      x: -50,
      scrollTrigger: {
        trigger: tableRef.current,
        scroller: "body",
        markers: false,
        start: "top 50%"
      }
    })
  })

  useGSAP(() => {
    gsap.from(featuresTitleRef.current, {
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: featuresTitleRef.current,
        scroller: "body",
        markers: false,
        start: "top 80%"
      }
    })
  })

  useGSAP(() => {
    gsap.from(featuresRef.current.children, {
      opacity: 0,
      duration: 0.5,
      x: 50,
      stagger: 0.25,
      scrollTrigger: {
        trigger: featuresRef.current,
        scroller: "body",
        markers: false,
        start: "top 80%"
      }
    })
  })

  const comparisons = [
    {
      title: "1. Point no one"
    },
    {
      title: "2. Point no two this"
    },
    {
      title: "3. Point no three this"
    },
    {
      title: "4. Point no four this"
    }, 
    {
      title: "5. Point no five this"
    }
  ]

  const features = [
    {
      icon: <FiDollarSign />,
      title: "Cheapest TXs",
      text: "Exchange popular digital currencies at the cheapest possible transaction price"
    },
    {
      icon: <SiTicktick />,
      title: "CerTIK",
      text: "We are Audited by Certik. CertiK is the leading security-focused ranking platform"
    },
    {
      icon: <LuPhoneOff />,
      title: "No Contract Sells",
      text: "No contract sells to fund the marketing wallets"
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
            </svg>,
      title: "CrossDEX Support",
      text: "Exchange popular digital currencies at the cheapest possible transaction price"
    }
  ]

  return (
    <div className='pb-44 text-white'>
      <div 
        ref={textRef} 
        className='font-neue-machina-bold text-4xl sm:text-5xl ml-12 sm:ml-16 mb-10'
      >
        Why <span className='text-yellow'>MoonEX</span>?
      </div>
      <table 
        ref={tableRef} 
        className='bg-white bg-opacity-[2%] rounded-xl mb-16 ml-10 sm:ml-16 w-[80vw] md:w-[85vw] lg:w-[90vw]'
      >
        <colgroup>
          <col className='w-[40%]' />
          <col className='w-[30%]' />
          <col className='w-[30%]' />
        </colgroup>
        <tr>
          <th className='border-b border-gray-700 text-base md:text-xl lg:text-3xl font-conthrax text-yellow px-4 py-6'>Comparison</th>
          <th className='border-b border-l border-gray-700 px-4 py-6'>
            <img className='mx-auto' src={logo} alt="moonex-logo"/>
          </th>
          <th className='border-b border-l border-gray-700 px-4 py-6'>
            <img 
              className='w-36 md:w-40 mx-auto py-6'
              src={uniswapLogo} 
              alt="uniswap-logo" 
            />
          </th>
        </tr>
        {comparisons.map((element, index) => (
          <tr key={index}>
            <td className='border-b border-gray-700 text-medium-gray font-neue-machina-regular px-10 py-6 sm:text-xl'>{element.title}</td>
            <td className='border border-gray-700'><TiTick className='mx-auto text-green-tick text-2xl'/></td>
            <td className='border-b border-gray-700'><HiX className='mx-auto text-red-x text-2xl'/></td>
          </tr>
        ))}
        <tr>
            <td className='border-l-0 border-b-0 border-gray-700 px-10 py-6'></td>
            <td className='border-x-[1px] border-gray-700'></td>
            <td className='border-l-0 border-b-0 border-gray-700'></td>
        </tr>
      </table>
      <div className='flex flex-col'>
        <div 
          ref={featuresTitleRef} 
          className='font-neue-machina-bold mb-10 text-4xl sm:text-5xl ml-[3.5rem] sm:mx-auto'>
            Our <span className='text-yellow'>Features</span>
        </div>
        <div 
          ref={featuresRef} 
          className='grid grid-cols-1 gap-y-10 mx-auto md:grid-cols-2 md:gap-x-20 md:gap-y-10 xl:grid-cols-4 xl:gap-x-20 xl:gap-y-0'
        >
          {features.map((feature, index) => (
            <div key={index}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                text={feature.text}
              />
            </div>
          ))}
        </div>
      </div>
      <BlurCircle
        styles={"left-10 top-[1000px] md:left-1/3 md:top-[900px] lg:left-4/6 w-60 h-60 md:w-96 md:h-96"}
      />
    </div>
  )
}

export default About