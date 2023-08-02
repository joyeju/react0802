import React , {useContext} from 'react'
import DarkTheme from '../theme/DarkTheme'
import { ThemeContext } from '../../contexts/ThemeContextProvider'
import { Nav } from '../index'
import './Header.css'

const Header = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);
  const style = {
    height:"100px", 
    background: darkTheme ? "black" : "white",
    color:darkTheme ? "white" : "black"
  }
  return (
      <header style={style} className='header-container'>
        <h1>logo</h1>
        <Nav />
        <DarkTheme />
      </header>
  )
}

export default Header