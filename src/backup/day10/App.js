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

// Outlet : 컴포넌트 내에 다른 컴포넌트를 포장 
const  ThemeContextProvider  = ({ children })=>{
    const [darkmode, setDarkMode ] = useState(false); 

    return(
        <ThemeContext.Provider value={{ darkmode, setDarkMode  }}>
            { children }
        </ThemeContext.Provider>
    )
}

const CountContext = createContext();

// Outlet : 컴포넌트 내에 다른 컴포넌트를 포장 
const  CountContextProvider  = ({ children })=>{
    const [ count, setCount ] = useState(0); 

    return(
        <CountContext.Provider value={{ count, setCount   }}>
            { children }
        </CountContext.Provider>
    )
}

// react-icons 
const App = () => {
  return (
    <ThemeContextProvider>
        <CountContextProvider>
            <div>
                DarkMode 
                <Page />
            </div>
        </CountContextProvider>
    </ThemeContextProvider>
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
    const { count, setCount } = useContext(CountContext);
    return(
         <section
                 style={{ background : darkmode ? "black" : "white" }}
         > {count}
                <button onClick={()=>setCount(count+1)}>click</button>
          </section>
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