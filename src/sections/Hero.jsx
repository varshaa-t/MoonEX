import React, { useRef } from 'react'
import Navbar from '../components/Navbar'
import BlurCircle from '../components/BlurCircle'
import Circle from '../components/Circle'
import MultipleStars from '../components/MultipleStars'
import Star from '../components/Star'
import Button from '../components/Button'
import Ellipse1 from '../assets/Ellipse1.png'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

function Hero() {

  const mainRef = useRef();
  const starRef1 = useRef();
  const starRef2 = useRef();

  useGSAP(() => {
    gsap.from(mainRef.current, {
      y: 150,
      duration: 1,
      opacity: 0,
      delay: 1
    })
  })

  useGSAP(() => {
    gsap.from(starRef1.current, {
      opacity: 0,
      duration: 1,
      delay: 1.5,
    })
  })

  useGSAP(() => {
    gsap.from(starRef2.current, {
      opacity: 0,
      duration: 1,
      delay: 1.5,
    })
  })

  return (
    <div className='h-screen'>
      <Navbar/>
      <div 
        ref={mainRef} 
        className='flex flex-col mt-40 ml-16 space-y-10'
      >
        <div className='flex flex-col space-y-4 md:space-y-0'>
          <div className='text-white font-neue-machina-bold text-center -ml-16 md:text-left md:ml-0 md:w-2/3 text-5xl md:text-7xl'>
            Trusted Multi-Chain <span className='text-yellow'>DEX</span> Platform
          </div>
          <div className='text-medium-gray font-neue-machina-regular text-center -ml-16 md:ml-0 md:text-left text-xl md:text-2xl md:w-2/3'>
            Trade, earn, and own crypto on the all-in-one multi-chain DEX
          </div>
        </div>
        <div className='flex flex-col items-center space-y-6 pr-10 sm:flex-row sm:space-y-0 sm:pr-0 sm:space-x-8'>
          <Button
            text={"Connect Wallet"}
            variant={"yellow"}
          />
          <Button
            text={"Trade Crypto"}
            styles={"px-10"}
          />
        </div>
      </div>
      <BlurCircle
        styles={"-top-20 left-0 w-64 h-64 md:w-96 md:h-96"}
      />
      <BlurCircle
        styles={"top-48 right-0 w-64 h-64 md:w-96 md:h-96"}
      />
      <Circle
        styles={"top-44 right-24 z-40 w-20 h-20 md:w-40 md:h-40 lg:w-64 lg:h-64"}
      />
      <div 
        ref={starRef1}
      >
        <MultipleStars styles={"absolute top-40 left-32 size-6 md:size-10 lg:size-14"}/>
      </div>
      <div 
        ref={starRef2}
      >
        <MultipleStars styles={"absolute top-64 right-10 md:top-[500px] md:right-48 size-6 md:size-10 lg:size-14"}/>
      </div>
      <Star styles={"absolute top-32 right-44"}/>
      <div
        className="w-0 h-0 sm:w-1/3 sm:h-[30%] md:w-2/3 md:h-[600px] sm:-translate-y-[320px] sm:translate-x-[380px] md:-translate-y-[450px] md:translate-x-48 lg:-translate-y-96 lg:translate-x-72"
        style={{ backgroundImage: `url(${Ellipse1})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
      >
      </div>
      <div
        className="w-0 h-0 sm:w-72 sm:h-[900px] md:w-5/6 md:h-[1100px] sm:-translate-y-[535px] sm:translate-x-[360px] md:-translate-y-[1100px] md:translate-x-20 lg:-translate-y-[1050px] lg:translate-x-44"
        style={{ backgroundImage: `url(${Ellipse1})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
      >
      </div>
    </div>
  )
}

export default Hero