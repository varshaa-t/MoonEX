import React from 'react'
import logo from '../assets/logo.png'
import { TiTick } from "react-icons/ti";
import { HiX } from "react-icons/hi";
import { FiDollarSign } from "react-icons/fi";
import { SiTicktick } from "react-icons/si";
import { LuPhoneOff } from "react-icons/lu";
import FeatureCard from '../components/FeatureCard';
import BlurCircle from '../components/BlurCircle';

function About() {

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
    <div className='ml-16 pb-44 text-white'>
      <div className='font-neue-machina-bold text-5xl mb-10'>
        Why <span className='text-yellow'>MoonEX</span>?
      </div>
      <table className='border border-gray-700 backdrop-blur-lg w-[1380px] rounded-3xl mb-16'>
        <tr className=''>
          <th className='border border-gray-700 text-3xl font-conthrax text-yellow'>Comparison</th>
          <th className='border border-gray-700'>
            <img src={logo} alt="moonex-logo" className='w-44 mx-auto' />
          </th>
          <th className='border border-gray-700'>
            <img 
              className='w-44 mx-auto py-6'
              src="https://s3-alpha-sig.figma.com/img/3ec2/99e0/fe3d6081f4805f1763b00daf783a87ef?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CC9pxQZn3lx~X8b~PlQws9saDU31ZNNTwsseA3KvBP5zr0FZoroJw-8ytDkk1THamOS0ALgq4lyNKX1t8KutoyMzeCjBdmD264xEqk5j4jYeprq9Rs5mnKAEIbtBi4~RtJWMdqK2iHo8IYt~6nu61~xYPf9MJyE08eIy4nC-fhGhf4NWN2MosgoexZ9PHAW0BKeozpLyAFLKCiRThQC8zCyZ~TKG~RYpP5ig9JYrvyeOBMLXhNqKWaDDKakAVkx-aq-YvROzz3Yt6sqtYzXRmm3EludMhXS8-30NDHTb0DLKDShDU~AOoq6n06MMnvQ3djygwBT1rTEavon9pifAyg__" 
              alt="" 
            />
          </th>
        </tr>
        <tr>
          <td className='border border-gray-700 text-medium-gray font-neue-machina-regular px-10 py-6 text-xl'>1. Point no one</td>
          <td className='border border-gray-700'><TiTick className='mx-auto text-green-tick text-2xl'/></td>
          <td className='border border-gray-700'><HiX className='mx-auto text-red-x text-2xl'/></td>
        </tr>
        <tr>
          <td className='border border-gray-700 text-medium-gray font-neue-machina-regular px-10 py-6 text-xl'>2. Point no two this</td>
          <td className='border border-gray-700'><TiTick className='mx-auto text-green-tick text-2xl'/></td>
          <td className='border border-gray-700'><HiX className='mx-auto text-red-x text-2xl'/></td>
        </tr>
        <tr>
          <td className='border border-gray-700 text-medium-gray font-neue-machina-regular px-10 py-6 text-xl'>3. Point no three this</td>
          <td className='border border-gray-700'><TiTick className='mx-auto text-green-tick text-2xl'/></td>
          <td className='border border-gray-700'><HiX className='mx-auto text-red-x text-2xl'/></td>
        </tr>
        <tr>
          <td className='border border-gray-700 text-medium-gray font-neue-machina-regular px-10 py-6 text-xl'>4. Point no four this</td>
          <td className='border border-gray-700'><TiTick className='mx-auto text-green-tick text-2xl'/></td>
          <td className='border border-gray-700'><HiX className='mx-auto text-red-x text-2xl'/></td>
        </tr>
        <tr>
          <td className='border border-gray-700 text-medium-gray font-neue-machina-regular px-10 py-6 text-xl'>5. Point no five this</td>
          <td className='border border-gray-700'><TiTick className='mx-auto text-green-tick text-2xl'/></td>
          <td className='border border-gray-700'><HiX className='mx-auto text-red-x text-2xl'/></td>
        </tr>
      </table>
      <div className='flex flex-col'>
        <div className='font-neue-machina-bold mx-auto mb-10 text-5xl'>Our <span className='text-yellow'>Features</span></div>
        <div className='grid grid-cols-4'>
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
        styles={"top-[900px] left-[500px]"}
      />
    </div>
  )
}

export default About