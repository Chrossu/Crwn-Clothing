import { TOGGLE_CART_HIDDEN, ADD_ITEM, REMOVE_CART_ITEM, REMOVE_ITEM_QUANTITY } from './cart.types';
import { addItemToCart } from './cart.utils'

// ADD_ITEM, REMOVE_CART_ITEM, REMOVE_ITEM_QUANTITY

const initialState = {
  isHidden: true,
  cartItems: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        isHidden: !state.isHidden
      }
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      }
    case REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload)
      }
    case REMOVE_ITEM_QUANTITY:
      return {
        ...state,
        // cartItems: removeItemQuantity(state.cartItems, action.payload)
      }
    default:
      return state;
  }
}