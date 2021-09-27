import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import JournalCardCMP from './JournalCardCMP'
import './Journal.css'

const JournalCard = (props) => {
  return (
    <div>
      <Link to={props.link}>
        <div className='journal-card'>
          <div className='journal-card-image'>
            <img src={props.src} alt='blog_display_image' />
          </div>
          <div className='card-attr'>
            <p>{props.date}</p>
            <p>{props.read}</p>
          </div>
          <h5>{props.title}</h5>
          <p>{props.content}</p>
          <p>Read More</p>
        </div>
      </Link>
    </div>
  )
}

const Journal = () => {
  return (
    <OldComp />
  )
}

function NewComponent(){
  return (
    <div className='journals-whole-component-wrapper'>
    <div className='journals-component-wrapper'>
        <div className='journals-component-header-wrapper'>
          {/* <div className='journal-header-text'> */}
            <h3>Journal</h3>
            {/* <h5> View More &#187;</h5> */}
          {/* </div> */}

          <div className='journals-body-component-wrapper'>
            <JournalCardCMP 
              title='Japanese Aesthetic Sensibilities: akiiko’s approach to design'
              content='Influenced by the Japanese way of thinking, akiiko’s inspiration has
              been sought [...]'
              src='/images/blog_images_1/2.jpeg'
              link='/journal/japanese_aesthetic_sensibilities'
              date='13 September 2021'
              read='2 mins'
            />

            <JournalCardCMP 
              title='HOW TO: Set up a Nature Inspired Table'
              content='If the heart of a house lies in the kitchen, the soul may definitely reside on the dining [...]'
            src='/images/blog_images_2/Thumbnail.jpg'
              link='/journal/set-up-a-nature-inspired-table'
              date='13 September 2021'
              read='2 mins'
            />

            <JournalCardCMP 
              title='Japanese Aesthetic Sensibilities: akiiko’s approach to design'
              content='Influenced by the Japanese way of thinking, akiiko’s inspiration has
              been sought [...]'
              src='/images/blog_images_1/2.jpeg'
              link='/journal/japanese_aesthetic_sensibilities'
              date='13 September 2021'
              read='2 mins'
            />

            <JournalCardCMP 
              title='Japanese Aesthetic Sensibilities: akiiko’s approach to design'
              content='Influenced by the Japanese way of thinking, akiiko’s inspiration has
              been sought [...]'
              src='/images/blog_images_1/2.jpeg'
              link='/journal/japanese_aesthetic_sensibilities'
              date='13 September 2021'
              read='2 mins'
            />

          </div>

          {/* <Link to='/'>
            <div className='jouranl-link'>View All Posts</div>
          </Link> */}
        </div>

    </div>
    </div>
  )
}


function OldComp(){
  return (
    <div>
      <Container>
        <div className='journal-main'>
          {/* <div className='journal-header-text'> */}
          <h3>Journal</h3>
          {/* <h5> View More &#187;</h5> */}
          {/* </div> */}

          {/* <JournalCardCMP /> */}

          <div className='journal-wrap'>
            <JournalCard
              title='Japanese Aesthetic Sensibilities: akiiko’s approach to design'
              content='Influenced by the Japanese way of thinking, akiiko’s inspiration has
            been sought [...]'
              src='/images/blog_images_1/2.jpeg'
              link='/journal/japanese_aesthetic_sensibilities'
              date='13 September 2021'
              read='2 mins'
            />
            {/* </div> */}
            {/* <div className='journal-wrap'> */}

            <JournalCard
              title='HOW TO: Set up a Nature Inspired Table'
              content='If the heart of a house lies in the kitchen, the soul may definitely reside on the dining [...]'
              src='/images/blog_images_2/thumb.jpg'
              link='/journal/set-up-a-nature-inspired-table'
              date='13 September 2021'
              read='2 mins'
            />
          </div>



          {/* <Link to='/'>
            <div className='jouranl-link'>View All Posts</div>
          </Link> */}
        </div>
      </Container>
    </div>
  )
}

export default Journal
