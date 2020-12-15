import React from 'react'
import SpinnerIcon from './SpinnerIcon'

import './Spinner.css';

const Spinner = (props) => {
    return (
        <div className='spinner-overlay'>
            <SpinnerIcon/>            
        </div>
    )
}

export default Spinner
