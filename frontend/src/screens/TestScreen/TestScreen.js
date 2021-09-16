import React, { useState } from 'react'
import HomeScreenBags from '../HomeScreenBags/HomeScreenBags'
import HomeScreenHome from '../HomeScreenHome/HomeScreenHome'
import HomeScreenStorage from '../HomeScreenStorage/HomeScreenStorage'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import './TestScreen.css'
import { Container } from 'react-bootstrap'
import ProductTagComponent from '../../components/ProductTagComp/ProductTagComp'
import CarouselItem from '../../components/CarouselItemComp/CarouselItem'
import desktopImg from './Desktop.jpg';
import tabImg from './Ipad.jpg';
import mob from './Mobile.jpg';
import {  Carousel } from 'react-bootstrap'

// import { storage } from '../..'

const TestScreen = () => {
  // const [imageRef, setImageRef] = useState(null)

  // storage
  //   .ref('/carousel_images/carousel_1.jpg')
  //   .getDownloadURL()
  //   .then((url) => {
  //     console.log(url)
  //     setImageRef(url)
  //     return url
  //   })
  const intervalVal = 6000;

  return (
    <>
    {/* <CarouselItem urls={[desktopImg,desktopImg,tabImg,mob]}>
          <ProductTagComponent laptop={['18%','40%']} tab={['15%','40%']} mob={['12%','40%']} title={'Product 1'} price={'100'} />
          <ProductTagComponent laptop={['30%','52%']} tab={['23%','45%']} mob={['18%','50%']} title={'Product 2'} price={'1200'} />
          <ProductTagComponent laptop={['13%','80%']} tab={['13%','72%']} mob={['12%','80%']} title={'Product 3'} price={'999'} />
        </CarouselItem> */}
    <Carousel pause={'hover'} controls={false}>

      <Carousel.Item interval={intervalVal}>
        <CarouselItem urls={[desktopImg,desktopImg,tabImg,mob]}>
          <ProductTagComponent laptop={['18%','40%']} tab={['15%','40%']} mob={['12%','40%']} title={'Product 1'} price={'100'} />
          <ProductTagComponent laptop={['30%','52%']} tab={['23%','45%']} mob={['18%','50%']} title={'Product 2'} price={'1200'} />
          <ProductTagComponent laptop={['13%','80%']} tab={['13%','72%']} mob={['12%','80%']} title={'Product 3'} price={'999'} />
        </CarouselItem>
      </Carousel.Item>

      <Carousel.Item interval={intervalVal}>
      <CarouselItem urls={[desktopImg,desktopImg,tabImg,mob]}>
          <ProductTagComponent laptop={['18%','40%']} tab={['15%','40%']} mob={['12%','40%']} title={'Product 1'} price={'100'} />
          <ProductTagComponent laptop={['30%','52%']} tab={['23%','45%']} mob={['18%','50%']} title={'Product 2'} price={'1200'} />
          <ProductTagComponent laptop={['13%','80%']} tab={['13%','72%']} mob={['12%','80%']} title={'Product 3'} price={'999'} />
        </CarouselItem>
        <Carousel.Caption className='carousel-slide-2'></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={intervalVal}>
        <CarouselItem urls={[desktopImg,desktopImg,tabImg,mob]}>
          <ProductTagComponent laptop={['18%','40%']} tab={['15%','40%']} mob={['12%','40%']} title={'Product 1'} price={'100'} />
          <ProductTagComponent laptop={['30%','52%']} tab={['23%','45%']} mob={['18%','50%']} title={'Product 2'} price={'1200'} />
          <ProductTagComponent laptop={['13%','80%']} tab={['13%','72%']} mob={['12%','80%']} title={'Product 3'} price={'999'} />
        </CarouselItem>
        <Carousel.Caption className='carousel-slide-3'></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={intervalVal}>
        <CarouselItem urls={[desktopImg,desktopImg,tabImg,mob]}>
          <ProductTagComponent laptop={['18%','40%']} tab={['15%','40%']} mob={['12%','40%']} title={'Product 1'} price={'100'} />
          <ProductTagComponent laptop={['30%','52%']} tab={['23%','45%']} mob={['18%','50%']} title={'Product 2'} price={'1200'} />
          <ProductTagComponent laptop={['13%','80%']} tab={['13%','72%']} mob={['12%','80%']} title={'Product 3'} price={'999'} />
        </CarouselItem>
      </Carousel.Item>
    </Carousel>
    </>
  )
}

function TestComp(){
  return (
    <>
      <div className='test__banner-image'>
        {/* <img src={'/images/carousel_images/new_banner.jpg'} alt='image_ref' /> */}
        {/* <ProductTagComp /> */}
        <ProductTagComponent laptop={['18%','40%']} tab={['15%','40%']} mob={['12%','40%']} title={'Product 1'} price={'100'} />
        <ProductTagComponent laptop={['30%','52%']} tab={['23%','45%']} mob={['18%','50%']} title={'Product 2'} price={'1200'} />
        <ProductTagComponent laptop={['13%','80%']} tab={['13%','72%']} mob={['12%','80%']} title={'Product 3'} price={'999'} />
      </div>
      <Container>
        <HomeScreenBags />
        <HomeScreenHome />
        <HomeScreenStorage />
      </Container>
      <Footer />
    </>
  )
}


function ProductTagComp(){
  return(
    <>
    {/* <div className='hover_box' /> */}
    <div className='product_tag'>
      <div className='product_detail'>
        <p>Product Title kisudyerhq asioudyaoiws </p>
        <Link
          to={'/product/5fe18171a384156e680756fe'}
        >
        <div>&#x20B9; 99</div>
        <div className='view-product-tag-btn'>View Product &#10095;</div>
        </Link>
      </div>
    </div>
    {/* <div className='product_tag_detail_box'>
      price - 99
    </div> */}
    </>
  );
}

export default TestScreen
