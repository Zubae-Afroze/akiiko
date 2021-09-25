import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import './JournalScreen.css'

const JournalTwoScreen = () => {
  return (
    <>
      <div className='jone_wrap'>
        <div>
          <div className='jone_link'>
            <Link to='/journal'>Journal </Link>
            <Link to='/journal/japanses_aesthetic_sensibilities'>
              / Japanese Aesthetic Sensibilities
            </Link>
          </div>
          <div className='jone_main'>
            <div className='jone_alt'>
              <h2>
              HOW TO: <br />
                <span className='alt_color'>Set up a Nature Inspired Table</span>
              </h2>
            </div>
            <div className='jone_author-div'>
              <span className='jone_author-img'>
                <img src='/favicon.svg' alt='icon' />
              </span>
              <span className='jone_author-name'>Akiiko</span>
              <span className='jone_author-date'>September 25, 2021</span>
              <span className='jone_author-read'>2 min read</span>
            </div>
            <div div className='jone_div-wrap'>
              <p>
              If the heart of a house lies in the kitchen, the soul may definitely reside on the dining table of a
household. Dining rooms’ trends tend to evolve with them, but nothing can match something
minimal, classic and timeless. The art of “less is more” can be very artfully depicted on a nature
inspired dining table. 

              </p>
              <br/>
              <p>
              Natural elements include the usage of organic products in a tasteful manner. In order to make a
space attractive yet multifunctional, one has to carefully pick the kind of storage ideas that are
considered for a table. For example, Akiiko’s Dining Range consists of items that a dining table
of the modern home needs. Equipped with a set of circle and square trays with a detachable
wooden stand, placemats, striped coasters and table runners, Akiiko’s idea towards dining ware
is rather simplistic, but great attention is given towards usability. 

              </p>
              <br/>
              <div className='jone_img'>
                <img src='/images/blog_images_2/1.jpg' alt='jone_banner' />
                <img src='/images/blog_images_2/2.jpg' alt='jone_banner' />
              </div>
              <p>
              In order to understand how to incorporate simple eco-friendly elements for your dining table,
consider the following points: 
              </p>
            </div>
            <div className='jone_div-wrap'>
              <h3>1. Always go with a neutral colour palette:</h3>
              <p>
              Going neutral always works its magic when we want something timeless and elegant. Hence,
choosing neutral hues will always be preferable. 
              </p>
              <br/>
              <div className='jone_banner-img'>
              <img src='/images/blog_images_2/3.jpg' alt='jone_banner' />
            </div>
              <p>
              Akiiko’s “Biskk Coasters” come in light shades that compliment the space and make it look
appealing. It’s also important to consider the natural fabric that is used on the table. Akiiko’s
“Table Runners” are crafted out of three major fabrics; Woven cotton, Juco and Hemp. These
fabrics are extremely airy and durable. 
              </p>
            </div>
            <div className='jone_div-wrap'>
              <h3>
              2. Incorporate quirky elements of storage: 
              </h3>
              <p>
              Storage plays a vital role in a decluttered space. Consider storing your bread and essentials in
small storage boxes which also enhance the overall appeal of the space.
              </p>
              <br />
              <div className='jone_banner-img'>
              <img src='/images/blog_images_2/4.jpg' alt='jone_banner' />
            </div>
              <p>
              Akiiko has introduced “Circle Bread Baskets'' which come with a detachable wooden stand.
These baskets can be used to keep bread or some other forms of grub on the table. Some
vegan snacks, such as trail mixes, crackers and roasted chickpeas can also be artfully
displayed on Akiiko’s circle and square trays. These utilitarian baskets and trays are pleasing to
look at and highly effective too. With a shift in the eating habits of people, veganism as a way of
life is taking momentum steadily. Vegans have always had a strong take on classic sandwiches.
Akiiko’s sandwich bags are practical, eye-catching and ensure garden-freshness all day long! 
              </p>
            </div>
            {/* <div className='jone_img'>
              <img src='/images/blog_images_1/3.jpg' alt='blog_img' />
              <img src='/images/blog_images_1/4.jpeg' alt='blog_img' />
            </div> */}
            <div className='jone_div-wrap'>
              <h3>3. Always pay heed to the tiny details: </h3>
              <p>
              A well-suited dining table is a combination of all things big and small, and the small ones take
up most of the space in actuality. Hence, consider displaying your cutlery in a fashionable way
by using Akiiko’s cutlery case which comes in a pack of six. This vegan fabric cutlery case is
perfect when you’re packing your lunch or simply making a statement with your food. They also
ensure that the cutlery remains free of dust. 
              </p>
              <br />
              <div className='jone_img'>
                <img src='/images/blog_images_2/5.jpg' alt='jone_banner' />
                <img src='/images/blog_images_2/6.jpg' alt='jone_banner' />
              </div>
              <p>
              Akiiko’s inspiration for kitchen decor has always been aimed at going minimal with one’s food
habits and monochrome with one’s choice of style. The “Herra Placemats” ensures that you bid
adieu to the temptation of overcrowding your dining table and switch to something more calm,
composed and neutral.
              </p>
            </div>
          
          </div>
          <div className='jone__key'>
            <span>Functional</span>
            <span>Sustainable</span>
            <span>Keywordsmall</span>
            <span>Gifts</span>
            <span>Contemporary</span>
            <span>Bamboo</span>
            <span>Cotton</span>
            <span>Essentials</span>
            <span>Inspiration</span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default JournalTwoScreen
