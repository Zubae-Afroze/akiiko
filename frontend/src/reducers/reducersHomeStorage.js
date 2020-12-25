import { 
    HOME_SCREEN_STORAGE_REQUEST,
    HOME_SCREEN_STORAGE_SUCCESS,
    HOME_SCREEN_STORAGE_FAIL,
} from '../constants/homeScreenConstants'

export const reducersHomeStorage = (state = { products: []}, action) => {
    switch (action.type) {
        case HOME_SCREEN_STORAGE_REQUEST:
            return { loading: true, products: []}

        case HOME_SCREEN_STORAGE_SUCCESS:
            return { loading: false, products: action.payload}

        case HOME_SCREEN_STORAGE_FAIL:
            return { loading: false, error: action.payload}

        default: 
            return state
    }
}