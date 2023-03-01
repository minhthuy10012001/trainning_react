import React from 'react';
import PropTypes from 'prop-types';
import Context from 'Context';
import { useState } from 'react';
import { useReducer } from 'react';
import reducer, { initState } from './reducer';


function Provider({chidlren}) {
    const [state, dispatch] = useReducer(reducer, initState)
    return (
        <Context.Provider value = {[state, dispatch]}>
            {chidlren}
        </Context.Provider>
    );
}

export default Provider;