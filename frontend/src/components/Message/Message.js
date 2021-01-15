import React from 'react';
import { Alert, Container } from 'react-bootstrap';

const Message = ({ variant, children }) => {
    return (
        <>
            <Alert variant={variant}>
                {children}
            </Alert>
        </>
    )
}

Message.defaultProps = {
    variant: 'dark',
}

export default Message
