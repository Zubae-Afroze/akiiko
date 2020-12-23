import {PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODCUT_LIST_FAIL} from '../constants/productReducerConstant'

export const productReducer = (state = { products: []}, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return  { loading: true, products: [] }
        case PRODUCT_LIST_SUCCESS:
            return { loading: false, products: action.payload }
        case PRODCUT_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
                return state
    }
}