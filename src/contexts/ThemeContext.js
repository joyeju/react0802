import { createContext, useState } from "react";

export const ThemeContext = createContext();

// Outlet : 컴포넌트 내에 다른 컴포넌트를 포장 
export const  ThemeContextProvider  = ({ children })=>{
    const [darkmode, setDarkMode ] = useState(false); 

    return(
        <ThemeContext.Provider value={{ darkmode, setDarkMode  }}>
            { children }
        </ThemeContext.Provider>
    )
}

// export { ThemeContext, ThemeContextProvider}