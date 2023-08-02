import React, { useEffect, useState, createContext } from 'react'
import { useContext } from 'react';
// useEffect 
// context : props drilling을 편리하게 사용하도록 만든 도구 
// props
// state

// 리엑트에서 사용되는 라이브러리 : props 다루거나, state
// react-icons : context
// animation : 
// chart : 

const ThemeContext = createContext();

const App = () => {
    const [darkmode, setDarkMode ] = useState(false); 

    useEffect(()=>{
       // clearTimeout()
       // removeEventListener()
    }, [darkmode])
  return (
    <ThemeContext.Provider value={{darkmode, setDarkMode}}>
        <div>
            DarkMode 
            <Page />
        </div>
    </ThemeContext.Provider>
  )
}

export default App

const Page = ()=>{
    return(
       <>
            <Header />
            <Section />
            <Footer />
       </>
    )
}


const Header = ()=>{
    const {darkmode, setDarkMode}= useContext(ThemeContext);
    // const bgStyle = {
    //     background : "black",
    //     color : "white"
    // }
    return(
         <header  style={{ background : darkmode ? "black" : "white" }}> header 

            <button onClick={()=>setDarkMode(!darkmode)}> darkmode </button>
         </header>
    )
}
const Section = ()=>{
    const {darkmode }= useContext(ThemeContext);
    return(
         <section
                 style={{ background : darkmode ? "black" : "white" }}
         > Section </section>
    )
}
const Footer = ()=>{
    const {darkmode }= useContext(ThemeContext);
    return(
         <footer
                style={{ background : darkmode ? "black" : "white" }}
         > footer </footer>
    )
}