import React from 'react'
import oopsIcon from './oopsSVG.svg'
import { FooterBottom } from '../../components/Footer/Footer'

export default function Error404Screen() {
    return (
        <>
        <div style={{
            width: '100%',
            height: '80vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'red'
        }}>
            <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection:'column',
                color: '#afa092',
                fontFamily: 'rutan'
                // backgroundColor: 'red'
            }}>
             <img src={oopsIcon} alt='oops' />
             <h3>404 Page Not Found</h3>
            </div>
        </div>
        <FooterBottom />
        </>
    )
}
