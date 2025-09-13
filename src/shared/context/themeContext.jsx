import { createContext, useState, useContext, useEffect } from "react";


const ThemeContext = createContext();

const defaultThemeColor = '#2C3E50'
const themes = {
    dark: {
        name: 'dark',
        primaryColor: '#1F2937',
        backgroundColor: '#5a5555ff',
        textColor: '#E5E7EB',
        buttonColor: '#3B82F6',
    },
    light: {
        name: 'light',
        primaryColor: '#F4A261',
        backgroundColor: '#eed1b9ff',
        textColor: '#000000',
        buttonColor: '#2A9D8F',
    },
    blue: {
        name: 'blue',
        primaryColor: '#4FA3D9',
        backgroundColor: '#e3f2fd',
        textColor: '#0d47a1',
        buttonColor: '#1976d2',
    },
};

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(themes.blue);
    // console.log(theme);

    useEffect(() => {
        const root = document.documentElement;
        Object.entries(theme).forEach(([key, value]) => {
            root.style.setProperty(`--${key}`, value)
        })
        console.log(theme)
    }, [theme])


    const changeTheme = (name) => {
        setTheme(name);
    }

    return (
        <ThemeContext.Provider value={{ themes, theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}


export const useTheme = () => useContext(ThemeContext);
