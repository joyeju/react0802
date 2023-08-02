import React,{ useState } from 'react'
import { ImMenu } from "react-icons/im";
import { FaTimes } from "react-icons/fa";
import './Sidebar.css'

const Sidebar = () => {
    const [ btntoggle, setBtnToggle ]= useState(false);

  return (
    <div className={btntoggle ? 'sideber-container active' : 'sideber-container'}>
       {
            btntoggle ?  
            <ImMenu className='sideBtn'
                onClick={ ()=>setBtnToggle(!btntoggle)}
            /> 
            : <FaTimes className='sideBtn'
                    onClick={ ()=>setBtnToggle(!btntoggle)} 
              />
       }
    </div>
  )
}

export default Sidebar