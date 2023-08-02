import React, { useState } from 'react'
import './Accordion.css'

// 객체데이터를 표현 
const Accordion = ({ datas}) => {
    const [show, setShow] = useState(""); 
    // 1,2,3,4 => A, B, C, D // 0 1 2 3
    const showHandle = (num)=>{
        setShow(num);
        console.log(show)
    }
  return (
    <div className='accordion-container'>
        {
            datas.map((item, index)=>(
                <>
                    <div className="title"  
                         onClick={()=>showHandle(index)}
                    >
                        {item.title}
                    </div>
                    <div className={ show===index ? "content active" : "content"}>
                        { item.content}
                    </div>
                </>
            ))
        }
    </div>
  )
}
 
export default Accordion