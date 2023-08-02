import React from 'react'
import WrapLayout from './WrapLayout'
import MotionWrap from '../../Layouts/MotionWrap'

const Main = () => {
  return (
    <div>Main</div>
  )
}

//export default Main
// export default WrapLayout(Main, "main", "content")
export default MotionWrap(WrapLayout(Main, "main", "content"), "content1")
