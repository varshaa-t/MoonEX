import React from 'react'

function LightBlurCircle({styles}) {
  return (
    <div className={`bg-[#fef08a] blur-3xl opacity-10 w-96 h-96 rounded-full absolute ${styles}`}>
    </div>
  )
}

export default LightBlurCircle