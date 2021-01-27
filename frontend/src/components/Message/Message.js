import React from 'react';
import { Alert } from 'react-bootstrap';

import './Message.css'

const Message = ({ children }) => {
    return (
        <div className='message-style'>  
            <Alert>
                {children}
            </Alert>
        </div>
    )
}

export default Message
