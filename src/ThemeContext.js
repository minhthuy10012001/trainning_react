import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
// import { ThemeProvider } from '@material-ui/core';


const ThemeContext = createContext()
function ThemeProvider({children}) {
    const [theme, setTheme] = useState('dark')
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    const value = {
        theme,
        toggleTheme
    }
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeProvider}