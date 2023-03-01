import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {ThemeContext} from '../ThemeContext'


function Paragraph() {
    // console.log('theme', theme)
    const context = useContext(ThemeContext)
    return (
        <div>
            <p className={context.theme}>Context provides a way...</p>
        </div>
    );
}

export default Paragraph;