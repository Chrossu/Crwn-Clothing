import {SET_CURRENT_USER, SIGN_OUT_SUCCESS, SIGN_IN_FAILURE, SIGN_OUT_FAILURE, SIGN_UP_FAILURE} from './user.types'

const initialState = {
  currentUser: null,
  error: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      }
    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null
      }
    default:
      return state;
  }
};

export default userReducer;