import React from 'react'
import { IoStarSharp } from "react-icons/io5";

export default function Star({styles}) {
  return (
    <IoStarSharp className={`${styles} text-2xl text-white`}/>
  )
}
