import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
  reducersProductList,
  reducersProductDetails,
} from './reducers/reducersProductList'

import {
  reducersWomen,
  reducersTote,
  reducersOffice,
  reducersTravel,
} from './reducers/reducersBags'
import {
  reducersTableware,
  reducersKitchen,
  reducersLaundry,
  reducersGarden,
} from './reducers/reducersHome'
import {
  reducersGiftBox,
  reducersGiftBag,
  reducersAccessories,
} from './reducers/reducersGift'
import { reducersOrganiser, reducersHome } from './reducers/reducersStorage'
import { reducersOnTheGo, reducersWallet } from './reducers/reducersAccessories'

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
  orderListMyReducer,
} from './reducers/reducersOrder'
import {
  reducersHobby,
  reducersHygiene,
  reducersStationery,
} from './reducers/reducersLifestyle'
import { reducersWorkout } from './reducers/reducersLifestyle'

const reducer = combineReducers({
  productList: reducersProductList,
  productDetails: reducersProductDetails,
  womenList: reducersWomen,
  toteList: reducersTote,
  officeList: reducersOffice,
  travelList: reducersTravel,
  tablewareList: reducersTableware,
  kitchenList: reducersKitchen,
  laundryList: reducersLaundry,
  gardenList: reducersGarden,
  giftBoxList: reducersGiftBox,
  giftBagList: reducersGiftBag,
  accessoriesList: reducersAccessories,
  organiserList: reducersOrganiser,
  homeList: reducersHome,
  onTheGoList: reducersOnTheGo,
  walletList: reducersWallet,
  cartList: reducersCart,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderListMy: orderListMyReducer,
  hygieneList: reducersHygiene,
  workoutList: reducersWorkout,
  hobbyList: reducersHobby,
  stationeryList: reducersStationery,
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

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
