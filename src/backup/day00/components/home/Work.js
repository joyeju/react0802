import React from 'react'
import WrapLayout from './WrapLayout'
import MotionWrap from '../../Layouts/MotionWrap'

const Work = () => {
  return (
    <div>Work</div>
  )
}

//export default Work
//export default WrapLayout(Work, "work", "content")
export default MotionWrap(WrapLayout(Work, "work", "content"), "content5")