import React from 'react'
import ReactDOM from 'react-dom'

import { Provider, useSelector } from 'react-redux'
import { ReactReduxFirebaseProvider, isLoaded } from 'react-redux-firebase'
import store from './store'

import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

import firebase from 'firebase/app'

import MyComponent from 'react-fullpage-custom-loader'
import SpinnerIcon from './components/Spinner/SpinnerIcon'

const rrfProps = {
  firebase,
}

function AuthLoaded({ children }) {
  const auth = useSelector((state) => state.firebase.auth)
  if (isLoaded(auth))
    return (
      <MyComponent
        sentences={[]}
        wrapperBackgroundColor={'rgba(255,255,255)'}
        color={'#6e4e37'}
        loaderType={'ball-spin-clockwise'}
        customLoader={<SpinnerIcon />}
      />
    )
  return children
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthLoaded>
        <App />
      </AuthLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
