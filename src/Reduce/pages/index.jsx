import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useReducer } from 'react';


const initState = 0;

//action
const UP_ACTION = "up"
const DOWN_ACTION = "down"

//reducer
const reducer = (state, action) => {
    // console.log('reducer running...');
    switch(action){
        case UP_ACTION:
            return state + 1
        case DOWN_ACTION:
            return state - 1
        default:
            throw new Error('Invalid action')
    }
}
function Reduce(props) {
    const [count, dispatch] = useReducer(reducer, initState)
    return (
        <div style = {{padding: '0 20px'}}>
            <h1>{count}</h1>
            <button
                onClick={() => dispatch(DOWN_ACTION)}
            >Down</button>
            <button
                onClick={() => dispatch(UP_ACTION)}
            >Up</button>
        </div>
    );
}

export default Reduce;