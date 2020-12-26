import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducersHomeBags } from './reducers/reducersHomeBags';
import { reducersHomeHome } from './reducers/reducersHomeHome';
import { reducersHomeStorage } from './reducers/reducersHomeStorage';
import { reducersProductList, reducersProductDetails } from './reducers/reducersProductList';

import { reducersWomen, reducersTote, reducersOffice, reducersTravel } from './reducers/reducersBags'
import { reducersTableware, reducersKitchen, reducersLaundry, reducersGarden} from './reducers/reducersHome'
import { reducersGiftBox, reducersGiftBag, reducersAccessories } from './reducers/reducersGift'
import { reducersOrganiser, reducersHome } from './reducers/reducersStorage'
import { reducersOnTheGo, reducersWallet } from './reducers/reducersAccessories';

const reducer = combineReducers({
    homeScreenBags: reducersHomeBags,
    homeScreenHome: reducersHomeHome,
    homeScreenStorage: reducersHomeStorage,
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
})

const initialState = {};

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store