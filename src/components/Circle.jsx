import React from 'react'
// import gsap from 'gsap'
// import { useGSAP } from '@gsap/react'

function Circle({styles}) {

  // const circleRef = useRef();

  // useGSAP(() => {
  //   gsap.from(circleRef.current, {
  //     opacity: 0,
  //     x: 100,
  //     duration: 1,
  //     delay: 1.5
  //   })
  // })

  return (
    <div 
      // ref={circleRef} 
      className={`bg-gradient-to-br from-[#FFF6D7] from-10% to-[#E4B40D] to-80% rounded-full absolute ${styles}`}
    >
    </div>
  )
}

export default Circle