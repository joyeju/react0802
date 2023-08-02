import React, { useState } from 'react'
import './Collepse.css'

export const Collepse = () => {
    const [ show, setShow ] = useState(false);
     
    const showHandle = ()=>{
        setShow(!show);
        console.log(show);
    }
  return (
    <div className="collepse">
        <div className="title"  onClick={showHandle}> 제목 </div>
        <div className={ show ? "content active" : "content" }>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia consectetur repellendus inventore minima sunt illum corrupti ipsa nam ratione incidunt sit quibusdam obcaecati, vel dolorem accusantium nobis libero alias facere.
        </div>
    </div>
  )
}
