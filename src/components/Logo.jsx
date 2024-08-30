import React from 'react'
import logo from '../assets/logo.png'


function Logo({width='w-10 h-10'}) {
    return (
        <img src={logo} alt="" className={`${width}`} />
    )
}

export default Logo
