import React from 'react'
import Logo from './Logo'
import Nav from './Nav'
import './Header.css'

const Header = ({ logo , theme }) => {
    // 전개연산자 사용법 
    //const {logo, h1, num} = {logo: 'KOREA', h1: 'jemicom', num: 30}
   
  return (
    <header className={ theme ?  'darkTheme' : null}>
        <div className='header-container' >
            <Logo logo={logo}/>
            <Nav theme={theme}/>
        </div>
    </header>
  )
}

// const Header = (props) => {
//     console.log('props ' , props);  
//     //{logo: 'KOREA', h1: 'jemicom', num: 30}
//     console.log( 'logo ', props.logo )
//      const {logo, h1, num} = props;
//      console.log( 'logo ', logo, h1, num )
//   return (
//     <header>
//         <div className='header-container'>
//             <Logo logo={props.logo}/>
//             <Nav />
//         </div>
//     </header>
//   )
// }

export default Header