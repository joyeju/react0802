import React from 'react'
import './DotLayout.css'

const dots = ['main', 'aboutme', 'skills', 'work', 'contect']
// tootip 등으로 활용할 수 있어서 단순히 번호로 돌리지 않음

const DotLayout = ({isActive, setIsActive}) => {
  return (
    // <ul class="pageIndecator">
    //     <li><a href="#main">main</a></li>
    //     <li><a href="#aboutme">aboutme</a></li>
    //     <li><a href="#skills">skills</a></li>
    //     <li><a href="#contact">contact</a></li>
    // </ul>
    <ul  className="pageIndecator">
        {
            dots.map(dot=>(
                <li key={dot}>
                    <a href={`#${dot}`}
                       onClick={()=>setIsActive(dot)}
                       className={ isActive === dot ? "active" : ""}
                    >
                        {/* {dot} */}
                    </a>
                </li>
                )
            )
        }
    </ul>
  )
}

export default DotLayout