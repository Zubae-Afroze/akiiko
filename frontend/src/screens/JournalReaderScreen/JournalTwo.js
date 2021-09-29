import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'

import Img1 from './assets/BlogTwo/Img1.jpg'
import Img2 from './assets/BlogTwo/Img2.jpg'
import Img3 from './assets/BlogTwo/Img3.jpg'
import Img4 from './assets/BlogTwo/Img4.jpg'
import Img5 from './assets/BlogTwo/Img5.jpg'
import Img6 from './assets/BlogTwo/Img6.jpg'

import './Journal.css'

const JournalTwo = () => {
  return (
    <>
      <Container>
        <div className='blog-wrap'>
          <div className='blog-links'>
            <Link to='/journal'>Journal </Link>
            <Link to='/journal/japanese_aesthetic_sensibilities'>
              / Japanese Aesthetic Sensibilities
            </Link>
          </div>
          <div className='blogs-main'>
            <h2>
              How To: <br />
              <span className='blog-alt_color'>
                Set up a Nature Inspired Table
              </span>
            </h2>
          </div>
          <div className='blog-author_wrap'>
            <span className='blog-author_image'>
              <img src='/favicon.svg' alt='author_image' />
            </span>
            <span className='blog-author_attr'>Akiiko</span>
            <span className='blog-author_attr'>September 25, 2021</span>
            <span className='blog-author_attr'>2 mins read</span>
          </div>
          <div className='blog-content__wrap'>
            <p>
              If the heart of a house lies in the kitchen, the soul may
              definitely reside on the dining table of a household. Dining
              rooms’ trends tend to evolve with them, but nothing can match
              something minimal, classic and timeless. The art of “less is more”
              can be very artfully depicted on a nature inspired dining table.
            </p>
            <p>
              Natural elements include the usage of organic products in a
              tasteful manner. In order to make a space attractive yet
              multifunctional, one has to carefully pick the kind of storage
              ideas that are considered for a table. For example, Akiiko’s
              Dining Range consists of items that a dining table of the modern
              home needs. Equipped with a set of{' '}
              <Link
                to='/product/circle-bread-baskets-with-wooden-stand'
                target='_blank'
              >
                <span>
                  <em>
                    <u>circle</u>
                  </em>
                </span>
              </Link>{' '}
              and{' '}
              <Link
                to='/product/square-bread-baskets-with-wooden-stand'
                target='_blank'
              >
                <em>
                  <u>square</u>
                </em>
              </Link>{' '}
              trays with a detachable wooden stand,{' '}
              <Link to='/product/biskk-placemats' target='_blank'>
                <em>
                  <u>placemats</u>
                </em>
              </Link>
              ,{' '}
              <Link to='/product/square-stripe-coasters' target='_blank'>
                <em>
                  <u>striped coasters</u>
                </em>{' '}
              </Link>
              and{' '}
              <Link to='/product/herra-tablerunner' target='_blank'>
                <em>
                  <u>table runners</u>
                </em>
              </Link>
              , Akiiko’s idea towards dining ware is rather simplistic, but
              great attention is given towards usability.
            </p>
          </div>
          <div className='blog-display_image'>
            <Link
              to='/product/square-bread-baskets-with-wooden-stand'
              target='_blank'
              rel='noreferrer'
            >
              <img src={Img1} alt='blog_image_one' />
            </Link>
            <Link to='/product/biskk-coasters' target='_blank' rel='noreferrer'>
              <img src={Img2} alt='blog_image_one' />
            </Link>
          </div>
          <div className='blog-content__wrap'>
            <p>
              In order to understand how to incorporate simple eco-friendly
              elements for your dining table, consider the following points:
            </p>
            <h3>1. Always go with a neutral colour palette:</h3>
            <p>
              Going neutral always works its magic when we want something
              timeless and elegant. Hence, choosing neutral hues will always be
              preferable.
            </p>
            <p>
              Akiiko’s{' '}
              <Link to='/product/biskk-coasters'>
                <em>
                  <u>“Biskk Coasters”</u>
                </em>
              </Link>{' '}
              come in light shades that compliment the space and make it look
              appealing. It’s also important to consider the natural fabric that
              is used on the table. Akiiko’s{' '}
              <Link to='/product/fringe-hemp-tableRunner'>
                <em>
                  <u>Table Runners”</u>
                </em>
              </Link>{' '}
              are crafted out of three major fabrics; Woven cotton, Juco and
              Hemp. These fabrics are extremely airy and durable.
            </p>
          </div>
          <div className='blog-display_image'>
            <Link
              to='/product/square-bread-baskets-with-wooden-stand'
              target='_blank'
              rel='noreferrer'
            >
              <img src={Img3} alt='blog_image_one' />
            </Link>
            <Link to='/product/biskk-coasters' target='_blank' rel='noreferrer'>
              <img src={Img4} alt='blog_image_one' />
            </Link>
          </div>
          <div className='blog-content__wrap'>
            <h3>2. Incorporate quirky elements of storage:</h3>
            <p>
              Storage plays a vital role in a decluttered space. Consider
              storing your bread and essentials in small storage boxes which
              also enhance the overall appeal of the space.
            </p>
            <p>
              Akiiko has introduced{' '}
              <Link
                to='/product/circle-bread-baskets-with-wooden-stand'
                target='_blank'
              >
                <em>
                  <u>“Circle Bread Baskets"</u>
                </em>
              </Link>{' '}
              which come with a detachable wooden stand. These baskets can be
              used to keep bread or some other forms of grub on the table. Some
              vegan snacks, such as trail mixes, crackers and roasted chickpeas
              can also be artfully displayed on Akiiko’s circle and square
              trays. These utilitarian baskets and trays are pleasing to look at
              and highly effective too. With a shift in the eating habits of
              people, veganism as a way of life is taking momentum steadily.
              Vegans have always had a strong take on classic sandwiches.
              Akiiko’s sandwich bags are practical, eye-catching and ensure
              garden-freshness all day long!
            </p>
          </div>
          <div className='blog-display_image'>
            <Link
              to='/product/square-bread-baskets-with-wooden-stand'
              target='_blank'
              rel='noreferrer'
            >
              <img src={Img5} alt='blog_image_one' />
            </Link>
            <Link to='/product/biskk-coasters' target='_blank' rel='noreferrer'>
              <img src={Img6} alt='blog_image_one' />
            </Link>
          </div>
          <div className='blog-content__wrap'>
            <h3>3. Always pay heed to the tiny details: </h3>
            <p>
              A well-suited dining table is a combination of all things big and
              small, and the small ones take up most of the space in actuality.
              Hence, consider displaying your cutlery in a fashionable way by
              using Akiiko’s cutlery case which comes in a pack of six. This
              vegan fabric cutlery case is perfect when you’re packing your
              lunch or simply making a statement with your food. They also
              ensure that the cutlery remains free of dust.
            </p>
            <p>
              Akiiko’s inspiration for kitchen decor has always been aimed at
              going minimal with one’s food habits and monochrome with one’s
              choice of style. The{' '}
              <Link to='/product/herra-placemats'>
                <em>
                  <u>“Herra Placemats”</u>
                </em>
              </Link>{' '}
              ensures that you bid adieu to the temptation of overcrowding your
              dining table and switch to something more calm, composed and
              neutral.
            </p>
          </div>
          <div className='blog-content__wrap'>
            <h4>
              The Akiiko dining collection adds character to your table setting
              with raw natural fibres, along with enhanced utility. It has never
              been easier to set up a gorgeous table, impress your guests with
              something new, beautiful & thoughtful. To compliment your table,
              you can also shop the stunning akiiko home collection from our
              website,{' '}
              <Link to='/' style={{ color: '#977257' }}>
                <em>www.akiiko.com.</em>
              </Link>
            </h4>
          </div>
          <div className='blog-key'>
            <span>Functional</span>
            <span>Sustainable</span>
            <span>Gifts</span>
            <span>Contemporary</span>
            <span>Bamboo</span>
            <span>Cotton</span>
            <span>Essentials</span>
            <span>Inspiration</span>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  )
}

export default JournalTwo
