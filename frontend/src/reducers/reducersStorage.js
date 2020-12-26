import {
    ORGANISERS_REQUEST,
    ORGANISERS_SUCCESS,
    ORGANISERS_FAIL,
    HOME_REQUEST,
    HOME_SUCCESS,
    HOME_FAIL
} from '../constants/allProductsConstants'

export const reducersOrganiser = (state = { organiserProducts: []}, action) => {
    switch(action.type){
        case ORGANISERS_REQUEST:
            return { organiserLoading: true, organiserProducts:[] }
        case ORGANISERS_SUCCESS:
            return { organiserLoading : false, organiserProducts: action.payload}
        case ORGANISERS_FAIL:
            return { organiserLoading: false, organiserError: action.payload }
        default:
            return state
    }
}

export const reducersHome = (state = { homeProducts:[]}, action) => {
    switch(action.type) {
        case HOME_REQUEST:
            return { homeLoading: true, homeProducts: []}
        case HOME_SUCCESS:
            return { homeLoading: false, homeProducts: action.payload}
        case HOME_FAIL:
            return { homeLoading: false, homeError: action.payload}
        default:
            return state
    }
}
