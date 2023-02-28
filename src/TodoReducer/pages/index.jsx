import React from 'react';
import PropTypes from 'prop-types';
import { useReducer } from 'react';

const initState = {
    job: '',
    jobs: []
}
// console.log(initState);
const SET_JOB = "set_job"
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

const setJob = payload => {
    // console.log(payload);
    return {
        
        type: SET_JOB,
        payload
    }
}
const addJob = payload => {
    return {
        type: ADD_JOB,
        payload
    }
}
const deleteJob = payload => {
    return {
        type: DELETE_JOB,
        payload
    }
}


const reducer = (state, action) => {
    let newState;
    switch(action.type){
        case SET_JOB:
            newState = {
                ...state,
                jobs: action.payload
            }
            break
        case ADD_JOB:
            newState = {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
            break
        default:
            throw new Error('Invalid action.')
    }
    return newState;
}

function TodoReducer(props) {
    const [state, dispatch] = useReducer(reducer, initState)
    const {job, jobs} = state
    console.log(jobs);
    const handleSubmit = () => {
        dispatch(addJob(job))
        dispatch(setJob(''))
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
            {/* <ul>
                {jobs.map((ite, index) => (
                    <li key = {index}>{ite} &times;</li>
                ))}
    
            </ul> */}
        </div>
    );
}

export default TodoReducer;