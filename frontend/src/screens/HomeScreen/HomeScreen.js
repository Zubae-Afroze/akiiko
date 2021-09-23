import React, { useEffect } from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import HomeScreenBags from '../HomeScreenBags/HomeScreenBags'
import HomeScreenHome from '../HomeScreenHome/HomeScreenHome'
import HomeScreenStorage from '../HomeScreenStorage/HomeScreenStorage'

import MyComponent from 'react-fullpage-custom-loader'
import SpinnerIcon from '../../components/Spinner/SpinnerIcon'
import Footer from '../../components/Footer/Footer'
import TopPopUpComp from '../../components/TopPopUp/TopPopUpComp'
import ReactPixel from 'react-facebook-pixel'
import HomeScreenCarouselSlide from './HomeScreenCarousel/HomeScreenCarouselSlide'
// import TopPopUpComp ,{showTopPopUp} from '../../components/TopPopUp/TopPopUpComp'

import './HomeScreen.css'
import { Helmet } from 'react-helmet'

import linenBagDS from './HomeScreenCarousel/assets/Hemp pouch desktop.jpg'
import linenBagLP from './HomeScreenCarousel/assets/Linen bag laptop.jpg'
import linenBagTB from './HomeScreenCarousel/assets/Linen bag ipad.jpg'
import linenBagMB from './HomeScreenCarousel/assets/Linen bag mobile.jpg'

// import UseSpinner from '../../components/Spinner/UseSpinner';

const options = {
  autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
  debug: false, // enable logs
}

const HomeScreen = () => {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     showLoader: true,
  //   }
  // }
  // componentDidMount
  // ComponentShouldUpdate
  // componentDidUpdate
  // ComponentWillUnmount -- Important

  // ifFontsLoaded = () => {
  //     document.fonts.ready.then(() => {
  //         this.setState({
  //             loading: false,
  //         })
  //       });
  // }

  // componentDidMount() {
  //     this.setState({
  //         loading: true,
  //     }, () => {
  //         this.ifFontsLoaded();
  //     })
  // }

  // componentDidMount() {
  //   const timer = setTimeout(() => {
  //     this.togglePageLoader()
  //   }, 2000)
  //   return () => clearTimeout(timer)
  // }

  // componentWillUnmount() {
  //   this.setState({ showLoader: false })
  // }

  // togglePageLoader = () => {
  //   this.setState({ showLoader: !this.state.showLoader })
  // }

  useEffect(() => {
    ReactPixel.init('545518393387265', options)
    ReactPixel.pageView()
  }, [])

  return (
    <React.Fragment>
      <TopPopUpComp />
      {/* <TopPopUpComp /> */}
      {/* <UseSpinner loading={this.state.loading} /> */}
      {/* {this.state.showLoader ? (
          <MyComponent
            sentences={[]}
            wrapperBackgroundColor={'rgba(255,255,255)'}
            color={'#6e4e37'}
            loaderType={'ball-spin-clockwise'}
            customLoader={<SpinnerIcon />}
          />
        ) : null} */}
      <div>
        <Helmet>
          <title>akiiko: Natural Home Decor and Lifestyle Products</title>
          <meta
            name='description'
            content="Live a clutter-free lifestyle. Categorized as home decor, utility products, storage bags - this eco-friendly collection of lifestyle products are available on akiiko's website. Shop now at akiiko."
          ></meta>
        </Helmet>
        <Container>
          <OldCarouselComp />
          <HomeScreenBags />
          <HomeScreenHome />
          <HomeScreenStorage />
        </Container>

        <div className='floating-chat-icon'>
          <a
            href='https://wa.me/+919858590505'
            target='_blank'
            rel='noreferrer'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='30'
              height='30'
              fill='currentColor'
              className='bi bi-whatsapp'
              viewBox='0 0 16 16'
            >
              <path d='M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z' />
            </svg>
          </a>
        </div>
      </div>
      {/* <button onClick={()=>{showTopPopUp('Hyy it Worked')}}> Click Button </button>
        <button onClick={()=>{showTopPopUp('Hyy it Worked 2')}}> Click Button </button> */}
      <Footer />
    </React.Fragment>
  )

  // function NewCarouselComp(){
  //   return(
  //     <>
  //       <Carousel className='carousel-fade' pause={false} controls={false}>
  //             <Carousel.Item interval={4000}>
  //               {/* <Link to='/productlist/bags/tote'> */}
  //                 <HomeScreenCarouselSlide urls={[linenBagDS,linenBagLP,linenBagTB,linenBagMB]} />
  //               {/* </Link> */}
  //             </Carousel.Item>
  //             <Carousel.Item interval={4000}>
  //               {/* <Link to='/productlist/home/dining'> */}
  //                 <HomeScreenCarouselSlide urls={[linenBagDS,linenBagLP,linenBagTB,linenBagMB]} />
  //               {/* </Link> */}
  //               <Carousel.Caption className='carousel-slide-2'></Carousel.Caption>
  //             </Carousel.Item>
  //         </Carousel>
  //     </>
  //   );
  // }

  function OldCarouselComp() {
    return (
      <Row className='home-screen-container'>
        <Col sm={4}>
          <div className='hero-container'>
            <div className='empty-div'></div>
            <div className='hero-logo'>akiiko</div>
            <h1 className='hero-text'>
              eco-friendly
              <br />
              utilitarian
              <br />
              vegan
            </h1>
            <div className='hero-sub-text'></div>
            <div className='hero-button'>
              <Link to='/search'>
                <button>Shop Now</button>
              </Link>
            </div>
          </div>
        </Col>
        <Col
          sm={8}
          className='carousel-wrapper'
          style={{ marginBottom: '80px', zIndex: '0' }}
        >
          <Carousel className='carousel-fade' pause={false} controls={false}>
            <Carousel.Item interval={4000}>
              <Link to='/productlist/bags/tote'>
                <img
                  className='d-block w-100'
                  src={'/images/carousel_images/carousel_1.jpg'}
                  alt='the bindle bag collection'
                />
              </Link>
            </Carousel.Item>
            <Carousel.Item interval={4000}>
              <Link to='/productlist/home/dining'>
                <img
                  className='d-block w-100'
                  src={'/images/carousel_images/carousel_2.jpg'}
                  alt='tableware collection'
                />
              </Link>
              <Carousel.Caption className='carousel-slide-2'></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={4000}>
              <Link to='/product/60f945fa8df1a30d9f0ac75e'>
                <img
                  className='d-block w-100'
                  src={'/images/carousel_images/carousel_3.jpg'}
                  alt='Box Puches made with woven cotton'
                />
              </Link>
              <Carousel.Caption className='carousel-slide-3'></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={4000}>
              <Link to='product/60f945748df1a30d9f0ac75d'>
                <img
                  className='d-block w-100'
                  src={'/images/carousel_images/carousel_4.jpg'}
                  alt='Trianble hemp pouches'
                />
              </Link>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    )
  }
}

export default HomeScreen
