import React, { useRef } from 'react'
import Navbar from '../components/Navbar'
import BlurCircle from '../components/BlurCircle'
import Circle from '../components/Circle'
import MultipleStars from '../components/MultipleStars'
import Star from '../components/Star'
import Button from '../components/Button'
import Ellipse1 from '../assets/Ellipse1.png'
import Ellipse2 from '../assets/Ellipse2.png'
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
      <div ref={mainRef} className='flex flex-col mt-40 ml-16 space-y-10'>
        <div>
          <div className='text-white font-neue-machina-bold md:w-2/3 md:text-7xl text-5xl'>
            Trusted Multi-Chain <span className='text-yellow'>DEX</span> Platform
          </div>
          <div className='text-medium-gray font-neue-machina-regular md:text-2xl md:w-2/3'>
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
        styles={"-top-20 -left-10"}
      />
      <BlurCircle
        styles={"top-48 -right-20"}
      />
      <Circle
        styles={"top-44 right-24 z-40 w-20 h-20 md:w-40 md:h-40 lg:w-64 lg:h-64"}
      />
      <div ref={starRef1}>
        <MultipleStars styles={"absolute top-40 left-32 size-6 md:size-10 lg:size-14"}/>
      </div>
      <div ref={starRef2}>
        <MultipleStars styles={"absolute top-64 right-10 md:top-[500px] md:right-48 size-6 md:size-10 lg:size-14"}/>
      </div>
      <Star styles={"absolute top-32 right-44"}/>
      <div
        className="absolute top-10 left-10 w-[1200px] h-[600px]"
        style={{ backgroundImage: `url(${Ellipse1})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
      >
      </div>
      <div
        className="absolute -top-40 w-[1500px] h-[900px]"
        style={{ backgroundImage: `url(${Ellipse2})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
      >
      </div>
    </div>
  )
}

export default Hero