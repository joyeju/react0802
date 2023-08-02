import React, { useState} from 'react'
import {motion}  from "framer-motion"
import './Box.css'

const Box = () => {
  const [isMotion, setIsMotion] = useState(false); 

  return (
    <motion.div  className='innerBox'

                 onClick={ ()=>setIsMotion(!isMotion) }
 
                 animate={{ 
                    opacity : isMotion ? 1 : 0.5,
                    x : isMotion ? 360: 0,
                    rotate : isMotion ? 360 : 0
                  }} 

                 transition={{ 
                  duration: 2 ,
                  type:"spring",
                  stiffeness: 1000
                }}
    >Box</motion.div> 
  )
}

export default Box