import React, {useContext} from 'react'
import { NavLink } from 'react-router-dom';
import './NavBar.css'
import { ThemeContext } from '../contexts/ThemeContext'

const  navs = [ "main" , "coins" ,  "posts", "about" , "contact", "login"];
const NavBar = () => {
  const { darkmode, setDarkMode }= useContext(ThemeContext);
  return (
    <nav className={ darkmode ? "lnb darkmode" : "lnb"}>
      <ul>
        {
          navs.length &&  navs.map((nav)=>(
            <li  key={nav}>
              <NavLink to={nav}>{nav}</NavLink>
            </li>
          ))
        }
      </ul>

      <div  className='darkmodeBtn'>
            <button 
                onClick={()=>setDarkMode(!darkmode)}
                className={ darkmode ? "darkmode" : ""}
                style={{ border : darkmode ? `1px solid white` : `1px solid black`}}
            >
              {!darkmode ? "dark":"normal"}
            </button>
      </div>
    </nav>
  )
}

export default NavBar