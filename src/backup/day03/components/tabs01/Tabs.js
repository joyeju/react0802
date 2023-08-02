import React, {useState} from 'react'
// https://react-icons.github.io/react-icons/
// npm i react-icons
import { ImHeadphones } from "react-icons/im";
import { FaHeadphones } from "react-icons/fa";
import { MdLaptopChromebook } from "react-icons/md";
import './Tabs.css'

const Tabs = () => {
  const [ toggle, setToggle ] = useState(true);

  return (
    <div className='tabs-container'>
      <ul className='tab-btns'>
        <li className={toggle ? "active" : ""}
            onClick={ ()=>setToggle(true) }
        >
            <ImHeadphones />
            <span>오디오북</span>
        </li>
        <li className={!toggle ? "active" : ""}
            onClick={ ()=>setToggle(false) }
        >
            <MdLaptopChromebook />
            <span>뷰어</span>
        </li>
      </ul>
      <div className='tab-contents'>
          <div className={ toggle ? "active" : ""}>
            오디오북
            세상에서 가장
            교양있는 수면제
          </div>
          <div className={ !toggle ? "active" : ""}>
            밀리 뷰어
            독서를 위한 가장
            완벽한 도구
          </div>
      </div>
      
    </div>
  )
}

export default Tabs