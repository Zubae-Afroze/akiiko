import { 
    HOME_SCREEN_HOME_REQUEST,
    HOME_SCREEN_HOME_SUCCESS,
    HOME_SCREEN_HOME_FAIL,
} from '../constants/homeScreenConstants'

export const reducersHomeHome = (state = { products: []}, action) => {
    switch (action.type) {
        case HOME_SCREEN_HOME_REQUEST:
            return { loading: true, products: [] }

        case HOME_SCREEN_HOME_SUCCESS:
            return { loading: false, products: action.payload}
        
        case HOME_SCREEN_HOME_FAIL:
            return { loading: false, error: action.payload}
        
        default:
            return state
    }
}