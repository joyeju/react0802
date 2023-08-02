import React from 'react'
import WrapLayout from './WrapLayout'
import MotionWrap from '../../Layouts/MotionWrap'

const Contect = () => {
  return (
    <div>Contect</div>
  )
}

//export default WrapLayout(Contect, "contect", "content")
export default MotionWrap(WrapLayout(Contect, "contect", "content"), "content3")