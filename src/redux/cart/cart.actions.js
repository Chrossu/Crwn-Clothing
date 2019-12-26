import { TOGGLE_CART_HIDDEN, ADD_ITEM, REMOVE_CART_ITEM, REMOVE_ITEM_QUANTITY } from './cart.types';

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN
})

export const addItem = item => ({
  type: ADD_ITEM,
  payload: item
})

// export const removeCartItem = id => ({
//   type: REMOVE_CART_ITEM,
//   payload: id
// })

// export const removeItemQuantity = id => ({
//   type: REMOVE_ITEM_QUANTITY,
//   payload: id
// })