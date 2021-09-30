import React , {useState, useEffect , useRef} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './newsLetterPopUpCmpStyle.css'

export default function NewsLetterPopUpCmp({showPopUp}) {

  const [showNewLetterPopUp, setShowNewLetterPopUp] = useState(false)
  const [openThanksNote, setOpenThanksNote] = useState(false)
  const emailRef = useRef('')

  useEffect(() => {
    setShowNewLetterPopUp(showPopUp)
    //   return () => {
    //       cleanup
    //   }
  }, [showPopUp])


  const onNewsLetterSingnUpClick = async () => {
      if(emailRef.current.trim !== ''){
          // can subscribe

          const config = {
            headers: {
              'Content-Type': 'application/json',
            },
          }
  
          const data = {
            // name: nameRef.current,
            email: emailRef.current
          }
    
        await axios.post(
            `/api/newsletter/usersubscribe`,
            data,
            config
        )

        setOpenThanksNote(true)

        setTimeout(() => {
            setShowNewLetterPopUp(false)
        }, 1500);
            
          
      }
  }

  return (
        <>

        <input
            type='checkbox'
            id='toggle-show-newsletter-popup'
            name='show-popup'
            style={{ display: 'none' }}
            checked={showNewLetterPopUp}
            onChange={(e) => {
                setShowNewLetterPopUp(e.target.checked)
            }}
          />

        <input
            type='checkbox'
            id='toggle-show-thanks-note-newsletter'
            name='show-thanks-note'
            style={{ display: 'none' }}
            checked={openThanksNote}
            onChange={(e) => {
              setOpenThanksNote(e.target.checked)
            }}
          />

        <div className='newsletter-popup-wrapper'>
            <div className='newsletter-popup-close-icon'
            onClick={()=> setShowNewLetterPopUp(false) } 
            >&#9747;</div>

            <div className='newsletter-popup-content'>
                Join our mailing list to enjoy a <br/>
                <strong><Link to={'/goodiebaginfo'}>goodie bag</Link></strong> with your first order !
            </div>

            <input
                className='newsletter-popup-email-input-field'
                placeholder='email address'
                type='text'
                name='email'
                onChange={(e) => {
                    emailRef.current = e.target.value
                }}
            />

            <button onClick={onNewsLetterSingnUpClick}> SIGN ME UP !</button>

            <div className='thanks-note-news-letter-cmp'>
                Thank you for<strong>subscribing</strong>
            </div>
        </div>
        </>
    )
}
