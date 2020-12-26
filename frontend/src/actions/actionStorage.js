import {
    ORGANISERS_REQUEST,
    ORGANISERS_SUCCESS,
    ORGANISERS_FAIL,
    HOME_REQUEST,
    HOME_SUCCESS,
    HOME_FAIL
} from '../constants/allProductsConstants'

import axios from 'axios'

export const actionListOrganiser = () => async (dispatch) => {
    try {
        dispatch({type: ORGANISERS_REQUEST})

        const { data } = await axios.get('/api/productlist/storage/organisers') 

        dispatch({
            type: ORGANISERS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ORGANISERS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const actionListHome = () => async (dispatch) => {
    try {
        dispatch({type: HOME_REQUEST})

        const {data} = await axios.get('/api/productlist/storage/home')

        dispatch({
            type: HOME_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: HOME_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}