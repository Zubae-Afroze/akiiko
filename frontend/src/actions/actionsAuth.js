import axios from 'axios'

export const googleAuth = (user) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    const provider = new firebase.auth.GoogleAuthProvider()

    dispatch({ type: 'GOOGLE_LOGIN_REQUEST' })
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        console.log(res)
        const name = res.user.displayName
        const email = res.user.email
        const phoneNumber = res.user.phoneNumber
        const photoURL = res.user.photoURL
        const uid = res.user.uid
        const providerId = res.credential.providerId

        const userObject = {
          name,
          email,
          phoneNumber,
          photoURL,
          uid,
          providerId,
        }

        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        }

        axios
          .post('/api/profile', userObject, config)
          .then(console.log('success'))
          .catch((e) => {
            console.log(e)
          })

        // axios({
        //   method: 'post',
        //   url: '/api/profile/',
        //   data: userObject,
        // })
      })
      .then(() => {
        dispatch({ type: 'GOOGLE_LOGIN_SUCCESS' })
      })
      .catch((error) => {
        dispatch({ type: 'GOOGLE_LOGIN_ERROR', error })
      })
  }
}

export const firebaseLogout = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    dispatch({ type: 'LOGOUT_REQUEST' })
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: 'LOGOUT_SUCCESS' })
      })
  }
}
