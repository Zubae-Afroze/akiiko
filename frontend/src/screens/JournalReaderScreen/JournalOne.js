import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import banner from './assets/BlogOne/banner.jpg'
import ImageTwo from './assets/BlogOne/ImageTwo.jpg'
import ImageThree from './assets/BlogOne/ImageThree.jpg'
import ImageFour from './assets/BlogOne/ImageFour.jpg'
import ImageFive from './assets/BlogOne/ImageFive.jpg'

import accessories from './assets/BlogOne/accessories.jpg'
import bags from './assets/BlogOne/bags.jpg'
import gift from './assets/BlogOne/gift.jpg'
import home from './assets/BlogOne/home.jpg'
import lifestyle from './assets/BlogOne/lifestyle.jpg'
import storage from './assets/BlogOne/storage.jpg'

import './Journal.css'
import Footer from '../../components/Footer/Footer'

const JournalOne = () => {
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
              Japanese Aesthetic Sensibilities: <br />
              <span className='blog-alt_color'>
                akiiko’s approach to design
              </span>
            </h2>
          </div>
          <div className='blog-author_wrap'>
            <span className='blog-author_image'>
              <img src='/favicon.svg' alt='author_image' />
            </span>
            <span className='blog-author_attr'>Akiiko</span>
            <span className='blog-author_attr'>September 19, 2021</span>
            <span className='blog-author_attr'>2 mins read</span>
          </div>
          <div className='blog-content__wrap'>
            <p>
              Influenced by the Japanese way of thinking, akiiko’s inspiration
              has been sought from what exists in nature & the underlying idea
              that what is useful is beautiful. The natural tones of our
              products, serve as a blank canvas for the user to paint meaning on
              to & cherish for its simple beauty. We are earnest believers of
              the fact that space should not be overwhelmed by pattern and
              chaos.
            </p>
          </div>
          <div className='blog-banner_img'>
            <Link to='/' target='_blank'>
              <img src={banner} alt='blog one banner img' />
            </Link>
          </div>
          <div className='blog-content__wrap'>
            <h3>Eco-Friendly brand</h3>
            <p>
              Founded by{' '}
              <strong>
                <a
                  href='https://www.linkedin.com/in/brajesh-gutgutia-3b240b49/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Brajesh Gutgutia
                </a>
              </strong>{' '}
              in 2020, akiiko’s creations are designed with ethical simplicity
              and usability in mind. The brand’s vision is aimed towards
              creating <em>utility</em> products with a minimalist & nature
              first outlook. This is also reflected in our color palette,
              carefully curated with shades that match the ones that exist in
              nature.
            </p>
          </div>
          <div className='blog-content__wrap'>
            <h3>Art of simple, decluttered and functional living</h3>
            <p>
              Using cotton and bamboo in our self-care products like the facial
              care set, we are <em>utilitarian</em> and pay close attention to
              visual aesthetic when it comes to design. akiiko re-iterates our
              inherent connection with nature through products that cherish this
              bond. Every aspect of our creativity, prioritizes{' '}
              <em>functionality</em> & sustainability. The fabrics of akiiko are
              derived from nature without the addition of any harmful elements.
            </p>
            <h4>
              akiiko is special because of our uncomplicated approach to
              designing eco-conscious products. A one stop solution for the
              needs of a <em>modern home</em> & minimalistic lifestyle.
            </h4>
          </div>
          <div className='blog-display_image'>
            <Link
              to='/product/facial-care-set'
              target='_blank'
              rel='noreferrer'
            >
              <img src={ImageTwo} alt='blog_image_one' />
            </Link>
            <Link
              to='/product/square-bread-baskets-with-wooden-stand'
              target='_blank'
              rel='noreferrer'
            >
              <img src={ImageThree} alt='blog_image_one' />
            </Link>
          </div>
          <div className='blog-content__wrap'>
            <h3>Art of simple, decluttered and functional living</h3>
            <p>
              Using cotton and bamboo in our self-care products like the facial
              care set, we are <em>utilitarian</em> and pay close attention to
              visual aesthetic when it comes to design. akiiko re-iterates our
              inherent connection with nature through products that cherish this
              bond. Every aspect of our creativity, prioritizes{' '}
              <em>functionality</em> & sustainability. The fabrics of akiiko are
              derived from nature without the addition of any harmful elements.
            </p>
            <h4>
              akiiko is special because of our uncomplicated approach to
              designing eco-conscious products. A one stop solution for the
              needs of a <em>modern home</em> & minimalistic lifestyle.
            </h4>
          </div>
          <div className='blog-display_image'>
            <Link>
              <img src={ImageFour} alt='blog_image_one' />
            </Link>
            <Link>
              <img src={ImageFive} alt='blog_image_one' />
            </Link>
          </div>
          <div className='blog-content__wrap'>
            <h3>Eco-conscious mindset</h3>
            <p>
              From the sourcing of materials like <em>natural fabrics</em> to
              the shipment of every product, we question the need to use plastic
              and ensure that every element of our packaging is{' '}
              <em>eco-friendly</em>. We believe that <em>purposeful</em>{' '}
              packaging is key. The usage of Hemp Fabric for our products has
              also been inspired from the countless benefits it promises for the
              environment. As Akiiko’s ethos is embedded in the art of
              sustainability and sensitivity towards nature, we also refrain
              from using animal skin in any of our products. We are committed to
              ensuring that our collections are vegan and cruelty-free.
            </p>
          </div>
          <div className='blog-content__wrap'>
            <h3>Product range</h3>
            <p>
              With bags, gifts, storage items and accessories, our catalogue is
              equipped for a modern consumer and a contemporary home. Every
              collection contains something unique yet must-have in terms of
              usability and design. Ranging from our quirky circle bags to our
              practical fold-over totes, our bags showcase our distinct
              presence, where each creation is made with an especial interest &
              unique flair. For the home aficionados, we have some impeccable
              organisers for the house. The most intriguing element of our
              organisers is that they aim towards decluttering a space with ease
              & beauty. To consider as an example, our vegan bread baskets help
              display bread, while adding character to your dinner table.
              Products like our sandwich bag, promise freshness for your breads.
            </p>
          </div>
          <div className='blog-cat_wrap'>
            <CatergoriesDisplay title={'Bags'} src={bags} link={'/bags'} />
            <CatergoriesDisplay title={'Home'} src={home} link={'/home'} />
            <CatergoriesDisplay
              title={'Lifestyle'}
              src={lifestyle}
              link={'/lifestyle'}
            />
            <CatergoriesDisplay title={'Gift'} src={gift} link={'/gift'} />
            <CatergoriesDisplay
              title={'Storage'}
              src={storage}
              link={'/storage'}
            />
            <CatergoriesDisplay
              title={'Accessories'}
              src={accessories}
              link={'/accessories'}
            />
          </div>
          <div className='blog-content__wrap'>
            <h4>
              Such is the objective behind our designs: To come up with
              something that people can benefit from, in our ethos & through our
              aesthetic, akiiko seeks to leave a legacy for generations to
              experience, cherish and live by.
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

  function CatergoriesDisplay(props) {
    return (
      <div className='blog-cat_card'>
        <Link to={props.link} target='_blank'>
          <img src={props.src} alt={props.link} width={'100%'} />
          <p>{props.title}</p>
        </Link>
      </div>
    )
  }
}

export default JournalOne
