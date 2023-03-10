import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';

CounterFeature.propTypes = {
    
};

function CounterFeature(props) {
    const dispatch = useDispatch()
    const counter = useSelector(state => state.counter);
    const handleIncreaseClick = () => {
        const action = increase(); //action creator
        console.log(action);
        dispatch(action);
    }
    const handleDecreaseClick = () => {
        const action = decrease();
        dispatch(action)
    }
    return (
        <div>
            Counter: {counter}
            <div>
                <button onClick={handleIncreaseClick}>Increase</button>
                <button onClick={handleDecreaseClick}>Decrease</button>
            </div>
        </div>
    );
}

export default CounterFeature;