import {
    GIFT_BOX_REQUEST,
    GIFT_BOX_SUCCESS,
    GIFT_BOX_FAIL,
    GIFT_BAG_REQUEST,
    GIFT_BAG_SUCCESS,
    GIFT_BAG_FAIL,
    ACCESSORIES_REQUEST,
    ACCESSORIES_SUCCESS,
    ACCESSORIES_FAIL
} from '../constants/allProductsConstants'


export const reducersGiftBox = (state = { giftBoxProducts: []}, action) => {
    switch (action.type) {
        case GIFT_BOX_REQUEST:
            return { giftBoxLoading: true, giftBoxProducts: []}
        case GIFT_BOX_SUCCESS:
            return { giftBoxloading: false, giftBoxProducts: action.payload}
        case GIFT_BOX_FAIL:
            return { giftBoxLoading: false, giftBoxError: []}
        default:
            return state
    }
}

export const reducersGiftBag = (state = { giftBagProducts: []}, action) => {
    switch(action.type) {
        case GIFT_BAG_REQUEST:
            return { giftBagLoading: true, giftBagProducts: []}
        case GIFT_BAG_SUCCESS:
            return { giftBagLoading: false, giftBagProducts: action.payload}
        case GIFT_BAG_FAIL:
            return { giftBagLoading: false, giftBagError: action.payload}
        default:
            return state
    }
}

export const reducersAccessories = (state = { accessoriesProducts: []}, action) => {
    switch(action.type) {
        case ACCESSORIES_REQUEST:
            return { accessoriesLoading: true, accessoriesProducts:[]}
        case ACCESSORIES_SUCCESS:
            return { accesoriesLoading: false, accessoriesProducts: action.payload}
        case ACCESSORIES_FAIL:
            return { accessoriesLoading: false, accessoriesProducts: action.payload}
        default:
            return state
    }
}