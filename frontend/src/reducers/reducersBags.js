import {
    WOMEN_REQUEST,
    WOMEN_SUCCESS,
    WOMEN_FAIL,
    TOTE_REQUEST,
    TOTE_SUCCESS,
    TOTE_FAIL,
    OFFICE_REQUEST,
    OFFICE_SUCCESS,
    OFFICE_FAIL,
    TRAVEL_REQUEST,
    TRAVEL_SUCCESS,
    TRAVEL_FAIL
} from '../constants/allProductsConstants.js'

export const reducersWomen = (state = { womenProducts: []}, action) => {
    switch(action.type){
        case WOMEN_REQUEST:
            return { womenLoading: true, womenProducts:[]}
        case WOMEN_SUCCESS:
            return { womenLoading: false, womenProducts: action.payload }
        case WOMEN_FAIL:
            return { womenLoading: false, womenError: action.payload }
        default:
            return state
    }

}

export const reducersTote = (state = { toteProducts:[] }, action) => {
    switch(action.type){
        case TOTE_REQUEST:
            return { toteLoading: true, toteProducts: []}
        case TOTE_SUCCESS:
            return { toteLoading: false, toteProducts: action.payload }
        case TOTE_FAIL:
            return { toteLoading: false, toteError: action.payload }
        default:
            return state
    }
}

export const reducersOffice = (state = { officeProducts:[] }, action) => {
    switch(action.type) {
        case OFFICE_REQUEST:
            return { officeLoading: true, officeProducts: []}
        case OFFICE_SUCCESS:
            return { officeLoading: false, officeProducts: action.payload}
        case OFFICE_FAIL:
            return { officeLoading: false, officeError: action.payload}
        default:
            return state
    }
}

export const reducersTravel = (state = {travelProducts:[]}, action) => {
    switch(action.type) {
        case TRAVEL_REQUEST:
            return { travelLoading: true, travelProducts: []}
        case TRAVEL_SUCCESS:
            return { tavelLoading: false, travelProducts: action.payload}
        case TRAVEL_FAIL:
            return { travelLoading: false, travelError: action.payload}
        default:
            return state
    }
}
