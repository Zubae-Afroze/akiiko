import { 

    GET_USER_PROFILE_DETAILS,
    GET_USER_PROFILE_DETAILS_FAILED,

    EDIT_USER_NAME,
    EDIT_USER_NAME_FAILED,

    EDIT_PHONE_NUMBER,
    EDIT_PHONE_NUMBER_FAILED,

    ADD_NEW_SHIPPING_ADDRESS,
    ADD_NEW_SHIPPING_ADDRESS_FAILED,

    EDIT_SHIPPING_ADDRESS,
    EDIT_SHIPPING_ADDRESS_FAILED,

} from "../constants/profileConst";


import axios from 'axios';


export const getUserProfileByUID = (UID) => async (dispatch) => {
    try {

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.get(`/api/profile/${UID}`, config)

        dispatch({
            type: GET_USER_PROFILE_DETAILS,
            payload: data
        })

        localStorage.setItem('profile', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: GET_USER_PROFILE_DETAILS_FAILED,
            payload:
                error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const editUserName = (newName) => async (dispatch,getState) => {
    try {

        dispatch({
            type: EDIT_USER_NAME,
            payload: newName
        })

        const uid = getState().firebase.auth.uid

        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const tempJson = { 
            name: newName,
        }

        console.log('New Name :'+ newName)
        await axios.put(`/api/profile/updatename/${uid}`, tempJson, config)

    } catch (error) {
        dispatch({
            type: EDIT_USER_NAME_FAILED,
            payload:
                error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}


export const editMobileNumber = (mobNumber) => async (dispatch,getState) => {
    try {

        dispatch({
            type: EDIT_PHONE_NUMBER,
            payload: mobNumber
        })

        const uid = getState().firebase.auth.uid

        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        
        const tempJson = { 
            phoneNumber: mobNumber,
        }

        await axios.put(`/api/profile/updatephone/${uid}`, tempJson, config)

        // localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: EDIT_PHONE_NUMBER_FAILED,
            payload:
                error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}



export const addNewShippingAddress = (address) => async (dispatch, getState) => {
    try {

        dispatch({
            type: ADD_NEW_SHIPPING_ADDRESS,
            payload: address
        })

        const uid = getState().firebase.auth.uid

        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }

        await axios.post(`/api/profile/addshipping/${uid}`, address, config)
        console.log(address)

        // localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: ADD_NEW_SHIPPING_ADDRESS_FAILED,
            payload:
                error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const editShippingAddress = (index,address) => (dispatch) => {
    try {

        dispatch({
            type: EDIT_SHIPPING_ADDRESS,
            payload: address,
            index: index
        })

        // localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: EDIT_SHIPPING_ADDRESS_FAILED,
            payload:
                error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}