import React from 'react'
import Navbar from '../components/Navbar'
import BlurCircle from '../components/BlurCircle'
import Circle from '../components/Circle'
import MultipleStars from '../components/MultipleStars'
import Star from '../components/Star'
import Button from '../components/Button'

function Hero() {
  return (
    <div className='h-screen'>
      <Navbar/>
      <div className='flex flex-col mt-40 ml-16 space-y-10'>
        <div>
          <div className='text-white text-7xl font-neue-machina-bold w-[60vw]'>
            Trusted Multi-Chain <span className='text-yellow'>DEX</span> Platform
          </div>
          <div className='text-medium-gray font-neue-machina-regular text-2xl'>
            Trade, earn, and own crypto on the all-in-one multi-chain DEX
          </div>
        </div>
        <div className='flex space-x-8'>
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
      <Circle/>
      <MultipleStars styles={"absolute top-40 left-32"}/>
      <MultipleStars styles={"absolute top-[500px] right-64"}/>
      <Star styles={"absolute top-32 right-64"}/>
    </div>
  )
}

export default Hero