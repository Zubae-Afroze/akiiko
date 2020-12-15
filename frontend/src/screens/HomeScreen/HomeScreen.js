import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HomeScreenWomen from '../HomeScreenWomen/HomeScreenWomen';
import HomeScreenHome from '../HomeScreenHome/HomeScreenHome';
import './HomeScreen.css';
import HomeScreenWorkout from '../HomeScreenWorkout/HomeScreenWorkout';
import MyComponent from 'react-fullpage-custom-loader';
import SpinnerIcon from '../../components/Spinner/SpinnerIcon';

// import UseSpinner from '../../components/Spinner/UseSpinner';

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
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
        }, 2000);
        return () => clearTimeout(timer);
    }


    togglePageLoader = () => {
        this.setState({showLoader: !this.state.showLoader});
    }

    render () {
        return (
            <React.Fragment>
                {/* <UseSpinner loading={this.state.loading} /> */}
                {this.state.showLoader ? <MyComponent 
                    sentences={[]}
                    wrapperBackgroundColor={'rgba(255,255,255)'}
                    color={'#6e4e37'}
                    loaderType={'ball-spin-clockwise'}
                    customLoader={<SpinnerIcon />}
                /> : null}
            <Container>
                <Row className='home-screen-container' > {/* class name added here */}
                    <Col sm={4}>
                        <div className='hero-container'>
                            <div className='empty-div'></div>
                            <div className='hero-logo'>
                                akiiko
                            </div>
                            <div className='hero-text'>
                                eco-friendly<br/>
                                utilitarian<br/>
                                vegan
                            </div>
                            <div className='hero-sub-text'>
                            </div>
                            <div className='hero-button'>
                            <Link to='/bags/all_products'><button>
                                Shop Now
                            </button></Link>
                            </div>
                        </div>
                    </Col>
                    <Col sm={8} className='carousel-wrapper' style={{'marginBottom':'80px'}}>
                    <Carousel className='carousel-fade' pause={false} controls={false}>
                        <Carousel.Item interval={4000}>
                            <img
                            className="d-block w-100"
                            src={'/images/carousel_images/carousel_2.jpg'}
                            alt="First slide"
                            />
                            {/* <Carousel.Caption>
                                <h3 className='carousel-slide-1'>Introducing Akiiko</h3>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                        <Carousel.Item interval={4000}>
                            <img
                            className="d-block w-100"
                            src={'/images/carousel_images/carousel_1.jpg'}
                            alt="Second slide"
                            />
                            <Carousel.Caption className='carousel-slide-2'>
                            {/* <Row className='footer-image-row'>
                                <Col className='footer-image-col-1' sm><div><img src={'/images/font_images/nature.svg'} alt='natural'/></div>NATURAL</Col>
                                <Col className='footer-image-col-2' sm><div><img src={'/images/font_images/organic.svg'} alt='organic'/></div>ORGANIC</Col>
                                <Col className='footer-image-col-3' sm><div><img src={'/images/font_images/sustainable.svg'} alt='sustainable'/></div>SUSTAINABLE</Col>
                            </Row > */}
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={4000}>
                            <img
                            className="d-block w-100"
                            src={'/images/carousel_images/carousel_3.jpg'}
                            alt="Third slide"
                            />
                            <Carousel.Caption className='carousel-slide-3'>
                            {/* <Row className='footer-image-row'>
                                <Col className='footer-image-col-4' sm><div><img src={'/images/font_images/eco.svg'} alt='eco_friendly'/></div>ECO FRIENDLY</Col>
                                <Col className='footer-image-col-5' sm><div><img src={'/images/font_images/no_animal.svg'} alt='no_animal'/></div>NO ANIMAL SKIN</Col>
                                <Col className='footer-image-col-6' sm><div><img src={'/images/font_images/no_plastic.svg'} alt='no_plastic'/></div>NO PLASTIC</Col>
                            </Row> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={4000}>
                            <img
                            className="d-block w-100"
                            src={'/images/carousel_images/carousel_4.jpg'}
                            alt="Fourth slide"
                            />
                            {/* <Carousel.Caption className='carousel-slide-4'>
                            <h3>akiiko</h3>
                            <p>ALL UTILITY BAGS</p>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
                <HomeScreenWomen />
                <HomeScreenHome />
                <HomeScreenWorkout />
            </Container>
        </React.Fragment>
        )
    }
}

export default HomeScreen

