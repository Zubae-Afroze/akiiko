import React from 'react'
import  Spinner  from './Spinner';

const UseSpinner = (props) => {
        
    const retrunValue = props.loading ? <Spinner/> : null;

    return retrunValue;
};

export default UseSpinner
