import React from 'react'
import WrapLayout from './WrapLayout'
import MotionWrap from '../../Layouts/MotionWrap'

const Aboutme = () => {
  return (
    <div>Aboutme</div>
  )
}

// export default Aboutme
// export default WrapLayout(Aboutme, "aboutme", "content")
export default MotionWrap(WrapLayout(Aboutme, "aboutme", "content"), "content")