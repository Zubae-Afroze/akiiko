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


export const reducersHygiene = (state = { hygieneProducts: [] }, action) => {
    switch (action.type) {
        case HYGIENE_REQUEST:
            return { hygieneLoading: true, hygieneProducts: [] }
        case HYGIENE_SUCCESS:
            return { hygieneloading: false, hygieneProducts: action.payload }
        case HYGIENE_FAIL:
            return { hygieneLoading: false, hygieneError: [] }
        default:
            return state
    }
}

export const reducersWorkout = (state = { workoutProducts: [] }, action) => {
    switch (action.type) {
        case WORKOUT_REQUEST:
            return { workoutLoading: true, workoutProducts: [] }
        case WORKOUT_SUCCESS:
            return { workoutloading: false, workoutProducts: action.payload }
        case WORKOUT_FAIL:
            return { workoutLoading: false, workoutError: [] }
        default:
            return state
    }
}


export const reducersHobby = (state = { hobbyProducts: [] }, action) => {
    switch (action.type) {
        case HOBBY_REQUEST:
            return { hobbyLoading: true, hobbyProducts: [] }
        case HOBBY_SUCCESS:
            return { hobbyloading: false, hobbyProducts: action.payload }
        case HOBBY_FAIL:
            return { hobbyLoading: false, hobbyError: [] }
        default:
            return state
    }
}

export const reducersStationery = (state = { stationeryProducts: [] }, action) => {
    switch (action.type) {
        case STATIONERY_REQUEST:
            return { stationeryLoading: true, stationeryProducts: [] }
        case STATIONERY_SUCCESS:
            return { stationeryloading: false, stationeryProducts: action.payload }
        case STATIONERY_FAIL:
            return { stationeryLoading: false, stationeryError: [] }
        default:
            return state
    }
}