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

import axios from 'axios';

export const actionListGiftBox = () => async (dispatch) => {
    try {
        dispatch({type: GIFT_BOX_REQUEST})

        const {data} = await axios.get('/api/productlist/gift/giftbox')

        dispatch({
            type: GIFT_BOX_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GIFT_BOX_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const actionListGiftBag = () => async (dispatch) => {
    try {
        dispatch({type: GIFT_BAG_REQUEST})

        const {data} = await axios.get('/api/productlist/gift/giftbag')

        dispatch({
            type: GIFT_BAG_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GIFT_BAG_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const actionListAccessories = () => async (dispatch) => {
    try {
        dispatch({type: ACCESSORIES_REQUEST})

        const {data} = await axios.get('/api/productlist/gift/accessories')

        dispatch({
            type: ACCESSORIES_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ACCESSORIES_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}