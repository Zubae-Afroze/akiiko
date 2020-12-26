import {
    ON_THE_GO_REQUEST,
    ON_THE_GO_SUCCESS,
    ON_THE_GO_FAIL,
    WALLET_REQUEST,
    WALLET_SUCCESS,
    WALLET_FAIL
} from '../constants/allProductsConstants'

export const reducersOnTheGo = (state = { onTheGoProducts: [] }, action) => {
    switch (action.type) {
        case ON_THE_GO_REQUEST:
            return { onTheGoLoading: true, onTheGoProducts:[]}
        
        case ON_THE_GO_SUCCESS:
            return { onTheGoLoading: false, onTheGoProducts: action.payload}
        
        case ON_THE_GO_FAIL:
            return { onTheGoLoading: false, onTheGoError: action.payload}
        default:
            return state
    }
}

export const reducersWallet = (state = {walletProducts: []}, action) => {
    switch (action.type) {
        case WALLET_REQUEST:
            return { walletLoading: true, walletProducts: []}
        case WALLET_SUCCESS: 
            return { walletLoading: false, walletProducts: action.payload}
        case WALLET_FAIL: 
            return { walletLoading: false, walletError: action.payload}
        default:
            return state
    }
        
}