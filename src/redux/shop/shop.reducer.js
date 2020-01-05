import { UPDATE_COLLECTIONS } from './shop.types'

const initialState = {
  collections: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      }
    default:
      return state;
  }
}