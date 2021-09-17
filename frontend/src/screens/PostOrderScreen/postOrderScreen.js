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
  }, [finalOrder])

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
      history.push('/')
    } else {
      setOpenThanksNote(true)
      sendFeedBackToDataBase()
      setTimeout(() => {
        history.push('/')
      }, 2000)
    }
  }

  const getStarRating = (val) => {
    givenRating.current = val + 1
  }

  const onEnterFeedBack = (e) => {
    givenFeedBack.current = e.target.value
  }

  return (
    <>
      <Helmet>
        <title>akiiko - Order Success</title>
        <script>
          {`gtag('event', 'conversion', {
            'send_to': 'AW-322846655/C6vzCMCjzPQCEL__-JkB',
            'transaction_id': ${finalOrder._id}
          });`}
        </script>
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
              class='feedBackArea'
              onChange={(e) => onEnterFeedBack(e)}
            ></textarea>
          </div>

          <div className='form-submit-buttons-container'>
            <button
              onClick={() => {
                submitFeedBack()
                // console.log(openThanksNote.current)
              }}
            >
              submmit
            </button>
            <button onClick={() => history.push('/')}>skip</button>
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
  const [rating, setRating] = React.useState(-1)
  const [stars, setStars] = React.useState([
    unFilledstar,
    unFilledstar,
    unFilledstar,
    unFilledstar,
    unFilledstar,
  ])

  const changeRating = (val) => {
    getStarRating(val)
    let newStars = []
    stars.forEach((_, index) => {
      if (index <= val) {
        newStars.push(filledstar)
      } else {
        newStars.push(unFilledstar)
      }
    })
    setStars(newStars)

    const element = document.getElementById('rc')
    element.classList.remove('reactions-container')
    void element.offsetWidth
    element.classList.add('reactions-container')
    setTimeout(() => {
      setRating(val)
    }, 300)
  }

  const onHoverStar = (val) => {
    let newStars = []
    stars.forEach((_, index) => {
      if (index <= val) {
        newStars.push(filledstar)
      } else {
        newStars.push(unFilledstar)
      }
    })
    setStars(newStars)
  }

  const onLevaeStars = () => {
    if (rating > -1) {
      let newStars = []
      stars.forEach((_, index) => {
        if (index <= rating) {
          newStars.push(filledstar)
        } else {
          newStars.push(unFilledstar)
        }
      })
      setStars(newStars)

      // setStars([unFilledstar,unFilledstar,unFilledstar,unFilledstar,unFilledstar])
    } else {
      setStars([
        unFilledstar,
        unFilledstar,
        unFilledstar,
        unFilledstar,
        unFilledstar,
      ])
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
      <div className='reactions-container-wrapper'>
        <div id='rc' className='reactions-container'>
          <img src={returnEmojiSrc()} alt='1 star' />
          {/* {rating + 1} */}
        </div>
      </div>

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
