import React from 'react'

function FeatureCard({icon, title, text}) {
  return (
    <div className='flex flex-col space-y-8 border border-gray-800 px-8 py-8 bg-bluish-gray rounded-xl w-80 sm:w-[500px] md:w-[300px] md:h-72 xl:w-72 xl:h-72'>
        <div className={`bg-gray-500 text-4xl px-5 py-6 w-20 rounded-full`}>{icon}</div>
        <div className='flex flex-col space-y-2'>
            <div className='font-raleway text-xl font-semibold'>{title}</div>
            <div className='font-roboto text-base text-gray-card'>{text}</div>
        </div>
    </div>
  )
}

export default FeatureCard