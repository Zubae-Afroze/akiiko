import React, { useState, useEffect } from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { registerWithEmail } from '../../actions/actionAuth'
import MyComponent from 'react-fullpage-custom-loader'
import SpinnerIcon from '../../components/Spinner/SpinnerIcon'
import Message from '../../components/Message/Message'
import './RegisterScreen.css'

const RegisterScreen = () => {
  const dispatch = useDispatch()

  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister

  const location = useLocation()
  const history = useHistory()

  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passMessage, setPassMessage] = useState(null)

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    //dispatch(Login(email, password))
    if (password !== confirmPassword) {
      setPassMessage('Password do not match, please enter again')
    } else {
      const name = fname + ' ' + lname
      const userObject = { name, email, password, phoneNumber }
      dispatch(registerWithEmail(userObject))
    }
  }

  return (
    <div className='login-wrap'>
      {loading && (
        <MyComponent
          sentences={[]}
          wrapperBackgroundColor={'rgba(255,255,255)'}
          color={'#6e4e37'}
          loaderType={'ball-spin-clockwise'}
          customLoader={<SpinnerIcon />}
        />
      )}
      {/* <Card className='register-card'>
                <Card.Body>
                    {passMessage && <Message variant='danger'>{passMessage}</Message>}
                    <h1>Sign Up</h1>
                    {error && <Message>{error}</Message>}
                    <Form onSubmit={submitHandler}>
                        <Form.Group className='login-group' controlid='name'>
                            <Form.Label className='fm-label'>Name</Form.Label>
                            <Form.Control className='fc-label' type='text' placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)}></Form.Control><i className="far fa-user icon-email"></i>
                        </Form.Group>

                        <Form.Group className='login-group' controlid='email'>
                            <Form.Label className='fm-label'>Email</Form.Label>
                            <Form.Control className='fc-label' type='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control><i className="far fa-envelope icon-email"></i>
                        </Form.Group>

                        <Form.Group className='login-group' controlid='phone'>
                            <Form.Label className='fm-label'>Phone</Form.Label>
                            <Form.Control className='fc-label' type='text' placeholder='Enter your Phone No.' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}></Form.Control><i className="fas fa-phone icon-email"></i>
                        </Form.Group>

                        <Form.Group className='login-group' controlid='password'>
                            <Form.Label className='fm-label'>Password</Form.Label>
                            <Form.Control className='fc-label' type='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control><i className="fas fa-lock icon-email"></i>
                        </Form.Group>

                        <Form.Group className='login-group' controlid='confirmPassword'>
                            <Form.Label className='fm-label'>Confirm Password</Form.Label>
                            <Form.Control className='fc-label' type='password' placeholder='Re-Enter password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></Form.Control><i className="fas fa-lock icon-email"></i>
                        </Form.Group>

                        <div className='sign-wrap'><button className='sign-button' type='submit'>Register</button></div>
                    </Form>
                    <Row className='card-text-wrap'>
                        <Col>
                            <span className='card-text'>Already have an account? {''}</span>
                            <Link to={redirect ? `/login?redirect=${redirect}` : '/register'}><span style={{ textDecoration: 'underline', textTransform: 'uppercase' }}>Login Here</span></Link>
                        </Col>
                    </Row>
                </Card.Body>
            </Card> */}
      <div className='register-page-web'>
        {passMessage && <Message variant='danger'>{passMessage}</Message>}
        {error && <Message>{error}</Message>}
        <div className='register-title'>
          <img
            src='./images/home_screen_images/closes.svg'
            alt='close-img'
            className='close-icon'
          />
          Create an account
        </div>
        <Form onSubmit={submitHandler}>
          <div className='reg-row-one'>
            <div controlid='name'>
              <input
                className='fc-label'
                type='text'
                placeholder='First Name'
                value={fname}
                onChange={(e) => setFname(e.target.value)}
              />
            </div>
            <div controlid='name'>
              <input
                className='fc-label middle-field'
                type='text'
                placeholder='Last Name'
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              />
            </div>
            <div controlid='email'>
              <input
                className='fc-label'
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className='reg-row-two'>
            <div controlid='phone'>
              <input
                className='fc-label'
                type='text'
                placeholder='Mobile Number'
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className='login-group' controlid='password'>
              <input
                className='fc-label middle-field'
                type='password'
                placeholder='Enter password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='login-group' controlid='confirmPassword'>
              <input
                className='fc-label'
                type='password'
                placeholder='Re-Enter password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          <div className='reg-row-three'>
            <div className='checkbox-label'>
              <input type='checkbox' className='c-box' />
              <span className='dis'>
                By clicking here, I agree to the Terms of Use and Privacy
                Policy.
              </span>
            </div>
            <div className='checkbox-label middle-field'>
              <input type='checkbox' className='c-box ' />
              <span className='dis'>
                Sign up for email updates on stuff you’ll probably want to know
                about, including products, launches, surveys, and events.
                Unsubscribe anytime.
              </span>
            </div>
            <div className='checkbox-label'>
              <div>
                <Link
                  to={redirect ? `/login?redirect=${redirect}` : '/register'}
                  className='already-have'
                >
                  Already have an account
                </Link>
                <button className='sign-button' type='submit'>
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </Form>
      </div>
      <div className='register-page-tab'>
        {passMessage && <Message variant='danger'>{passMessage}</Message>}
        {error && <Message>{error}</Message>}
        <div className='register-title'>
          <img
            src='./images/home_screen_images/closes.svg'
            alt='close-img'
            className='close-icon'
          />
          Create an account
        </div>
        <Form onSubmit={submitHandler}>
          <div className='reg-row-one'>
            <div controlid='name'>
              <input
                className='fc-label'
                type='text'
                placeholder='First Name'
                value={fname}
                onChange={(e) => setFname(e.target.value)}
              />
            </div>
            <div controlid='name'>
              <input
                className='fc-label middle-field'
                type='text'
                placeholder='Last Name'
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              />
            </div>
          </div>
          <div className='reg-row-two'>
            <div controlid='email'>
              <input
                className='fc-label'
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div controlid='phone'>
              <input
                className='fc-label'
                type='text'
                placeholder='Mobile Number'
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </div>
          <div className='reg-row-three'>
            <div className='login-group' controlid='password'>
              <input
                className='fc-label middle-field'
                type='password'
                placeholder='Enter password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='login-group' controlid='confirmPassword'>
              <input
                className='fc-label'
                type='password'
                placeholder='Re-Enter password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            {/* <div className="checkbox-label"><input type="checkbox" className='c-box' /><span className="dis">By clicking here, I agree to the Terms of Use and Privacy Policy.</span></div> */}
          </div>
          <div className='reg-row-four'>
            <div className='checkbox-label middle-field'>
              <input type='checkbox' className='c-box ' readOnly />
              <span className='dis'>
                Sign up for email updates on stuff you’ll probably want to know
                about, including products, launches, surveys, and events.
                Unsubscribe anytime.
              </span>
            </div>
            <div className='checkbox-label'>
              <div>
                <Link
                  to={redirect ? `/login?redirect=${redirect}` : '/register'}
                  className='already-have'
                >
                  Already have an account
                </Link>
                <button className='sign-button' type='submit'>
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </Form>
      </div>
      <div className='register-page-mobile'>
        {passMessage && <Message variant='danger'>{passMessage}</Message>}
        {error && <Message>{error}</Message>}
        <Form onSubmit={submitHandler}>
          <div className='register-title'>
            <img
              src='./images/home_screen_images/closes.svg'
              alt='close-img'
              className='close-icon'
            />
            Create an account
          </div>
          <input
            className='fc-label'
            type='text'
            placeholder='First Name'
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />
          <input
            className='fc-label middle-field'
            type='text'
            placeholder='Last Name'
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
          <input
            className='fc-label'
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className='fc-label'
            type='text'
            placeholder='Mobile Number'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input
            className='fc-label middle-field'
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className='fc-label'
            type='password'
            placeholder='Re-Enter password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div className='checkbox-label'>
            <input
              type='checkbox'
              className='c-box'
              checked='checked'
              readOnly
            />
            <span className='dis'>
              By clicking here, I agree to the Terms of Use and Privacy Policy.
            </span>
          </div>
          <div className='checkbox-label'>
            <div>
              <Link
                to={redirect ? `/login?redirect=${redirect}` : '/register'}
                className='already-have'
              >
                Already have an account
              </Link>
              <button className='sign-button' type='submit'>
                Sign up
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default RegisterScreen
