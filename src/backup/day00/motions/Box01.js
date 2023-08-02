import React from 'react'
import {motion}  from "framer-motion"
import './Box.css'

const Box = () => {
  return (
    <motion.div  animate={{ x: "360px", rotate : "360deg" }} 
                 className='innerBox'
    >Box</motion.div>
  )
}

export default Box