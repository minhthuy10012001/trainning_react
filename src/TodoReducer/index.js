import React from 'react';
import PropTypes from 'prop-types';
import { useReducer } from 'react';
import { useRef } from 'react';
import reducer, { initState } from './reducer';
import {setJob, addJob, deleteJob } from './action';
import logger from './logger';


// console.log(initState);



function TodoReducer(props) {
    const [state, dispatch] = useReducer(logger(reducer), initState)
    const {job, jobs} = state

    const inputRef = useRef();
    // console.log(jobs);
    const handleSubmit = () => {
        dispatch(addJob(job))
        dispatch(setJob(''))

        // inputRef.current.focus()
    }
    return (
        <div style = {{padding: '0 20px'}}>
            <h3>Todo Reducer</h3>
            <input
                value={job}
                placeholder='Enter todo...'
                onChange={e => {
                    dispatch(setJob(e.target.value))
                }}
            />
            <button onClick={handleSubmit}>Add</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key = {index}>{job}
                        <button onClick={() => dispatch(deleteJob(index))} style= {{background: "#fff"}}>&times;</button>
                    </li>
                ))}
    
            </ul>
        </div>
    );
}

export default TodoReducer;