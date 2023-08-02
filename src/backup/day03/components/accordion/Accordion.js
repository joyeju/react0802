import React, { useState } from 'react'
import './Accordion.css'

// 0 1 2 3
const datas = [
    {
        title : 'html',
        content : 'html content 1'
    },
    {
        title : 'css',
        content : 'css content 2'
    },
    {
        title : 'javascript',
        content : 'javascript content 3'
    },
    {
        title : 'react',
        content : 'react content 4'
    },
    {
        title : 'nextjs',
        content : 'nextjs content 5'
    },
]
// 객체데이터를 표현 
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