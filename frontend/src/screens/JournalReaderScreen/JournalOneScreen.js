import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import './JournalScreen.css'
import accessories from './assets/accessories.jpg'
import bags from './assets/bags.jpg'
import gift from './assets/gift.jpg'
import home from './assets/home.jpg'
import lifestyle from './assets/lifestyle.jpg'
import storage from './assets/storage.jpg'

const JournalScreen = () => {
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
                Japanese Aesthetic Sensibilities: <br />
                <span className='alt_color'>akiiko’s approach to design</span>
              </h2>
            </div>
            <div className='jone_author-div'>
              <span className='jone_author-img'>
                <img src='/favicon.svg' alt='icon' />
              </span>
              <span className='jone_author-name'>Akiiko</span>
              <span className='jone_author-date'>September 19, 2021</span>
              <span className='jone_author-read'>2 min read</span>
            </div>
            <div div className='jone_div-wrap'>
              <p>
                Influenced by the Japanese way of thinking, akiiko’s inspiration
                has been sought from what exists in nature & the underlying idea
                that what is useful is beautiful. The natural tones of our
                products, serve as a blank canvas for the user to paint meaning
                on to & cherish for its simple beauty. We are earnest believers
                of the fact that space should not be overwhelmed by pattern and
                chaos.
              </p>
            </div>
            <div className='jone_banner-img'>
              <img src='/images/blog_images_1/1.jpg' alt='jone_banner' />
            </div>
            <div className='jone_div-wrap'>
              <h3>akiiko is an eco-friendly brand</h3>
              <p>
                Founded by{' '}
                <strong>
                  <a href='https://www.linkedin.com/in/brajesh-gutgutia-3b240b49/'>
                    Brajesh Gutgutia
                  </a>
                </strong>{' '}
                in 2020, akiiko’s creations are designed with ethical simplicity
                and usability in mind. The brand’s vision is aimed towards
                creating <em>utility</em> products with a minimalist & nature
                first outlook. This is also reflected in our colour palette,
                carefully curated with shades that match the ones that exist in
                nature.
              </p>
            </div>
            <div className='jone_div-wrap'>
              <h3>
                akiiko believes in the art of simple, decluttered and functional
                living.
              </h3>
              <p>
                Using cotton and bamboo in our self-care products like the
                facial care set, we are <em>utilitarian</em> and pay close
                attention to visual aesthetic when it comes to design. akiiko
                re-iterates our inherent connection with nature through products
                that cherish this bond. Every aspect of our creativity,
                prioritizes <em>functionality</em> & sustainability. The fabrics
                of akiiko are derived from nature without the addition of any
                harmful elements.
              </p>
              <h2>
                akiiko is special because of our uncomplicated approach to
                designing eco-conscious products. A one stop solution for the
                needs of a <em>modern home</em> & minimalistic lifestyle.
              </h2>
            </div>
            <div className='jone_img'>
              <img src='/images/blog_images_1/3.jpg' alt='blog_img' />
              <img src='/images/blog_images_1/4.jpeg' alt='blog_img' />
            </div>
            <div className='jone_div-wrap'>
              <h3>akiiko’s eco-conscious mindset</h3>
              <p>
                From the sourcing of materials like <em>natural fabrics</em> to
                the shipment of every product, we question the need to use
                plastic and ensure that every element of our packaging is{' '}
                <em>eco-friendly</em>. We believe that <em>purposeful</em>{' '}
                packaging is key. The usage of Hemp Fabric for our products has
                also been inspired from the countless benefits it promises for
                the environment. As Akiiko’s ethos is embedded in the art of
                sustainability and sensitivity towards nature, we also refrain
                from using animal skin in any of our products. We are committed
                to ensuring that our collections are vegan and cruelty-free.
              </p>
            </div>
            <div className='jone_img'>
              <img src='/images/blog_images_1/5.jpg' alt='blog_img' />
              <img src='/images/blog_images_1/6.jpg' alt='blog_img' />
            </div>
            <div className='jone_div-wrap'>
              <h3>the product range</h3>
              <p>
                With bags, gifts, storage items and accessories, our catalogue
                is equipped for a modern consumer and a contemporary home. Every
                collection contains something unique yet must-have in terms of
                usability and design. Ranging from our quirky circle bags to our
                practical fold-over totes, our bags showcase our distinct
                presence, where each creation is made with an especial interest
                & unique flair. For the home aficionados, we have some
                impeccable organisers for the house. The most intriguing element
                of our organisers is that they aim towards decluttering a space
                with ease & beauty. To consider as an example, our vegan bread
                baskets help display bread, while adding character to your
                dinner table. Products like our sandwich bag, promise freshness
                for your breads.
              </p>
            </div>

            <div className='all-categories-wrapper'>

              <CategoriesCardJournalCMP title={'Bags'} src={bags} link={'/bags'} />
              <CategoriesCardJournalCMP title={'Home'} src={home} link={'/home'} />
              <CategoriesCardJournalCMP title={'Lifestyle'} src={lifestyle} link={'/lifestyle'} />
              <CategoriesCardJournalCMP title={'Gift'} src={gift} link={'/gift'} />
              <CategoriesCardJournalCMP title={'Storage'} src={storage} link={'/storage'} />
              <CategoriesCardJournalCMP title={'Accessories'} src={accessories} link={'/accessories'} />

            </div>

            <div>
              <h2>
                Such is the objective behind our designs: To come up with
                something that people can benefit from, in our ethos & through
                our aesthetic, akiiko seeks to leave a legacy for generations to
                experience, cherish and live by.
              </h2>
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

  function CategoriesCardJournalCMP(props){
    return(
      <div className='categories-card-journal'>
        <Link to={props.link}>
          <img src={props.src} alt='' width={'100%'} />
          <p>{props.title}</p>
        </Link>
      </div>
    );
  }
}

export default JournalScreen
