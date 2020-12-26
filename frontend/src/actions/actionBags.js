import {
    WOMEN_REQUEST,
    WOMEN_SUCCESS,
    WOMEN_FAIL,
    TOTE_REQUEST,
    TOTE_SUCCESS,
    TOTE_FAIL,
    OFFICE_REQUEST,
    OFFICE_SUCCESS,
    OFFICE_FAIL,
    TRAVEL_REQUEST,
    TRAVEL_SUCCESS,
    TRAVEL_FAIL
} from '../constants/allProductsConstants.js';

import axios from 'axios';

export const actionListWomen = () => async (dispatch) => {
    try {
        dispatch({type: WOMEN_REQUEST})

        const { data } = await axios.get('/api/productlist/bags/women')

        dispatch({
            type: WOMEN_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: WOMEN_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const actionListTote = () => async (dispatch) => {
    try {
        dispatch({type: TOTE_REQUEST})

        const { data } = await axios.get('/api/productlist/bags/tote')

        dispatch({
            type: TOTE_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: TOTE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const actionListOffice = () => async (dispatch) => {
    try {
        dispatch({type: OFFICE_REQUEST})

        const { data } = await axios.get('/api/productlist/bags/office')

        dispatch({
            type: OFFICE_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: OFFICE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const actionListTravel = () => async (dispatch) => {
    try {
        dispatch({type: TRAVEL_REQUEST})

        const { data } = await axios.get('/api/productlist/bags/travel')

        dispatch({
            type: TRAVEL_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: TRAVEL_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}