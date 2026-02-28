import { createContext, useState, useEffect } from "react";
export const ThemeContext = createContext();

export default function ThemeProvider({children}) {
    const [isDark,setIsDark] = useState(false);
    const toggleTheme=()=>{
        setIsDark(prev=>!prev);

    };
    useEffect(()=>{
        localStorage.setItem("theme",isDark?"dark" :"light");
    },[isDark]);

    useEffect(()=>{
        const savedTheme=localStorage.getItem("theme");
        if (savedTheme === "dark"){
            setIsDark(true);
        }
    },[]);

    return(
        <ThemeContext.Provider value={{isDark,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );



}
