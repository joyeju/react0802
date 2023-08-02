import React, { useState } from 'react'
import './Accordion.css'

// jsx 문법
const Accordion = () => {
    const [show, setShow] = useState(""); 
    // 1,2,3,4 => A, B, C, D
    const showHandle = (num)=>{
        setShow(num);
        console.log(show)
    }
  return (
    <div className='accordion-container'>
        
        <div className="title"  onClick={()=>showHandle('A')}> 1. 제목 </div>
        <div className={ show=== "A" ? "content active" : "content"}>
           1, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia consectetur repellendus inventore minima sunt illum corrupti ipsa nam ratione incidunt sit quibusdam obcaecati, vel dolorem accusantium nobis libero alias facere.
        </div>
        <div className="title"  onClick={()=>setShow("B")}> 2. 제목 </div>
        <div className={ show==="B" ? "content active" : "content"}>
            2. dolor sit amet consectetur adipisicing elit. Officia consectetur repellendus inventore minima sunt illum corrupti ipsa nam ratione incidunt sit quibusdam obcaecati, vel dolorem accusantium nobis libero alias facere.
        </div>
        <div className="title"  onClick={()=>setShow("blue")}> 3. 제목 </div>
        <div  className={ show==="blue" ? "content active" : "content"} >
            3. sit amet consectetur adipisicing elit. Officia consectetur repellendus inventore minima sunt illum corrupti ipsa nam ratione incidunt sit quibusdam obcaecati, vel dolorem accusantium nobis libero alias facere.
        </div>
        <div className="title"  onClick={()=>setShow("green")}> 4. 제목 </div>
        <div  className={ show==="green" ? "content active" : "content"} >
            4. consectetur adipisicing elit. Officia consectetur repellendus inventore minima sunt illum corrupti ipsa nam ratione incidunt sit quibusdam obcaecati, vel dolorem accusantium nobis libero alias facere.
        </div>
    </div>
  )
}

export default Accordion