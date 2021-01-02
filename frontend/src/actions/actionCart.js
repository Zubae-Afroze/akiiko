import axios from 'axios'

import  { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/product/${id}`)

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data._id,
            productId: data.productId,
            productName: data.productName,
            image: data.heroImage,
            price: data.price ? data.price : data.mrpPrice,
            subGroup: data.subGroup,
            qty,
        }
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cartList.cartItems))
}

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cartList.cartItems))
}