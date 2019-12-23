import { SET_CURRENT_USER } from './user.types'

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
    default:
      return state;
  }
};

export default userReducer;