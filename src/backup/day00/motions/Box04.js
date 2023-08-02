import React, { useState} from 'react'
import {motion}  from "framer-motion"
import './Box.css'

const Box = () => {
  const [isMotion, setIsMotion] = useState(false); 

  return (
    <motion.div  className='innerBox'
                 animate={{ 
                    opacity : 1 ,
                    x : 360 ,
                    rotate : 360  
                  }} 

                  whileHover={{ scale: 1.2}}
                  whileTap={{ scale: 0.7}}
                  drag

                  transition={{ 
                    duration: 2 ,
                    type:"spring",
                    stiffeness: 1000
                  }}
    >Box</motion.div> 
  )
}

export default Box