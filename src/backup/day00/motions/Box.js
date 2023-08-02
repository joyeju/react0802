import React, { useState} from 'react'
import {motion}  from "framer-motion"
import './Box.css'

const Box = () => {
  const [isMotion, setIsMotion] = useState(false); 
  // namespace : 이름 중복 해결 
  const boxVarient = {
      ani01:{
        x:360
      }
  }
  const circleVarient = {
      ani01:{
        // background : "red"
        opacity:1
      },
      ani02:{
        opacity:0
      }
  }
  return (
   <>
     <div className='outBox'>
      <motion.div  className='innerBox'
                   variants={boxVarient}
                   animate="ani01" 
                   transition={{duration:2}}
      >Box</motion.div> 
    </div>
    <div className='outBox'>
      <motion.div  className='innerBox'
                   variants={circleVarient}
                   initial="ani02"
                   animate="ani01" 
                   transition={{duration:2}}
      >Box</motion.div> 
    </div>
   </>
  )
}

export default Box