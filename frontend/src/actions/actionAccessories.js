import {
    ON_THE_GO_REQUEST,
    ON_THE_GO_SUCCESS,
    ON_THE_GO_FAIL,
    WALLET_REQUEST,
    WALLET_SUCCESS,
    WALLET_FAIL
} from '../constants/allProductsConstants'

import axios from 'axios';

export const actionListOnTheGo = () => async (dispatch) => {
    try {
        dispatch({type: ON_THE_GO_REQUEST})

        const { data } = await axios.get('/api/productlist/accessories/onthego')

        dispatch({
            type: ON_THE_GO_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ON_THE_GO_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const actionListWallet = () => async (dispatch) => {
    try {
        dispatch({type: WALLET_REQUEST})

        const { data } = await axios.get('/api/productList/accessories/wallet')

        dispatch({
            type: WALLET_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: WALLET_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}