import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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

import linenBagDT from './HomeScreenCarousel/linenBagAssets/linenBag_DT.jpg'
import linenBagLT from './HomeScreenCarousel/linenBagAssets/linenBag_LT.jpg'
import linenBagMB from './HomeScreenCarousel/linenBagAssets/linenBag_MB.jpg'

// import coasterDT from './HomeScreenCarousel/coasterAssets/coasterDT.jpg'
// import coasterLT from './HomeScreenCarousel/coasterAssets/coasterLT.jpg'
// import coasterTL from './HomeScreenCarousel/coasterAssets/coasterTL.jpg'
// import coasterMB from './HomeScreenCarousel/coasterAssets/coasterMB.jpg'

import hempDT from './HomeScreenCarousel/hempPouchAssets/hempPouch_DT.jpg'
import hempLT from './HomeScreenCarousel/hempPouchAssets/hempPouch_LT.jpg'
// import hempTL from './HomeScreenCarousel/hempPouchAssets/hempPouch_TL.jpg'
import hempMB from './HomeScreenCarousel/hempPouchAssets/hempPouch_MB.jpg'

import linenDT from './HomeScreenCarousel/linenBagAssets/linenBag_DT.jpg'
import linenLT from './HomeScreenCarousel/linenBagAssets/linenBag_LT.jpg'
// import linenTL from './HomeScreenCarousel/linenBagAssets/linenBag_TL.jpg'
import linenMB from './HomeScreenCarousel/linenBagAssets/linenBag_MB.jpg'
 
// import triangleDT from './HomeScreenCarousel/triangleAssets/trianglePouchDT.jpg'
// import triangleLT from './HomeScreenCarousel/triangleAssets/trianglePouchLT.jpg'
// import triangleTL from './HomeScreenCarousel/triangleAssets/trianglePouchTL.jpg'
// import triangleMB from './HomeScreenCarousel/triangleAssets/trianglePouchMB.jpg'

// import triangleDT from './HomeScreenCarousel/trianglePouch/HempTriangleDT.jpg'
// import triangleLT from './HomeScreenCarousel/trianglePouch/HempTriangleLT.jpg'
// import triangleTL from './HomeScreenCarousel/trianglePouch/HempTriangleTL.jpg'
// import triangleMB from './HomeScreenCarousel/trianglePouch/Untitled1.jpg'


import coasterDT from './HomeScreenCarousel/coasterAssets/coaster_DT.jpg'
import coasterLT from './HomeScreenCarousel/coasterAssets/coaster_LT.jpg'
// import coasterTL from './HomeScreenCarousel/coasterAssets/coaster_TL.jpg'
import coasterMB from './HomeScreenCarousel/coasterAssets/coaster_MB.jpg'

import useMedia from './HomeScreenCarousel/useMediaHook'
import { getUserProfileByUID } from '../../actions/actionProfile'
import useOneTimeEffect from '../../components/CustomHooks/useOneTimeEffect'
import NewsLetterPopUpCmp from './NewsLetterPopUp/NewsLetterPopUpCmp'
import axios from 'axios'
import SEO from '../../components/SEO/SEO'

// import UseSpinner from '../../components/Spinner/UseSpinner';

const options = {
  autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
  debug: false, // enable logs
}

let isNewLetterPopUpShown = false;
const isRegisteredUser = true;

const HomeScreen = () => {

  const isNewLetterPopUpShownRef = useRef(false)
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

  const dispatch = useDispatch()

  // const is = useDispatch()

  const uid = useSelector((state) => state.firebase.auth.uid)

  const profileDetails = useSelector((state) => state.profile.userProfile)

  const [showNewsLetterPopUp, setShowNewsLetterPopUp] = useState(false)

  
  useEffect(() => {
    // history.push('/login?redirect=/')
    dispatch(getUserProfileByUID(uid)) 
    
    // if(!isRegisteredUser){
      //   console.log('Un Registered User')
      //   setShowNewsLetterPopUp(true)
      // }
      
    }, [dispatch, uid])
    
    
    useEffect(() => {
      
    async function checkToShowNewsLetterPopUp(){
  
      setShowNewsLetterPopUp(false);
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
  
      const { data } = await axios.get(`/api/profile/${uid}`, config)
  
      if(data){
        const email = data.email;

        try {
          const { newsLetterUser } = await axios.get(`/api/newsletter/newsletteruser/${email}`)
          console.log('GOT user Profile' + newsLetterUser) 
          
        } catch (error) {
          setShowNewsLetterPopUp(true)
           
        }
         
      }else{
        setShowNewsLetterPopUp(true)
  
      }
  
    }

    checkToShowNewsLetterPopUp()
    // return () => {
    //   cleanup
    // }
  }, [])
  



  // useOneTimeEffect(() => {

  //   console.log('Use One Effect Called '+profileDetails)

  //   if(profileDetails){
  //     console.log('Has Profile')
  //     const email = profileDetails.email;
  //     setShowNewsLetterPopUp(true)
  //     isNewLetterPopUpShown = true;
  //   }else{
  //     console.log('didnt get user Profile')
  //     isRegisteredUser = false;
  //     setShowNewsLetterPopUp(true)
  //   }
  // },[])

  

  useEffect(() => {
    
    ReactPixel.init('545518393387265', options)
    ReactPixel.pageView()
  }, [])
  
  

    // if(!uid){
    //   const config = {
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   }
    //   console.log(uid)

    // }else{
    //   console.log("disnt receive propfile")
    // }

    
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
      <SEO 
        title={'Buy eco-friendly home decor products online | Natural fabric modern Lifestyle accessories for sale online | Shop for Siample Handcrafted Multipurpose vegan products | Akiiko'} 
        fallbackTitle={'Buy eco-friendly home decor products online | Natural fabric modern Lifestyle accessories for sale online | Shop for Siample Handcrafted Multipurpose vegan products | Akiiko'}
        desc={["Live a clutter-free lifestyle. Categorized as home decor, utility products, storage bags - this eco-friendly collection of lifestyle products are available on akiiko's website. Shop now at akiiko."]} 
        keywords={["Daily use products","Daily use essentials"]}
      />
        {/* <Helmet>
          <title>akiiko: Natural Home Decor and Lifestyle Products</title>
          <meta
            name='description'
            content="Live a clutter-free lifestyle. Categorized as home decor, utility products, storage bags - this eco-friendly collection of lifestyle products are available on akiiko's website. Shop now at akiiko."
          ></meta>
          
        </Helmet> */}
        <NewCarouselComp />
        <Container>
          {/* <OldCarouselComp /> */}
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
      <NewsLetterPopUpCmp showPopUp={showNewsLetterPopUp} />
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

  function NewCarouselComp() {
    const intervalVal = 6000
    return (
      <>
        <Carousel pause={false} controls={false}>
          {/* <Carousel.Item interval={4000}>
        <Link to='/productlist/bags/tote'>

            <HomeScreenCarouselSlide urls={[coasterDT,coasterLT,coasterTL,coasterMB]} />

        </Link>
        </Carousel.Item>


        <Carousel.Item interval={4000}>
        <Link to='/productlist/bags/tote'>

            <HomeScreenCarouselSlide urls={[hempDT,hempLT,hempTL,hempMB]} />

        </Link>
        </Carousel.Item>


        <Carousel.Item interval={4000}>
        <Link to='/productlist/bags/tote'>

            <HomeScreenCarouselSlide urls={[linenDT,linenLT,linenTL,linenMB]} />

        </Link>
        </Carousel.Item> */} 

          <Carousel.Item interval={intervalVal}>
            <ImageCmp desktop={coasterDT} laptop={coasterLT} mobile={coasterMB} link={'/product/circle-stripe-coasters'} />
          </Carousel.Item>
          
          <Carousel.Item interval={intervalVal}>
            <ImageCmp desktop={hempDT} laptop={hempLT} mobile={hempMB} link={'/product/multi-purpose-hemp-pouches'} />
          </Carousel.Item>

          <Carousel.Item interval={intervalVal}>
            <ImageCmp desktop={linenBagDT} laptop={linenBagLT} mobile={linenBagMB} link={'/product/brun-bindle-bag'} />
          </Carousel.Item>
        </Carousel>
      </>
    )
  }

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

function ImageCmp(props) {
  const isMob = useMedia('(max-width: 500px)')

  const isIpad = useMedia('(min-width: 700px)')

  const isLaptop = useMedia('(min-width: 1200px)')

  const isDesktop = useMedia('(min-width: 1500px)')

  let imgSrc = props.desktop

  if (isMob) {
    imgSrc = props.mobile
  }

  if (isIpad) {
    imgSrc = props.laptop
    console.log('Its IPAD')
  }

  if (isLaptop) {
    imgSrc = props.laptop
  }

  if (isDesktop) {
    imgSrc = props.desktop
  }

  function returnHeight() {
    if (isMob) {
      return '500px'
    }
    if (isLaptop) {
      return '700px'
    } else {
      return 'auto'
    }
  }

  return(
    <Link to={`${props.link}`}>
    {/* <picture>
      <source srcSet={triangleMB} media={"(max-width: 500px)"} />
      <source srcSet={triangleDT} media={"(min-width: 1500px)"} />
      <source srcSet={hempLT} media={"(min-width: 1200px)"} />
      <source srcSet={coasterLT} media={"(min-width: 700px)"} />
    </picture> */}
      <img src={imgSrc} alt='' style={{objectFit:'cover',width:'100vw', height:`${returnHeight()}`}} width={'100vw'}/>
      </Link>
  )
}

export default HomeScreen
