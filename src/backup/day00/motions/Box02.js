import React from 'react'
import {motion}  from "framer-motion"
import './Box.css'

const Box = () => {
  return (
    <motion.div  className='innerBox'
                //  style={{ opacity: 0 }}
                 initial={{ opacity:0}}
                 animate={{ opacity: 1, x : 360 }} 
                 transition={{ 
                  duration: 2 ,
                  type:"spring",
                  stiffeness: 1000
                }}
    >Box</motion.div> 
  )
}

export default Box