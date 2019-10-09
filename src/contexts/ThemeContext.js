import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
    const [isLightTheme, setLightTheme] = useState(false);
    const [light] = useState({ syntax: "#555", ui: "#ddd", bg: "#eee" });
    const [dark] = useState({ syntax: "#ddd", ui: "#333", bg: "#555" });
    return (
        <ThemeContext.Provider value={{ isLightTheme, setLightTheme, light, dark }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;