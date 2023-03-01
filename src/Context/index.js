import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Content from './Content';
import  './index.css'
import { ThemeContext } from 'ThemeContext';

// export const ThemeContext = createContext()
// console.log(ThemeContext);

function Context(props) {
    const context = useContext(ThemeContext)


    return (
        <div style={{padding: 20}}>
        <button onClick={context.toggleTheme}>Toggle theme</button>
        <Content/>
    </div>

    );
}

export default Context;