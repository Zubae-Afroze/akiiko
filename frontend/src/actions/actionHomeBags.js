import { 
    HOME_SCREEN_BAGS_REQUEST,
    HOME_SCREEN_BAGS_SUCCESS,
    HOME_SCREEN_BAGS_FAIL,
} from '../constants/homeScreenConstants'

import axios from 'axios';

export const actionListHomeBags = () => async (dispatch) => {
    try {
        dispatch({type: HOME_SCREEN_BAGS_REQUEST})

        const { data } = await axios.get('/api/home_screen_bags_products')

        dispatch({
            type: HOME_SCREEN_BAGS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: HOME_SCREEN_BAGS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}