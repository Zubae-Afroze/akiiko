import { 
    HOME_SCREEN_BAGS_REQUEST,
    HOME_SCREEN_BAGS_SUCCESS,
    HOME_SCREEN_BAGS_FAIL,
} from '../constants/homeScreenConstants'

export const reducersHomeBags = (state = { products: [] }, action) => {
    switch (action.type) {
        case HOME_SCREEN_BAGS_REQUEST:
            return { loading: true, products: [] }

        case HOME_SCREEN_BAGS_SUCCESS:
            return { loading: false, products: action.payload}
        
        case HOME_SCREEN_BAGS_FAIL:
            return { loading: false, error: action.payload}
        
        default:
            return state
    }
}