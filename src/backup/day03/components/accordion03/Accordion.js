import React, { useState } from 'react'
import './Accordion.css'

// 0 1 2 3
const titles = ["html", "css", "javascript", "react"]
const contents = ["1html contents ", "2css contents ", "3javascript contents ", "4react contents "]

const Accordion = () => {
    const [show, setShow] = useState(""); 
    // 1,2,3,4 => A, B, C, D // 0 1 2 3
    const showHandle = (num)=>{
        setShow(num);
        console.log(show)
    }
  return (
    <div className='accordion-container'>
        {
            titles.map((title, index)=>(
                <>
                    <div className="title"  onClick={()=>showHandle(index)}>{title}</div>
                    <div className={ show===index ? "content active" : "content"}>
                        { contents[index]}
                    </div>
                </>
            ))
        }
    </div>
  )
}
/* 1단계
const Accordion = () => {
    const [show, setShow] = useState(""); 
    // 1,2,3,4 => A, B, C, D
    const showHandle = (num)=>{
        setShow(num);
        console.log(show)
    }
  return (
    <div className='accordion-container'>
        
        <div className="title"  onClick={()=>showHandle('A')}>{titles[0]}</div>
        <div className={ show=== "A" ? "content active" : "content"}>
            { contents[0]}
        </div>
        <div className="title"  onClick={()=>setShow("B")}>{titles[1]}</div>
        <div className={ show==="B" ? "content active" : "content"}>
           { contents[1]}
        </div>
        <div className="title"  onClick={()=>setShow("blue")}>{titles[2]}</div>
        <div  className={ show==="blue" ? "content active" : "content"} >
            { contents[2] }
        </div>
        <div className="title"  onClick={()=>setShow("green")}>{titles[3]} </div>
        <div  className={ show==="green" ? "content active" : "content"} >
            { contents[3]}
        </div>
    </div>
  )
}
*/
export default Accordion