import { createContext, useState } from "react";
export const CountContext = createContext();

// Outlet : 컴포넌트 내에 다른 컴포넌트를 포장 
export const  CountContextProvider  = ({ children })=>{
    const [ count, setCount ] = useState(0); 

    return(
        <CountContext.Provider value={{ count, setCount   }}>
            { children }
        </CountContext.Provider>
    )
}