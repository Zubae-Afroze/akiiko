import { 
    HOME_SCREEN_HOME_REQUEST,
    HOME_SCREEN_HOME_SUCCESS,
    HOME_SCREEN_HOME_FAIL,
} from '../constants/homeScreenConstants'

import axios from 'axios';

export const actionListHomeHome = () => async (dispatch) => {
    try {
        dispatch({type: HOME_SCREEN_HOME_REQUEST})

        const { data } = await axios.get('/api/home_screen_home_products')

        dispatch({
            type: HOME_SCREEN_HOME_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: HOME_SCREEN_HOME_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}