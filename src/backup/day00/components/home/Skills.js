import React from 'react'
import WrapLayout from './WrapLayout'
import MotionWrap from '../../Layouts/MotionWrap'

const Skills = () => {
  return (
    <div>Skills</div>
  )
}

// export default Skills
// export default WrapLayout(Skills, "skills", "content")
export default MotionWrap(WrapLayout(Skills, "skills", "content"), "content4")