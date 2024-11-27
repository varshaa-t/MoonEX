import React from 'react'

function Button({text, variant, styles}) {
  return (
    <div className={`${variant == "yellow" ? "text-black bg-gradient-to-r from-yellow to-light-yellow py-4 px-9" : "text-yellow border-yellow border-2 py-3"} ${styles} font-raleway font-extrabold hover:cursor-pointer rounded-[1.7rem] sm:text-sm sm:w-48 sm:h-12 sm:rounded-3xl`}>
        {text}
    </div>
  )
}

export default Button