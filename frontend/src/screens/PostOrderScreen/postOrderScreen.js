import React, { useEffect, useState, useRef } from 'react'
// import { Row, Col } from 'react-bootstrap'
// import chinkyGirl from './assets/animeGirl.png'
import './postOrderScreenStyle.css'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { useSelector, useDispatch } from 'react-redux'
import ReactPixel from 'react-facebook-pixel'
import unFilledstar from './assets/starUnFilledN.svg'
import filledstar from './assets/starFilledN.svg'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import oneStar from './assets/1-star.svg'
import twoStar from './assets/2-star.svg'
import threeStar from './assets/3-star.svg'
import fourStar from './assets/4-star.svg'
import fiveStar from './assets/5-star.svg'
import defaultEmoji from './assets/default-emoji.svg'
import { getUserProfileByUID } from '../../actions/actionProfile'

import star1Filled from './starFilled/1-star-filled.svg'
import star2Filled from './starFilled/2-star-filled.svg'
import star3Filled from './starFilled/3-star-filled.svg'
import star4Filled from './starFilled/4-star-filled.svg'
import star5Filled from './starFilled/5-star-filled.svg'

import star1UnFilled from './starUnFilled/1-star-unfilled.svg'
import star2UnFilled from './starUnFilled/2-star-unfilled.svg'
import star3UnFilled from './starUnFilled/3-star-unfilled.svg'
import star4UnFilled from './starUnFilled/4-star-unfilled.svg'
import star5UnFilled from './starUnFilled/5-star-unfilled.svg'

export default function PostOrderScreen() {
  const dispatch = useDispatch()

  const order = useSelector((state) => state.orderCreate.order)
  const uid = useSelector((state) => state.firebase.auth.uid)
  const profileDetails = useSelector((state) => state.profile.userProfile)

  const history = useHistory()

  const givenRating = useRef(-1)
  const givenFeedBack = useRef('')

  let finalOrder = {}

  const [openThanksNote, setOpenThanksNote] = useState(false)

  if (order) {
    finalOrder = order
  } else {
    finalOrder.totalPrice = null
  }

  useEffect(() => {
    ReactPixel.trackCustom('track', 'Purchase', {
      currency: 'INR',
      value: finalOrder.totalPrice,
    })
    dispatch(getUserProfileByUID(uid))
  }, [])

  const sendFeedBackToDataBase = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const data = {
      name: profileDetails.name,
      email: profileDetails.email,
      uid: uid,
      message: givenFeedBack.current,
      rating: givenRating.current,
    }
    await axios.post(`/api/review/post`, data, config)
  }

  const submitFeedBack = () => {
    if (givenRating.current < 0 && givenFeedBack.current.trim() === '') {
      history.replace('/')
    } else {
      setOpenThanksNote(true)
      sendFeedBackToDataBase()
      setTimeout(() => {
        history.replace('/')
      }, 2000)
    }
  }

  const getStarRating = (val) => {
    givenRating.current = val + 1
  }

  const onEnterFeedBack = (e) => {
    givenFeedBack.current = e.target.value
  }

  const gtagString = () => {
    const priceString = `${order.totalPrice}`

    const cmptString = `
      gtag('event', 'conversion',
        {
          send_to: 'AW-322846655/uhDnCIayoPsCEL__-JkB',
          value: ${priceString},
          currency: 'INR',
          transaction_id: '${order._id}'
        }
      );
    `

    // console.log(cmptString)
    return cmptString
  }

  return (
    <>
      <Helmet>
        <title>akiiko - Order Success</title>

        <script
          async
          src='https://www.googletagmanager.com/gtag/js?id=AW-322846655'
        ></script>
        <script>
          {` window.dataLayer = window.dataLayer || []; function gtag()
          {window.dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'AW-322846655'); `}
        </script>

        <script>{gtagString()}</script>
      </Helmet>

      <div className='successBGimage'>
        {/* <div className='order-success-msg-wraper f-f-l'>
          <div className='order-success-msg-container'>
            <div>Thank you for choosing akiiko.</div>
            <div>You will be receiving an email from us shortly.</div>
          </div>
          <div>
            <Link to='/newprofile'>
              <h6 className='continue-shooping-message'>View order status</h6>
            </Link>
          </div>
        </div> */}

        <div className='feedback-form-pop-up-wrapper'>
          <div className='feedback-form-msg-container'>
            <div>Thank you for choosing akiiko.</div>
            <div>You will be receiving an email from us shortly.</div>
          </div>

          <FeedBackFormRattingComp getStarRating={getStarRating} />

          <div>
            <textarea
              id='story'
              placeholder='Tell us more'
              name='message'
              className='feedBackArea'
              onChange={(e) => onEnterFeedBack(e)}
              rows={3}
            ></textarea>
          </div>

          <div className='form-submit-buttons-container'>
            <button
              onClick={() => {
                submitFeedBack()
                // console.log(openThanksNote.current)
              }}
            >
              Submit
            </button>
            <button onClick={() => history.push('/')}>Skip</button>
          </div>

          <input
            type='checkbox'
            id='toggle'
            style={{ display: 'none' }}
            checked={openThanksNote}
            onChange={(e) => {
              setOpenThanksNote(e.target.checked)
            }}
          />

          {/* position: "absolute", bottom: "2px", zIndex: 2 */}

          {/* <button style={{position: "absolute", bottom: "2px",left: "5px", zIndex: 3}} onClick={()=>{
            const elem = document.querySelector(".feedback-form-pop-up-wrapper");
            elem.style.animation = "feedbackFormOuttro 0.5s 0s";
          }} > scale out </button> */}

          <div className='feedback-thanks-wrapper'>
            Thanks for sharing your experience with us.
          </div>
        </div>
      </div>
    </>
  )
}

function FeedBackFormRattingComp({ getStarRating }) {
  const filledStarList = [
    star1Filled,
    star2Filled,
    star3Filled,
    star4Filled,
    star5Filled,
  ]
  const unFilledStarList = [
    star1UnFilled,
    star2UnFilled,
    star3UnFilled,
    star4UnFilled,
    star5UnFilled,
  ]
  const [rating, setRating] = React.useState(-1)
  // const [stars, setStars] = React.useState([
  //   unFilledstar,
  //   unFilledstar,
  //   unFilledstar,
  //   unFilledstar,
  //   unFilledstar,
  // ])

  const [stars, setStars] = React.useState([...unFilledStarList])

  const changeRating = (val) => {
    getStarRating(val)
    let newStars = []
    stars.forEach((_, index) => {
      if (index <= val) {
        // newStars.push(filledstar)
        newStars.push(filledStarList[index])
        console.log('Filled: ' + index)
      } else {
        // newStars.push(unFilledstar)
        newStars.push(unFilledStarList[index])
        console.log('unFilled: ' + index)
      }
    })
    setStars(newStars)
    setRating(val)

    // const element = document.getElementById('rc')
    // element.classList.remove('reactions-container')
    // void element.offsetWidth
    // element.classList.add('reactions-container')
    // setTimeout(() => {
    //   setRating(val)
    // }, 300)
  }

  const onHoverStar = (val) => {
    let newStars = []
    stars.forEach((_, index) => {
      if (index <= val) {
        // newStars.push(filledstar)
        newStars.push(filledStarList[index])
      } else {
        // newStars.push(unFilledstar)
        newStars.push(unFilledStarList[index])
      }
    })
    setStars(newStars)
  }

  const onLevaeStars = () => {
    if (rating > -1) {
      let newStars = []
      stars.forEach((_, index) => {
        if (index <= rating) {
          // newStars.push(filledstar)
          newStars.push(filledStarList[index])
        } else {
          // newStars.push(unFilledstar)
          newStars.push(unFilledStarList[index])
        }
      })
      setStars(newStars)

      // setStars([unFilledstar,unFilledstar,unFilledstar,unFilledstar,unFilledstar])
    } else {
      // setStars([
      //   unFilledstar,
      //   unFilledstar,
      //   unFilledstar,
      //   unFilledstar,
      //   unFilledstar,
      // ])
      setStars([...unFilledStarList])
      console.log('on Leave Activated')
    }
  }

  const returnEmojiSrc = () => {
    switch (rating) {
      case 0:
        return oneStar

      case 1:
        return twoStar

      case 2:
        return threeStar

      case 3:
        return fourStar

      case 4:
        return fiveStar

      default:
        return defaultEmoji

      // code block
    }
  }

  return (
    <div className='feedback-form-ratting-container'>
      <div>How would you rate your experience from our site ?</div>

      {/* <div className='reactions-container-wrapper'>
        <div id='rc' className='reactions-container'>
        <img src={returnEmojiSrc()} alt='1 star' />
        </div>
      </div> */}

      <div
        className='rating-stars'
        // onClick={()=>{
        //   // const elem = document.querySelector(".reactions-container");

        //   const element = document.getElementById("rc")
        //   // transition: 0.5s;
        //   // animation: feedbackFormIntro 0.8s;
        //   element.classList.remove("reactions-container");
        //   void element.offsetWidth;
        //   element.classList.add("reactions-container")
        //   // elem.style.animation = "none"
        //   // elem.style.animation = "reactionsContainerAnimation 0.5s 0s";
        // }}
        onMouseLeave={() => {
          onLevaeStars()
        }}
      >
        <img
          src={stars[0]}
          alt=''
          onClick={() => {
            changeRating(0)
          }}
          onMouseEnter={() => {
            onHoverStar(0)
          }}
        />
        <img
          src={stars[1]}
          alt=''
          onClick={() => {
            changeRating(1)
          }}
          onMouseEnter={() => {
            onHoverStar(1)
          }}
        />
        <img
          src={stars[2]}
          alt=''
          onClick={() => {
            changeRating(2)
          }}
          onMouseEnter={() => {
            onHoverStar(2)
          }}
        />
        <img
          src={stars[3]}
          alt=''
          onClick={() => {
            changeRating(3)
          }}
          onMouseEnter={() => {
            onHoverStar(3)
          }}
        />
        <img
          src={stars[4]}
          alt=''
          onClick={() => {
            changeRating(4)
          }}
          onMouseEnter={() => {
            onHoverStar(4)
          }}
        />
      </div>
    </div>
  )
}

// eslint-disable-next-line no-undef

// {/* <!-- Global site tag (gtag.js) - Google Ads: 322846655 --> */}
// <script async src="https://www.googletagmanager.com/gtag/js?id=AW-322846655"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments)}
//   gtag('js', new Date());

//   gtag('config', 'AW-322846655');
// </script>

// <script>
// window.gtag('event', 'conversion', {
//   'send_to' : 'AW-322846655/uhDnCIayoPsCEL__-JkB',
//   'value': `${finalOrder.totalPrice}`,
//   'currency': 'INR',
//   'transaction_id': `${finalOrder._id}`,
// });
// </script>

// <script>
//         window.addEventListener('load', function() {
//           if(window.location.pathname.indexOf("ordersuccess") != -1)
//         {
//         var orderid = document.getElementsByClassName("orderid")[0].innerHTML;
//         var price = document.getElementsByClassName("totalamount")[0].innerHTML.replace("???","");;

//           gtag('event', 'conversion', {
//               'send_to': 'AW-322846655/uhDnCIayoPsCEL__-JkB',
//               'value': price,
//               'currency': 'INR',
//               'transaction_id': orderid
//           });
//         }
//         });
//         </script>

// <script>
//           {`
//           <!-- Global site tag (gtag.js) - Google Ads: 322846655 -->
//             <script async src="https://www.googletagmanager.com/gtag/js?id=AW-322846655"></script>
//             <script>
//               window.dataLayer = window.dataLayer || [];
//               function gtag(){dataLayer.push(arguments);}
//               gtag('js', new Date());

//               gtag('config', 'AW-322846655');
//             </script>
//           `}
//         </script>
//         <script>
//           {`gtag('event', 'conversion', {
//             'send_to': 'AW-322846655/C6vzCMCjzPQCEL__-JkB',
//             'transaction_id': ${finalOrder._id}
//           });`}
//         </script>
//         <script>
//           {`
//           <!-- Event snippet for Purchase - Circle Bread Basket - Sep 25 2021 conversion page -->
//               <script>
//                 gtag('event', 'conversion', {
//                     'send_to': 'AW-322846655/aH3jCLG7n_cCEL__-JkB',
//                     'transaction_id': ${finalOrder._id}
//                 });
//               'Value': 799,
//               'Currency': 'INR'
//               </script>
//           `}
//         </script>
