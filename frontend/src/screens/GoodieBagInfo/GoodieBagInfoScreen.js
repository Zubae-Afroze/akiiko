import React from 'react'
import { Link } from 'react-router-dom'
import './goodieBagInfoScreenStyle.css'

export default function GoodieBagInfoScreen() {
    return (
        <div className='goodie-bag-info-screen-wrapper'>

            <div style={{maxWidth:'800px'}}>

                <h5>Goodie Bags: </h5>
                <h6>1. The Stationery Set </h6>
                <p>A sampler pack of our <Link to={`/`}>mini notepads</Link>, picked at random along with the custom <Link to={`/`}>akiiko pencil.</Link></p>
                <span>Available on orders above Rs.700</span>

                <h6>2. The Self-Care Set </h6>
                <p>A sampler pack of our <Link to={`/`}>scrunchies</Link> & <Link to={`/`}>facial towels</Link> picked at random along with a <Link to={`/`}>mesh bag</Link>. </p>
                <span>Available on orders above Rs.1200 </span>

                <h6>3. The Daily Essentials Set </h6>
                <p>A sampler pack of our <Link to={`/`}>striped coasters</Link>, <Link to={`/`}>net shopping bag</Link> & <Link to={`/`}>mini pouch</Link> for you to add functionality to your daily life. </p>
                <span>Available on orders above Rs.3000</span>
 
            </div>
        </div>
    )
}
