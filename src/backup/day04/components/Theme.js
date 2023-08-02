import React, { useState } from 'react'
import { HiMoon, HiSun } from "react-icons/hi";
import './Theme.css'

const Theme = ({theme, setTheme}) => {
  return (
    <div className='theme-btn'
         onClick={()=> setTheme(!theme)}
         style={{ backgroundColor : theme ? "black" : "white"}}
    >
      {
          !theme ? 
          <HiSun /> : 
          <HiMoon />
      }
    </div>
  )
}

export default Theme