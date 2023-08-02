import { useState, createContext, useContext } from 'react';
// 사용자 정보는 페이지 전체에서 활용되어야 함 

const AuthContext = createContext(null);

export const AuthProvider = ({children}) =>{
    const [ user, setUser] = useState(null);

    const login = user=>{
        setUser(user);
    }
    const logout = ()=>{
        setUser(null);
    }

    return(
        <AuthContext.Provider  value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

// auth hook

export const useAuth = () =>{
    return useContext(AuthContext)    
}