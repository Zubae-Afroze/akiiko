import {
    HYGIENE_REQUEST,
    HYGIENE_SUCCESS,
    HYGIENE_FAIL,
    WORKOUT_REQUEST,
    WORKOUT_SUCCESS,
    WORKOUT_FAIL,
    STATIONARY_REQUEST,
    STATIONARY_SUCCESS,
    STATIONARY_FAIL
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

export const reducersStationary = (state = { StationaryProducts: [] }, action) => {
    switch (action.type) {
        case STATIONARY_REQUEST:
            return { stationaryLoading: true, stationaryProducts: [] }
        case STATIONARY_SUCCESS:
            return { stationaryloading: false, stationaryProducts: action.payload }
        case STATIONARY_FAIL:
            return { stationaryLoading: false, stationaryError: [] }
        default:
            return state
    }
}