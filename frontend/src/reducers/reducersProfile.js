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
} from '../constants/profileConst'

export const profileReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_USER_PROFILE_DETAILS:
      return { userProfile: action.payload }

    case GET_USER_PROFILE_DETAILS_FAILED:
      return { error: action.payload }

    case EDIT_USER_NAME:
      // const { userProfile } = state
      return {
        userProfile: {
          ...state.userProfile,
          name: action.payload,
        },
      }

    case EDIT_USER_NAME_FAILED:
      return { error: action.payload }

    case EDIT_PHONE_NUMBER:
      return {
        userProfile: {
          ...state.userProfile,
          phoneNumber: action.payload,
        },
      }

    case EDIT_PHONE_NUMBER_FAILED:
      return { error: action.payload }

    case ADD_NEW_SHIPPING_ADDRESS:
      return {
        userProfile: {
          ...state.userProfile,
          shippingAddress: [
            ...state.userProfile.shippingAddress,
            action.payload,
          ],
        },
      }

    case ADD_NEW_SHIPPING_ADDRESS_FAILED:
      return { error: action.payload }

    case EDIT_SHIPPING_ADDRESS:
      return {
        userProfile: {
          ...state.userProfile,
          shippingAddress: action.payload,
        },
      }

    case EDIT_SHIPPING_ADDRESS_FAILED:
      return { error: action.payload }

    default:
      return state
  }
}
