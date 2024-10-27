import { createContext, useState } from "react";

export const ThemeContext = createContext();

// eslint-disable-next-line react/prop-types
const ThemeContextProvider = ({ children }) => {
    const [darkTheme, setDarkTheme] = useState(false);

    const toggleTheme = () => {
        setDarkTheme(!darkTheme);
        console.log('Theme has been changed to ' + `${darkTheme ? "Dark": "Light"}`)
    }

    return (
        <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
            {children} {/* Render children */}
        </ThemeContext.Provider>
    );
}


export default ThemeContextProvider;