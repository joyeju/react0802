import React, { useContext } from 'react'
import './Header.css'
import { ThemeContext } from '../contexts/ThemeContext'
import Logo from './Logo'

const Header = () => {
  const { darkmode } = useContext(ThemeContext);

  return (
    <header
        className={ darkmode ? "darkmode" : ""}
    >
        <Logo />
        {/* Nav 대신 Sns  */}
    </header>
  )
}

export default Header