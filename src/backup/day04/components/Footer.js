import React from 'react'
import './Footer.css'
import Logo from './Logo'

const Footer = ({theme}) => {
  return (
    <footer className={ theme ? "darkTheme" : ""}>
        <div className='footer-container'> 
            <Logo />
            <div>
              CopyRight &copy;
              {
                new Date().getFullYear()
              }
            </div>
        </div>
    </footer>
  )
}

export default Footer