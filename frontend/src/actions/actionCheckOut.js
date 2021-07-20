import { 

    PLACE_ORDER,
    PLACE_ORDER_FAIL,

} from "../constants/checkOutConst";


import axios from 'axios';


export const placeOrder = (orderDetails) => async (dispatch,getState) => {
    try {


        dispatch({
            type: PLACE_ORDER,
            payload: orderDetails
        })

        const uid = getState().firebase.auth.uid

        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }

        // const tempJson = { 
        //     name: newName,
        // }

        console.log('Order Details: ',orderDetails)
        // await axios.put(`/api/profile/updatename/${uid}`, tempJson, config)

        // localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: PLACE_ORDER_FAIL,
            payload:
                error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}