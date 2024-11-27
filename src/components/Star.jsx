import React, { useRef } from 'react'
import { IoStarSharp } from "react-icons/io5";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Star({styles}) {

  const starRef = useRef();

  useGSAP(() => {
    gsap.from(starRef.current, {
      opacity: 0,
      duration: 1,
      delay: 1.5,
    })
  })

  return (
    <div ref={starRef}>
      <IoStarSharp className={`${styles} text-2xl text-white`}/>
    </div>
  )
}
