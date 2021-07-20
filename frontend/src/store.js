import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
  reducersProductList,
  reducersProductDetails,
} from './reducers/reducersProductList'

import { reducersCart } from './reducers/reducersCart'
import {
  userDetailsReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
} from './reducers/reducersUsers'
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderPayReducer,
  orderListByProfileReducer,
} from './reducers/reducersOrder'

import {
  profileReducer
} from './reducers/reducersProfile'

import { googleAuthReducer } from './reducers/reducersAuth'

import { firebaseReducer, getFirebase } from 'react-redux-firebase'

const reducer = combineReducers({
  productList: reducersProductList,
  productDetails: reducersProductDetails,
  cartList: reducersCart,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  profile: profileReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderListByProfile: orderListByProfileReducer,
  firebase: firebaseReducer,
  auth: googleAuthReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {}

const initialState = {
  cartList: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
}

//const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument({ getFirebase })))
)

export default store
