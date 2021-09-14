import React from 'react'
import { Link } from 'react-router-dom'
import './Journal.css'

const JournalCard = (props) => {
  return (
    <Link to={props.link}>
      <div className='journals-main'>
        <div className='journals-card'>
          <img src={props.img} alt='journal_image' />
          <p>{props.title}</p>
        </div>
      </div>
    </Link>
  )
}

const Journal = () => {
  return (
    <div className='journals-wrap'>
      <h2>Journal</h2>
      <div className='journals-second'>
        <JournalCard
          img='/images/carousel_images/carousel_1.jpg'
          link='/'
          title='Japanese Aesthetic Sensibilities'
        />
        <JournalCard
          img='/images/carousel_images/carousel_2.jpg'
          link='/'
          title='Test Journal'
        />
        <JournalCard
          img='/images/carousel_images/carousel_3.jpg'
          link='/'
          title='Test Journal'
        />
      </div>
    </div>
  )
}

export default Journal
