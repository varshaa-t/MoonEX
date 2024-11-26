import React from 'react'

function Button({text, variant, styles}) {
  return (
    <div className={`${variant == "yellow" ? "text-black bg-gradient-to-r from-yellow to-light-yellow py-4 px-9" : "text-yellow border-yellow border-2 py-3"} ${styles} font-raleway font-extrabold hover:cursor-pointer text-sm w-48 h-12 rounded-3xl`}>
        {text}
    </div>
  )
}

export default Button