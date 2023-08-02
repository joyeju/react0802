import React, { useState } from 'react'

export const Collepse = () => {
    const [ show, setShow ] = useState(false);
    // state : 화면(ui) 갱신을 하고 싶을 때 
    // show = false
    // setShow( true )
    // show = true
    
    let count = 0;   
    const clickHandle =  ()=>{
        count++;
        console.log('click ', count);
    }

    const showHandle = ()=>{
        setShow(!show);
        console.log(show);
    }
  return (
    <div className="collepse">
        <div className="title"  onClick={showHandle}> 제목 </div>
        <div className="content" 
             style={{ display : show ? "block" : "none"}}
        >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia consectetur repellendus inventore minima sunt illum corrupti ipsa nam ratione incidunt sit quibusdam obcaecati, vel dolorem accusantium nobis libero alias facere.
        </div>
    </div>
  )
}
