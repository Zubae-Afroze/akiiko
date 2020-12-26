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

import axios from 'axios'

export const actionListTableware = () => async (dispatch) => {
    try {
        dispatch({type: TABLEWARE_REQUEST})

        const { data } = await axios.get('/api/productlist/home/tableware')

        dispatch({
            type: TABLEWARE_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: TABLEWARE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })

    }
}

export const actionListKitchen = () => async (dispatch) => {
    try {
        dispatch({type: KITCHEN_REQUEST})

        const { data } = await axios.get('/api/productlist/home/kitchen')

        dispatch({
            type: KITCHEN_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: KITCHEN_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })

    }
}

export const actionListLaundry = () => async (dispatch) => {
    try {
        dispatch({type: LAUNDRY_REQUEST})

        const { data } = await axios.get('/api/productlist/home/laundry')

        dispatch({
            type: LAUNDRY_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: LAUNDRY_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })

    }
}

export const actionListGarden = () => async (dispatch) => {
    try {
        dispatch({type: GARDEN_REQUEST})

        const { data } = await axios.get('/api/productlist/home/garden')

        dispatch({
            type: GARDEN_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GARDEN_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })

    }
}