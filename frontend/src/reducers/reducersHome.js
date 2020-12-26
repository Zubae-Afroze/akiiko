import {
    TABLEWARE_REQUEST,
    TABLEWARE_SUCCESS,
    TABLEWARE_FAIL,
    KITCHEN_REQUEST,
    KITCHEN_SUCCESS,
    KITCHEN_FAIL,
    LAUNDRY_REQUEST,
    LAUNDRY_SUCCESS,
    LAUNDRY_FAIL,
    GARDEN_REQUEST,
    GARDEN_SUCCESS,
    GARDEN_FAIL
} from '../constants/allProductsConstants.js'

export const reducersTableware = (state = { tablewareProducts: []}, action) => {
    switch(action.type){
        case TABLEWARE_REQUEST:
            return { tablewareLoading: true, tablewareProducts:[]}
        case TABLEWARE_SUCCESS:
            return { tablewareLoading: false, tablewareProducts: action.payload}
        case TABLEWARE_FAIL:
            return { tablewareLoading: false, tablewareError: action.payload}
        default:
            return state
    }
}

export const reducersKitchen = (state = { kitchenProducts: []}, action) => {
    switch(action.type){
        case KITCHEN_REQUEST:
            return { kitchenLoading: true, kitchenProducts:[]}
        case KITCHEN_SUCCESS:
            return { kitchenLoading: false, kitchenProducts: action.payload}
        case KITCHEN_FAIL:
            return { kitchenLoading: false, kitchenError: action.payload}
        default:
            return state
    }
}

export const reducersLaundry = (state = { laundryProducts: []}, action) => {
    switch(action.type) {
        case LAUNDRY_REQUEST:
            return { laundryLoading: true, laundryProducts: []}
        case LAUNDRY_SUCCESS:
            return { laundryLoading: false, laundryProducts: action.payload}
        case LAUNDRY_FAIL:
            return { laundryLoading: false, laundryError: action.payload}
        default:
            return state
    }
}

export const reducersGarden = (state = { gardenProducts: []}, action) => {
    switch(action.type) {
        case GARDEN_REQUEST:
            return { gardenLoading: true, gardenProducts: []}
        case GARDEN_SUCCESS:
            return { gardenLoading: false, gardenProducts: action.payload}
        case GARDEN_FAIL:
            return { gardenLoading: false, gardenProducts: action.payload}
        default:
            return state
    }
}

 