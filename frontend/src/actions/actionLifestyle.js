import {
    HYGIENE_REQUEST,
    HYGIENE_SUCCESS,
    HYGIENE_FAIL,
    WORKOUT_REQUEST,
    WORKOUT_SUCCESS,
    WORKOUT_FAIL,
    HOBBY_REQUEST,
    HOBBY_SUCCESS,
    HOBBY_FAIL,
    STATIONERY_REQUEST,
    STATIONERY_SUCCESS,
    STATIONERY_FAIL
} from '../constants/allProductsConstants'

import axios from 'axios';

export const actionListHygiene = () => async (dispatch) => {
    try {
        dispatch({ type: HYGIENE_REQUEST })

        const { data } = await axios.get('/api/productlist/lifestyle/hygiene')

        dispatch({
            type: HYGIENE_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: HYGIENE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const actionListWorkout = () => async (dispatch) => {
    try {
        dispatch({ type: WORKOUT_REQUEST })

        const { data } = await axios.get('/api/productlist/lifestyle/workout')

        dispatch({
            type: WORKOUT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: WORKOUT_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}


export const actionListHobby = () => async (dispatch) => {
    try {
        dispatch({ type: HOBBY_REQUEST })

        const { data } = await axios.get('/api/productlist/lifestyle/hobby')

        dispatch({
            type: HOBBY_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: HOBBY_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const actionListStationery = () => async (dispatch) => {
    try {
        dispatch({ type: STATIONERY_REQUEST })

        const { data } = await axios.get('/api/productlist/lifestyle/stationery')

        dispatch({
            type: STATIONERY_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: STATIONERY_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}