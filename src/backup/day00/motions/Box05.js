import React, { useState} from 'react'
import {motion}  from "framer-motion"
import './Box.css'

const Box = () => {
  const [isMotion, setIsMotion] = useState(false); 

  return (
    <div className='outBox'>
      <motion.div  className='innerBox'
                  
                  drag 
                  // drag="x"
                  // drag="y"
                  dragConstraints={{
                      right: 20,
                      left: -20,
                      top:-20,
                      bottom: 20
                  }}

                  transition={{ 
                    duration: 2 ,
                    type:"spring",
                    stiffeness: 1000
                  }}
      >Box</motion.div> 
    </div>
  )
}

export default Box