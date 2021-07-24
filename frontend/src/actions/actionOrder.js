import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_FAIL,
  ORDER_LIST_MY_REQUEST,
  ORDER_LIST_MY_SUCCESS,
  ORDER_LIST_MY_FAIL,
} from '../constants/orderConstants'
import { resetCartItems } from './actionCart'

import axios from 'axios'

export const createOrder = (order,email,history) => async (dispatch) => {
  try {
    dispatch({
      type: ORDER_CREATE_REQUEST,
    })

    // const { finalOrderPlacemnetJson } = order

    // const {
    //   userLogin: { userInfo },
    // } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post(`/api/orders/`, order, config)

    dispatch({
      type: ORDER_CREATE_SUCCESS,
      payload: data,
    })

    if(order.paymentMethod !== 'cod'){

      const configF = {
        headers: {
            'Content-Type': 'application/json',
            // Authorization: `Bearer ${userInfo.token}`
        }
      }
  
      console.log('data: '+data)
  
      const { data: dataRazor } = await axios.get(`/api/orders/${data._id}/pay`, configF)
  
      var options = {
        "key": dataRazor.razor_key,
        "amount": dataRazor.amount,
        "currency": dataRazor.currency,
        "name": order.shippingAddress.firstName + ' ' + order.shippingAddress.lastName,
        "description": "",
        "order_id": dataRazor.id,
        "handler": async function (response) {
            // alert(response.razorpay_payment_id);
            // alert(response.razorpay_order_id);
            // alert(response.razorpay_signature);
            try {
                const res = await axios.post(`/api/orders/${data._id}/ordercomplete`, {
                    payment_id: response.razorpay_payment_id,
                    razorpay_order_id: response.razorpay_order_id,
                    signature: response.razorpay_signature
                }, config)
  
                history.replace('/ordersuccess')
  
                //We can use res.body orderItems to overwitre the order details to store
                dispatch(getOrderDetails(data._id))
                dispatch(resetCartItems())
            } catch (error) {
                console.log(error);
            }
        },
        "prefill": {
            "name": order.shippingAddress.firstName + ' ' + order.shippingAddress.lastName,
            "email": email,
            "contact": order.shippingAddress.phoneNumber,
            // "method": "card",
            // "card[name]": order.shippingAddress.firstName + ' ' + order.shippingAddress.lastName,
            // "card[number]": "4111111111111111",
            // "card[expiry]": "12/21",
            // "card[cvv]": "123"
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#6e4e37"
        }
      };
      var rzp1 = new window.Razorpay(options);
      rzp1.open()

    }else{
      dispatch(resetCartItems())
      history.replace('/ordersuccess')
    }

    
  } catch (error) {
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getOrderDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_DETAILS_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`/api/orders/${id}`, config)

    dispatch({
      type: ORDER_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ORDER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const payOrder =
  (orderId, paymentResult) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ORDER_PAY_REQUEST,
      })

      const {
        userLogin: { userInfo },
      } = getState()

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      }

      const { data } = await axios.put(
        `/api/orders/${orderId}/pay`,
        paymentResult,
        config
      )

      dispatch({
        type: ORDER_PAY_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: ORDER_PAY_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

export const listMyOrders = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_LIST_MY_REQUEST,
    })

    // const {
    //   userLogin: { userInfo },
    // } = getState()
    const profile = getState().profile.userProfile._id

    console.log('Profile: ' + profile)

    const config = {
      headers: {
        //Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`/api/orders/myorders/${profile}`, config)

    dispatch({
      type: ORDER_LIST_MY_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ORDER_LIST_MY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const resetOrder = () => (dispatch) => {
  //localStorage.removeItem('cartList')
  dispatch({ type: 'ORDER_RESET' })
}
