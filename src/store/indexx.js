import React from 'react';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { StoreContext } from 'store';
import Context from 'Context';
import { Provider } from './Provider';
import {reducer} from './reducer'



function Store(props) {
    const [state, dispatch] = useContext(StoreContext)
    console.log(state);
    return (
        <div>
            <Context/>
            <Provider/>

            <h1>Hi there!</h1>
        </div>
    );
}

export default Store;