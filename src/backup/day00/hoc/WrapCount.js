import React, { useState } from 'react'
import './hoc.css'

// const WrapCount = (Component) => {
//     // javascript : 클로저
//     // Layout
//     const NewComponent = ()=>{
//         const [count, setCount]=useState(0)
//         return (
//             <div>
//                 {count}
//                 <Component increment={()=>setCount(count+1)} />
//             </div>
//         )
//     }
//     return NewComponent;
// }

// HOC 
const WrapCount = (Component) => function  HOC( props ){ 

    const [count, setCount]=useState(0)
    return (
        <div>
            {count}
            <Component increment={()=>setCount(count+1)} 
                      {...props}
            />
        </div>
    )
}


export default WrapCount