const initialState = {
  loading: false,
  authError: null,
}

export const googleAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    //   case EMAIL_AUTH_REQUEST:
    //     return { ...state, loading: true, authError: null }
    //   case EMAIL_AUTH_SUCCESS:
    //     return { ...state, loading: false, authError: null }
    //   case EMAIL_AUTH_ERROR:
    //     return { ...state, loading: false, authError: action.error.message }
    case 'GOOGLE_LOGIN_REQUEST':
      return { ...state, loading: true, authError: null }
    case 'GOOGLE_LOGIN_SUCCESS':
      return { ...state, loading: false, authError: null }
    case 'GOOGLE_LOGIN_ERROR':
      return { ...state, loading: false, authError: action.error.message }
    //   case FACEBOOK_LOGIN_REQUEST:
    //     return { ...state, loading: true, authError: null }
    //   case FACEBOOK_LOGIN_SUCCESS:
    //     return { ...state, loading: false, authError: null }
    //   case FACEBOOK_LOGIN_ERROR:
    //     return { ...state, loading: false, authError: action.error.message }
    default:
      return state
  }
}

export const logoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGOUT_REQUEST':
      return { ...state, loading: true, authError: null }
    case 'LOGOUT_SUCCESS':
      return { ...state, loading: false, authError: null }
    default:
      return state
  }
}
