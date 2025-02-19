import { createContext, useContext, useEffect, useState } from "react";

// create context
const ThemeContext = createContext();

export const ThemeProvider = ({children})=>{
    const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode")==="true" ? true : false);

    const toggleTheme = ()=>{
        setDarkMode(prev =>{
            localStorage.setItem('dark',!prev);
            return !prev;
        })
    }
 // set the theme when the component mounts
    useEffect(()=>{
        document.body.classList.toggle('dark',darkMode);
    },[darkMode]);

    return (
        <ThemeContext.Provider value={{darkMode,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = ()=> useContext(ThemeContext);