import React from 'react'

function BlurCircle({styles}) {
  return (
    <div className={`bg-[#facc15] blur-3xl opacity-15 w-96 h-96 rounded-full absolute ${styles}`}>
    </div>
  )
}

export default BlurCircle