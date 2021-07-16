import React from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import HomeScreenBags from '../HomeScreenBags/HomeScreenBags'
import HomeScreenHome from '../HomeScreenHome/HomeScreenHome'
import HomeScreenStorage from '../HomeScreenStorage/HomeScreenStorage'

import MyComponent from 'react-fullpage-custom-loader'
import SpinnerIcon from '../../components/Spinner/SpinnerIcon'

import './HomeScreen.css'

// import UseSpinner from '../../components/Spinner/UseSpinner';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showLoader: true,
    }
  }
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

  componentDidMount() {
    const timer = setTimeout(() => {
      this.togglePageLoader()
    }, 2000)
    return () => clearTimeout(timer)
  }

  componentWillUnmount() {
    this.setState({ showLoader: false })
  }

  togglePageLoader = () => {
    this.setState({ showLoader: !this.state.showLoader })
  }

  render() {
    return (
      <React.Fragment>
        {/* <UseSpinner loading={this.state.loading} /> */}
        {this.state.showLoader ? (
          <MyComponent
            sentences={[]}
            wrapperBackgroundColor={'rgba(255,255,255)'}
            color={'#6e4e37'}
            loaderType={'ball-spin-clockwise'}
            customLoader={<SpinnerIcon />}
          />
        ) : null}
        <Container>
          <Row className='home-screen-container'>
            <Col sm={4}>
              <div className='hero-container'>
                <div className='empty-div'></div>
                <div className='hero-logo'>akiiko</div>
                <div className='hero-text'>
                  eco-friendly
                  <br />
                  utilitarian
                  <br />
                  vegan
                </div>
                <div className='hero-sub-text'></div>
                <div className='hero-button'>
                  <Link to='/allproducts/productlist/bags'>
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
              <Carousel
                className='carousel-fade'
                pause={false}
                controls={false}
              >
                <Carousel.Item interval={4000}>
                  <img
                    className='d-block w-100'
                    src={'/images/carousel_images/carousel_1.jpg'}
                    alt='First slide'
                  />
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                  <img
                    className='d-block w-100'
                    src={'/images/carousel_images/carousel_2.png'}
                    alt='Second slide'
                  />
                  <Carousel.Caption className='carousel-slide-2'></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                  <img
                    className='d-block w-100'
                    src={'/images/carousel_images/carousel_3.png'}
                    alt='Third slide'
                  />
                  <Carousel.Caption className='carousel-slide-3'></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                  <img
                    className='d-block w-100'
                    src={'/images/carousel_images/carousel_4.jpg'}
                    alt='Fourth slide'
                  />
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
          <HomeScreenBags />
          <HomeScreenHome />
          <HomeScreenStorage />
        </Container>
      </React.Fragment>
    )
  }
}

export default HomeScreen
