import {
    HOME_SCREEN_STORAGE_REQUEST,
    HOME_SCREEN_STORAGE_SUCCESS,
    HOME_SCREEN_STORAGE_FAIL,
} from '../constants/homeScreenConstants'

import axios from 'axios';

export const actionListHomeStorage = () => async (dispatch) => {
    try {
        dispatch({type: HOME_SCREEN_STORAGE_REQUEST})

        const { data } = await axios.get('/api/home_screen_storage_products')

        dispatch({
            type: HOME_SCREEN_STORAGE_SUCCESS,
            payload: data
        }) 
    } catch (error) {
        dispatch({
            type: HOME_SCREEN_STORAGE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}