import React, { useState } from 'react'
import './hoc.css'


// const MouseOver = () => {
//     const [count, setCount]=useState(0)
//   return (
//     <button onMouseOver={ ()=>setCount(count + 1) }>MouseOver { count } </button>
//   )
// }

// export default MouseOver

import WrapCount from './WrapCount'
// const MouseOver = ({increment}) => {
//     return (
//       <button onMouseOver={ increment }>MouseOver  </button>
//     )
//   }
 
const MouseOver = (props) => {
      return (
        <button onMouseOver={ props.increment }>  { props.name }  </button>
      )
    }
export default WrapCount(MouseOver)