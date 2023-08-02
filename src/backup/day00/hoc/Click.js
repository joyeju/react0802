import React, { useState } from 'react'

// const Click = () => {
//     const [count, setCount]=useState(0)
//   return (
//     <button onClick={ ()=>setCount(count + 1) }>Click { count } </button>
//   )
// }
// export default Click

import WrapCount from './WrapCount'

// const Click = ({increment}) => {
//       return (
//         <button onClick={ increment } >Click  </button>
//       )
// }

const Click = (props) => {
        return (
        <button onClick={ props.increment } >{ props.name} </button>
        )
}

export default WrapCount(Click)