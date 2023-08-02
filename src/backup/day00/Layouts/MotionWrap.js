import React from 'react'
import { motion } from 'framer-motion'

const MotionWrap = (Component, classname) => function HOC(){
  return (
    <motion.div
                whileInView={{ x : [ 100, 0, 50 ], opacity: [0.4, 0, 1]}}
                viewport={{ amout : 0.2 }}
                // 화면을 기준으로 1=100, 0 화며끝
                transition={{ duration: 1 }}
                classname={ classname }
                

                style={{ borderBottom:'1px solid black'}}
    >
        <Component />
    </motion.div>
  )
}

export default MotionWrap